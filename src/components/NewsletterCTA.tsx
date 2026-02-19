'use client';

import { FormEvent, useState } from 'react';

interface NewsletterCTAProps {
  headline?: string;
  subtext?: string;
}

export default function NewsletterCTA({
  headline = 'Get the best AI tools in your inbox',
  subtext = 'A weekly email with new tool discoveries, industry-specific tips, and no-BS advice for small business owners adopting AI.',
}: NewsletterCTAProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Wire to newsletter platform (Beehiiv, ConvertKit, etc.)
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="newsletter">
      <span className="section-label">Stay Ahead</span>
      <h2 className="section-title">{headline}</h2>
      <p className="section-sub">{subtext}</p>
      {submitted ? (
        <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--sage)' }}>
          You&apos;re in! Check your inbox to confirm.
        </p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@yourbusiness.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            Subscribe Free
          </button>
        </form>
      )}
      <p className="newsletter-note">
        Join 2,400+ small business owners. Unsubscribe anytime.
      </p>
    </section>
  );
}
