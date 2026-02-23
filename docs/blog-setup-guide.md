# Blog Setup Guide — AIStartupGuide.com

**What this does:** Adds a working blog to your Next.js site. You write posts as markdown files, drop them in a folder, push to GitHub, and they go live automatically.

---

## Step 1: Install Dependencies

Run this in your project root:

```bash
npm install gray-matter react-markdown remark-gfm
```

- `gray-matter` — parses frontmatter (title, date, etc.) from markdown files
- `react-markdown` — renders markdown as React components
- `remark-gfm` — adds support for tables, strikethrough, etc.

---

## Step 2: Create the Blog Content Directory

Create this folder:

```
src/content/blog/
```

This is where all your blog posts live as `.md` files.

---

## Step 3: Create the Blog Utility File

Create **`src/lib/blog.ts`** — this reads your markdown files and provides data to your pages:

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
  industry?: string;       // optional: links post to an industry page
  industrySlug?: string;
  tags: string[];
  featured?: boolean;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Jason Nista',
      readingTime: data.readingTime || '5 min read',
      industry: data.industry || undefined,
      industrySlug: data.industrySlug || undefined,
      tags: data.tags || [],
      featured: data.featured || false,
      content,
    };
  });

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}
```

---

## Step 4: Create the Blog Post Page

Create the folder and file: **`src/app/blog/[slug]/page.tsx`**

```tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import NewsletterCTA from '@/components/NewsletterCTA';
import './blog-post.css';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const pageUrl = `https://aistartupguide.com/blog/${post.slug}`;
  return {
    title: `${post.title} — AIStartupGuide.com`,
    description: post.description,
    openGraph: {
      title: `${post.title} — AIStartupGuide.com`,
      description: post.description,
      type: 'article',
      url: pageUrl,
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — AIStartupGuide.com`,
      description: post.description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIStartupGuide.com',
      url: 'https://aistartupguide.com',
    },
    url: `https://aistartupguide.com/blog/${post.slug}`,
  };

  return (
    <div className="blog-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <Link href="/blog">Blog</Link>
        <span className="sep">›</span>
        <span className="current">{post.title}</span>
      </div>

      {/* Article Header */}
      <article className="blog-article">
        <header className="blog-header">
          <div className="blog-meta-top">
            {post.industry && post.industrySlug && (
              <Link href={`/industries/${post.industrySlug}`} className="blog-industry-tag">
                {post.industry}
              </Link>
            )}
            <span className="blog-date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="blog-reading-time">{post.readingTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-description">{post.description}</p>
          <div className="blog-author">
            <span>By {post.author}</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="blog-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        )}
      </article>

      {/* Newsletter CTA */}
      <NewsletterCTA
        headline="Get AI tips for your business"
        subtext="A weekly email with new tool discoveries, practical advice, and no fluff. Join 2,400+ small business owners."
      />
    </div>
  );
}
```

---

## Step 5: Create the Blog Post Styles

Create **`src/app/blog/[slug]/blog-post.css`**

```css
/* ——— BLOG POST PAGE ——— */
.blog-post-page {
  max-width: 1200px;
  margin: 0 auto;
}

.blog-article {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 32px 60px;
}

/* Header */
.blog-header {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}

.blog-header h1 {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1.15;
  letter-spacing: -1px;
  margin-bottom: 16px;
  color: var(--ink);
}

.blog-description {
  font-size: 1.15rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 20px;
}

.blog-meta-top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.blog-industry-tag {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--accent);
  text-decoration: none;
  background: var(--accent-light);
  padding: 4px 12px;
  border-radius: 100px;
  transition: all 0.2s;
}
.blog-industry-tag:hover {
  background: var(--accent);
  color: white;
}

.blog-date,
.blog-reading-time {
  font-size: 0.85rem;
  color: var(--muted);
}

.blog-author {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--ink);
}

/* Content */
.blog-content {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--ink);
}

