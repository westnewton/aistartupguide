# AIStartupGuide.com — Technical Handoff for Claude Code

**Last updated:** February 2026
**Companion docs:** project-brief.md, site-architecture.md
**Reference designs:** aistartupguide-v3.html (homepage), industry-page-v2.html (industry template)

---

## Framework Decision: Astro

**Choice: Astro** (not Next.js)

**Why Astro wins for this project:**

- **Content-first architecture.** AIStartupGuide is a content site with minimal interactivity. Astro ships zero JavaScript by default and only hydrates interactive components (newsletter forms, FAQ accordion, nav scroll behavior). This is exactly the use case Astro was built for.
- **Native MDX/Markdown support.** Astro's Content Collections API gives type-safe content out of the box — no extra wiring needed. Tool reviews, blog posts, and industry pages all live as MDX files. Drop a file in, it renders.
- **SEO performance.** Astro sites consistently hit Lighthouse 95–100 scores. For a site that depends on Google organic traffic, this matters. Core Web Vitals (LCP < 2.5s, CLS < 0.1) are nearly automatic with Astro's static-first approach.
- **Faster builds.** A 50–100 page content site builds in under 5 seconds with Astro vs 15–20 seconds with Next.js. As content grows to 200+ pages across 8 verticals, this gap widens.
- **Cheaper hosting.** Static output deploys to Vercel's edge CDN with zero server compute. No SSR runtime costs as traffic scales.
- **Simpler mental model.** Jason is a solo operator who needs to publish content without touching framework internals. Astro's file-based routing and MDX workflow is closer to "write a file, it shows up on the site."

**What we don't need from Next.js:**

- No user authentication
- No API routes or server-side logic
- No dynamic data fetching (content changes when we publish, not on every request)
- No complex state management
- No React-specific ecosystem dependencies

**Interactive components (handled via Astro Islands):**

- Newsletter email form → `client:visible`
- FAQ accordion → `client:visible`
- Nav scroll shadow → `client:load`
- Mobile nav toggle → `client:load`
- Smooth scroll for jump nav anchors → `client:load`

**Deployment:** Vercel (existing account), static output, edge CDN.

---

## Launch Verticals (3)

### Vertical 1: Construction & Trades
- **Status:** Industry page designed and populated (industry-page-v2.html)
- **Accent color:** Amber `#d97706`
- **Emoji:** 🔨
- **U.S. businesses:** 3.6M
- **Why launch first:** Reference implementation already built, underserved by AI content, owner-operated decision makers

### Vertical 2: Home & Personal Services
- **Accent color:** Fuchsia `#d946ef`
- **Emoji:** ✂️
- **U.S. businesses:** Fastest-growing segment
- **Why launch:** Overlapping tool landscape with Construction (Jobber, Housecall Pro, etc.), fastest-growing segment, solo operators who Google for solutions

### Vertical 3: Real Estate
- **Accent color:** Blue `#2563eb`
- **Emoji:** 🏠
- **U.S. businesses:** 3.3M
- **Why launch:** Large addressable market, agents are tech-curious, distinct tool landscape from the other two verticals

---

## Functional Categories by Vertical

### Construction & Trades (COMPLETE — see industry-page-v2.html)
| Category | H2 Title | What Goes Here |
|----------|----------|---------------|
| Estimating | Estimating & Quoting Tools | AI-powered takeoff, material calculators, proposal generators |
| Scheduling | Scheduling & Dispatch Tools | Crew dispatch, route optimization, appointment booking |
| Communication | Client Communication Tools | AI chatbots, automated follow-ups, review management |
| Invoicing | Invoicing & Payments Tools | Invoice generation, expense tracking, payment reminders |
| Marketing | Marketing & Lead Generation Tools | CRM, social media, Google presence, ad copy |
| Documentation | Project Documentation Tools | Photo documentation, daily logs, progress reports |

### Home & Personal Services (TO BUILD)
| Category | H2 Title | What Goes Here |
|----------|----------|---------------|
| Booking | Booking & Scheduling Tools | Online booking, appointment reminders, calendar management |
| Client Management | Client Management & CRM Tools | Client history, automated follow-ups, loyalty tracking |
| Communication | Client Communication Tools | AI chatbots, review requests, automated texts |
| Invoicing | Invoicing & Payments Tools | Mobile invoicing, payment processing, recurring billing |
| Marketing | Marketing & Social Media Tools | Social content creation, local SEO, Google Business |
| Operations | Operations & Routing Tools | Route optimization, job tracking, team management |

**Professions covered:** Cleaning services, landscaping, salons/barbers, pet care, auto repair, handyman, pest control, pool service

### Real Estate (TO BUILD)
| Category | H2 Title | What Goes Here |
|----------|----------|---------------|
| Lead Gen | Lead Generation & Nurture Tools | AI lead scoring, automated drip campaigns, lead capture |
| Listings | Listing & Marketing Tools | AI property descriptions, virtual staging, photo enhancement |
| CRM | CRM & Client Management Tools | Transaction management, pipeline tracking, client follow-up |
| Communication | Client Communication Tools | AI chatbots, automated showing confirmations, text follow-ups |
| Market Analysis | Market Analysis & Pricing Tools | Comp analysis, pricing recommendations, market reports |
| Operations | Transaction & Operations Tools | Document management, e-signatures, closing coordination |

