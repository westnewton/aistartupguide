import { industries } from '@/data/industries';

const siteUrl = 'https://aistartupguide.com';

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}

function buildXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function GET() {
  const entries: SitemapEntry[] = [
    {
      url: siteUrl,
      lastModified: '2026-02-20',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/guides/intro-to-ai-for-small-business`,
      lastModified: '2026-02-20',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...industries.map((industry) => ({
      url: `${siteUrl}/industries/${industry.slug}`,
      lastModified: '2026-02-20',
      changeFrequency: 'weekly',
      priority: 0.9,
    })),
    {
      url: `${siteUrl}/blog`,
      lastModified: '2026-02-20',
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/newsletter`,
      lastModified: '2026-02-20',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/book-a-session`,
      lastModified: '2026-02-20',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  const xml = buildXml(entries);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
