# AIStartupGuide.com — Site Architecture

**Last updated:** February 2026
**Companion doc:** project-brief.md
**Homepage design:** aistartupguide-v3.html (complete)
**Industry page template:** industry-page-v2.html (complete, Construction & Trades as reference)

---

## Sitemap Overview

```
aistartupguide.com/
├── / (Homepage) ✅ DESIGNED
├── /industries/
│   ├── /professional-services
│   ├── /construction-trades
│   ├── /transportation-logistics
│   ├── /real-estate
│   ├── /retail-ecommerce
│   ├── /food-restaurants
│   ├── /health-wellness
│   └── /home-personal-services
├── /tools/
│   ├── /tools/[tool-slug] (Individual tool review)
│   └── /tools/compare/[tool-a]-vs-[tool-b] (Comparison pages)
├── /blog/
│   └── /blog/[post-slug]
├── /guides/
│   ├── /guides/intro-to-ai-for-small-business
│   └── /guides/[guide-slug]
├── /newsletter
├── /book-a-session
├── /about
├── /privacy-policy
└── /sitemap.xml (auto-generated)
```

---

## Page Types & Templates

### 1. Homepage `/`
**Status:** Design complete (v3)
**Sections:**
- Nav (fixed, blurred backdrop)
- Hero (H1 + subtext + CTAs + industry-neutral "Popular This Week" card + floating badges)
- Trust bar (120+ tools, 8 industries, independent, free)
- Industry grid (8 color-coded cards with business counts)
- FAQ accordion (5 questions, two-column layout)
- Editor's Picks (dark banner, 4 featured tools)
- Newsletter CTA (email capture)
- Footer (industry links, resource links, branding)

**SEO target:** "AI tools for small business", "best AI tools for business owners"

---

### 2. Industry Landing Page `/industries/[slug]`
**Status:** Design complete (v2) — Construction & Trades as reference implementation
**Purpose:** The core content page. One per vertical. This is where search traffic lands.

**Sections (in order):**
1. Breadcrumb: Home > Industries > [Industry Name]
2. FTC affiliate disclosure banner (required on all pages with outbound tool links)
3. Industry hero — H1 matches search query (e.g., "AI Tools for Construction & Trades"), intro paragraph mentioning specific professions, meta bar (tool count, last updated, U.S. business count)
4. Quick Picks — top 3 recommended tools with rank badges, sourced ratings, one-line verdicts, pricing, "best for" tags
5. Jump nav — pill-style anchor links to each functional category (doubles as Google sitelinks)
6. Tool categories (×6) — each with:
   - H2 header (keyword target, e.g., "Estimating & Quoting Tools")
   - Intro paragraph explaining the category
   - 3–4 tool cards in a 2-column grid
7. Comparison callouts — inline banners between relevant categories linking to head-to-head pages
8. Getting Started — dark banner with 4-step beginner advice, consulting upsell at step 4
9. Industry-specific newsletter CTA
10. Footer

**Tool card anatomy:**
- Tool name (bold, top-left)
- Pricing badge (top-right): Free / Freemium / From $X/mo / Custom
- Star rating with source (e.g., "★ 4.5 Capterra")
- Plain-English description (2–3 sentences, what it does and why it matters)
- "Best for" tags (business size, work type — NOT profession-specific)
- "Check it out →" link (tool homepage initially, affiliate URL when available)

**Key design decisions:**
- Tools organized by FUNCTION, not profession — a plumber and electrician see the same page
- Each category covers a range: free option, mid-range, and premium/enterprise
- No individual review pages at launch — card description IS the review
- Sourced ratings from G2/Capterra with attribution (no proprietary ratings yet)
- Industry accent color varies per vertical (set via CSS variable `--industry`)
- FTC disclosure appears at page top, not buried in footer

**SEO targets:** "AI tools for [industry]", "best AI for [specific trade]", "[tool category] for [industry]"

**Per-vertical customization needed:**
- 6 functional categories (varies by industry)
- 18–24 tool selections with descriptions
- G2/Capterra ratings for each tool
- 2–3 comparison matchups
- Getting Started tips specific to the industry
- Newsletter CTA copy
- Industry accent color

**Reusable components:**
- `<ToolCard>` — name, pricing badge, sourced rating, description, fit tags, CTA link
- `<QuickPicks>` — highlighted top 3 with rank badges
- `<JumpNav>` — pill-style category anchors
- `<ComparisonCallout>` — inline banner linking to comparison pages
- `<GettingStarted>` — dark banner with numbered tips
- `<AffiliateDisclosure>` — top-of-page FTC notice

