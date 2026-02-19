import type { Metadata } from 'next';
import HeroCard from '@/components/HeroCard';
import IndustryCard from '@/components/IndustryCard';
import FAQAccordion from '@/components/FAQAccordion';
import FadeUp from '@/components/FadeUp';
import NewsletterCTA from '@/components/NewsletterCTA';

export const metadata: Metadata = {
  title: 'AIStartupGuide.com — Find the Right AI Tools for Your Business',
  description:
    'Stop sifting through thousands of AI products. We test and curate the best tools for small businesses — organized by your industry, explained in plain English.',
  openGraph: {
    title: 'AIStartupGuide.com — Find the Right AI Tools for Your Business',
    description:
      'Stop sifting through thousands of AI products. We test and curate the best tools for small businesses — organized by your industry, explained in plain English.',
    type: 'website',
    url: 'https://aistartupguide.com',
  },
};

const industries = [
  {
    slug: 'professional-services',
    colorClass: 'ic-professional',
    emoji: '💼',
    name: 'Professional Services',
    description: 'Accountants, lawyers, consultants, engineers, architects',
    toolCount: 16,
    bizCount: '4.6M businesses in the U.S.',
  },
  {
    slug: 'construction-trades',
    colorClass: 'ic-construction',
    emoji: '🔨',
    name: 'Construction & Trades',
    description: 'General contractors, electricians, plumbers, HVAC, roofers',
    toolCount: 12,
    bizCount: '3.6M businesses in the U.S.',
  },
  {
    slug: 'transportation-logistics',
    colorClass: 'ic-transport',
    emoji: '🚚',
    name: 'Transportation & Logistics',
    description: 'Trucking, moving companies, delivery, freight, couriers',
    toolCount: 9,
    bizCount: '3.4M businesses in the U.S.',
  },
  {
    slug: 'real-estate',
    colorClass: 'ic-realestate',
    emoji: '🏠',
    name: 'Real Estate',
    description: 'Agents, brokerages, property management, inspections',
    toolCount: 15,
    bizCount: '3.3M businesses in the U.S.',
  },
  {
    slug: 'retail-ecommerce',
    colorClass: 'ic-retail',
    emoji: '🛒',
    name: 'Retail & E-Commerce',
    description: 'Shops, boutiques, online stores, specialty, convenience',
    toolCount: 13,
    bizCount: '2.9M businesses in the U.S.',
  },
  {
    slug: 'food-restaurants',
    colorClass: 'ic-food',
    emoji: '🍽️',
    name: 'Food & Restaurants',
    description: 'Restaurants, cafés, food trucks, catering, bars',
    toolCount: 11,
    bizCount: 'Top sector by new openings',
  },
  {
    slug: 'health-wellness',
    colorClass: 'ic-health',
    emoji: '🩺',
    name: 'Health & Wellness',
    description: 'Doctors, dentists, chiropractors, fitness, physical therapy',
    toolCount: 14,
    bizCount: '10% of all small businesses',
  },
  {
    slug: 'home-personal-services',
    colorClass: 'ic-personal',
    emoji: '✂️',
    name: 'Home & Personal Services',
    description: 'Cleaning, landscaping, salons, pet care, auto repair',
    toolCount: 10,
    bizCount: 'Fastest-growing segment',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Find the right <em>AI tools</em> for your business
          </h1>
          <p className="hero-sub">
            Stop sifting through thousands of AI products. We test and curate the
            best tools for small businesses — organized by your industry, explained
            in plain English.
          </p>
          <div className="hero-actions">
            <a href="#industries" className="btn-primary">
              Browse by Industry
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#tools" className="btn-secondary">
              See Top Picks
            </a>
          </div>
        </div>
        <HeroCard />
      </section>

      {/* ─── TRUST BAR ─── */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-stat">
            <div className="num">120+</div>
            <div className="label">AI Tools Reviewed</div>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <div className="num">8</div>
            <div className="label">Industries Covered</div>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <div className="num">100%</div>
            <div className="label">Independent Reviews</div>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat">
            <div className="num">Free</div>
            <div className="label">To Browse &amp; Learn</div>
          </div>
        </div>
      </div>

      {/* ─── INDUSTRIES ─── */}
      <section id="industries">
        <FadeUp className="section-header">
          <span className="section-label">Browse by Industry</span>
          <h2 className="section-title">AI tools curated for your industry</h2>
          <p className="section-sub">
            Each page features hand-tested tools with honest reviews, pricing
            breakdowns, and setup guides written for business owners — not
            developers.
          </p>
        </FadeUp>
        <div className="industry-grid">
          {industries.map((industry) => (
            <FadeUp key={industry.slug}>
              <IndustryCard {...industry} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq">
        <FadeUp className="faq-layout">
          <div>
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">What business owners ask us</h2>
            <p className="section-sub">
              We hear these questions every week. If yours isn&apos;t here, reach
              out — we&apos;re happy to help.
            </p>
          </div>
          <FAQAccordion />
        </FadeUp>
      </section>

      {/* ─── FEATURED TOOLS (Editor's Picks) ─── */}
      <section id="tools">
        <FadeUp className="featured-banner">
          <div>
            <span className="section-label">Editor&apos;s Picks</span>
            <h2 className="section-title">This week&apos;s top tools</h2>
            <p className="section-sub">
              Our latest finds that are actually worth your time — tested,
              reviewed, and ready for your business.
            </p>
            <a
              href="#"
              className="btn-primary"
              style={{ marginTop: 28 }}
            >
              See All Reviews →
            </a>
          </div>
          <div className="featured-tools-list">
            <div className="ft-item">
              <div className="ft-icon">📋</div>
              <div className="ft-details">
                <h4>Jobber</h4>
                <p>AI scheduling &amp; quoting for service businesses</p>
              </div>
            </div>
            <div className="ft-item">
              <div className="ft-icon">📸</div>
              <div className="ft-details">
                <h4>CompanyCam</h4>
                <p>Smart photo documentation for job sites</p>
              </div>
            </div>
            <div className="ft-item">
              <div className="ft-icon">💬</div>
              <div className="ft-details">
                <h4>Tidio</h4>
                <p>AI chatbot for customer support &amp; lead capture</p>
              </div>
            </div>
            <div className="ft-item">
              <div className="ft-icon">📊</div>
              <div className="ft-details">
                <h4>GoHighLevel</h4>
                <p>All-in-one CRM with AI marketing automation</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <NewsletterCTA />
    </>
  );
}
