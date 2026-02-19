import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book a Session — AIStartupGuide.com',
  description:
    'Get 1-on-1 help setting up AI tools for your business. We walk you through implementation, configuration, and best practices.',
};

export default function BookASessionPage() {
  return (
    <section style={{ textAlign: 'center', paddingTop: 140 }}>
      <span className="section-label">1-on-1 Help</span>
      <h1 className="section-title">Book a Setup Session</h1>
      <p className="section-sub" style={{ margin: '0 auto 32px' }}>
        Need hands-on help? We offer 1-on-1 setup sessions where we walk you through
        implementation, configuration, and best practices for your specific business.
        Sessions are $100–$200/hour.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </section>
  );
}
