import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="logo">
            AI<span>Startup</span>Guide
          </Link>
          <p>
            Helping small business owners navigate AI with confidence. Independent
            reviews, honest recommendations.
          </p>
        </div>
        <div className="footer-col">
          <h4>Industries</h4>
          <Link href="/industries/professional-services">Professional Services</Link>
          <Link href="/industries/construction-trades">Construction &amp; Trades</Link>
          <Link href="/industries/transportation-logistics">Transportation</Link>
          <Link href="/industries/real-estate">Real Estate</Link>
        </div>
        <div className="footer-col">
          <h4>More Industries</h4>
          <Link href="/industries/retail-ecommerce">Retail &amp; E-Commerce</Link>
          <Link href="/industries/food-restaurants">Food &amp; Restaurants</Link>
          <Link href="/industries/health-wellness">Health &amp; Wellness</Link>
          <Link href="/industries/home-personal-services">Home &amp; Personal Services</Link>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <Link href="/guides/intro-to-ai-for-small-business">AI Intro Guide</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/newsletter">Newsletter</Link>
          <Link href="/book-a-session">Book a Session</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} AIStartupGuide.com. All rights reserved.</span>
        <span>Wilmington, NC</span>
      </div>
    </footer>
  );
}
