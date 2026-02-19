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
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
