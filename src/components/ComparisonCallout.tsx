import Link from 'next/link';

interface ComparisonCalloutProps {
  text: string;
  linkText: string;
  url: string;
}

export default function ComparisonCallout({ text, linkText, url }: ComparisonCalloutProps) {
  return (
    <div className="comparison-callout">
      <div className="comparison-inner">
        <p dangerouslySetInnerHTML={{ __html: text }} />
        <Link href={url} className="comparison-link">{linkText}</Link>
      </div>
    </div>
  );
}
