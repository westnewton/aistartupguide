import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries, getIndustryBySlug } from '@/data/industries';
import { getToolBySlug } from '@/data/tools';
import { Tool } from '@/lib/types';
import Breadcrumb from '@/components/Breadcrumb';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import QuickPicks from '@/components/QuickPicks';
import JumpNav from '@/components/JumpNav';
import ToolCard from '@/components/ToolCard';
import ComparisonCallout from '@/components/ComparisonCallout';
import GettingStarted from '@/components/GettingStarted';
import NewsletterCTA from '@/components/NewsletterCTA';
import FadeUp from '@/components/FadeUp';

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};
  const pageUrl = `https://aistartupguide.com/industries/${industry.slug}`;
  return {
    title: `AI Tools for ${industry.name} — AIStartupGuide.com`,
    description: industry.metaDescription,
    openGraph: {
      title: `AI Tools for ${industry.name} — AIStartupGuide.com`,
      description: industry.metaDescription,
      type: 'website',
      url: pageUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: `AI Tools for ${industry.name} — AIStartupGuide.com`,
      description: industry.metaDescription,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function IndustryPage({
  params,
}: {
  params: { slug: string };
}) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  const quickPickTools = industry.quickPicks
    .map(getToolBySlug)
    .filter((t): t is Tool => !!t);

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `AI Tools for ${industry.name}`,
    description: industry.metaDescription,
    url: `https://aistartupguide.com/industries/${industry.slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'AIStartupGuide.com',
      url: 'https://aistartupguide.com',
    },
    about: {
      '@type': 'Thing',
      name: industry.name,
    },
    dateModified: '2026-02-19',
  };

  return (
    <div
      style={
        {
          '--industry': industry.colors.accent,
          '--industry-light': industry.colors.light,
          '--industry-subtle': industry.colors.subtle,
        } as React.CSSProperties
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* Breadcrumb */}
      <Breadcrumb industryName={industry.name} />

      {/* Affiliate Disclosure */}
      <AffiliateDisclosure />

      {/* Industry Hero */}
      <div className="industry-hero">
        <FadeUp className="industry-hero-inner">
          <span className="industry-hero-emoji">{industry.emoji}</span>
          <h1>AI Tools for {industry.name}</h1>
          <p className="industry-hero-sub">{industry.heroSubtitle}</p>
          <div className="industry-meta">
            <span className="industry-meta-item">
              <strong>{industry.toolCount} tools</strong>&nbsp;reviewed
            </span>
            <span className="meta-dot" />
            <span className="industry-meta-item">
              Last updated&nbsp;<strong>{industry.lastUpdated}</strong>
            </span>
            <span className="meta-dot" />
            <span className="industry-meta-item">
              <strong>{industry.businessCount}</strong>&nbsp;businesses in this
              sector
            </span>
          </div>
        </FadeUp>
      </div>

      {/* Quick Picks */}
      <QuickPicks tools={quickPickTools} />

      {/* Jump Nav */}
      <JumpNav categories={industry.categories} />

      {/* Tool Category Sections */}
      {industry.categories.map((category, catIdx) => {
        const categoryTools = category.tools
          .map(getToolBySlug)
          .filter((t): t is Tool => !!t);

        // For Buildertrend in documentation, use the alt description from the HTML reference
        const resolvedTools = categoryTools.map((tool) => {
          if (tool.slug === 'buildertrend' && category.id === 'documentation') {
            return {
              ...tool,
              description:
                'Full project management with built-in documentation. Daily logs, photo records, change order tracking, and a client portal where homeowners can see progress without calling you.',
              bestFor: ['GCs & remodelers', 'Client-facing'],
            };
          }
          return tool;
        });

        return (
          <div key={category.id}>
            <FadeUp
              className={`tool-section${catIdx === industry.categories.length - 1 ? ' tool-section-last' : ''}`}
            >
              <div id={category.id} className="tool-section-anchor" />
              <div className="tool-section-header">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="tool-grid">
                {resolvedTools.map((tool) => (
                  <ToolCard key={`${category.id}-${tool.slug}`} tool={tool} />
                ))}
              </div>
            </FadeUp>

            {category.comparison && (
              <ComparisonCallout
                text={category.comparison.text}
                linkText={category.comparison.linkText}
                url={category.comparison.url}
              />
            )}
          </div>
        );
      })}

      {/* Getting Started */}
      <GettingStarted tips={industry.gettingStarted} />

      {/* Newsletter CTA */}
      <NewsletterCTA
        headline={industry.newsletterHeadline}
        subtext={industry.newsletterSubtext}
      />
    </div>
  );
}
