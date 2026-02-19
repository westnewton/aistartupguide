import { Tool } from '@/lib/types';
import SourcedRating from './SourcedRating';

interface QuickPicksProps {
  tools: Tool[];
}

const RANK_LABELS = ['#1 PICK', '#2 PICK', '#3 PICK'];

export default function QuickPicks({ tools }: QuickPicksProps) {
  return (
    <div className="quick-picks fade-up">
      <div className="quick-picks-label">&#9889; Our Top 3 Picks</div>
      <div className="quick-picks-grid">
        {tools.map((tool, i) => (
          <div key={tool.slug} className="qp-card">
            <span className="qp-rank">{RANK_LABELS[i]}</span>
            <div className="qp-header">
              <span className="qp-name">{tool.name}</span>
              <SourcedRating
                score={tool.rating.score}
                source={tool.rating.source}
                className="qp-rating"
              />
            </div>
            <p className="qp-verdict">{tool.description}</p>
            <div className="qp-footer">
              <span className="qp-price">{tool.pricing.label}</span>
              <span className="qp-best-for">Best for: {tool.bestFor[0]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