.blog-content h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.6rem;
  letter-spacing: -0.5px;
  margin-top: 48px;
  margin-bottom: 16px;
  color: var(--ink);
}

.blog-content h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-top: 36px;
  margin-bottom: 12px;
  color: var(--ink);
}

.blog-content p {
  margin-bottom: 20px;
  color: var(--ink);
}

.blog-content a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s;
}
.blog-content a:hover {
  color: var(--accent-hover);
}

.blog-content ul,
.blog-content ol {
  margin-bottom: 20px;
  padding-left: 24px;
}

.blog-content li {
  margin-bottom: 8px;
}

.blog-content blockquote {
  border-left: 3px solid var(--accent);
  margin: 28px 0;
  padding: 16px 24px;
  background: var(--accent-light);
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: var(--muted);
}

.blog-content strong {
  font-weight: 600;
  color: var(--ink);
}

.blog-content code {
  font-size: 0.9em;
  background: var(--warm);
  padding: 2px 6px;
  border-radius: 4px;
}

.blog-content hr {
  border: none;
  border-top: 1px solid var(--border);
  margin: 40px 0;
}

.blog-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 0.92rem;
}

.blog-content th,
.blog-content td {
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
}

.blog-content th {
  font-weight: 700;
  background: var(--paper);
}

/* Tags */
.blog-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.blog-tag {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--muted);
  background: var(--paper);
  border: 1px solid var(--border);
  padding: 4px 12px;
  border-radius: 100px;
}

/* Responsive */
@media (max-width: 540px) {
  .blog-article {
    padding: 0 20px 40px;
  }
  .blog-content {
    font-size: 1rem;
  }
}
```

---

## Step 6: Update the Blog Listing Page

Replace your existing **`src/app/blog/page.tsx`** with:

```tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import NewsletterCTA from '@/components/NewsletterCTA';
import FadeUp from '@/components/FadeUp';
import './blog-listing.css';

export const metadata: Metadata = {
  title: 'Blog — AIStartupGuide.com',
  description:
    'Practical AI advice for small business owners. Tool reviews, setup guides, and industry-specific tips — explained in plain English.',
  openGraph: {
    title: 'Blog — AIStartupGuide.com',
    description:
      'Practical AI advice for small business owners. Tool reviews, setup guides, and industry-specific tips.',
    type: 'website',
    url: 'https://aistartupguide.com/blog',
  },
  alternates: {
    canonical: 'https://aistartupguide.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="blog-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">›</span>
        <span className="current">Blog</span>
      </div>

      {/* Hero */}
      <div className="blog-hero">
        <FadeUp className="blog-hero-inner">
          <span className="blog-hero-label">Blog</span>
          <h1>AI tips that actually help your business</h1>
          <p className="blog-hero-sub">
            Practical guides, tool breakdowns, and industry-specific advice — written for business owners, not developers.
          </p>
        </FadeUp>
      </div>

      {/* Post Grid */}
      <div className="blog-grid-container">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>Posts coming soon. In the meantime, browse our <Link href="/#industries">industry guides</Link>.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <FadeUp key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-meta">
                    {post.industry && (
                      <span className="blog-card-industry">{post.industry}</span>
                    )}
                    <span className="blog-card-date">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-reading-time">{post.readingTime}</span>
                    <span className="blog-card-link">Read more →</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter */}
      <NewsletterCTA
        headline="Get AI tips in your inbox"
        subtext="A weekly email with new tool discoveries, practical advice, and no fluff. Join 2,400+ small business owners."
      />
    </div>
  );
}
```

---

## Step 7: Create the Blog Listing Styles

Create **`src/app/blog/blog-listing.css`**

```css
/* ——— BLOG LISTING PAGE ——— */
.blog-page {
  max-width: 1200px;
  margin: 0 auto;
}

.blog-hero {
  padding: 24px 32px 0;
}

.blog-hero-inner {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 52px 56px;
  position: relative;
  overflow: hidden;
}
.blog-hero-inner::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--accent);
}

