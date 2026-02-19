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
  // Professional Services
  'Document & Contract Tools': 'Documents & Contracts',
  'Time Tracking & Billing Tools': 'Time & Billing',
  'Communication & Scheduling Tools': 'Communication',
  'Marketing & Business Development Tools': 'Marketing & Biz Dev',
  'Research & Writing Tools': 'Research & Writing',
  // Transportation & Logistics
  'Fleet Management & GPS Tools': 'Fleet & GPS',
  'Route Optimization & Dispatch Tools': 'Routes & Dispatch',
  'Load Matching & Freight Tools': 'Load Matching',
  'Compliance & Documentation Tools': 'Compliance & Docs',
  'Marketing & Customer Communication Tools': 'Marketing & Comms',
  // Retail & E-Commerce
  'Inventory & Product Management Tools': 'Inventory & Products',
  'E-Commerce & Online Store Tools': 'E-Commerce',
  'Point of Sale & Checkout Tools': 'POS & Checkout',
  'Marketing & Social Commerce Tools': 'Marketing & Social',
  'Customer Service & Chat Tools': 'Customer Service',
  'Analytics & Pricing Tools': 'Analytics & Pricing',
  // Food & Restaurants
  'Online Ordering & Delivery Tools': 'Ordering & Delivery',
  'POS & Kitchen Management Tools': 'POS & Kitchen',
  'Reservation & Table Management Tools': 'Reservations',
  'Menu & Pricing Optimization Tools': 'Menu & Pricing',
  'Staffing & Scheduling Tools': 'Staffing & Scheduling',
  // Health & Wellness
  'Appointment & Practice Management Tools': 'Practice Management',
  'Patient Communication Tools': 'Patient Communication',
  'Billing & Insurance Tools': 'Billing & Insurance',
  'Telehealth & Virtual Care Tools': 'Telehealth',
  'Marketing & Reputation Tools': 'Marketing & Reviews',
  'Documentation & Records Tools': 'Documentation',
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
