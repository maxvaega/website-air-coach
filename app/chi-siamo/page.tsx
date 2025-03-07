import Image from "next/image"
import { Heart, Shield, Zap, Rocket } from "lucide-react"
import AppDownload from "@/components/app-download"

export default function ChiSiamo() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Chi Siamo</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Scopri la storia e la missione dietro AIR Coach, l&apos;app che sta rivoluzionando il mondo del
            paracadutismo.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">La Nostra Missione</h2>
              <p className="text-lg text-muted-foreground mb-6">
                AIR Coach è nata per supportare gli allievi paracadutisti, combinando la passione per il paracadutismo
                con tecnologia avanzata.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                La nostra missione è rendere il paracadutismo più accessibile, sicuro e divertente per tutti, fornendo
                una guida esperta sempre disponibile nella tasca di ogni paracadutista.
              </p>
              <p className="text-lg text-muted-foreground">
                Crediamo che con il giusto supporto, chiunque possa superare le proprie paure e vivere l&apos;emozione
                unica del volo libero in totale sicurezza.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Il team di AIR Coach in azione"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <h2 className="section-title">I Nostri Valori</h2>
          <p className="section-subtitle">
            Questi sono i principi che guidano ogni aspetto del nostro lavoro e della nostra app.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Accessibilità</h3>
              <p className="text-muted-foreground">
                Rendiamo il paracadutismo accessibile a tutti, eliminando barriere e fornendo supporto continuo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Sicurezza</h3>
              <p className="text-muted-foreground">
                La sicurezza è la nostra priorità assoluta in ogni consiglio, funzionalità e aggiornamento.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Innovazione</h3>
              <p className="text-muted-foreground">
                Utilizziamo le tecnologie più avanzate per offrire un&apos;esperienza sempre migliore e più utile.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Progresso</h3>
              <p className="text-muted-foreground">
                Crediamo nel miglioramento continuo, sia per la nostra app che per i nostri utenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title">Il Nostro Team</h2>
          <p className="section-subtitle">Incontra le persone appassionate che hanno creato AIR Coach.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Marco Rossi" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-heading mb-2">Marco Rossi</h3>
                <p className="text-primary mb-4">Fondatore & CEO</p>
                <p className="text-muted-foreground">
                  Istruttore di paracadutismo con oltre 2000 lanci e una passione per la tecnologia.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image src="/placeholder.svg?height=300&width=300" alt="Laura Bianchi" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-heading mb-2">Laura Bianchi</h3>
                <p className="text-primary mb-4">CTO</p>
                <p className="text-muted-foreground">
                  Sviluppatrice con esperienza in AI e machine learning, appassionata di sport estremi.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-64 relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Alessandro Verdi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-heading mb-2">Alessandro Verdi</h3>
                <p className="text-primary mb-4">Responsabile Sicurezza</p>
                <p className="text-muted-foreground">
                  Ex-militare con specializzazione in paracadutismo e vasta esperienza in protocolli di sicurezza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <AppDownload />
    </>
  )
}

