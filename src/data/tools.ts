import { Tool } from '@/lib/types';

export const tools: Tool[] = [
  // ═══ Estimating & Quoting ═══
  {
    name: 'Joist',
    slug: 'joist',
    url: 'https://www.joist.com',
    pricing: { label: 'Free tier', type: 'free' },
    rating: { score: 4.6, source: 'Capterra' },
    description:
      'Creates professional estimates and invoices from your phone. AI suggests line items based on job type and auto-calculates materials. Dead simple for solo operators.',
    bestFor: ['Solo operators', 'Residential'],
    industries: ['construction-trades'],
    categories: ['estimating'],
  },
  {
    name: 'STACK',
    slug: 'stack',
    url: 'https://www.stackct.com',
    pricing: { label: 'From $2,999/yr', type: 'paid' },
    rating: { score: 4.4, source: 'G2' },
    description:
      'AI-powered takeoff and estimating for commercial projects. Upload blueprints and get material quantities in minutes. Overkill for small residential — built for larger bids.',
    bestFor: ['Commercial', '5+ person crews'],
    industries: ['construction-trades'],
    categories: ['estimating'],
  },
  {
    name: 'Buildertrend',
    slug: 'buildertrend',
    url: 'https://www.buildertrend.com',
    pricing: { label: 'From $99/mo', type: 'paid' },
    rating: { score: 4.5, source: 'G2' },
    description:
      'Full project management suite with built-in estimating. AI populates cost databases, generates proposals from templates, and tracks change orders through the project lifecycle.',
    bestFor: ['GCs & remodelers', 'Full-service'],
    industries: ['construction-trades'],
    categories: ['estimating', 'documentation'],
  },
  // ═══ Scheduling & Dispatch ═══
  {
    name: 'Jobber',
    slug: 'jobber',
    url: 'https://getjobber.com',
    pricing: { label: 'From $49/mo', type: 'paid' },
    rating: { score: 4.5, source: 'Capterra' },
    description:
      'All-in-one scheduling, quoting, and CRM. AI optimizes routes, suggests time slots based on job history, and sends automatic reminders to clients. The gold standard for service businesses.',
    bestFor: ['1–15 person crews', 'Service businesses'],
    industries: ['construction-trades', 'home-personal-services'],
    categories: ['scheduling'],
  },
  {
    name: 'Housecall Pro',
    slug: 'housecall-pro',
    url: 'https://www.housecallpro.com',
    pricing: { label: 'From $65/mo', type: 'paid' },
    rating: { score: 4.7, source: 'Capterra' },
    description:
      'Similar to Jobber with stronger dispatch features. Real-time GPS tracking, automated "on my way" texts, and AI-powered scheduling that fills gaps in your calendar.',
    bestFor: ['HVAC & plumbing', 'Growing teams'],
    industries: ['construction-trades', 'home-personal-services'],
    categories: ['scheduling'],
  },
  {
    name: 'ServiceTitan',
    slug: 'servicetitan',
    url: 'https://www.servicetitan.com',
    pricing: { label: 'Custom pricing', type: 'paid' },
    rating: { score: 4.4, source: 'G2' },
    description:
      'Enterprise-grade dispatching and scheduling for larger operations. AI dispatches techs based on skills, location, and availability. Expensive but powerful for 15+ person teams.',
    bestFor: ['15+ employees', 'Multi-location'],
    industries: ['construction-trades', 'home-personal-services'],
    categories: ['scheduling', 'operations'],
  },
  // ═══ Client Communication ═══
  {
    name: 'Tidio',
    slug: 'tidio',
    url: 'https://www.tidio.com',
    pricing: { label: 'Freemium', type: 'freemium' },
    rating: { score: 4.7, source: 'G2' },
    description:
      'AI chatbot that lives on your website. Answers common questions (pricing, availability, service area), captures leads, and books appointments — even at 2 AM.',
    bestFor: ['All sizes', 'Lead capture'],
    industries: ['construction-trades', 'home-personal-services', 'real-estate'],
    categories: ['communication'],
  },
  {
    name: 'Podium',
    slug: 'podium',
    url: 'https://www.podium.com',
    pricing: { label: 'From $399/mo', type: 'paid' },
    rating: { score: 4.6, source: 'Capterra' },
    description:
      'AI-powered text messaging for local businesses. Automatically follows up with leads, requests Google reviews after jobs, and centralizes all conversations in one inbox.',
    bestFor: ['Review-driven', 'Local SEO'],
    industries: ['construction-trades', 'home-personal-services', 'real-estate'],
    categories: ['communication'],
  },
  {
    name: 'Hatch',
    slug: 'hatch',
    url: 'https://www.usehatchapp.com',
    pricing: { label: 'Custom pricing', type: 'paid' },
    rating: { score: 4.6, source: 'G2' },
    description:
      'AI assistant that texts and emails your leads within seconds of a form submission. Built for home services — integrates with Angi, HomeAdvisor, and most CRMs to automate your entire follow-up sequence.',
    bestFor: ['High-volume leads', 'Home services'],
    industries: ['construction-trades', 'home-personal-services'],
    categories: ['communication'],
  },
  // ═══ Invoicing & Payments ═══
  {
    name: 'QuickBooks AI',
    slug: 'quickbooks-ai',
    url: 'https://quickbooks.intuit.com',
    pricing: { label: 'From $30/mo', type: 'paid' },
    rating: { score: 4.3, source: 'Capterra' },
    description:
      'The industry standard, now with AI that auto-categorizes expenses, matches receipts, and flags unusual charges. Connects to your bank and most field service tools.',
    bestFor: ['All sizes', 'Bookkeeping'],
    industries: ['construction-trades', 'home-personal-services'],
    categories: ['invoicing'],
  },
  {
    name: 'Invoice Ninja',
    slug: 'invoice-ninja',
    url: 'https://www.invoiceninja.com',
    pricing: { label: 'Free tier', type: 'free' },
    rating: { score: 4.7, source: 'Capterra' },
    description:
      'Open-source invoicing with a generous free tier. Auto-fills client details, tracks payments, and sends late reminders. Great if you just need invoicing without a full accounting suite.',
    bestFor: ['Solo operators', 'Budget-friendly'],
    industries: ['construction-trades'],
    categories: ['invoicing'],
  },
  {
    name: 'FreshBooks',
    slug: 'freshbooks',
    url: 'https://www.freshbooks.com',
    pricing: { label: 'From $19/mo', type: 'paid' },
    rating: { score: 4.5, source: 'G2' },
    description:
      'Simpler than QuickBooks with a cleaner interface. AI auto-generates invoices from time tracking, categorizes expenses from bank feeds, and sends smart payment reminders. Great middle ground.',
    bestFor: ['Small teams', 'Easy setup'],
    industries: ['construction-trades', 'home-personal-services'],
    categories: ['invoicing'],
  },
  // ═══ Marketing & Lead Generation ═══
  {
    name: 'GoHighLevel',
    slug: 'gohighlevel',
    url: 'https://www.gohighlevel.com',
    pricing: { label: 'From $97/mo', type: 'paid' },
    rating: { score: 4.5, source: 'Capterra' },
    description:
      'All-in-one CRM and marketing platform. AI builds landing pages, writes follow-up emails, manages your pipeline, and automates review requests. Powerful but has a learning curve.',
    bestFor: ['Growth-focused', 'Marketing-heavy'],
    industries: ['construction-trades', 'home-personal-services'],
    categories: ['marketing'],
  },
  {
    name: 'Canva AI',
    slug: 'canva-ai',
    url: 'https://www.canva.com',
    pricing: { label: 'Freemium', type: 'freemium' },
    rating: { score: 4.7, source: 'G2' },
    description:
      'Create professional social media posts, before/after graphics, and flyers in minutes. AI suggests layouts, writes captions, and resizes for every platform. No design skills needed.',
    bestFor: ['All sizes', 'Social media'],
    industries: ['construction-trades', 'home-personal-services', 'real-estate'],
    categories: ['marketing', 'listings'],
  },
  {
    name: 'ChatGPT',
    slug: 'chatgpt',
    url: 'https://chat.openai.com',
    pricing: { label: 'Freemium', type: 'freemium' },
    rating: { score: 4.7, source: 'G2' },
    description:
      'The Swiss Army knife. Write job descriptions, social posts, email templates, ad copy, and customer responses in seconds. Free tier is surprisingly powerful for everyday marketing tasks.',
    bestFor: ['All sizes', 'Writing & content'],
    industries: ['construction-trades', 'home-personal-services', 'real-estate'],
    categories: ['marketing', 'listings'],
  },
  // ═══ Project Documentation ═══
  {
    name: 'CompanyCam',
    slug: 'companycam',
    url: 'https://www.companycam.com',
    pricing: { label: 'From $19/user/mo', type: 'paid' },
    rating: { score: 4.7, source: 'Capterra' },
    description:
      'Take a photo on the job site and it\u2019s instantly tagged by location, date, and project. AI generates progress reports and creates shareable timelines for clients. Built specifically for field work.',
    bestFor: ['Field teams', 'Photo documentation'],
    industries: ['construction-trades'],
    categories: ['documentation'],
  },
  {
    name: 'Fieldwire',
    slug: 'fieldwire',
    url: 'https://www.fieldwire.com',
    pricing: { label: 'Freemium', type: 'freemium' },
    rating: { score: 4.5, source: 'Capterra' },
    description:
      'Task management and blueprint markup for the field. AI auto-generates punchlists from photos, tracks inspections, and syncs everything between office and job site in real time.',
    bestFor: ['Commercial', 'Blueprint-heavy'],
    industries: ['construction-trades'],
    categories: ['documentation'],
  },

  // ═══════════════════════════════════════════════
  // Home & Personal Services — New Tools
  // ═══════════════════════════════════════════════
  {
    name: 'Square Appointments',
    slug: 'square-appointments',
    url: 'https://squareup.com/us/en/appointments',
    pricing: { label: 'Free for individuals', type: 'freemium' },
    rating: { score: 4.4, source: 'G2' },
    description:
      'Free online booking that syncs with Square payments. Clients book from your website or Google, get automatic reminders, and pay when they check out. Perfect for solo stylists, barbers, and personal trainers.',
    bestFor: ['Solo providers', 'Salons & barbers'],
    industries: ['home-personal-services'],
    categories: ['booking'],
  },
  {
    name: 'Vagaro',
    slug: 'vagaro',
    url: 'https://www.vagaro.com',
    pricing: { label: 'From $30/mo', type: 'paid' },
    rating: { score: 4.7, source: 'Capterra' },
    description:
      'All-in-one for salons, spas, and fitness studios. Online booking, client history, automated marketing, and POS \u2014 all in one platform. AI handles appointment reminders and no-show management.',
    bestFor: ['Salons & spas', 'Fitness studios'],
    industries: ['home-personal-services'],
    categories: ['client-management', 'booking'],
  },
  {
    name: 'Thryv',
    slug: 'thryv',
    url: 'https://www.thryv.com',
    pricing: { label: 'Custom pricing', type: 'paid' },
    rating: { score: 4.6, source: 'G2' },
    description:
      'CRM built for local service businesses. Centralizes client info, automates follow-ups, manages your online presence, and handles appointment booking \u2014 one dashboard for everything.',
    bestFor: ['Multi-service businesses', 'Growing teams'],
    industries: ['home-personal-services'],
    categories: ['client-management'],
  },
  {
    name: 'Fresha',
    slug: 'fresha',
    url: 'https://www.fresha.com',
    pricing: { label: 'Free tier', type: 'free' },
    rating: { score: 4.8, source: 'Capterra' },
    description:
      'Completely free booking and business management for beauty and wellness. No subscription fees \u2014 you only pay for optional payment processing. Includes client records, marketing, and a marketplace listing.',
    bestFor: ['Beauty & wellness', 'Budget-friendly'],
    industries: ['home-personal-services'],
    categories: ['client-management', 'booking'],
  },
  {
    name: 'Broadly',
    slug: 'broadly',
    url: 'https://broadly.com',
    pricing: { label: 'Custom pricing', type: 'paid' },
    rating: { score: 4.7, source: 'G2' },
    description:
      'AI-powered review and communication platform for local businesses. Automatically requests reviews after appointments, responds to leads via text, and centralizes all messages in one inbox.',
    bestFor: ['Review-focused', 'Local businesses'],
    industries: ['home-personal-services'],
    categories: ['communication'],
  },
  {
    name: 'Wave',
    slug: 'wave',
    url: 'https://www.waveapps.com',
    pricing: { label: 'Free tier', type: 'free' },
    rating: { score: 4.4, source: 'Capterra' },
    description:
      'Free accounting and invoicing for small businesses. Send unlimited invoices, scan receipts, and track expenses \u2014 all without a monthly fee. AI categorizes transactions from bank connections.',
    bestFor: ['Solo operators', 'Budget-friendly'],
    industries: ['home-personal-services'],
    categories: ['invoicing'],
  },
  {
    name: 'OptimoRoute',
    slug: 'optimoroute',
    url: 'https://optimoroute.com',
    pricing: { label: 'From $44.10/mo', type: 'paid' },
    rating: { score: 4.5, source: 'Capterra' },
    description:
      'AI route optimization that saves hours of driving per week. Plan the fastest routes for multiple stops, track drivers in real time, and automatically adjust when jobs run long or get added mid-day.',
    bestFor: ['Mobile services', 'Route-heavy'],
    industries: ['home-personal-services'],
    categories: ['operations'],
  },

  // ═══════════════════════════════════════════════
  // Real Estate — New Tools
  // ═══════════════════════════════════════════════
  {
    name: 'kvCORE',
    slug: 'kvcore',
    url: 'https://www.insiderealestate.com/kvcore',
    pricing: { label: 'From $499/mo', type: 'paid' },
    rating: { score: 4.2, source: 'G2' },
    description:
      'All-in-one real estate platform with AI-powered lead generation, IDX websites, and smart CRM. Behavioral AI scores leads and triggers automated follow-ups based on search activity.',
    bestFor: ['Teams & brokerages', 'Lead generation'],
    industries: ['real-estate'],
    categories: ['lead-gen'],
  },
  {
    name: 'Ylopo',
    slug: 'ylopo',
    url: 'https://www.ylopo.com',
    pricing: { label: 'From $395/mo', type: 'paid' },
    rating: { score: 4.4, source: 'Capterra' },
    description:
      'AI-driven digital marketing for real estate. Generates seller and buyer leads through dynamic ads, then nurtures them with AI texting that books appointments. Integrates with Follow Up Boss and most CRMs.',
    bestFor: ['Digital marketing', 'Lead nurture'],
    industries: ['real-estate'],
    categories: ['lead-gen'],
  },
  {
    name: 'Real Geeks',
    slug: 'real-geeks',
    url: 'https://www.realgeeks.com',
    pricing: { label: 'From $299/mo', type: 'paid' },
    rating: { score: 4.5, source: 'G2' },
    description:
      'IDX websites and CRM with built-in lead generation. AI chatbot qualifies visitors, automated drip campaigns keep leads warm, and the CRM tracks every interaction from first click to closing.',
    bestFor: ['Solo agents', 'IDX websites'],
    industries: ['real-estate'],
    categories: ['lead-gen'],
  },
  {
    name: 'Matterport',
    slug: 'matterport',
    url: 'https://matterport.com',
    pricing: { label: 'Freemium', type: 'freemium' },
    rating: { score: 4.5, source: 'G2' },
    description:
      'Create immersive 3D virtual tours of listings using just your phone. AI auto-generates floor plans, highlight reels, and property descriptions. Listings with virtual tours get dramatically more views.',
    bestFor: ['Listing agents', 'Virtual tours'],
    industries: ['real-estate'],
    categories: ['listings'],
  },
  {
    name: 'Follow Up Boss',
    slug: 'follow-up-boss',
    url: 'https://www.followupboss.com',
    pricing: { label: 'From $58/mo', type: 'paid' },
    rating: { score: 4.5, source: 'G2' },
    description:
      'The top-rated CRM for real estate teams. Pulls leads from Zillow, Realtor.com, and 200+ sources into one place. AI prioritizes your hottest leads and automates follow-up sequences until they respond.',
    bestFor: ['Teams', 'Multi-source leads'],
    industries: ['real-estate'],
    categories: ['crm'],
  },
  {
    name: 'LionDesk',
    slug: 'liondesk',
    url: 'https://liondesk.com',
    pricing: { label: 'From $25/mo', type: 'paid' },
    rating: { score: 4.1, source: 'Capterra' },
    description:
      'Budget-friendly CRM with AI-powered lead follow-up. Sends personalized video texts, automates drip campaigns, and uses AI to respond to leads within seconds of inquiry.',
    bestFor: ['Solo agents', 'Budget-friendly'],
    industries: ['real-estate'],
    categories: ['crm'],
  },
  {
    name: 'Wise Agent',
    slug: 'wise-agent',
    url: 'https://wiseagent.com',
    pricing: { label: 'From $49/mo', type: 'paid' },
    rating: { score: 4.5, source: 'Capterra' },
    description:
      'Simple, powerful CRM designed specifically for real estate agents. AI assists with transaction management, automated birthday and anniversary reminders, and creating drip campaigns that nurture past clients.',
    bestFor: ['Solo agents', 'Transaction tracking'],
    industries: ['real-estate'],
    categories: ['crm'],
  },
  {
    name: 'Structurely',
    slug: 'structurely',
    url: 'https://structurely.com',
    pricing: { label: 'From $199/mo', type: 'paid' },
    rating: { score: 4.2, source: 'G2' },
    description:
      'AI assistant that texts and qualifies your real estate leads automatically. Carries on natural conversations, asks qualifying questions, and books showing appointments \u2014 so you never miss a hot lead.',
    bestFor: ['High-volume leads', 'Lead qualification'],
    industries: ['real-estate'],
    categories: ['communication'],
  },
  {
    name: 'HouseCanary',
    slug: 'housecanary',
    url: 'https://www.housecanary.com',
    pricing: { label: 'Custom pricing', type: 'paid' },
    rating: { score: 4.3, source: 'G2' },
    description:
      'AI-powered property valuation and market analytics. Get accurate home value estimates, rental yield analysis, and market forecasts for any address. Used by agents for CMAs and investors for deal analysis.',
    bestFor: ['Market analysis', 'Investors'],
    industries: ['real-estate'],
    categories: ['market-analysis'],
  },
  {
    name: 'PropStream',
    slug: 'propstream',
    url: 'https://www.propstream.com',
    pricing: { label: 'From $99/mo', type: 'paid' },
    rating: { score: 4.4, source: 'Capterra' },
    description:
      'Property data and analytics platform with AI-powered lead lists. Filter 160M+ properties by equity, distress, and motivation signals. Build targeted marketing lists and skip-trace owners directly.',
    bestFor: ['Investors', 'Prospecting'],
    industries: ['real-estate'],
    categories: ['market-analysis'],
  },
  {
    name: 'RPR',
    slug: 'rpr',
    url: 'https://www.narrpr.com',
    pricing: { label: 'Free for REALTORS\u00ae', type: 'free' },
    rating: { score: 4.3, source: 'G2' },
    description:
      'Free for NAR members. AI generates comprehensive property reports, neighborhood analytics, and shareable CMAs in minutes. The go-to tool for market research and client presentations.',
    bestFor: ['All agents', 'Free CMAs'],
    industries: ['real-estate'],
    categories: ['market-analysis'],
  },
  {
    name: 'Dotloop',
    slug: 'dotloop',
    url: 'https://www.dotloop.com',
    pricing: { label: 'From $31.99/mo', type: 'paid' },
    rating: { score: 4.3, source: 'G2' },
    description:
      'Transaction management and e-signatures in one platform. AI auto-populates forms, tracks compliance, and manages the entire deal from offer to close. Integrates with most real estate CRMs.',
    bestFor: ['Transaction management', 'Brokerages'],
    industries: ['real-estate'],
    categories: ['operations'],
  },
  {
    name: 'SkySlope',
    slug: 'skyslope',
    url: 'https://skyslope.com',
    pricing: { label: 'Custom pricing', type: 'paid' },
    rating: { score: 4.2, source: 'Capterra' },
    description:
      'Transaction management built for real estate brokerages. AI reviews documents for compliance, flags missing signatures, and creates audit-ready files. Broker dashboard tracks every deal in the pipeline.',
    bestFor: ['Brokerages', 'Compliance'],
    industries: ['real-estate'],
    categories: ['operations'],
  },
  {
    name: 'DocuSign',
    slug: 'docusign',
    url: 'https://www.docusign.com',
    pricing: { label: 'From $10/mo', type: 'paid' },
    rating: { score: 4.5, source: 'G2' },
    description:
      'The industry standard for e-signatures. Send contracts for signing from anywhere, track document status in real time, and store everything securely. AI assists with form field placement and agreement analysis.',
    bestFor: ['All agents', 'E-signatures'],
    industries: ['real-estate'],
    categories: ['operations'],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
