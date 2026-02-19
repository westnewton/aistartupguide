import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — AIStartupGuide.com',
  description:
    'Articles about AI tools for small businesses — practical tips, honest reviews, and plain-English guides organized by industry.',
};

export default function BlogPage() {
  return (
    <section style={{ textAlign: 'center', paddingTop: 140 }}>
      <span className="section-label">Coming Soon</span>
      <h1 className="section-title">Blog — Coming Soon</h1>
      <p className="section-sub" style={{ margin: '0 auto 32px' }}>
        We&apos;re working on articles about AI tools for small businesses. In the
        meantime, browse our industry guides.
      </p>
      <Link href="/" className="btn-primary">
        Browse Industry Guides
      </Link>
    </section>
  );
}
