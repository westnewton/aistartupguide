# AIStartupGuide.com — Technical Handoff for Claude Code

**Last updated:** February 2026
**Companion docs:** project-brief.md, site-architecture.md
**Reference designs:** aistartupguide-v3.html (homepage), industry-page-v2.html (industry template)

---

## Framework Decision: Next.js 14 (App Router)

**Choice: Next.js 14 with App Router**

**Why Next.js for this project:**

- **Consistency.** Jason already runs a Next.js 14 App Router project on Vercel. Same framework, same deployment pipeline, same mental model. No need to learn a second system.
- **Static generation for SEO.** Next.js's `generateStaticParams` + static rendering gives us pre-built HTML pages that load fast and index well. We get the SEO benefits of static output without giving up the option to add dynamic features later (API routes, ISR, etc.).
- **MDX support.** `@next/mdx` or `next-mdx-remote` gives us content-as-code. Tool reviews, blog posts, and industry pages can live as MDX files with frontmatter.
- **Image optimization.** `next/image` handles responsive images, lazy loading, and format conversion automatically — important for Core Web Vitals.
- **Vercel-native.** Automatic deploys, preview branches, analytics, and edge caching all work out of the box.
- **Future-proof.** If the site eventually needs user accounts, a booking API, or newsletter integration endpoints, Next.js handles that without a migration.

**Performance approach:**

This is a content site. Every page should be statically generated at build time. No SSR, no client-side data fetching. Use React Server Components (the default in App Router) for everything except the few interactive bits:

- Newsletter email form → Client Component
- FAQ accordion → Client Component
- Nav scroll shadow + mobile toggle → Client Component
- Smooth scroll for jump nav anchors → Client Component

Everything else (tool cards, industry grids, hero sections, footer) stays as Server Components — zero client-side JavaScript.

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

  /* Industry accent (overridden per vertical via inline style on wrapper div) */
  --industry: #d97706;
  --industry-light: #fef7ed;
  --industry-subtle: #fffbf5;
}
```

### Typography
- **Headings:** DM Serif Display (serif) — loaded via `next/font/google`
- **Body:** DM Sans (sans-serif) — loaded via `next/font/google`
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
├── next.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── docs/                                    (project docs — not deployed)
│   ├── project-brief.md
│   ├── site-architecture.md
│   ├── technical-handoff.md
│   ├── aistartupguide-v3.html               (homepage reference design)
│   └── industry-page-v2.html                (industry page reference design)
├── src/
│   ├── app/
│   │   ├── layout.tsx                       (root layout: fonts, nav, footer, SEO defaults)
│   │   ├── page.tsx                         (homepage)
│   │   ├── globals.css                      (design tokens, shared styles)
│   │   ├── industries/
│   │   │   └── [slug]/
│   │   │       └── page.tsx                 (dynamic industry page)
│   │   ├── tools/                           (future — individual reviews)
│   │   ├── blog/                            (future)
│   │   ├── newsletter/                      (future)
│   │   └── sitemap.ts                       (auto-generated sitemap)
│   ├── components/
│   │   ├── Nav.tsx                          ('use client' — scroll shadow + mobile toggle)
│   │   ├── Footer.tsx                       (Server Component)
│   │   ├── ToolCard.tsx                     (Server Component)
│   │   ├── QuickPicks.tsx                   (Server Component)
│   │   ├── JumpNav.tsx                      ('use client' — smooth scroll)
│   │   ├── PricingBadge.tsx                 (Server Component)
│   │   ├── SourcedRating.tsx                (Server Component)
│   │   ├── ComparisonCallout.tsx            (Server Component)
│   │   ├── GettingStarted.tsx               (Server Component)
│   │   ├── AffiliateDisclosure.tsx           (Server Component)
│   │   ├── NewsletterCTA.tsx                ('use client' — form submission)
│   │   ├── Breadcrumb.tsx                   (Server Component)
│   │   ├── FAQAccordion.tsx                 ('use client' — toggle state)
│   │   ├── HeroCard.tsx                     (Server Component — homepage)
│   │   └── IndustryCard.tsx                 (Server Component — homepage)
│   ├── data/
│   │   ├── tools.ts                         (all tool data: name, pricing, rating, description, tags, url)
│   │   └── industries.ts                    (all industry configs: name, slug, colors, categories, tools)
│   └── lib/
│       └── types.ts                         (TypeScript interfaces for Tool, Industry, Category)
```

