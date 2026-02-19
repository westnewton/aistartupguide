export interface Tool {
  name: string;
  slug: string;
  url: string;
  pricing: {
    label: string;
    type: 'free' | 'paid' | 'freemium';
  };
  rating: {
    score: number;
    source: 'G2' | 'Capterra';
  };
  description: string;
  bestFor: string[];
  industries: string[];
  categories: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  tools: string[];
  comparison?: {
    text: string;
    linkText: string;
    url: string;
  };
}

export interface Industry {
  name: string;
  slug: string;
  emoji: string;
  metaDescription: string;
  heroSubtitle: string;
  toolCount: number;
  businessCount: string;
  lastUpdated: string;
  colors: {
    accent: string;
    light: string;
    subtle: string;
  };
  quickPicks: string[];
  categories: Category[];
  gettingStarted: {
    title: string;
    description: string;
  }[];
  newsletterHeadline: string;
  newsletterSubtext: string;
}
