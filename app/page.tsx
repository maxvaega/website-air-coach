import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Smartphone, Star, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            🚀 Attualmente in Beta
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">AIR Coach: Always In Reach</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            La tua guida personale per il paracadutismo. Sempre disponibile
          </p>
          <p className="text-lg mb-8 opacity-80">
            AIR Coach è ancora in fase beta e sarà presto disponibile pubblicamente
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/contatti">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Richiedi Accesso alla Beta
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-light px-8"
            >
              Scarica l&#39;App (Presto disponibile)
            </Button>
            <Link href="#features">
              <Button
                size="lg"
                variant="ghost"
                className="text-lg px-8 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Scopri di più
              </Button>
            </Link>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <img
              src="/parachutist-in-flight-with-open-blue-sky-and-cloud2.jpg"
              alt="Paracadutista in volo con cielo aperto"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary-foreground/60" />
        </div>
      </section>

      {/* Why AIR Coach Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché AIR Coach?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tre motivi fondamentali per cui AIR Coach rivoluzionerà la tua esperienza di paracadutismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sempre con te</h3>
                <p className="text-muted-foreground">
                  Una guida esperta per ogni salto, sempre disponibile nella tua tasca
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ti aiuta a crescere</h3>
                <p className="text-muted-foreground">Consigli su misura per il tuo livello di esperienza e obiettivi</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ti protegge</h3>
                <p className="text-muted-foreground">
                  Tutto il supporto di cui hai bisogno per divertirti in sicurezza
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funzionalità Principali</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scopri come AIR Coach trasforma l'esperienza di apprendimento del paracadutismo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sempre Disponibile</h3>
                  <p className="text-muted-foreground">
                    Consigli utili sempre disponibili nella tua tasca, 24/7 per ogni tua domanda
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sicurezza Prima di Tutto</h3>
                  <p className="text-muted-foreground">
                    Suggerimenti e linee guida per un'esperienza sicura in ogni condizione
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Un Amico Esperto</h3>
                  <p className="text-muted-foreground">
                    Ti conosce e ti supporta sempre, adattandosi al tuo stile e livello
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/smartphone-air-coach.jpg"
                alt="Interfaccia dell'app AIR Coach"
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cosa Dicono i Nostri Utenti</h2>
            <p className="text-xl text-muted-foreground">Testimonianze dai beta tester di AIR Coach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Grazie ad AIR Coach, sono pronto per prendere la licenza! Mi ha guidato passo dopo passo."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-primary">A</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alessandro</p>
                    <p className="text-sm text-muted-foreground">Allievo paracadutista</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "AIR Coach è come avere un istruttore personale sempre con me. Mi ha aiutato a superare le mie paure."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-accent">G</span>
                  </div>
                  <div>
                    <p className="font-semibold">Gaia</p>
                    <p className="text-sm text-muted-foreground">Paracadutista licenziata</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Consiglio AIR Coach a tutti i miei allievi. È uno strumento complementare perfetto."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-green-600">D</span>
                  </div>
                  <div>
                    <p className="font-semibold">Daniele</p>
                    <p className="text-sm text-muted-foreground">Istruttore di paracadutismo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impara a lanciarti in sicurezza, usa AIR Coach!</h2>
          <p className="text-xl mb-8 opacity-90">
            Unisciti alla community di paracadutisti che si affidano ad AIR Coach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Richiedi Accesso alla Beta
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-light"
            >
              Scarica l&#39;app (presto disponibile)  
            </Button>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
