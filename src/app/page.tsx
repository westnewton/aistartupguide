import NewsletterCTA from '@/components/NewsletterCTA';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
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
        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hero-card">
              <div className="hero-card-header">
                <h3>Popular This Week</h3>
                <span className="updated">Updated weekly</span>
              </div>
              <ul className="hero-tool-list">
                <li className="hero-tool-item">
                  <div className="tool-info">
                    <span className="tool-emoji">🤖</span>
                    <div className="tool-meta">
                      <span className="tool-name">ChatGPT</span>
                      <span className="tool-use">Writing, research, customer replies</span>
                    </div>
                  </div>
                  <span className="tool-tag tag-freemium">Freemium</span>
                </li>
                <li className="hero-tool-item">
                  <div className="tool-info">
                    <span className="tool-emoji">📋</span>
                    <div className="tool-meta">
                      <span className="tool-name">Jobber</span>
                      <span className="tool-use">Scheduling, quoting, invoicing</span>
                    </div>
                  </div>
                  <span className="tool-tag tag-paid">From $49/mo</span>
                </li>
                <li className="hero-tool-item">
                  <div className="tool-info">
                    <span className="tool-emoji">🎨</span>
                    <div className="tool-meta">
                      <span className="tool-name">Canva AI</span>
                      <span className="tool-use">Marketing graphics, social posts</span>
                    </div>
                  </div>
                  <span className="tool-tag tag-free">Free tier</span>
                </li>
                <li className="hero-tool-item">
                  <div className="tool-info">
                    <span className="tool-emoji">💬</span>
                    <div className="tool-meta">
                      <span className="tool-name">Tidio</span>
                      <span className="tool-use">AI chatbot, lead capture</span>
                    </div>
                  </div>
                  <span className="tool-tag tag-freemium">Freemium</span>
                </li>
                <li className="hero-tool-item">
                  <div className="tool-info">
                    <span className="tool-emoji">📊</span>
                    <div className="tool-meta">
                      <span className="tool-name">QuickBooks AI</span>
                      <span className="tool-use">Bookkeeping, expense tracking</span>
                    </div>
                  </div>
                  <span className="tool-tag tag-paid">From $30/mo</span>
                </li>
              </ul>
            </div>
            <div className="float-tag ft1">120+ tools reviewed</div>
            <div className="float-tag ft2">Tested by real owners</div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
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

      {/* Industries - placeholder for Phase 3 */}
      <section id="industries" style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px' }}>
        <div className="section-header">
          <span className="section-label">Browse by Industry</span>
          <h2 className="section-title">AI tools curated for your industry</h2>
          <p className="section-sub">
            Each page features hand-tested tools with honest reviews, pricing
            breakdowns, and setup guides written for business owners — not
            developers.
          </p>
        </div>
        <p style={{ color: 'var(--muted)', fontStyle: 'italic' }}>
          Industry grid coming in Phase 3.
        </p>
      </section>

      {/* Newsletter */}
      <NewsletterCTA />
    </>
  );
}
