# Schema Markup Implementation — AIStartupGuide.com

**What this does:** Adds FAQ schema, BreadcrumbList schema, and enhanced Article schema to your blog posts. This enables rich results in Google (FAQ dropdowns, breadcrumb trails, enhanced article cards). No changes to your markdown files needed — the system auto-extracts FAQ data from your existing content.

---

## How It Works

Your blog posts already use an `## Frequently asked questions` section with `### Question` subheadings. The parser detects this pattern automatically and generates Google-compliant JSON-LD. You don't need to add any special syntax to your markdown.

The pattern it looks for:

```markdown
## Frequently asked questions       ← triggers FAQ extraction

### How much does it cost?           ← becomes a question
Answer paragraph here.               ← becomes the answer

### Can I use it on mobile?          ← next question
Another answer paragraph.            ← its answer
```

---

## Step 1: Add the FAQ Parser

Create **`src/lib/parse-faqs.ts`**

```typescript
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Extracts FAQ question/answer pairs from markdown content.
 * Looks for an H2 section containing "frequently asked questions" or "faq",
 * then parses each H3 as a question with its following paragraphs as the answer.
 */
export function parseFAQsFromMarkdown(markdown: string): FAQItem[] {
  const lines = markdown.split('\n');
  const faqs: FAQItem[] = [];

  let inFAQSection = false;
  let currentQuestion = '';
  let currentAnswer: string[] = [];

  for (const line of lines) {
    // Detect the start of the FAQ section (H2 containing "faq" or "frequently asked")
    if (line.match(/^## /)) {
      const heading = line.replace(/^## /, '').toLowerCase();
      if (heading.includes('frequently asked') || heading.includes('faq')) {
        inFAQSection = true;
        continue;
      } else if (inFAQSection) {
        // Hit a new H2 — FAQ section is over
        if (currentQuestion && currentAnswer.length > 0) {
          faqs.push({
            question: currentQuestion,
            answer: cleanAnswer(currentAnswer),
          });
        }
        break;
      }
    }

    if (!inFAQSection) continue;

    // Each H3 is a new question
    if (line.match(/^### /)) {
      // Save the previous Q&A if exists
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: cleanAnswer(currentAnswer),
        });
      }
      currentQuestion = line.replace(/^### /, '').trim();
      currentAnswer = [];
      continue;
    }

    // Collect answer lines (skip empty lines and horizontal rules)
    if (currentQuestion && line.trim() && !line.match(/^---/)) {
      currentAnswer.push(line.trim());
    }
  }

  // Don't forget the last Q&A
  if (currentQuestion && currentAnswer.length > 0) {
    faqs.push({
      question: currentQuestion,
      answer: cleanAnswer(currentAnswer),
    });
  }

  return faqs;
}

/**
 * Cleans markdown formatting from answer text for use in schema markup.
 * Strips links, bold, italic, and inline code — Google wants plain text.
 */
function cleanAnswer(lines: string[]): string {
  return lines
    .join(' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // [text](url) → text
    .replace(/\*\*([^*]+)\*\*/g, '$1')        // **bold** → bold
    .replace(/\*([^*]+)\*/g, '$1')             // *italic* → italic
    .replace(/`([^`]+)`/g, '$1')               // `code` → code
    .replace(/\s+/g, ' ')                       // collapse whitespace
    .trim();
}
```

---

## Step 2: Add the Structured Data Component

Create **`src/components/BlogStructuredData.tsx`**

```tsx
import { FAQItem } from '@/lib/parse-faqs';

interface BlogStructuredDataProps {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  industry?: string;
  industrySlug?: string;
  faqs: FAQItem[];
}

