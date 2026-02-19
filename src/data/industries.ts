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
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