**Professions covered:** Residential agents, commercial agents, brokerages, property managers, inspectors, appraisers

---

## Industry Color Map

Each vertical has a unique accent color used for the `--industry` CSS variable, hero border, rank badges, ratings, jump nav hover states, and Getting Started section glow.

| Industry | CSS Variable `--industry` | Light Variant `--industry-light` | Subtle BG `--industry-subtle` | Emoji |
|----------|--------------------------|----------------------------------|-------------------------------|-------|
| Professional Services | `#0891b2` (cyan) | `#ecfeff` | `#f0fdff` | 💼 |
| Construction & Trades | `#d97706` (amber) | `#fef7ed` | `#fffbf5` | 🔨 |
| Transportation & Logistics | `#65a30d` (lime) | `#f7fee7` | `#fbfff0` | 🚚 |
| Real Estate | `#2563eb` (blue) | `#eff4ff` | `#f5f8ff` | 🏠 |
| Retail & E-Commerce | `#8b5cf6` (violet) | `#f5f3ff` | `#faf8ff` | 🛒 |
| Food & Restaurants | `#dc2626` (red) | `#fef2f2` | `#fff5f5` | 🍽️ |
| Health & Wellness | `#059669` (emerald) | `#ecfdf5` | `#f0fdf8` | 🩺 |
| Home & Personal Services | `#d946ef` (fuchsia) | `#fdf4ff` | `#fef6ff` | ✂️ |

---

## Design System Tokens

These are the shared design tokens used across all pages. Pulled from the homepage and industry page designs.

```css
:root {
  /* Core palette */
  --ink: #1a1a1a;
  --paper: #faf8f5;
  --warm: #e8e2d8;
  --accent: #c45d3e;        /* Terracotta — CTAs, links, brand accent */
  --accent-hover: #a8462b;
  --accent-light: #fdf0ec;
  --sage: #5a7a6a;           /* "Free" tags */
  --sage-light: #eef3f0;
  --muted: #7a7568;          /* Body text, secondary content */
  --border: #e0dbd2;
  --card-bg: #ffffff;

  /* Radii */
  --radius: 12px;
  --radius-lg: 20px;

  /* Industry accent (overridden per vertical) */
  --industry: #d97706;
  --industry-light: #fef7ed;
  --industry-subtle: #fffbf5;
}
```

### Typography
- **Headings:** DM Serif Display (serif) — Google Fonts
- **Body:** DM Sans (sans-serif) — Google Fonts
- **Weights used:** 300, 400, 500, 600, 700 (DM Sans); regular + italic (DM Serif Display)

