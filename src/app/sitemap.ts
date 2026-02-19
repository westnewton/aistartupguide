import { MetadataRoute } from 'next';
import { industries } from '@/data/industries';

const siteUrl = 'https://aistartupguide.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const industryPages = industries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    lastModified: new Date('2026-02-19'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/guides/intro-to-ai-for-small-business`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...industryPages,
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/newsletter`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/book-a-session`,
      lastModified: new Date('2026-02-19'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
