import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bajrangi.eshanura.com'),
  title: 'Bajrangi — Paper Dona & Plate Wholesale Lakhimpur-Kheri, UP',
  description: 'बजरंगी दोना पत्तल | Premium Paper Dona & Plate Wholesale Manufacturer in Lakhimpur-Kheri, Uttar Pradesh. Machine-sealed count guaranteed. Order on WhatsApp: 9839436346.',
  keywords: [
    'Bajrangi',
    'paper dona',
    'paper plate',
    'Lakhimpur-Kheri',
    'UP',
    'wholesale supplier',
    'manufacturer',
    'dona pattal',
    'silver dona',
    'printed dona',
    'disposable plates bulk',
    'Eshanura Enterprises',
    'बजरंगी दोना पत्तल'
  ],
  authors: [{ name: 'Eshanura Enterprises Pvt. Ltd.' }],
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/Bajrangi.png?v=2', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'बजरंगी - Paper Dona & Plate Wholesale | Lakhimpur-Kheri, UP',
    description: '95 ko 100 kehna fraud hai। Bajrangi ke liye nahi। 100 माने पूरे 100। Machine sealed count guaranteed.',
    type: 'website',
    siteName: 'Bajrangi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'बजरंगी — मतलब भरोसा। 100 माने पूरे 100।',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'बजरंगी - Paper Dona & Plate Wholesale | Lakhimpur-Kheri, UP',
    description: '100 माने पूरे 100 — गिन के देखो।',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#C8181A" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "बजरंगी — Eshanura Enterprises Private Limited",
              "alternateName": "Bajrangi - Paper Dona & Plate Wholesale Lakhimpur-Kheri UP",
              "@id": "https://bajrangi.eshanura.com",
              "url": "https://bajrangi.eshanura.com",
              "telephone": "+919839436346",
              "description": "Bajrangi paper dona & plate wholesale supplier and manufacturer in Lakhimpur-Kheri, Uttar Pradesh. Chutney Dona 4\", Batasha Dona 5.5\", Samosa Dona 6\", Katora Dona 7\", Bada Katora 8\". Machine sealed, 100% count guaranteed.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "908, Hathipur Uttari Seth Ghat Road",
                "addressLocality": "Lakhimpur-Kheri",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "262701",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.9472,
                "longitude": 80.7694
              },
              "areaServed": "Uttar Pradesh, India",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Paper Dona & Plate Wholesale",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Chutney Dona 4 inch (चटनी दोना)",
                      "description": "Available in Color & Silver variants for chutney, pickle, and dip."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Batasha Dona 5.5 inch (बताशा दोना)",
                      "description": "Available in Color & Silver variants for batasha, sweet, and prasad."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Samosa Dona 6 inch (समोसा दोना)",
                      "description": "Available in Color & Silver variants for samosa, kachori, and snacks."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Katora Dona 7 inch (कटोरा दोना)",
                      "description": "Available in Color & Silver variants for dal, sabzi, and curry."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Bada Katora 8 inch (बड़ा कटोरा)",
                      "description": "Available in Color & Silver variants for bhandara, langar, and full meals."
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-[#FAF3E0] text-[#1A0800]">
        {children}
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M1W2S4N8Y6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M1W2S4N8Y6');
          `}
        </Script>
      </body>
    </html>
  )
}
