'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="logo">
          AI<span>Startup</span>Guide
        </Link>
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <Link href="/#industries" onClick={() => setMenuOpen(false)}>Industries</Link>
          <Link href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="/#tools" onClick={() => setMenuOpen(false)}>Top Tools</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/#newsletter" className="nav-cta" onClick={() => setMenuOpen(false)}>Get the Newsletter</Link>
        </div>
      </div>
    </nav>
  );
}
