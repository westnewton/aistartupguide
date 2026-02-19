import type { Metadata } from 'next';
import NewsletterCTA from '@/components/NewsletterCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter — AIStartupGuide.com',
  description:
    'Get the best AI tools for small businesses delivered to your inbox every week. Free, no spam, unsubscribe anytime.',
};

export default function NewsletterPage() {
  return (
    <>
      <section style={{ textAlign: 'center', paddingTop: 140, paddingBottom: 0 }}>
        <span className="section-label">Stay Ahead</span>
        <h1 className="section-title">The AI Startup Guide Newsletter</h1>
        <p className="section-sub" style={{ margin: '0 auto 32px' }}>
          A weekly email with new tool discoveries, industry-specific tips, and
          no-BS advice for small business owners adopting AI.
        </p>
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
      </section>
      <NewsletterCTA />
    </>
  );
}
