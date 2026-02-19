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
    industries: ['construction-trades'],
    categories: ['scheduling'],
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
    industries: ['construction-trades'],
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
    industries: ['construction-trades'],
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
    industries: ['construction-trades'],
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
    industries: ['construction-trades'],
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
    industries: ['construction-trades'],
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
    industries: ['construction-trades'],
    categories: ['marketing'],
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
    industries: ['construction-trades'],
    categories: ['marketing'],
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
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
