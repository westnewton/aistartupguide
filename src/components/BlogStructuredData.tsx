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
