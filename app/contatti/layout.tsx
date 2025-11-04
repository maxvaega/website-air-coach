import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti AIR Coach - Richiedi Accesso Beta',
  description: 'Contatta AIR Coach per richiedere accesso alla beta o informazioni. Supporto per paracadutisti disponibile. Scrivi al team AIR Coach.',
  alternates: {
    canonical: 'https://website-air-coach.pages.dev/contatti'
  },
  openGraph: {
    title: 'Contatti AIR Coach - Richiedi Accesso Beta',
    description: 'Richiedi accesso alla beta o contatta il team AIR Coach',
    url: 'https://website-air-coach.pages.dev/contatti',
  }
}

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
