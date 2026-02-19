import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  industryName?: string;
  items?: BreadcrumbItem[];
}

export default function Breadcrumb({ industryName, items }: BreadcrumbProps) {
  const crumbs: BreadcrumbItem[] = items || [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/#industries' },
    { label: industryName || '' },
  ];

  return (
    <div className="breadcrumb">
      {crumbs.map((crumb, i) => (
        <span key={i}>
          {i > 0 && <span className="sep">&rsaquo;</span>}
          {crumb.href ? (
            <Link href={crumb.href}>{crumb.label}</Link>
          ) : (
            <span className="current">{crumb.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
