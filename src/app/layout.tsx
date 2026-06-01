import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'बजरंगी — मतलब भरोसा | Paper Dona & Plate',
  description: 'Bajrangi paper dona & plate. 100 माने पूरे 100 — गिन के देखो। Machine sealed, count slip inside. Eshanura Enterprises Pvt. Ltd., Lakhimpur-Kheri, UP.',
  keywords: ['Bajrangi', 'paper dona', 'paper plate', 'Lakhimpur', 'Kheri', 'UP', 'bhandara', 'shadi', 'prasad', 'मतलब भरोसा', 'dona plate'],
  authors: [{ name: 'Eshanura Enterprises Pvt. Ltd.' }],
  icons: { icon: '/Bajrangi.png' },
  openGraph: {
    title: 'बजरंगी — मतलब भरोसा',
    description: '95 ko 100 kehna fraud hai। Bajrangi ke liye nahi। 100 माने पूरे 100।',
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
    title: 'बजरंगी — मतलब भरोसा',
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
      </head>
      <body className="antialiased bg-[#FAF3E0] text-[#1A0800]">
        {children}
      </body>
    </html>
  )
}