### Pricing Badge Colors
| Badge | Background | Text Color |
|-------|-----------|------------|
| Free | `--sage-light` (#eef3f0) | `--sage` (#5a7a6a) |
| Paid | `#fef7ed` | `#b8860b` |
| Freemium | `#f0edff` | `#6c5ce7` |

---

## Proposed File Structure

```
aistartupguide/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── ToolCard.astro
│   │   ├── QuickPicks.astro
│   │   ├── JumpNav.astro
│   │   ├── PricingBadge.astro
│   │   ├── SourcedRating.astro
│   │   ├── ComparisonCallout.astro
│   │   ├── GettingStarted.astro
│   │   ├── AffiliateDisclosure.astro
│   │   ├── NewsletterCTA.astro
│   │   ├── Breadcrumb.astro
│   │   ├── FAQAccordion.astro       (homepage)
│   │   ├── HeroCard.astro            (homepage)
│   │   ├── IndustryCard.astro         (homepage)
│   │   └── SEOHead.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro           (nav + footer + SEO head)
│   │   ├── IndustryLayout.astro       (base + breadcrumb + disclosure + industry vars)
│   │   └── BlogLayout.astro           (future)
│   ├── content/
│   │   ├── config.ts                  (Content Collections schema)
│   │   ├── industries/
│   │   │   ├── construction-trades.mdx
│   │   │   ├── home-personal-services.mdx
│   │   │   └── real-estate.mdx
│   │   ├── tools/                     (future — individual reviews)
│   │   └── blog/                      (future)
│   ├── data/
│   │   └── tools.ts                   (tool data: name, pricing, rating, source, description, tags, url)
│   ├── pages/
│   │   ├── index.astro                (homepage)
│   │   ├── industries/
│   │   │   └── [slug].astro           (dynamic industry page)
│   │   ├── tools/                     (future)
│   │   ├── blog/                      (future)
│   │   └── newsletter.astro           (future)
│   └── styles/
│       └── global.css                 (design tokens, shared styles)
```

### Key Architectural Decisions

**Tool data lives in `src/data/tools.ts`**, not in each MDX file. A tool like Jobber appears in multiple categories and multiple industry pages. Centralizing tool data means you update pricing or ratings in one place and it propagates everywhere. Each industry MDX file references tools by slug.

**Industry pages use a shared layout** (`IndustryLayout.astro`) that handles the breadcrumb, disclosure, hero, quick picks, jump nav, getting started, newsletter, and footer. The MDX content only defines the tool categories specific to that vertical.

**Content Collections** provide type safety for industry pages, tool data, and blog posts. Schema enforces required fields (tool name, pricing, rating, source, description, tags).

---

## Content Schema (for Content Collections)

### Tool
```typescript
const toolSchema = z.object({
  name: z.string(),
  slug: z.string(),
  url: z.string().url(),                    // tool homepage (affiliate URL when available)
  pricing: z.object({
    label: z.string(),                       // "From $49/mo", "Free tier", "Custom pricing"
    type: z.enum(['free', 'paid', 'freemium']),
  }),
  rating: z.object({
    score: z.number().min(0).max(5),
    source: z.enum(['G2', 'Capterra']),
  }),
  description: z.string(),                   // 2-3 sentences, plain English
  bestFor: z.array(z.string()),              // ["Solo operators", "Residential"]
  industries: z.array(z.string()),           // ["construction", "home-personal"]
  categories: z.array(z.string()),           // ["scheduling", "invoicing"]
});
```

### Industry Page
```typescript
const industrySchema = z.object({
  name: z.string(),                          // "Construction & Trades"
  slug: z.string(),                          // "construction-trades"
  emoji: z.string(),                         // "🔨"
  metaDescription: z.string(),
  heroSubtitle: z.string(),
  toolCount: z.number(),
  businessCount: z.string(),                 // "3.6M" or "Fastest-growing segment"
  lastUpdated: z.string(),                   // "Feb 2026"
  accentColor: z.string(),                   // "#d97706"
  accentLight: z.string(),
  accentSubtle: z.string(),
  quickPicks: z.array(z.string()),           // top 3 tool slugs
  categories: z.array(z.object({
    id: z.string(),                          // "estimating"
    title: z.string(),                       // "Estimating & Quoting Tools"
    description: z.string(),
    tools: z.array(z.string()),              // tool slugs
    comparison: z.object({                   // optional comparison callout
      text: z.string(),
      linkText: z.string(),
      url: z.string(),
    }).optional(),
  })),
  gettingStarted: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })),
  newsletterHeadline: z.string(),            // "Get construction AI tips in your inbox"
  newsletterSubtext: z.string(),
});
```

---

## What Claude Code Needs to Do (Build Sequence)

### Phase 1: Scaffold
1. Initialize Astro project with TypeScript
2. Install dependencies (Google Fonts, any Astro integrations)
3. Set up file structure per above
4. Create `global.css` with design tokens
5. Deploy empty site to Vercel to confirm pipeline works

### Phase 2: Shared Components
6. Build `Nav.astro` (fixed, blurred backdrop, responsive, mobile toggle)
7. Build `Footer.astro` (4-column grid, industry links, responsive)
8. Build `SEOHead.astro` (meta tags, OG tags, structured data)
9. Build `BaseLayout.astro` (composes Nav + Footer + SEOHead)
10. Build `NewsletterCTA.astro` (accepts custom headline/subtext props)

### Phase 3: Homepage
11. Build homepage (`index.astro`) from aistartupguide-v3.html
12. Extract homepage-specific components (HeroCard, IndustryCard, FAQAccordion)
13. Wire up industry card links to `/industries/[slug]`
14. Test responsive breakpoints

### Phase 4: Industry Page Template
15. Build tool data file (`tools.ts`) with all Construction tools populated
16. Build `ToolCard.astro`, `PricingBadge.astro`, `SourcedRating.astro`
17. Build `QuickPicks.astro`, `JumpNav.astro`, `ComparisonCallout.astro`
18. Build `GettingStarted.astro`, `AffiliateDisclosure.astro`, `Breadcrumb.astro`
19. Build `IndustryLayout.astro` (composes all above)
20. Build Construction & Trades page from industry-page-v2.html
21. Verify it matches the reference design pixel-for-pixel

### Phase 5: Replicate Verticals
22. Add tool data for Home & Personal Services
23. Add tool data for Real Estate
24. Create industry MDX files for both
25. Verify all 3 industry pages render correctly
26. Cross-link homepage industry cards to live pages

### Phase 6: Polish & Launch
27. Add structured data (JSON-LD) for FAQ, reviews
28. Generate sitemap.xml
29. Set up robots.txt
30. Run Lighthouse audit — target 95+ on all pages
31. Test all responsive breakpoints
32. Deploy to production

---

## Open Items (Not Blocking Launch)

- [ ] Domain: Confirm ownership of aistartupguide.com
- [ ] Newsletter platform: Beehiiv, ConvertKit, or Substack — form action URL needed
- [ ] Affiliate URLs: Not needed at launch — "Check it out" links go to tool homepages
- [ ] Tool research for Home & Personal Services: 18–24 tools with ratings and descriptions
- [ ] Tool research for Real Estate: 18–24 tools with ratings and descriptions
- [ ] Analytics: Set up Vercel Analytics or Plausible
- [ ] Favicon and OG image: Need brand assets
