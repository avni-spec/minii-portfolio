import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import SmoothScroll from './components/SmoothScroll'
import PageTransition from './components/PageTransition'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Minii — Content Creator & Model | Jamshedpur',
    template: '%s | Minii',
  },
  description: 'Jamshedpur-based content creator, model, and influencer creating engaging short-form content for brands, businesses, and events.',
  keywords: [
    'content creator',
    'model',
    'influencer',
    'Jamshedpur',
    'brand promotions',
    'lifestyle',
    'fashion',
    'travel',
    'reels',
    'UGC',
  ],
  authors: [{ name: 'Minii' }],
  creator: 'Minii',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://minii-portfolio.vercel.app',
    title: 'Minii — Content Creator & Model',
    description: 'Jamshedpur-based content creator creating engaging content for brands.',
    siteName: 'Minii Portfolio',
    images: [
      {
        url: '/images/minii/portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Minii',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minii — Content Creator & Model',
    description: 'Jamshedpur-based content creator.',
    images: ['/images/minii/portrait.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#08060a] text-[#f0e6d2]`}>
        <Loader />
        <Cursor />
        <ScrollProgress />
        <SmoothScroll>
          <PageTransition>
            <Navbar />
            <main className="pt-16 min-h-screen">{children}</main>
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  )
}