---

### 3. Individual Tool Review `/tools/[tool-slug]`
**Status:** Not at launch — build post-launch for top-clicked tools
**Purpose:** Deep-dive review of a single tool. Drives affiliate clicks. Built only when traffic data shows which tools people actually care about.

**Proposed sections:**
- Hero with tool name, logo, one-line verdict, overall rating, pricing summary, affiliate CTA
- "What it does" — plain English overview
- "Who it's for" — which industries/business types benefit most
- Screenshots / interface preview
- Pros & cons (honest, specific)
- Pricing breakdown (tiers, what you get at each level, hidden costs)
- Setup difficulty rating (1–5 scale)
- Alternatives & competitors (links to other reviews)
- "Our take" — editorial verdict
- Affiliate CTA (button to try/sign up)
- Breadcrumb: Home > Industries > [Industry] > [Tool Name]

**SEO targets:** "[Tool name] review", "[Tool name] pricing", "[Tool name] for [industry]"

**Reusable components needed:**
- `<PricingTable>` — tier comparison
- `<ProsCons>` — two-column layout
- `<RatingBadge>` — overall + sub-ratings (ease of use, value, support)
- `<AffiliateButton>` — styled CTA with disclosure
- `<AlternativesList>` — linked cards to competitor reviews

---

### 4. Comparison Page `/tools/compare/[tool-a]-vs-[tool-b]`
**Status:** Not yet designed
**Purpose:** Head-to-head comparison. High SEO value for "[X] vs [Y]" searches.

**Proposed sections:**
- Hero: "[Tool A] vs [Tool B]" with quick verdict
- Side-by-side feature table
- Pricing comparison
- "Best for" callouts (e.g., "Pick Jobber if you're a solo operator; pick Housecall Pro if you have a crew")
- Individual mini-reviews (condensed from full review pages)
- Final recommendation
- Affiliate CTAs for both tools

**SEO targets:** "[Tool A] vs [Tool B]", "best [category] tool for [industry]"

**Reusable components needed:**
- `<ComparisonTable>` — feature-by-feature grid
- `<VerdictBox>` — highlighted recommendation

---

### 5. Blog Post `/blog/[post-slug]`
**Status:** Not yet designed
**Purpose:** Broader content, cross-industry advice, SEO long-tail.

**Proposed layout:**
- Standard article template (title, date, author, reading time, featured image)
- Rich text body with inline tool callouts
- Related posts
- Newsletter CTA at bottom
- Category/tag taxonomy

**Content types:**
- How-to guides ("How to Use ChatGPT to Write Better Estimates")
- Listicles ("5 AI Tools Every Sole Proprietor Should Know")
- Industry news/trends
- Case studies (once available)

---

### 6. Guide Page `/guides/[guide-slug]`
**Status:** Existing "Intro to AI" guide on current B12 site — needs migration
**Purpose:** Longer-form educational content, evergreen.

**Layout:** Similar to blog but with table of contents sidebar, chapter navigation, and more structured formatting.

---

### 7. Newsletter Page `/newsletter`
**Status:** Not yet designed
**Purpose:** Dedicated landing page for newsletter signup (for sharing, ads, social links).

**Sections:**
- Value prop headline
- What you'll get (frequency, content preview)
- Email capture form
- Social proof (subscriber count, testimonial if available)
- Sample newsletter preview or archive link

---

### 8. Book a Session `/book-a-session`
**Status:** Not yet designed
**Purpose:** Consulting upsell. Calendly or similar embed.

**Sections:**
- What the session includes
- Pricing ($100–$200/hr — TBD)
- Booking widget embed
- FAQ specific to sessions

---

### 9. About Page `/about`
**Status:** Not yet designed
**Purpose:** Build trust, E-E-A-T signals, personal story.

**Should include:**
- Jason's background and why this site exists
- Review methodology / editorial standards
- Independence statement (no pay-for-play)
- Contact info
- Photo (builds trust)

---

## Shared Components Library

These components appear across multiple page types:

