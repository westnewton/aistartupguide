import Link from 'next/link';

interface BreadcrumbProps {
  industryName: string;
}

export default function Breadcrumb({ industryName }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      <Link href="/">Home</Link>
      <span className="sep">&rsaquo;</span>
      <Link href="/#industries">Industries</Link>
      <span className="sep">&rsaquo;</span>
      <span className="current">{industryName}</span>
    </div>
  );
}
