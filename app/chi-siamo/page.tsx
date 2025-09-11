import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Shield, Lightbulb, TrendingUp } from "lucide-react"

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Siamo un team di appassionati di paracadutismo e tecnologia, uniti dalla missione di rendere questo sport
            più sicuro e accessibile
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">La Nostra Missione</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AIR Coach è nata per supportare gli allievi paracadutisti, combinando la passione per il paracadutismo con
              tecnologia avanzata. Crediamo che ogni persona dovrebbe avere accesso a una guida esperta, sempre e
              ovunque.
            </p>
          </div>

          {/* Mission Image */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <img
              src="/team-of-skydivers-and-tech-professionals-working-t.jpg"
              alt="Il team di AIR Coach al lavoro"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Valori</h2>
            <p className="text-xl text-muted-foreground">
              Quattro principi fondamentali che guidano ogni nostra decisione
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibilità</h3>
                <p className="text-muted-foreground">
                  Rendere l'apprendimento del paracadutismo accessibile a tutti, indipendentemente dal livello di
                  esperienza
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sicurezza</h3>
                <p className="text-muted-foreground">
                  La sicurezza è sempre la nostra priorità assoluta in ogni funzionalità che sviluppiamo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovazione</h3>
                <p className="text-muted-foreground">
                  Utilizziamo le tecnologie più avanzate per creare soluzioni innovative nel mondo del paracadutismo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Progresso</h3>
                <p className="text-muted-foreground">
                  Aiutiamo ogni paracadutista a crescere e migliorare costantemente le proprie competenze
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Il Nostro Team</h2>
            <p className="text-xl text-muted-foreground">Incontra le persone che rendono possibile AIR Coach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Massimo */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">M</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Massimo</h3>
                <Badge variant="outline" className="mb-3">
                  Coach & Tech Enthusiast
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Coach di paracadutismo con la passione per le nuove tecnologie. Combina esperienza sul campo con
                  visione innovativa.
                </p>
              </CardContent>
            </Card>

            {/* Giulia */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">G</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Giulia</h3>
                <Badge variant="outline" className="mb-3">
                  Istruttrice & Jump Master
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Istruttrice di paracadutismo e jump master, esperta di tecnologia. Garantisce che ogni funzionalità
                  sia sicura e pratica.
                </p>
              </CardContent>
            </Card>

            {/* Diego */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">D</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Diego</h3>
                <Badge variant="outline" className="mb-3">
                  Coach & Frontend Developer
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Coach di paracadutismo ed esperto di sviluppo frontend. Crea interfacce intuitive per l'esperienza
                  utente.
                </p>
              </CardContent>
            </Card>

            {/* Antonio */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">A</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Antonio</h3>
                <Badge variant="outline" className="mb-3">
                  Backend & Cloud Expert
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Esperto di backend e cloud, vuole tenere i piedi per terra. Garantisce affidabilità e sicurezza
                  dell'infrastruttura.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">La Nostra Storia</h2>

            <div className="space-y-8">
              <Card className="p-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">L'Idea</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tutto è iniziato durante una sessione di addestramento, quando abbiamo notato quanto fosse difficile
                    per gli allievi ricordare tutte le procedure e i consigli ricevuti durante le lezioni. Ci siamo
                    chiesti: "E se potessimo creare un assistente virtuale che fosse sempre disponibile?"
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-accent">Lo Sviluppo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Combinando la nostra esperienza nel paracadutismo con competenze tecnologiche avanzate, abbiamo
                    iniziato a sviluppare AIR Coach. Ogni funzionalità è stata progettata e testata da istruttori
                    qualificati per garantire accuratezza e sicurezza.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-600">Il Futuro</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oggi AIR Coach è in fase beta, ma la nostra visione va oltre. Vogliamo creare una community globale
                    di paracadutisti connessi, dove la sicurezza e l'apprendimento continuo sono al centro di tutto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">La Nostra Visione</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Immaginiamo un mondo dove ogni paracadutista, dal principiante all'esperto, abbia accesso immediato a
            consigli esperti, procedure di sicurezza e supporto personalizzato. Un mondo dove la tecnologia amplifica
            l'esperienza umana, rendendo il paracadutismo più sicuro, più accessibile e più gratificante per tutti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Sicurezza Prima di Tutto
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Innovazione Continua
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Community Globale
            </Badge>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