### Key Architectural Decisions

**Tool data lives in `src/data/tools.ts`**, not scattered across pages. A tool like Jobber appears in multiple categories and multiple industry pages. Centralizing tool data means you update pricing or ratings in one place and it propagates everywhere. Each industry config references tools by slug.

**Industry data lives in `src/data/industries.ts`.** Each industry is a typed object with its name, slug, accent colors, emoji, categories (with tool slugs), quick picks, Getting Started tips, and newsletter copy. The dynamic `[slug]/page.tsx` reads from this data to render any vertical.

**Server Components by default.** Only 4 components need `'use client'`: Nav (scroll listener + mobile toggle), JumpNav (smooth scroll), FAQAccordion (toggle state), and NewsletterCTA (form). Everything else renders on the server with zero client JS.

**Fonts loaded via `next/font/google`** — no external stylesheet requests, automatic font optimization, no layout shift.

**Static generation via `generateStaticParams`.** All industry pages are pre-built at deploy time. No server-side rendering at request time.

**SEO metadata via `generateMetadata`.** Each industry page exports a `generateMetadata` function that returns the page title, description, and Open Graph tags based on the industry data.

**CSS approach: vanilla CSS with CSS variables.** Do NOT use Tailwind. The design system is already built with custom properties in the HTML reference files. Use `globals.css` for shared tokens and component-level styles. Match the existing HTML files exactly.

**Industry accent colors** are set via inline CSS custom properties on a wrapper div in the industry page. Example: `<div style={{ '--industry': '#d97706', '--industry-light': '#fef7ed', '--industry-subtle': '#fffbf5' } as React.CSSProperties}>`. This lets a single page component render any industry with the correct colors.

---

## Content Schema (TypeScript Interfaces)

### Tool
```typescript
interface Tool {
  name: string;
  slug: string;
  url: string;                              // tool homepage (affiliate URL when available)
  pricing: {
    label: string;                          // "From $49/mo", "Free tier", "Custom pricing"
    type: 'free' | 'paid' | 'freemium';
  };
  rating: {
    score: number;                          // e.g. 4.5
    source: 'G2' | 'Capterra';
  };
  description: string;                      // 2-3 sentences, plain English
  bestFor: string[];                        // ["Solo operators", "Residential"]
  industries: string[];                     // ["construction", "home-personal"]
  categories: string[];                     // ["scheduling", "invoicing"]
}
```

### Industry
```typescript
interface Industry {
  name: string;                             // "Construction & Trades"
  slug: string;                             // "construction-trades"
  emoji: string;                            // "🔨"
  metaDescription: string;
  heroSubtitle: string;
  toolCount: number;
  businessCount: string;                    // "3.6M" or "Fastest-growing segment"
  lastUpdated: string;                      // "Feb 2026"
  colors: {
    accent: string;                         // "#d97706"
    light: string;                          // "#fef7ed"
    subtle: string;                         // "#fffbf5"
  };
  quickPicks: string[];                     // top 3 tool slugs
  categories: Category[];
  gettingStarted: {
    title: string;
    description: string;
  }[];
  newsletterHeadline: string;               // "Get construction AI tips in your inbox"
  newsletterSubtext: string;
}

interface Category {
  id: string;                               // "estimating"
  title: string;                            // "Estimating & Quoting Tools"
  description: string;
  tools: string[];                          // tool slugs
  comparison?: {                            // optional comparison callout
    text: string;
    linkText: string;
    url: string;
  };
}
```

---

## What Claude Code Needs to Do (Build Sequence)

### Phase 1: Scaffold
1. Initialize Next.js 14 project with TypeScript and App Router (`npx create-next-app@14` — no Tailwind, no ESLint import alias conflicts, use `src/` directory)
2. Set up `next/font/google` for DM Serif Display and DM Sans in root `layout.tsx`
3. Create `globals.css` with all design tokens from the reference HTML files
4. Set up the file structure per above
5. Commit and push — confirm Vercel auto-deploys a blank page successfully

