'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function FadeUp({ children, className = '', as: Tag = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);

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
    // @ts-expect-error - dynamic tag element
    <Tag ref={ref} className={`fade-up ${className}`.trim()}>
      {children}
    </Tag>
  );
}
