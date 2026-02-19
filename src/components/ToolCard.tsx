import { Tool } from '@/lib/types';
import PricingBadge from './PricingBadge';
import SourcedRating from './SourcedRating';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <a className="tool-card" href={tool.url} target="_blank" rel="noopener noreferrer">
      <div className="tool-card-top">
        <span className="tool-card-name">{tool.name}</span>
        <PricingBadge label={tool.pricing.label} type={tool.pricing.type} />
      </div>
      <SourcedRating score={tool.rating.score} source={tool.rating.source} />
      <p className="tool-card-desc">{tool.description}</p>
      <div className="tool-card-bottom">
        <div className="tool-card-tags">
          {tool.bestFor.map((tag) => (
            <span key={tag} className="tool-fit-tag">{tag}</span>
          ))}
        </div>
        <span className="check-it-out">Check it out →</span>
      </div>
    </a>
  );
}