export default function BlogStructuredData({
  title,
  description,
  date,
  author,
  slug,
  industry,
  industrySlug,
  faqs,
}: BlogStructuredDataProps) {
  const pageUrl = `https://aistartupguide.com/blog/${slug}`;

  // Article schema (enhanced from original)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://aistartupguide.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIStartupGuide.com',
      url: 'https://aistartupguide.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    url: pageUrl,
  };

  // BreadcrumbList schema
  const breadcrumbItems = [
    { name: 'Home', url: 'https://aistartupguide.com' },
    { name: 'Blog', url: 'https://aistartupguide.com/blog' },
  ];

  // If the post is tied to an industry, add it to the breadcrumb trail
  if (industry && industrySlug) {
    breadcrumbItems.push({
      name: industry,
      url: `https://aistartupguide.com/industries/${industrySlug}`,
    });
  }

  breadcrumbItems.push({ name: title, url: pageUrl });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  // FAQ schema (only if FAQs exist)
  const faqSchema =
    faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
```

---

## Step 3: Update the Blog Post Page

Replace the existing JSON-LD block in **`src/app/blog/[slug]/page.tsx`** with the new component. Here are the changes:

### Add the imports

```tsx
// Add these two imports at the top of the file
import { parseFAQsFromMarkdown } from '@/lib/parse-faqs';
import BlogStructuredData from '@/components/BlogStructuredData';
```

### Replace the JSON-LD and render the component

In the `BlogPostPage` component, remove the `articleJsonLd` object and its `<script>` tag. Replace with:

```tsx
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Parse FAQs from the markdown content
  const faqs = parseFAQsFromMarkdown(post.content);

  return (
    <div className="blog-post-page">
      {/* Structured data: Article + Breadcrumb + FAQ schemas */}
      <BlogStructuredData
        title={post.title}
        description={post.description}
        date={post.date}
        author={post.author}
        slug={post.slug}
        industry={post.industry}
        industrySlug={post.industrySlug}
        faqs={faqs}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <Link href="/blog">Blog</Link>
        <span className="sep">›</span>
        <span className="current">{post.title}</span>
      </div>

      {/* ... rest of the page stays exactly the same ... */}
    </div>
  );
}
```

Everything else in the page (header, article body, tags, newsletter CTA) stays untouched.

---

## Step 4: Validate

After deploying, test your structured data:

1. **Google Rich Results Test:** https://search.google.com/test/rich-results — paste your blog post URL and verify all three schemas are detected (Article, FAQ, BreadcrumbList).

2. **Schema.org Validator:** https://validator.schema.org — for a more detailed breakdown if Google's tool flags any issues.

3. **Quick local check:** View page source, search for `application/ld+json` — you should see three separate script blocks.

---

## What the Output Looks Like

For the scheduling tools post, the generated FAQ schema will look like this in your page source:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do AI scheduling tools cost for a small business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most field service scheduling tools range from $49–$200/month for small teams. Jobber starts at $49/month, Housecall Pro at $65/month, and enterprise options like ServiceTitan use custom pricing. Calendar-based tools like Calendly have free tiers that work well for solo operators. Nearly all offer free trials, so you can test before committing."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need an AI scheduling tool if I'm a solo operator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Even solo operators benefit from automated appointment reminders, online booking, and basic route planning. The time saved on phone calls and manual scheduling alone — typically 3–5 hours per week — makes a $49/month tool worthwhile. Start with Jobber's base plan or a free tool like Calendly if you're appointment-based."
      }
    }
  ]
}
```

---

## File Checklist

```
src/
├── lib/
│   ├── blog.ts                        ← EXISTS (no changes needed)
│   └── parse-faqs.ts                  ← NEW: FAQ extraction utility
├── components/
│   └── BlogStructuredData.tsx         ← NEW: all JSON-LD schemas
├── app/
│   └── blog/
│       └── [slug]/
│           └── page.tsx               ← UPDATE: swap old JSON-LD for new component
```

---

## Writing Tips for Future Posts

To make sure the FAQ parser picks up your questions correctly:

- **Use `## Frequently asked questions` as the section heading** (case-insensitive, also works with "FAQ")
- **Use `###` for each question** — the exact question text becomes the schema `name`
- **Keep answers as regular paragraphs** below each `###` — no need for special formatting
- **Put the FAQ section near the bottom of your post** — this is convention and it won't interfere with other H2 sections above it
- **Markdown links in answers are fine** — the parser strips them for the schema but they still render normally on the page

Any blog post without a FAQ section simply won't generate FAQ schema — no errors, no empty markup. It's fully opt-in by convention.
