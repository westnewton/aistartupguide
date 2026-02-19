'use client';

import { Category } from '@/lib/types';

interface JumpNavProps {
  categories: Category[];
}

const SHORT_LABELS: Record<string, string> = {
  // Construction & Trades
  'Estimating & Quoting Tools': 'Estimating & Quoting',
  'Scheduling & Dispatch Tools': 'Scheduling & Dispatch',
  'Client Communication Tools': 'Client Communication',
  'Invoicing & Payments Tools': 'Invoicing & Payments',
  'Marketing & Lead Generation Tools': 'Marketing & Lead Gen',
  'Project Documentation Tools': 'Project Documentation',
  // Home & Personal Services
  'Booking & Scheduling Tools': 'Booking & Scheduling',
  'Client Management & CRM Tools': 'Client Management',
  'Marketing & Social Media Tools': 'Marketing & Social',
  'Operations & Routing Tools': 'Operations & Routing',
  // Real Estate
  'Lead Generation & Nurture Tools': 'Lead Gen & Nurture',
  'Listing & Marketing Tools': 'Listing & Marketing',
  'CRM & Client Management Tools': 'CRM & Clients',
  'Market Analysis & Pricing Tools': 'Market Analysis',
  'Transaction & Operations Tools': 'Transactions & Ops',
};

export default function JumpNav({ categories }: JumpNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="jump-nav">
      <div className="jump-nav-inner">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="jump-link"
            onClick={(e) => handleClick(e, cat.id)}
          >
            {SHORT_LABELS[cat.title] || cat.title}
          </a>
        ))}
      </div>
    </div>
  );
}
