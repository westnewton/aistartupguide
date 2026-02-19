import { Industry } from '@/lib/types';

export const industries: Industry[] = [
  {
    name: 'Construction & Trades',
    slug: 'construction-trades',
    emoji: '\u{1F528}',
    metaDescription:
      'Compare 18+ hand-tested AI tools for contractors, electricians, plumbers, HVAC and more. Independent reviews with real pricing, pros & cons, and setup guides.',
    heroSubtitle:
      'We tested every AI tool worth considering for general contractors, electricians, plumbers, HVAC techs, roofers, and landscapers. Here are the ones that actually save you time and money.',
    toolCount: 18,
    businessCount: '3.6M',
    lastUpdated: 'Feb 2026',
    colors: {
      accent: '#d97706',
      light: '#fef7ed',
      subtle: '#fffbf5',
    },
    quickPicks: ['jobber', 'companycam', 'buildertrend'],
    categories: [
      {
        id: 'estimating',
        title: 'Estimating & Quoting Tools',
        description:
          'Get accurate estimates out faster. These tools use AI to pull material costs, auto-generate line items, and turn a site visit into a professional quote in minutes instead of hours.',
        tools: ['joist', 'stack', 'buildertrend'],
        comparison: {
          text: '<strong>Can\u2019t decide?</strong> Read our side-by-side comparison of the top estimating tools for contractors.',
          linkText: 'Joist vs STACK vs Buildertrend \u2192',
          url: '/compare/joist-vs-stack-vs-buildertrend',
        },
      },
      {
        id: 'scheduling',
        title: 'Scheduling & Dispatch Tools',
        description:
          'Stop juggling calendars and phone calls. These tools handle booking, crew dispatch, route optimization, and automatic reminders so jobs don\u2019t fall through the cracks.',
        tools: ['jobber', 'housecall-pro', 'servicetitan'],
        comparison: {
          text: '<strong>The big matchup:</strong> Jobber and Housecall Pro are the two most popular options. We break down every difference.',
          linkText: 'Jobber vs Housecall Pro \u2192',
          url: '/compare/jobber-vs-housecall-pro',
        },
      },
      {
        id: 'communication',
        title: 'Client Communication Tools',
        description:
          'Respond faster, follow up automatically, and never lose a lead because you were on a job site. These AI tools handle the back-and-forth so you can focus on the work.',
        tools: ['tidio', 'podium', 'hatch'],
      },
      {
        id: 'invoicing',
        title: 'Invoicing & Payments Tools',
        description:
          'Get paid faster with less paperwork. AI handles invoice generation, payment reminders, and expense categorization so your books stay clean without a bookkeeper.',
        tools: ['quickbooks-ai', 'invoice-ninja', 'freshbooks'],
      },
      {
        id: 'marketing',
        title: 'Marketing & Lead Generation Tools',
        description:
          'More jobs without cold calling. These tools help you show up on Google, manage your reputation, create social media content, and turn website visitors into booked appointments.',
        tools: ['gohighlevel', 'canva-ai', 'chatgpt'],
      },
      {
        id: 'documentation',
        title: 'Project Documentation Tools',
        description:
          'Cover yourself and keep clients in the loop. AI-powered photo documentation, progress reports, and site records that protect you if anything gets disputed.',
        tools: ['companycam', 'buildertrend', 'fieldwire'],
      },
    ],
    gettingStarted: [
      {
        title: 'Start with your biggest time sink',
        description:
          'Spending 5 hours a week on estimates? Start with Joist. Drowning in scheduling? Start with Jobber. Pick the one pain point that costs you the most time.',
      },
      {
        title: 'Use the free tier first',
        description:
          'Almost every tool here has a free trial or free tier. Test it on a real project before committing. If it doesn\u2019t save you time in the first week, move on.',
      },
      {
        title: 'Stack tools that integrate',
        description:
          'Jobber connects to QuickBooks. CompanyCam connects to Buildertrend. Choose tools that talk to each other so you\u2019re not re-entering data.',
      },
      {
        title: 'Need hands-on help?',
        description:
          'Book a 1-on-1 setup session and we\u2019ll walk you through implementation for your specific business.',
      },
    ],
    newsletterHeadline: 'Get construction AI tips in your inbox',
    newsletterSubtext:
      'New tool reviews, industry-specific tips, and practical advice for contractors adopting AI. Weekly, no fluff.',
  },

  // ═══════════════════════════════════════════════
  // Home & Personal Services
  // ═══════════════════════════════════════════════
  {
    name: 'Home & Personal Services',
    slug: 'home-personal-services',
    emoji: '\u2702\uFE0F',
    metaDescription:
      'Compare 18+ hand-tested AI tools for cleaners, landscapers, salons, pet care, auto repair and more. Independent reviews with real pricing, pros & cons, and setup guides.',
    heroSubtitle:
      'We tested every AI tool worth considering for cleaners, landscapers, salon owners, pet groomers, handymen, and mobile service pros. Here are the ones that actually help you book more clients and run a tighter operation.',
    toolCount: 18,
    businessCount: 'Fastest-growing',
    lastUpdated: 'Feb 2026',
    colors: {
      accent: '#d946ef',
      light: '#fdf4ff',
      subtle: '#fef6ff',
    },
    quickPicks: ['jobber', 'vagaro', 'housecall-pro'],
    categories: [
      {
        id: 'booking',
        title: 'Booking & Scheduling Tools',
        description:
          'Let clients book online, send automatic reminders, and fill your calendar without phone tag. These tools turn your scheduling from a headache into a hands-off system.',
        tools: ['jobber', 'housecall-pro', 'square-appointments'],
        comparison: {
          text: '<strong>The big matchup:</strong> Jobber and Housecall Pro are the two most popular options for home service businesses. We break down every difference.',
          linkText: 'Jobber vs Housecall Pro \u2192',
          url: '/compare/jobber-vs-housecall-pro',
        },
      },
      {
        id: 'client-management',
        title: 'Client Management & CRM Tools',
        description:
          'Keep track of client history, preferences, and follow-ups in one place. These tools help you deliver a personal touch even as your client list grows.',
        tools: ['vagaro', 'thryv', 'fresha'],
        comparison: {
          text: '<strong>Beauty business?</strong> Vagaro and Fresha are the top picks for salons and spas. Here\u2019s how they compare.',
          linkText: 'Vagaro vs Fresha \u2192',
          url: '/compare/vagaro-vs-fresha',
        },
      },
      {
        id: 'communication',
        title: 'Client Communication Tools',
        description:
          'Respond faster, follow up automatically, and never lose a lead because you were on a job. These AI tools handle the back-and-forth so you can focus on the work.',
        tools: ['tidio', 'podium', 'broadly'],
      },
      {
        id: 'invoicing',
        title: 'Invoicing & Payments Tools',
        description:
          'Get paid faster with less paperwork. AI handles invoice generation, payment reminders, and expense categorization so your books stay clean without a bookkeeper.',
        tools: ['quickbooks-ai', 'wave', 'freshbooks'],
      },
      {
        id: 'marketing',
        title: 'Marketing & Social Media Tools',
        description:
          'More clients without cold calling. These tools help you show up on Google, manage your reviews, create scroll-stopping content, and turn website visitors into booked appointments.',
        tools: ['gohighlevel', 'canva-ai', 'chatgpt'],
      },
      {
        id: 'operations',
        title: 'Operations & Routing Tools',
        description:
          'Run tighter routes, track your team in the field, and manage jobs from start to finish. These tools cut windshield time and keep your operation running smoothly.',
        tools: ['optimoroute', 'jobber', 'servicetitan'],
      },
    ],
    gettingStarted: [
      {
        title: 'Start with online booking',
        description:
          'If clients can\u2019t book online, you\u2019re losing jobs to competitors who make it easy. Start with Square Appointments (free) or Jobber.',
      },
      {
        title: 'Automate your reviews',
        description:
          'Reviews drive 90% of local service decisions. Set up Podium or Broadly to automatically request reviews after every appointment.',
      },
      {
        title: 'Use free tiers first',
        description:
          'Fresha, Wave, and Square Appointments all have free plans. Test on real clients before committing to a paid tool.',
      },
      {
        title: 'Need hands-on help?',
        description:
          'Book a 1-on-1 setup session and we\u2019ll walk you through implementation for your specific business.',
      },
    ],
    newsletterHeadline: 'Get home services AI tips in your inbox',
    newsletterSubtext:
      'New tool reviews, industry-specific tips, and practical advice for service professionals adopting AI. Weekly, no fluff.',
  },

  // ═══════════════════════════════════════════════
  // Real Estate
  // ═══════════════════════════════════════════════
  {
    name: 'Real Estate',
    slug: 'real-estate',
    emoji: '\u{1F3E0}',
    metaDescription:
      'Compare 18+ hand-tested AI tools for real estate agents, brokers, and property managers. Independent reviews with real pricing, pros & cons, and setup guides.',
    heroSubtitle:
      'We tested every AI tool worth considering for residential agents, commercial brokers, property managers, and real estate teams. Here are the ones that actually help you close more deals.',
    toolCount: 18,
    businessCount: '3.3M',
    lastUpdated: 'Feb 2026',
    colors: {
      accent: '#2563eb',
      light: '#eff4ff',
      subtle: '#f5f8ff',
    },
    quickPicks: ['follow-up-boss', 'matterport', 'dotloop'],
    categories: [
      {
        id: 'lead-gen',
        title: 'Lead Generation & Nurture Tools',
        description:
          'Fill your pipeline without cold calling. These platforms use AI to capture, score, and nurture leads so you\u2019re only spending time on prospects ready to move.',
        tools: ['kvcore', 'ylopo', 'real-geeks'],
        comparison: {
          text: '<strong>Platform showdown:</strong> kvCORE and Real Geeks are the two most popular IDX + CRM combos. We break down every difference.',
          linkText: 'kvCORE vs Real Geeks \u2192',
          url: '/compare/kvcore-vs-real-geeks',
        },
      },
      {
        id: 'listings',
        title: 'Listing & Marketing Tools',
        description:
          'Make every listing stand out. AI-powered virtual tours, property descriptions, social content, and marketing materials that get more eyes on your properties.',
        tools: ['canva-ai', 'chatgpt', 'matterport'],
      },
      {
        id: 'crm',
        title: 'CRM & Client Management Tools',
        description:
          'Your CRM is the backbone of your business. These tools centralize every lead, automate follow-ups, and make sure no prospect falls through the cracks.',
        tools: ['follow-up-boss', 'liondesk', 'wise-agent'],
        comparison: {
          text: '<strong>CRM decision:</strong> Follow Up Boss is the premium choice, LionDesk is the budget pick. Here\u2019s how they stack up.',
          linkText: 'Follow Up Boss vs LionDesk \u2192',
          url: '/compare/follow-up-boss-vs-liondesk',
        },
      },
      {
        id: 'communication',
        title: 'Client Communication Tools',
        description:
          'Speed to lead wins in real estate. These AI tools respond to inquiries in seconds, qualify prospects automatically, and keep conversations going while you\u2019re showing homes.',
        tools: ['tidio', 'structurely', 'podium'],
      },
      {
        id: 'market-analysis',
        title: 'Market Analysis & Pricing Tools',
        description:
          'Price listings right and impress clients with data. AI-powered CMAs, property valuations, and market insights that make you the smartest agent in the room.',
        tools: ['housecanary', 'propstream', 'rpr'],
      },
      {
        id: 'operations',
        title: 'Transaction & Operations Tools',
        description:
          'From offer to close without the paperwork headaches. E-signatures, compliance tracking, and document management that keep every deal on track.',
        tools: ['dotloop', 'skyslope', 'docusign'],
      },
    ],
    gettingStarted: [
      {
        title: 'Get your CRM right first',
        description:
          'Every other tool feeds into your CRM. Pick Follow Up Boss, LionDesk, or Wise Agent and commit to using it daily for 30 days.',
      },
      {
        title: 'Automate lead follow-up',
        description:
          'Speed to lead wins. Set up AI-powered instant responses so no inquiry waits more than 60 seconds for a reply.',
      },
      {
        title: 'Level up your listings',
        description:
          'Use Matterport for virtual tours and ChatGPT for property descriptions. Listings with both get dramatically more engagement.',
      },
      {
        title: 'Need hands-on help?',
        description:
          'Book a 1-on-1 setup session and we\u2019ll walk you through implementation for your specific business.',
      },
    ],
    newsletterHeadline: 'Get real estate AI tips in your inbox',
    newsletterSubtext:
      'New tool reviews, agent-specific tips, and practical advice for real estate professionals adopting AI. Weekly, no fluff.',
  },

  // ═══════════════════════════════════════════════
  // Professional Services
  // ═══════════════════════════════════════════════
  {
    name: 'Professional Services',
    slug: 'professional-services',
    emoji: '\u{1F4BC}',
    metaDescription:
      'Compare 17+ hand-tested AI tools for accountants, lawyers, consultants, engineers, and architects. Independent reviews with real pricing, pros & cons, and setup guides.',
    heroSubtitle:
      'We tested every AI tool worth considering for accountants, lawyers, consultants, engineers, and architects. Here are the ones that actually help you serve more clients and bill more hours.',
    toolCount: 17,
    businessCount: '4.6M',
    lastUpdated: 'Feb 2026',
    colors: {
      accent: '#0891b2',
      light: '#ecfeff',
      subtle: '#f0fdfa',
    },
    quickPicks: ['clio', 'hubspot-crm', 'calendly'],
    categories: [
      {
        id: 'client-management',
        title: 'Client Management & CRM Tools',
        description:
          'Keep every client relationship organized. These tools track contacts, automate follow-ups, and give you a complete picture of every engagement so nothing slips through the cracks.',
        tools: ['clio', 'hubspot-crm', 'salesforce-essentials'],
        comparison: {
          text: '<strong>CRM decision:</strong> HubSpot is free and easy, Salesforce is powerful but complex. We break down every difference for professional firms.',
          linkText: 'HubSpot vs Salesforce Essentials \u2192',
          url: '/compare/hubspot-vs-salesforce-essentials',
        },
      },
      {
        id: 'documents',
        title: 'Document & Contract Tools',
        description:
          'Create, send, and manage proposals, contracts, and client documents faster. AI handles the formatting and follow-up so you can focus on the substance.',
        tools: ['pandadoc', 'docusign', 'notion-ai'],
      },
      {
        id: 'time-billing',
        title: 'Time Tracking & Billing Tools',
        description:
          'Capture every billable minute and turn it into revenue. These tools make time tracking painless and invoicing automatic so you stop leaving money on the table.',
        tools: ['harvest', 'toggl-track', 'bill4time'],
        comparison: {
          text: '<strong>Time tracking showdown:</strong> Harvest and Toggl Track are the two most popular options. Here\u2019s which one fits your workflow.',
          linkText: 'Harvest vs Toggl Track \u2192',
          url: '/compare/harvest-vs-toggl-track',
        },
      },
      {
        id: 'communication',
        title: 'Communication & Scheduling Tools',
        description:
          'Eliminate the back-and-forth of scheduling and streamline client communication. AI handles the logistics so you can focus on delivering great work.',
        tools: ['calendly', 'zoom', 'loom'],
      },
      {
        id: 'marketing',
        title: 'Marketing & Business Development Tools',
        description:
          'Grow your practice without cold calling. These tools help you build thought leadership, nurture referral networks, and stay top of mind with prospects and past clients.',
        tools: ['linkedin-sales-nav', 'mailchimp', 'canva-ai'],
      },
      {
        id: 'research',
        title: 'Research & Writing Tools',
        description:
          'Draft memos, research briefs, client reports, and marketing content in a fraction of the time. AI assists with the first draft so you can focus on the analysis.',
        tools: ['chatgpt', 'jasper', 'grammarly-business'],
      },
    ],
    gettingStarted: [
      {
        title: 'Start with your CRM',
        description:
          'Every other tool feeds into your client database. Pick HubSpot (free) or Clio (legal) and commit to logging every interaction for 30 days.',
      },
      {
        title: 'Automate scheduling first',
        description:
          'Calendly eliminates 5-10 emails per meeting. Set it up in 15 minutes and add your booking link to your email signature today.',
      },
      {
        title: 'Use AI for first drafts',
        description:
          'ChatGPT can draft client emails, proposals, and reports in seconds. You review and refine \u2014 cutting writing time by 60% or more.',
      },
      {
        title: 'Need hands-on help?',
        description:
          'Book a 1-on-1 setup session and we\u2019ll walk you through implementation for your specific practice.',
      },
    ],
    newsletterHeadline: 'Get professional services AI tips in your inbox',
    newsletterSubtext:
      'New tool reviews, practice-specific tips, and practical advice for professional service firms adopting AI. Weekly, no fluff.',
  },

  // ═══════════════════════════════════════════════
  // Transportation & Logistics
  // ═══════════════════════════════════════════════
  {
    name: 'Transportation & Logistics',
    slug: 'transportation-logistics',
    emoji: '\u{1F69A}',
    metaDescription:
      'Compare 17+ hand-tested AI tools for trucking companies, movers, delivery services, freight brokers, and couriers. Independent reviews with real pricing, pros & cons.',
    heroSubtitle:
      'We tested every AI tool worth considering for trucking companies, moving companies, delivery services, freight brokers, and couriers. Here are the ones that actually cut costs and keep you rolling.',
    toolCount: 17,
    businessCount: '3.4M',
    lastUpdated: 'Feb 2026',
    colors: {
      accent: '#65a30d',
      light: '#f7fee7',
      subtle: '#fafff5',
    },
    quickPicks: ['samsara', 'route4me', 'motive'],
    categories: [
      {
        id: 'fleet-management',
        title: 'Fleet Management & GPS Tools',
        description:
          'Know where every vehicle is, how it\u2019s being driven, and when it needs maintenance. These tools give you real-time visibility and cut fuel costs with smarter routing.',
        tools: ['samsara', 'verizon-connect', 'gps-trackit'],
        comparison: {
          text: '<strong>Fleet tracking decision:</strong> Samsara is the full package, GPS Trackit is budget-friendly. Here\u2019s how they compare.',
          linkText: 'Samsara vs GPS Trackit \u2192',
          url: '/compare/samsara-vs-gps-trackit',
        },
      },
      {
        id: 'route-optimization',
        title: 'Route Optimization & Dispatch Tools',
        description:
          'Stop planning routes by hand. AI finds the fastest path through every stop, accounts for traffic and time windows, and re-routes on the fly when plans change.',
        tools: ['route4me', 'optimoroute', 'onfleet'],
      },
      {
        id: 'load-matching',
        title: 'Load Matching & Freight Tools',
        description:
          'Find loads that pay well and keep your trucks full. AI matches available capacity with freight, provides market-rate pricing, and helps you avoid deadhead miles.',
        tools: ['dat', 'loadsmart', 'truckstop'],
      },
      {
        id: 'compliance',
        title: 'Compliance & Documentation Tools',
        description:
          'Stay DOT-compliant without the paperwork headaches. ELD logging, IFTA reporting, DVIRs, and safety monitoring that keeps regulators happy and your trucks on the road.',
        tools: ['motive', 'samsara', 'eroad'],
        comparison: {
          text: '<strong>ELD showdown:</strong> Motive and Samsara are the two most popular ELD providers. We compare features, pricing, and ease of use.',
          linkText: 'Motive vs Samsara \u2192',
          url: '/compare/motive-vs-samsara',
        },
      },
      {
        id: 'invoicing',
        title: 'Invoicing & Payments Tools',
        description:
          'Get paid faster with less paperwork. Generate invoices from delivery data, track payments, and keep your books clean without hiring a full-time bookkeeper.',
        tools: ['quickbooks-ai', 'freshbooks', 'wave'],
      },
      {
        id: 'marketing',
        title: 'Marketing & Customer Communication Tools',
        description:
          'Build your reputation and keep customers coming back. Automate review requests, send delivery updates, and stay top of mind with the businesses you serve.',
        tools: ['podium', 'tidio', 'mailchimp'],
      },
    ],
    gettingStarted: [
      {
        title: 'Get fleet visibility first',
        description:
          'If you don\u2019t know where your trucks are, you can\u2019t optimize anything. Start with Samsara or GPS Trackit for real-time tracking.',
      },
      {
        title: 'Automate compliance',
        description:
          'ELD mandates aren\u2019t going away. Set up Motive or Samsara to handle HOS logging and DVIRs so you\u2019re never caught out of compliance.',
      },
      {
        title: 'Optimize one route at a time',
        description:
          'Pick your busiest delivery route and run it through Route4Me or OptimoRoute. Most operators save 20-30% on fuel in the first week.',
      },
      {
        title: 'Need hands-on help?',
        description:
          'Book a 1-on-1 setup session and we\u2019ll walk you through implementation for your specific fleet operation.',
      },
    ],
    newsletterHeadline: 'Get transportation AI tips in your inbox',
    newsletterSubtext:
      'New tool reviews, fleet management tips, and practical advice for transportation businesses adopting AI. Weekly, no fluff.',
  },

  // ═══════════════════════════════════════════════
  // Retail & E-Commerce
  // ═══════════════════════════════════════════════
  {
    name: 'Retail & E-Commerce',
    slug: 'retail-ecommerce',
    emoji: '\u{1F6D2}',
    metaDescription:
      'Compare 18+ hand-tested AI tools for shops, boutiques, online stores, and specialty retailers. Independent reviews with real pricing, pros & cons, and setup guides.',
    heroSubtitle:
      'We tested every AI tool worth considering for brick-and-mortar shops, online stores, boutiques, and specialty retailers. Here are the ones that actually increase sales and streamline operations.',
    toolCount: 18,
    businessCount: '2.9M',
    lastUpdated: 'Feb 2026',
    colors: {
      accent: '#8b5cf6',
      light: '#f5f3ff',
      subtle: '#faf8ff',
    },
    quickPicks: ['shopify', 'square-pos', 'klaviyo'],
    categories: [
      {
        id: 'inventory',
        title: 'Inventory & Product Management Tools',
        description:
          'Never run out of your best sellers or overstock slow movers. AI tracks stock levels across every channel and tells you exactly when and how much to reorder.',
        tools: ['cin7', 'sortly', 'inflow'],
      },
      {
        id: 'ecommerce',
        title: 'E-Commerce & Online Store Tools',
        description:
          'Sell online without a developer. These platforms handle your storefront, payments, shipping, and marketing \u2014 AI writes product descriptions and optimizes for search automatically.',
        tools: ['shopify', 'bigcommerce', 'woocommerce'],
        comparison: {
          text: '<strong>Platform decision:</strong> Shopify is the easiest, WooCommerce is the most flexible. Here\u2019s how they stack up for small retailers.',
          linkText: 'Shopify vs WooCommerce \u2192',
          url: '/compare/shopify-vs-woocommerce',
        },
      },
      {
        id: 'pos',
        title: 'Point of Sale & Checkout Tools',
        description:
          'Fast, reliable checkout with built-in intelligence. Track every sale, manage inventory in real time, and let AI surface insights about your best customers and products.',
        tools: ['square-pos', 'lightspeed', 'clover'],
      },
      {
        id: 'marketing',
        title: 'Marketing & Social Commerce Tools',
        description:
          'Turn browsers into buyers. AI-powered email campaigns, social media content, and targeted ads that bring customers back and boost average order value.',
        tools: ['canva-ai', 'klaviyo', 'hootsuite'],
      },
      {
        id: 'customer-service',
        title: 'Customer Service & Chat Tools',
        description:
          'Answer questions instantly and turn support into sales. AI chatbots handle common inquiries 24/7 while escalating complex issues to your team with full context.',
        tools: ['tidio', 'zendesk', 'gorgias'],
        comparison: {
          text: '<strong>Support showdown:</strong> Zendesk is the all-rounder, Gorgias is built for e-commerce. Here\u2019s which one fits your store.',
          linkText: 'Zendesk vs Gorgias \u2192',
          url: '/compare/zendesk-vs-gorgias',
        },
      },
      {
        id: 'analytics',
        title: 'Analytics & Pricing Tools',
        description:
          'Make data-driven decisions about pricing, inventory, and marketing spend. AI surfaces the insights that matter and helps you stay competitive without constant manual monitoring.',
        tools: ['google-analytics', 'prisync', 'triple-whale'],
      },
    ],
    gettingStarted: [
      {
        title: 'Get online if you\u2019re not already',
        description:
          'Shopify takes an afternoon to set up. Even if 90% of your sales are in-store, an online presence captures the customers researching before they visit.',
      },
      {
        title: 'Set up abandoned cart recovery',
        description:
          'Klaviyo\u2019s free tier includes automated abandoned cart emails. This single automation recovers 5-15% of lost sales with zero ongoing effort.',
      },
      {
        title: 'Let AI handle customer service overnight',
        description:
          'Tidio\u2019s free chatbot answers common questions 24/7. Set it up with your FAQ, return policy, and hours \u2014 it\u2019ll handle the rest.',
      },
      {
        title: 'Need hands-on help?',
        description:
          'Book a 1-on-1 setup session and we\u2019ll walk you through implementation for your specific retail business.',
      },
    ],
    newsletterHeadline: 'Get retail AI tips in your inbox',
    newsletterSubtext:
      'New tool reviews, retail-specific tips, and practical advice for shop owners adopting AI. Weekly, no fluff.',
  },

  // ═══════════════════════════════════════════════
  // Food & Restaurants
  // ═══════════════════════════════════════════════
  {
    name: 'Food & Restaurants',
    slug: 'food-restaurants',
    emoji: '\u{1F37D}\uFE0F',
    metaDescription:
      'Compare 17+ hand-tested AI tools for restaurants, caf\u00e9s, food trucks, catering, and bars. Independent reviews with real pricing, pros & cons, and setup guides.',
    heroSubtitle:
      'We tested every AI tool worth considering for restaurants, caf\u00e9s, food trucks, catering companies, and bars. Here are the ones that actually cut food costs and fill more seats.',
    toolCount: 17,
    businessCount: 'Top sector by new openings',
    lastUpdated: 'Feb 2026',
    colors: {
      accent: '#dc2626',
      light: '#fef2f2',
      subtle: '#fff5f5',
    },
    quickPicks: ['toast', '7shifts', 'opentable'],
    categories: [
      {
        id: 'online-ordering',
        title: 'Online Ordering & Delivery Tools',
        description:
          'Take orders directly from your website and keep 100% of the revenue. These tools handle the online menu, payments, and delivery logistics without the third-party commission fees.',
        tools: ['toast', 'chownow', 'square-online'],
        comparison: {
          text: '<strong>Ordering decision:</strong> Toast includes ordering with POS, ChowNow is commission-free. Here\u2019s how they compare for independent restaurants.',
          linkText: 'Toast vs ChowNow \u2192',
          url: '/compare/toast-vs-chownow',
        },
      },
      {
        id: 'pos-kitchen',
        title: 'POS & Kitchen Management Tools',
        description:
          'Speed up service and keep the kitchen organized. These POS systems handle orders, payments, and kitchen communication so nothing gets lost during the rush.',
        tools: ['toast', 'square-restaurants', 'lightspeed-restaurant'],
      },
      {
        id: 'reservations',
        title: 'Reservation & Table Management Tools',
        description:
          'Fill every seat and manage walk-ins without the chaos. AI predicts no-shows, optimizes table assignments, and keeps wait times accurate so guests aren\u2019t left wondering.',
        tools: ['opentable', 'resy', 'yelp-guest-manager'],
      },
      {
        id: 'menu-pricing',
        title: 'Menu & Pricing Optimization Tools',
        description:
          'Know your actual food cost per dish and price for profit. AI tracks ingredient prices, flags cost spikes, and shows you which menu items make money and which ones don\u2019t.',
        tools: ['marketman', 'bluecart', 'xtrachef'],
      },
      {
        id: 'marketing',
        title: 'Marketing & Social Media Tools',
        description:
          'Keep your restaurant top of mind without spending all day on social media. AI creates posts, sends targeted emails, and turns one-time diners into regulars.',
        tools: ['canva-ai', 'popmenu', 'mailchimp'],
      },
      {
        id: 'staffing',
        title: 'Staffing & Scheduling Tools',
        description:
          'Schedule smarter, not longer. AI predicts how many staff you need based on sales forecasts, handles shift swaps automatically, and keeps labor costs under control.',
        tools: ['7shifts', 'homebase', 'when-i-work'],
        comparison: {
          text: '<strong>Scheduling showdown:</strong> 7shifts is restaurant-specific, Homebase is free. Here\u2019s which one fits your operation.',
          linkText: '7shifts vs Homebase \u2192',
          url: '/compare/7shifts-vs-homebase',
        },
      },
    ],
    gettingStarted: [
      {
        title: 'Get your own online ordering',
        description:
          'Third-party apps take 15-30% of every order. ChowNow or Square Online let customers order directly from you at a flat monthly cost.',
      },
      {
        title: 'Know your food costs',
        description:
          'If you don\u2019t know your actual cost per dish, you\u2019re guessing on pricing. MarketMan tracks ingredient costs in real time and alerts you when margins shrink.',
      },
      {
        title: 'Automate scheduling',
        description:
          '7shifts\u2019 free tier handles scheduling for one location. Stop texting the group chat \u2014 let employees swap shifts and request time off from their phones.',
      },
      {
        title: 'Need hands-on help?',
        description:
          'Book a 1-on-1 setup session and we\u2019ll walk you through implementation for your specific restaurant or food business.',
      },
    ],
    newsletterHeadline: 'Get restaurant AI tips in your inbox',
    newsletterSubtext:
      'New tool reviews, restaurant-specific tips, and practical advice for food business owners adopting AI. Weekly, no fluff.',
  },

  // ═══════════════════════════════════════════════
  // Health & Wellness
  // ═══════════════════════════════════════════════
  {
    name: 'Health & Wellness',
    slug: 'health-wellness',
    emoji: '\u{1FA7A}',
    metaDescription:
      'Compare 17+ hand-tested AI tools for doctors, dentists, chiropractors, fitness studios, and physical therapists. Independent reviews with real pricing, pros & cons.',
    heroSubtitle:
      'We tested every AI tool worth considering for doctors, dentists, chiropractors, fitness studios, and physical therapy practices. Here are the ones that actually improve patient care and practice efficiency.',
    toolCount: 17,
    businessCount: '10% of all SMBs',
    lastUpdated: 'Feb 2026',
    colors: {
      accent: '#059669',
      light: '#ecfdf5',
      subtle: '#f0fdf9',
    },
    quickPicks: ['jane-app', 'weave', 'simplepractice'],
    categories: [
      {
        id: 'practice-management',
        title: 'Appointment & Practice Management Tools',
        description:
          'Run your entire practice from one platform. Online booking, client records, billing, and scheduling \u2014 so you spend more time with patients and less time on admin.',
        tools: ['jane-app', 'mindbody', 'simplepractice'],
        comparison: {
          text: '<strong>Practice management decision:</strong> Jane App is top-rated for clinics, SimplePractice is built for therapists. Here\u2019s how they compare.',
          linkText: 'Jane App vs SimplePractice \u2192',
          url: '/compare/jane-app-vs-simplepractice',
        },
      },
      {
        id: 'patient-communication',
        title: 'Patient Communication Tools',
        description:
          'Reduce no-shows and keep patients engaged between visits. AI handles appointment reminders, two-way texting, and intake forms so your front desk isn\u2019t on the phone all day.',
        tools: ['weave', 'klara', 'podium'],
      },
      {
        id: 'billing-insurance',
        title: 'Billing & Insurance Tools',
        description:
          'Collect more, chase less. These tools automate claim submissions, catch coding errors, and follow up on unpaid balances so your revenue doesn\u2019t leak through the cracks.',
        tools: ['tebra', 'athenahealth', 'quickbooks-ai'],
      },
      {
        id: 'telehealth',
        title: 'Telehealth & Virtual Care Tools',
        description:
          'See patients from anywhere with HIPAA-compliant video visits. No downloads for patients, simple scheduling, and documentation that integrates with your existing records.',
        tools: ['doxyme', 'simplepractice', 'zoom'],
      },
      {
        id: 'marketing',
        title: 'Marketing & Reputation Tools',
        description:
          'Build the online reputation that brings new patients through the door. AI automates review requests, manages your listings, and creates content that positions you as the local expert.',
        tools: ['birdeye', 'canva-ai', 'chatgpt'],
      },
      {
        id: 'documentation',
        title: 'Documentation & Records Tools',
        description:
          'Spend less time charting and more time with patients. AI-assisted clinical notes, EHR systems, and practice-specific documentation that keeps you compliant without the busywork.',
        tools: ['drchrono', 'practice-better', 'chirotouch'],
      },
    ],
    gettingStarted: [
      {
        title: 'Fix your no-show problem first',
        description:
          'Automated reminders via Weave or Klara cut no-shows by 30-50%. Set it up once and watch your schedule fill rate improve immediately.',
      },
      {
        title: 'Offer online booking',
        description:
          'Patients expect to book online. Jane App or SimplePractice lets them see availability and book 24/7 without calling your front desk.',
      },
      {
        title: 'Start collecting reviews',
        description:
          'Birdeye automates review requests after every visit. Within 90 days, most practices see a significant boost in Google reviews and new patient inquiries.',
      },
      {
        title: 'Need hands-on help?',
        description:
          'Book a 1-on-1 setup session and we\u2019ll walk you through implementation for your specific practice.',
      },
    ],
    newsletterHeadline: 'Get health & wellness AI tips in your inbox',
    newsletterSubtext:
      'New tool reviews, practice-specific tips, and practical advice for health and wellness professionals adopting AI. Weekly, no fluff.',
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
