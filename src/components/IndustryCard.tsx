import Link from 'next/link';

interface IndustryCardProps {
  slug: string;
  colorClass: string;
  emoji: string;
  name: string;
  description: string;
  toolCount: number;
  bizCount: string;
  className?: string;
}

export default function IndustryCard({
  slug,
  colorClass,
  emoji,
  name,
  description,
  toolCount,
  bizCount,
  className = '',
}: IndustryCardProps) {
  return (
    <Link
      href={`/industries/${slug}`}
      className={`industry-card ${colorClass}${className ? ` ${className}` : ''}`}
    >
      <div className="industry-icon">{emoji}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="tool-count">{toolCount} tools →</span>
      <span className="biz-count">{bizCount}</span>
    </Link>
  );
}
