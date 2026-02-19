import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const siteUrl = 'https://aistartupguide.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'AIStartupGuide.com — Find the Right AI Tools for Your Business',
  description:
    'Stop sifting through thousands of AI products. We test and curate the best tools for small businesses — organized by your industry, explained in plain English.',
  openGraph: {
    title: 'AIStartupGuide.com — Find the Right AI Tools for Your Business',
    description:
      'Stop sifting through thousands of AI products. We test and curate the best tools for small businesses — organized by your industry, explained in plain English.',
    type: 'website',
    url: siteUrl,
    siteName: 'AIStartupGuide.com',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'AIStartupGuide.com — Find the Right AI Tools for Your Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIStartupGuide.com — Find the Right AI Tools for Your Business',
    description:
      'Stop sifting through thousands of AI products. We test and curate the best tools for small businesses — organized by your industry, explained in plain English.',
    images: ['/og-default.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