.blog-hero-label {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent);
  margin-bottom: 16px;
}

.blog-hero h1 {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 1.15;
  letter-spacing: -1px;
  margin-bottom: 16px;
  max-width: 600px;
}

.blog-hero-sub {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 560px;
  line-height: 1.7;
}

/* Grid */
.blog-grid-container {
  padding: 48px 32px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.blog-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
  text-decoration: none;
  color: var(--ink);
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}
.blog-card:hover {
  border-color: transparent;
  box-shadow: 0 8px 28px rgba(0,0,0,0.07);
  transform: translateY(-2px);
}

.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.blog-card-industry {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--accent);
  background: var(--accent-light);
  padding: 3px 10px;
  border-radius: 100px;
}

.blog-card-date {
  font-size: 0.82rem;
  color: var(--muted);
}

.blog-card h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.25rem;
  letter-spacing: -0.3px;
  margin-bottom: 8px;
  line-height: 1.3;
}

.blog-card p {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.6;
  flex: 1;
}

.blog-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.blog-card-reading-time {
  font-size: 0.78rem;
  color: var(--muted);
}

.blog-card-link {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
}

.blog-empty {
  text-align: center;
  padding: 60px 0;
  color: var(--muted);
  font-size: 1rem;
}
.blog-empty a {
  color: var(--accent);
}

/* Responsive */
@media (max-width: 700px) {
  .blog-grid { grid-template-columns: 1fr; }
  .blog-hero-inner { padding: 36px 24px; }
}
```

---

## Step 8: Update Your Sitemap

If your `src/app/sitemap.xml/` generates the sitemap dynamically, add blog posts to it. Open the route file in `src/app/sitemap.xml/` and add blog URLs alongside your industry URLs. The logic would be similar to:

```typescript
import { getAllPosts } from '@/lib/blog';

// Inside your sitemap generation function, add:
const posts = getAllPosts();
const blogUrls = posts.map((post) => ({
  url: `https://aistartupguide.com/blog/${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}));
```

---

## How to Write a Blog Post

Once the setup is done, writing a new post is simple:

1. Create a `.md` file in `src/content/blog/`
2. Name it with the URL slug you want (e.g., `ai-tools-for-electricians.md` → `/blog/ai-tools-for-electricians`)
3. Add frontmatter at the top, then write your content in markdown

### Blog Post Template

```markdown
---
title: "Your Post Title Here"
description: "A 1-2 sentence summary for SEO and social sharing."
date: "2026-02-23"
author: "Jason Nista"
readingTime: "6 min read"
industry: "Construction & Trades"
industrySlug: "construction-trades"
tags: ["AI tools", "construction", "estimating"]
featured: false
---

Your introduction paragraph goes here. Set up the problem the reader has, then tell them what they'll learn.

## First Main Section

Write in plain English. Your audience is business owners, not developers.

When you mention a tool, link to its industry page:

Check out our full review of [Jobber](/industries/construction-trades#scheduling) on the Construction & Trades page.

## Second Main Section

### Subsection if needed

You can use **bold** for emphasis and include lists:

- First point
- Second point
- Third point

## Wrapping Up

End with a clear takeaway. What should the reader do next?

If you want help picking the right tools for your business, [browse our industry guides](/) or [book a 1-on-1 session](/book-a-session).
```

---

## File Checklist

Here's everything you need to add to your repo:

```
src/
├── content/
│   └── blog/                          ← NEW: blog post markdown files go here
│       └── (your-first-post.md)
├── lib/
│   └── blog.ts                        ← NEW: blog utility functions
├── app/
│   └── blog/
│       ├── page.tsx                   ← REPLACE: listing page (was "Coming Soon")
│       ├── blog-listing.css           ← NEW: listing page styles
│       └── [slug]/
│           ├── page.tsx               ← NEW: individual post page
│           └── blog-post.css          ← NEW: post page styles
```

After adding these files and writing your first post, push to GitHub and Vercel will build and deploy it automatically.