| Component | Used On | Notes |
|-----------|---------|-------|
| `<Nav>` | All pages | Fixed, blurred backdrop, responsive |
| `<Footer>` | All pages | Industry links, resources, branding |
| `<ToolCard>` | Industry pages, homepage, blog | Name, pricing badge, sourced rating, description, fit tags, CTA |
| `<PricingBadge>` | Everywhere tools appear | Free / Freemium / From $X/mo / Custom |
| `<SourcedRating>` | Industry pages, tool reviews | "★ 4.5 Capterra" — G2 or Capterra with attribution |
| `<QuickPicks>` | Industry pages | Top 3 tools with rank badges, above fold |
| `<JumpNav>` | Industry pages | Pill-style category anchor links |
| `<ComparisonCallout>` | Industry pages | Inline banner linking to comparison pages |
| `<GettingStarted>` | Industry pages | Dark banner, 4-step tips, consulting upsell |
| `<AffiliateDisclosure>` | All pages with outbound tool links | FTC-compliant notice at top of page |
| `<AffiliateButton>` | Tool reviews, comparisons (post-launch) | Styled CTA + FTC disclosure |
| `<NewsletterCTA>` | All pages (bottom) | Accepts industry-specific copy |
| `<Breadcrumb>` | All inner pages | Home > Section > Page |
| `<RatingBadge>` | Tool reviews (post-launch) | Overall + sub-ratings |
| `<ProsCons>` | Tool reviews (post-launch) | Two-column pros/cons |
| `<ComparisonTable>` | Comparison pages (post-launch) | Feature grid |
| `<FAQAccordion>` | Homepage, session page | Reusable accordion |
| `<SEOHead>` | All pages | Meta tags, OG tags, structured data |

---

## Internal Linking Strategy

The SEO engine depends on strong internal linking:

- **Homepage** → links to all 8 industry pages
- **Industry pages** → link to every tool review in that vertical
- **Tool reviews** → link back to industry page + link to alternatives + link to comparison pages
- **Comparison pages** → link to both individual tool reviews + industry page
- **Blog posts** → link to relevant tool reviews and industry pages inline
- **Newsletter CTA** → appears on every page
- **Footer** → links to all 8 industries + key resources

---

## SEO & Technical Requirements

- Next.js 14 App Router with static generation (`generateStaticParams`)
- Auto-generated sitemap via `src/app/sitemap.ts`
- Structured data (JSON-LD) for reviews, FAQs, articles
- SEO metadata via `generateMetadata` exports on each page
- Open Graph tags for social sharing
- Canonical URLs on all pages
- Image optimization via `next/image`
- Fonts via `next/font/google` (no external stylesheet requests)
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1
- FTC-compliant affiliate disclosures on all pages with affiliate links

---

## Build Priority

| Priority | Page/Feature | Reason |
|----------|-------------|--------|
| ✅ Done | Homepage design (v3) | Complete |
| ✅ Done | Industry page template (v2) | Complete — Construction as reference |
| 🔴 Next | Replicate industry pages for launch verticals | Content research needed per vertical |
| 🟡 Soon | Comparison page template | High-value SEO pages, linked from industry pages |
| 🟡 Soon | Blog template | Content marketing engine |
| 🟢 Later | Individual tool review pages | Build only for top-clicked tools (data-driven) |
| 🟢 Later | Newsletter landing page | Can use homepage CTA initially |
| 🟢 Later | Book a Session page | Revenue but lower priority at launch |
| 🟢 Later | About page | Trust building, can be simple at first |
| 🟢 Later | Guide pages | Migrate existing content from B12 |

---

## Content Needed Before Launch (Per Vertical)

For each of the initial 3 industry verticals:
- [ ] Identify 6 functional categories relevant to the industry
- [ ] Research 3–4 tools per category (18–24 total)
- [ ] Pull G2 or Capterra rating for each tool
- [ ] Write plain-English description for each tool card (2–3 sentences)
- [ ] Assign "best for" tags to each tool
- [ ] Select top 3 for Quick Picks with one-line verdicts
- [ ] Identify 2–3 comparison matchups for callout banners
- [ ] Write Getting Started tips specific to the industry
- [ ] Write industry-specific newsletter CTA copy
- [ ] Set industry accent color

**Estimated total for 3-vertical launch:** 3 industry pages (~54–72 tool cards with descriptions)

**NOT needed at launch:**
- Individual tool review pages (build post-launch for top-clicked tools)
- Full comparison articles (placeholder links are fine)
- Blog posts (supplementary, not required for launch)
- Guide pages (migrate from B12 later)
