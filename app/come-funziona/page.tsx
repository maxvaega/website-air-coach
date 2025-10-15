import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, UserPlus, MessageCircle, Play } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Come Funziona AIR Coach - Sicurezza Paracadutismo',
  description: 'Scopri come funziona AIR Coach: guida passo-passo per paracadutisti. Consigli di sicurezza, supporto 24/7 e apprendimento personalizzato.',
  alternates: {
    canonical: '/come-funziona'
  },
  openGraph: {
    title: 'Come Funziona AIR Coach - Sicurezza Paracadutismo',
    description: 'Guida passo-passo per paracadutisti con sicurezza al primo posto',
    url: 'https://website-air-coach.pages.dev/come-funziona',
  }
}

export default function ComeFunzionaPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Come Funziona AIR Coach</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Scopri come AIR Coach ti accompagna nel tuo percorso di apprendimento del paracadutismo, passo dopo passo,
            in totale sicurezza
          </p>
        </div>
      </section>

      {/* Step by Step Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Inizia in 3 Semplici Passi</h2>
            <p className="text-xl text-muted-foreground">Il tuo viaggio verso il paracadutismo sicuro inizia qui</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <Card className="relative p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    1
                  </Badge>
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scarica l'App</h3>
                <p className="text-muted-foreground mb-4">
                  Presto disponibile gratuitamente su App Store e Google Play. Al momento disponibile solo ai beta
                  tester selezionati.
                </p>
                <Badge variant="outline">Presto Disponibile</Badge>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    2
                  </Badge>
                </div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <UserPlus className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Crea il Tuo Profilo</h3>
                <p className="text-muted-foreground mb-4">
                  Imposta il tuo livello di esperienza e i tuoi dati personali. AIR Coach si adatterà alle tue esigenze
                  specifiche.
                </p>
                <Badge variant="outline">Personalizzazione</Badge>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    3
                  </Badge>
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ricevi Consigli</h3>
                <p className="text-muted-foreground mb-4">
                  Apri l'app e ricevi consigli in ogni momento. AIR Coach sarà sempre a tua disposizione, ad ogni tua
                  domanda.
                </p>
                <Badge variant="outline">24/7 Disponibile</Badge>
              </CardContent>
            </Card>
          </div>

          {/* App Interface Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Interfaccia Intuitiva</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Chat Intelligente:</strong> Fai domande in linguaggio naturale e ricevi risposte immediate
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Consigli Verificati:</strong> Suggerimenti sicuri basati sul tuo livello
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Sicurezza al primo posto:</strong> Consigli basati sulle migliori pratiche di sicurezza
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/smartphone-air-coach2.jpg"
                alt="Interfaccia dell'app AIR Coach"
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Guarda AIR Coach in Azione</h2>
            <p className="text-xl text-muted-foreground">Un breve video dimostrativo delle funzionalità principali</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Play className="w-20 h-20 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Video Dimostrativo</h3>
                  <p className="text-lg opacity-90">Presto disponibile</p>
                  <Badge variant="secondary" className="mt-4">
                    Demo in arrivo
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funzionalità Avanzate</h2>
            <p className="text-xl text-muted-foreground">Scopri tutto quello che AIR Coach può fare per te</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3 text-primary">Rivedere le procedure</h4>
                <p className="text-muted-foreground text-sm">
                  Accesso rapido alle procedure di sicurezza e gestione delle emergenze
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3 text-primary">Preparati per l'esame</h4>
                <p className="text-muted-foreground text-sm">
                  L'esame di teoria si avvicina? Fai pratica con quiz interattivi e ricevi feedback immediati
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3 text-primary">Esercizi pratici</h4>
                <p className="text-muted-foreground text-sm">
                  Suggerimenti su esercizi pratici da fare a terra e in aria per migliorare la tua tecnica
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto a Iniziare?</h2>
          <p className="text-xl mb-8 opacity-90">Richiedi l'accesso alla beta e sii tra i primi a provare AIR Coach</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Richiedi Accesso Beta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
