import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import NewsletterCTA from '@/components/NewsletterCTA';
import Breadcrumb from '@/components/Breadcrumb';
import './blog-post.css';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const pageUrl = `https://aistartupguide.com/blog/${post.slug}`;
  return {
    title: `${post.title} — AIStartupGuide.com`,
    description: post.description,
    openGraph: {
      title: `${post.title} — AIStartupGuide.com`,
      description: post.description,
      type: 'article',
      url: pageUrl,
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — AIStartupGuide.com`,
      description: post.description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AIStartupGuide.com',
      url: 'https://aistartupguide.com',
    },
    url: `https://aistartupguide.com/blog/${post.slug}`,
  };

  return (
    <div className="blog-post-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="blog-article">
        <header className="blog-header">
          <div className="blog-meta-top">
            {post.industry && post.industrySlug && (
              <Link href={`/industries/${post.industrySlug}`} className="blog-industry-tag">
                {post.industry}
              </Link>
            )}
            <span className="blog-date">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="blog-reading-time">{post.readingTime}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-description">{post.description}</p>
          <div className="blog-author">
            <span>By {post.author}</span>
          </div>
        </header>

        <div className="blog-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {post.tags.length > 0 && (
          <div className="blog-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        )}
      </article>

      <NewsletterCTA
        headline="Get AI tips for your business"
        subtext="A weekly email with new tool discoveries, practical advice, and no fluff. Join 2,400+ small business owners."
      />
    </div>
  );
}
