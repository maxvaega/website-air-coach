import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIR Coach: Always In Reach',
  description: 'La tua guida personale per il paracadutismo. Sempre disponibile ',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "1c8cdbe053d7499abdec0369a92c2ade"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
