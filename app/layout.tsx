import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'AIR Coach - Guida Digitale per il Paracadutismo',
    template: '%s | AIR Coach'
  },
  description: 'AIR Coach: guida digitale per paracadutisti. Consigli esperti sempre disponibili, 24/7. Migliora le tue competenze in paracadutismo in sicurezza.',
  metadataBase: new URL('https://www.air-coach.com/'),
  alternates: {
    canonical: 'https://www.air-coach.com/'
  },
  openGraph: {
    title: 'AIR Coach - Guida Digitale per il Paracadutismo',
    description: 'Guida digitale per paracadutisti con consigli esperti disponibili 24/7',
    url: 'https://www.air-coach.com/',
    siteName: 'AIR Coach',
    locale: 'it_IT',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        {/* Cloudflare Web Analytics */}
        <script
          defer
          src='https://static.cloudflareinsights.com/beacon.min.js'
          data-cf-beacon='{"token": "1c8cdbe053d7499abdec0369a92c2ade"}'
        />
      </body>
    </html>
  )
}