### Phase 2: Shared Components
6. Build `Nav.tsx` (Client Component — fixed, blurred backdrop, scroll shadow, responsive mobile toggle)
7. Build `Footer.tsx` (Server Component — 4-column grid, industry links, responsive)
8. Build root `layout.tsx` (applies fonts via className, imports globals.css, renders Nav + Footer)
9. Build `NewsletterCTA.tsx` (Client Component — accepts custom headline/subtext props)
10. Build a bare `page.tsx` that renders a placeholder so the site runs end-to-end

### Phase 3: Homepage
11. Build homepage (`page.tsx`) from aistartupguide-v3.html reference design
12. Extract components: HeroCard, IndustryCard, FAQAccordion (Client Component)
13. Wire up industry card `href` to `/industries/[slug]`
14. Add metadata export for homepage SEO (title, description, OG tags)
15. Test responsive breakpoints against the HTML reference

### Phase 4: Industry Page Template
16. Create `src/lib/types.ts` with Tool, Industry, Category interfaces
17. Create `src/data/tools.ts` with all 18 Construction & Trades tools populated
18. Create `src/data/industries.ts` with Construction config (colors, categories, quick picks, getting started, newsletter copy)
19. Build components: ToolCard, PricingBadge, SourcedRating, QuickPicks, JumpNav (Client Component), ComparisonCallout, GettingStarted, AffiliateDisclosure, Breadcrumb
20. Build `industries/[slug]/page.tsx` with `generateStaticParams` and `generateMetadata`
21. Set industry accent colors via inline CSS custom properties on wrapper div
22. Verify Construction & Trades page matches industry-page-v2.html pixel-for-pixel

### Phase 5: Replicate Verticals
23. Add tool data for Home & Personal Services to `tools.ts`
24. Add tool data for Real Estate to `tools.ts`
25. Add industry configs for both to `industries.ts`
26. `generateStaticParams` automatically picks them up — verify all 3 pages render correctly
27. Cross-link homepage industry cards to live `/industries/` pages

### Phase 6: Polish & Launch
28. Add JSON-LD structured data for FAQ (homepage) and reviews (industry pages)
29. Create `src/app/sitemap.ts` for auto-generated sitemap
30. Set up `robots.txt` in `/public`
31. Add Open Graph images and metadata
32. Run Lighthouse audit — target 95+ on all pages
33. Test all responsive breakpoints (desktop, tablet, mobile)
34. Deploy to production

---

## Updated Prompt for Claude Code (Phase 1 + 2)

Copy and paste this as your first message to Claude Code:

> Read all files in the /docs folder (project-brief.md, site-architecture.md, technical-handoff.md, aistartupguide-v3.html, industry-page-v2.html). These are the complete project specs.
>
> Start with Phase 1 and Phase 2 from technical-handoff.md:
>
> 1. Initialize a Next.js 14 project with TypeScript and App Router in this repo. Use the src/ directory. Do NOT use Tailwind — we have a custom CSS design system. Do NOT use ESLint import aliases that conflict with the src/ structure.
> 2. Set up next/font/google for DM Serif Display and DM Sans in the root layout.
> 3. Create globals.css with all the design tokens from the reference HTML files.
> 4. Set up the file structure exactly as specified in the handoff doc.
> 5. Build the shared components: Nav (Client Component with scroll shadow + mobile toggle), Footer (Server Component), and NewsletterCTA (Client Component).
> 6. Build the root layout.tsx that applies fonts, imports globals.css, and renders Nav + Footer.
> 7. Build a bare page.tsx homepage placeholder so the site compiles and runs.
>
> Match the design tokens, typography, and styling from the HTML reference files exactly. Use vanilla CSS with CSS custom properties — no Tailwind, no CSS-in-JS. After building, run the dev server to confirm it compiles without errors.

---

## Open Items (Not Blocking Launch)

- [ ] Domain: Confirm ownership of aistartupguide.com
- [ ] Newsletter platform: Beehiiv, ConvertKit, or Substack — form action URL needed
- [ ] Affiliate URLs: Not needed at launch — "Check it out" links go to tool homepages
- [ ] Tool research for Home & Personal Services: 18–24 tools with ratings and descriptions
- [ ] Tool research for Real Estate: 18–24 tools with ratings and descriptions
- [ ] Analytics: Set up Vercel Analytics or Plausible
- [ ] Favicon and OG image: Need brand assets
