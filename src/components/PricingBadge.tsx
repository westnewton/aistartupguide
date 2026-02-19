interface PricingBadgeProps {
  label: string;
  type: 'free' | 'paid' | 'freemium';
}

export default function PricingBadge({ label, type }: PricingBadgeProps) {
  return (
    <span className={`tool-card-pricing tag-${type}`}>{label}</span>
  );
}
