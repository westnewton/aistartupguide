import type { Metadata } from 'next';
import NewsletterCTA from '@/components/NewsletterCTA';

export const metadata: Metadata = {
  title: 'Newsletter — AIStartupGuide.com',
  description:
    'Get the best AI tools for small businesses delivered to your inbox every week. Free, no spam, unsubscribe anytime.',
  openGraph: {
    title: 'Newsletter — AIStartupGuide.com',
    description:
      'Get the best AI tools for small businesses delivered to your inbox every week. Free, no spam, unsubscribe anytime.',
    type: 'website',
    url: 'https://aistartupguide.com/newsletter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter — AIStartupGuide.com',
    description:
      'Get the best AI tools for small businesses delivered to your inbox every week. Free, no spam, unsubscribe anytime.',
  },
  alternates: {
    canonical: 'https://aistartupguide.com/newsletter',
  },
};

export default function NewsletterPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <NewsletterCTA
        headline="Get the Best AI Tools in Your Inbox"
        subtext="A weekly email with new tool discoveries, industry-specific tips, and practical advice for small business owners adopting AI. No spam, unsubscribe anytime."
      />
    </div>
  );
}
