interface SourcedRatingProps {
  score: number;
  source: 'G2' | 'Capterra';
  className?: string;
}

export default function SourcedRating({ score, source, className = 'tool-card-rating' }: SourcedRatingProps) {
  return (
    <div className={className}>
      ★ {score} <span className="source">{source}</span>
    </div>
  );
}
