import Link from 'next/link';

interface GettingStartedProps {
  tips: { title: string; description: string }[];
}

export default function GettingStarted({ tips }: GettingStartedProps) {
  return (
    <div className="getting-started">
      <div className="gs-inner">
        <div>
          <div className="gs-label">Getting Started</div>
          <h2 className="gs-title">New to AI? Here&apos;s where to start.</h2>
          <p className="gs-text">
            You don&apos;t need to adopt everything at once. Most small businesses see
            the biggest impact from just one or two tools. Here&apos;s our recommended
            approach.
          </p>
          <Link href="/guides/intro-to-ai-for-small-business" className="btn-primary">
            Read the Full Guide →
          </Link>
        </div>
        <ul className="gs-tips">
          {tips.map((tip, i) => (
            <li key={i} className="gs-tip">
              <span className="gs-tip-num">{i + 1}</span>
              <div>
                <h4>{tip.title}</h4>
                <p>{tip.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
