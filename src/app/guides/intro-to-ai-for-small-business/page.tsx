import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import NewsletterCTA from '@/components/NewsletterCTA';
import FadeUp from '@/components/FadeUp';
import './guide.css';

const pageUrl = 'https://aistartupguide.com/guides/intro-to-ai-for-small-business';
const pageDescription =
  'What AI actually does, what it costs, and how to start using it today. A plain-English guide for small business owners — no jargon, no hype.';

export const metadata: Metadata = {
  title: "A Small Business Owner's Guide to AI — AIStartupGuide.com",
  description: pageDescription,
  openGraph: {
    title: "A Small Business Owner's Guide to AI — AIStartupGuide.com",
    description: pageDescription,
    type: 'article',
    url: pageUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: "A Small Business Owner's Guide to AI — AIStartupGuide.com",
    description: pageDescription,
  },
  alternates: {
    canonical: pageUrl,
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "A Small Business Owner's Guide to AI",
  description: pageDescription,
  url: pageUrl,
  datePublished: '2026-02-01',
  dateModified: '2026-02-19',
  author: {
    '@type': 'Organization',
    name: 'AIStartupGuide.com',
    url: 'https://aistartupguide.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'AIStartupGuide.com',
    url: 'https://aistartupguide.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://aistartupguide.com/og-image.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': pageUrl,
  },
};

export default function AIIntroGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Guides', href: '/guides/intro-to-ai-for-small-business' },
          { label: "A Small Business Owner's Guide to AI" },
        ]}
      />

      <div className="guide-article">
        {/* ─── HERO ─── */}
        <FadeUp className="guide-hero">
          <div className="guide-hero-inner">
            <span className="guide-hero-emoji">🤖</span>
            <h1>A Small Business Owner&apos;s Guide to AI</h1>
            <p className="guide-hero-sub">
              Everything you need to know about AI as a small business owner — what it
              actually does, what it costs, and how to start using it today. No jargon,
              no hype, just practical advice.
            </p>
            <div className="guide-meta">
              <span className="guide-meta-item">
                <strong>10 min</strong>&nbsp;read
              </span>
              <span className="meta-dot"></span>
              <span className="guide-meta-item">
                Last updated&nbsp;<strong>Feb 2026</strong>
              </span>
              <span className="meta-dot"></span>
              <span className="guide-meta-item">
                Written for&nbsp;<strong>non-technical owners</strong>
              </span>
            </div>
          </div>
        </FadeUp>

        {/* ─── ARTICLE BODY ─── */}
        <div className="guide-body">
          {/* Section 1 */}
          <FadeUp>
            <h2>What is AI, really?</h2>
            <p>
              AI — artificial intelligence — sounds futuristic and complicated. But for
              small business owners, it boils down to something simple:{' '}
              <strong>software that can learn patterns and make decisions</strong>,
              instead of just following fixed rules you program in.
            </p>
            <p>
              Think of the difference between a calculator and a smart assistant. A
              calculator does exactly what you tell it. A smart assistant can read your
              emails, figure out which ones are urgent, draft replies, and schedule
              follow-ups — without you spelling out every step.
            </p>
            <p>
              That&apos;s what AI tools do for your business. They handle repetitive,
              time-consuming tasks so you can focus on the work that actually needs a
              human touch — building relationships, making judgment calls, and growing
              your business.
            </p>

            <div className="guide-callout guide-callout-key">
              <div className="guide-callout-title">🎯 The bottom line</div>
              <p>
                AI isn&apos;t about replacing you or your team. It&apos;s about giving
                your business a tireless digital assistant that handles the busywork for
                $0–$100/month.
              </p>
            </div>
          </FadeUp>

          {/* Section 2 */}
          <FadeUp>
            <h2>What can AI actually do for a small business?</h2>
            <p>
              Forget the sci-fi hype. Here are the real, practical things small business
              owners are using AI for right now — across every industry from plumbing to
              real estate to restaurants.
            </p>

            <div className="guide-example-grid">
              <div className="guide-example-card">
                <div className="guide-example-icon">✍️</div>
                <h4>Write Faster</h4>
                <p>
                  Emails, social posts, job descriptions, ad copy, customer replies —
                  AI drafts them in seconds. You edit and send.
                </p>
              </div>
              <div className="guide-example-card">
                <div className="guide-example-icon">📅</div>
                <h4>Schedule Smarter</h4>
                <p>
                  AI-powered scheduling tools optimize routes, fill calendar gaps, and
                  send automatic reminders to reduce no-shows.
                </p>
              </div>
              <div className="guide-example-card">
                <div className="guide-example-icon">💬</div>
                <h4>Answer Customers 24/7</h4>
                <p>
                  AI chatbots handle common questions, capture leads, and book
                  appointments — even at 2 AM when you&apos;re asleep.
                </p>
              </div>
              <div className="guide-example-card">
                <div className="guide-example-icon">📊</div>
                <h4>Manage Money</h4>
                <p>
                  AI categorizes expenses, matches receipts, flags unusual charges, and
                  generates invoices from your time logs.
                </p>
              </div>
              <div className="guide-example-card">
                <div className="guide-example-icon">🎨</div>
                <h4>Create Marketing Materials</h4>
                <p>
                  Design social graphics, flyers, and before/after posts without a
                  designer. AI suggests layouts and writes captions.
                </p>
              </div>
              <div className="guide-example-card">
                <div className="guide-example-icon">📋</div>
                <h4>Generate Estimates &amp; Proposals</h4>
                <p>
                  AI pulls material costs, suggests line items, and turns site visits
                  into professional quotes in minutes instead of hours.
                </p>
              </div>
            </div>

            <div className="guide-callout guide-callout-tip">
              <div className="guide-callout-title">💡 Pro tip</div>
              <p>
                You don&apos;t need to adopt all of these at once. Most business owners
                see the biggest impact by starting with just one or two tools that solve
                their biggest daily pain point.
              </p>
            </div>
          </FadeUp>

          {/* Section 3 */}
          <FadeUp>
            <h2>What does AI cost for a small business?</h2>
            <p>
              One of the biggest misconceptions about AI is that it&apos;s expensive.
              The reality? Most AI tools designed for small businesses are surprisingly
              affordable — and many have free tiers that are genuinely useful.
            </p>

            <div className="guide-table-wrapper">
              <table className="guide-table">
                <thead>
                  <tr>
                    <th>Tool Type</th>
                    <th>Typical Cost</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AI Writing &amp; Content</td>
                    <td>$0–$20/mo</td>
                    <td>ChatGPT, Canva AI</td>
                  </tr>
                  <tr>
                    <td>Scheduling &amp; Dispatch</td>
                    <td>$49–$99/mo</td>
                    <td>Jobber, Housecall Pro</td>
                  </tr>
                  <tr>
                    <td>AI Chatbots</td>
                    <td>$0–$29/mo</td>
                    <td>Tidio, Drift</td>
                  </tr>
                  <tr>
                    <td>Invoicing &amp; Bookkeeping</td>
                    <td>$0–$30/mo</td>
                    <td>QuickBooks AI, FreshBooks</td>
                  </tr>
                  <tr>
                    <td>CRM &amp; Marketing</td>
                    <td>$49–$97/mo</td>
                    <td>GoHighLevel, Mailchimp</td>
                  </tr>
                  <tr>
                    <td>Project Documentation</td>
                    <td>$19–$99/mo</td>
                    <td>CompanyCam, Buildertrend</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>The math is simple.</strong> If an AI tool costs $50/month and saves
              you 5 hours of work per week, that&apos;s about $2.50 per hour of time
              saved. Most business owners value their time at far more than that.
            </p>

            <div className="guide-callout guide-callout-warning">
              <div className="guide-callout-title">⚠️ Watch out for</div>
              <p>
                Some tools lock essential features behind expensive tiers. Always start
                with the free tier or trial to make sure the tool actually solves your
                problem before upgrading. If it doesn&apos;t save you time in the first
                week, move on.
              </p>
            </div>
          </FadeUp>

          {/* Section 4 */}
          <FadeUp>
            <h2>How to get started (5 simple steps)</h2>
            <p>
              You don&apos;t need a tech background to start using AI. Here&apos;s the
              approach we recommend to every business owner:
            </p>

            <ol className="guide-steps">
              <li className="guide-step">
                <span className="guide-step-num">1</span>
                <div className="guide-step-content">
                  <h4>Identify your biggest time sink</h4>
                  <p>
                    What task eats up the most hours every week? Answering the same
                    customer questions? Creating estimates? Posting on social media? Doing
                    bookkeeping? That&apos;s where AI will have the biggest impact.
                  </p>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">2</span>
                <div className="guide-step-content">
                  <h4>Find the right tool for your industry</h4>
                  <p>
                    Generic AI tools are great, but industry-specific ones are even
                    better. A scheduling tool built for contractors works differently than
                    one built for salons. We organize our recommendations by industry so
                    you can find exactly what fits.
                  </p>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">3</span>
                <div className="guide-step-content">
                  <h4>Start with the free tier</h4>
                  <p>
                    Almost every AI tool offers a free trial or a permanently free plan.
                    Test it on a real project — not a toy example. If it saves you time in
                    the first week, it&apos;s worth keeping.
                  </p>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">4</span>
                <div className="guide-step-content">
                  <h4>Pick tools that integrate with each other</h4>
                  <p>
                    The best AI tools connect with software you already use. Jobber syncs
                    with QuickBooks. Canva exports to social platforms. Choose tools that
                    talk to each other so you&apos;re not re-entering data.
                  </p>
                </div>
              </li>
              <li className="guide-step">
                <span className="guide-step-num">5</span>
                <div className="guide-step-content">
                  <h4>Add one tool at a time</h4>
                  <p>
                    Don&apos;t overhaul everything at once. Get comfortable with one tool,
                    let it become part of your routine, then add the next one. Most
                    business owners find their sweet spot with 2–3 AI tools.
                  </p>
                </div>
              </li>
            </ol>
          </FadeUp>

          <hr className="guide-divider" />

          {/* Section 5 */}
          <FadeUp>
            <h2>&ldquo;Will AI replace my employees?&rdquo;</h2>
            <p>
              This is the question we hear most, and the answer is almost always{' '}
              <strong>no</strong> — at least not for small businesses.
            </p>
            <p>
              For most small businesses, AI is a <strong>force multiplier</strong>, not a
              replacement. It handles the repetitive tasks — scheduling, follow-ups, data
              entry, first-draft writing — so your team can focus on the work that
              actually requires a human touch: building relationships, making judgment
              calls, and delivering quality service.
            </p>
            <p>
              Think of it this way: AI is like hiring a tireless assistant for $30–$100/month
              who never calls in sick, never forgets a follow-up, and works 24/7. That
              doesn&apos;t replace your best employee — it makes them more productive.
            </p>

            <div className="guide-callout guide-callout-tip">
              <div className="guide-callout-title">💡 Real talk</div>
              <p>
                The businesses that will struggle aren&apos;t the ones that adopt AI —
                they&apos;re the ones that ignore it while their competitors don&apos;t.
                Starting early gives you a real advantage.
              </p>
            </div>
          </FadeUp>

          <hr className="guide-divider" />

          {/* Section 6 */}
          <FadeUp>
            <h2>Common mistakes to avoid</h2>
            <h3>Trying to do everything at once</h3>
            <p>
              The #1 mistake we see is business owners signing up for five tools in one
              weekend. You get overwhelmed, nothing sticks, and you give up thinking
              &ldquo;AI doesn&apos;t work for my business.&rdquo; Pick one tool. Use it
              for 2 weeks. Then decide if you want to add another.
            </p>

            <h3>Choosing the most expensive option</h3>
            <p>
              Pricier doesn&apos;t mean better. A $97/month CRM is overkill if you have
              20 clients and a spreadsheet that works fine. Match the tool to your actual
              business size and needs, not where you hope to be in two years.
            </p>

            <h3>Expecting magic</h3>
            <p>
              AI tools are powerful, but they still need you to set them up properly and
              provide good input. A chatbot with bad answers will hurt more than help. An
              AI email writer that you never edit will sound generic. Put in 30 minutes of
              setup and you&apos;ll get 10x the value.
            </p>

            <h3>Ignoring data privacy</h3>
            <p>
              Before feeding customer information into any AI tool, check their privacy
              policy. Reputable tools (the kind we recommend) don&apos;t sell your data or
              use it to train their models. If a tool&apos;s privacy page is hard to find
              or vague, that&apos;s a red flag.
            </p>
          </FadeUp>

          {/* ─── CTA BANNER ─── */}
          <FadeUp>
            <div className="guide-cta-banner">
              <h3>Ready to find the right tools?</h3>
              <p>
                We&apos;ve tested and reviewed 120+ AI tools organized by industry —
                with honest ratings, real pricing, and plain-English explanations.
              </p>
              <div className="guide-cta-actions">
                <Link href="/#industries" className="btn-primary">
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
                </Link>
                <Link href="/#tools" className="btn-secondary">
                  See This Week&apos;s Top Picks
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ─── NEWSLETTER ─── */}
      <NewsletterCTA
        headline="Get AI tips for your business — weekly"
        subtext="New tool discoveries, practical tips, and honest advice for small business owners adopting AI. No jargon, no spam."
      />
    </>
  );
}
