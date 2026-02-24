import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import NewsletterCTA from '@/components/NewsletterCTA';
import FadeUp from '@/components/FadeUp';
import Breadcrumb from '@/components/Breadcrumb';
import './blog-listing.css';

export const metadata: Metadata = {
  title: 'Blog — AIStartupGuide.com',
  description:
    'Practical AI advice for small business owners. Tool reviews, setup guides, and industry-specific tips — explained in plain English.',
  openGraph: {
    title: 'Blog — AIStartupGuide.com',
    description:
      'Practical AI advice for small business owners. Tool reviews, setup guides, and industry-specific tips.',
    type: 'website',
    url: 'https://aistartupguide.com/blog',
  },
  alternates: {
    canonical: 'https://aistartupguide.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="blog-page">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />

      {/* Hero */}
      <div className="blog-hero">
        <FadeUp className="blog-hero-inner">
          <span className="blog-hero-label">Blog</span>
          <h1>AI tips that actually help your business</h1>
          <p className="blog-hero-sub">
            Practical guides, tool breakdowns, and industry-specific advice — written for business owners, not developers.
          </p>
        </FadeUp>
      </div>

      {/* Post Grid */}
      <div className="blog-grid-container">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>Posts coming soon. In the meantime, browse our <Link href="/#industries">industry guides</Link>.</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <FadeUp key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-meta">
                    {post.industry && (
                      <span className="blog-card-industry">{post.industry}</span>
                    )}
                    <span className="blog-card-date">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-reading-time">{post.readingTime}</span>
                    <span className="blog-card-link">Read more →</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        )}
      </div>

      <NewsletterCTA
        headline="Get AI tips in your inbox"
        subtext="A weekly email with new tool discoveries, practical advice, and no fluff. Join 2,400+ small business owners."
      />
    </div>
  );
}
