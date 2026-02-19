export default function HeroCard() {
  return (
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
  );
}
