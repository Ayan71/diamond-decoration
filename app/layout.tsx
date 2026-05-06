import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diamond Mandap Decoration | Premium Wedding Decor Services',
  description: 'Make your wedding royal with Diamond Decoration. Elegant mandap designs, reception stages, haldi & mehndi setups crafted for your special day. Since 1887.',
  keywords: ['wedding decoration', 'mandap decoration', 'wedding mandap', 'reception stage', 'haldi decoration', 'mehndi setup', 'engagement decoration', 'Indian wedding'],
  authors: [{ name: 'Diamond Mandap Decoration' }],
  openGraph: {
    title: 'Diamond Mandap Decoration | Premium Wedding Decor Services',
    description: 'Make your wedding royal with Diamond Decoration. Elegant mandap designs crafted for your special day.',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${playfair.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
