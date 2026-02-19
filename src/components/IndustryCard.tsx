'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface IndustryCardProps {
  slug: string;
  colorClass: string;
  emoji: string;
  name: string;
  description: string;
  toolCount: number;
  bizCount: string;
}

export default function IndustryCard({
  slug,
  colorClass,
  emoji,
  name,
  description,
  toolCount,
  bizCount,
}: IndustryCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      href={`/industries/${slug}`}
      className={`industry-card ${colorClass} fade-up`}
    >
      <div className="industry-icon">{emoji}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="tool-count">{toolCount} tools →</span>
      <span className="biz-count">{bizCount}</span>
    </Link>
  );
}
