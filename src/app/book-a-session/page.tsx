import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book a 1-on-1 Setup Session — AIStartupGuide.com',
  description:
    'Get hands-on help setting up AI tools for your business. 1-on-1 sessions at $150/hour — we walk you through everything.',
  openGraph: {
    title: 'Book a 1-on-1 Setup Session — AIStartupGuide.com',
    description:
      'Get hands-on help setting up AI tools for your business. 1-on-1 sessions at $150/hour — we walk you through everything.',
    type: 'website',
    url: 'https://aistartupguide.com/book-a-session',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a 1-on-1 Setup Session — AIStartupGuide.com',
    description:
      'Get hands-on help setting up AI tools for your business. 1-on-1 sessions at $150/hour — we walk you through everything.',
  },
  alternates: {
    canonical: 'https://aistartupguide.com/book-a-session',
  },
};

export default function BookASessionPage() {
  return (
    <section style={{ textAlign: 'center', paddingTop: 140 }}>
      <span className="section-label">1-on-1 Help</span>
      <h1 className="section-title">Book a 1-on-1 Setup Session</h1>
      <p className="section-sub" style={{ margin: '0 auto 28px' }}>
        Need hands-on help getting an AI tool set up for your business? We offer
        1-on-1 sessions at $150/hour where we walk you through everything.
      </p>
      <p style={{ fontSize: '1.02rem', color: 'var(--ink)', fontWeight: 600, marginBottom: 36 }}>
        Email{' '}
        <a href="mailto:jason@aistartupguide.com" style={{ color: 'var(--accent)' }}>
          jason@aistartupguide.com
        </a>{' '}
        to schedule
      </p>
      <Link href="/" className="btn-secondary">
        Back to Home
      </Link>
    </section>
  );
}
