import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'BodiesBuddy - AI-Powered Fitness Tracking & Personal Training App',
  description: 'Transform your fitness journey with BodiesBuddy. AI-powered workout plans, progress tracking, nutrition guidance, and personalized coaching. Download now for iOS and Android.',
  keywords: 'fitness app, workout tracker, AI personal trainer, body transformation, nutrition tracking, fitness goals, health app, exercise planner',
  authors: [{ name: 'BodiesBuddy Team' }],
  creator: 'BodiesBuddy Inc.',
  publisher: 'BodiesBuddy Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bodiesbuddy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BodiesBuddy - AI-Powered Fitness Tracking & Personal Training App',
    description: 'Transform your fitness journey with BodiesBuddy. AI-powered workout plans, progress tracking, nutrition guidance, and personalized coaching.',
    url: 'https://bodiesbuddy.com',
    siteName: 'BodiesBuddy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BodiesBuddy - AI-Powered Fitness App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BodiesBuddy - AI-Powered Fitness Tracking & Personal Training App',
    description: 'Transform your fitness journey with BodiesBuddy. AI-powered workout plans, progress tracking, nutrition guidance, and personalized coaching.',
    images: ['/og-image.jpg'],
    creator: '@bodiesbuddy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured Data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "BodiesBuddy",
              "description": "AI-powered fitness tracking and personal training app",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            })
          }}
        />
        
        {/* Google Analytics - Replace with your actual GA ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
