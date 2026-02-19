import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — AIStartupGuide.com',
  description:
    'Practical AI tips, tool reviews, and advice for small business owners. Updated weekly.',
};

export default function BlogPage() {
  return (
    <section style={{ textAlign: 'center', paddingTop: 140 }}>
      <span className="section-label">Coming Soon</span>
      <h1 className="section-title">Blog</h1>
      <p className="section-sub" style={{ margin: '0 auto 32px' }}>
        Practical AI tips, tool reviews, and advice for small business owners.
        We&apos;re working on our first posts — check back soon.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </section>
  );
}
