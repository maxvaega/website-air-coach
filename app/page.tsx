import Image from "next/image"
import Link from "next/link"
import { ArrowDown, CheckCircle, Shield, User } from "lucide-react"
import AppDownload from "@/components/app-download"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
                AIR Coach: <span className="text-primary">Always In Reach</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                La tua guida personale per il paracadutismo. Sempre disponibile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#download" className="btn-primary">
                  Scarica l&apos;App
                </Link>
                <Link href="#perche" className="btn-secondary">
                  Scopri di più
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] w-full animate-float">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Paracadutista in volo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="text-primary h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AIR Coach Section */}
      <section id="perche" className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title">Perché AIR Coach?</h2>
          <p className="section-subtitle">
            Un&apos;app progettata da paracadutisti per paracadutisti, con tutto ciò di cui hai bisogno per migliorare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Sempre con te</h3>
              <p className="text-muted-foreground">
                Una guida esperta per ogni salto, disponibile 24/7 nella tua tasca.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Ti aiuta a crescere</h3>
              <p className="text-muted-foreground">
                Consigli su misura per il tuo livello, che si adattano al tuo progresso.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">Ti protegge</h3>
              <p className="text-muted-foreground">Tutto il supporto di cui hai bisogno per divertirti in sicurezza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <h2 className="section-title">Funzionalità Principali</h2>
          <p className="section-subtitle">
            AIR Coach combina tecnologia avanzata e conoscenza del paracadutismo per offrirti un&apos;esperienza unica.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Screenshot dell'app AIR Coach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-3">Sempre disponibile</h3>
                <p className="text-muted-foreground">
                  Consigli utili sempre disponibili nella tua tasca, anche offline quando sei in zona di lancio.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Screenshot dell'app AIR Coach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-3">Sicurezza Prima di Tutto</h3>
                <p className="text-muted-foreground">
                  Suggerimenti e linee guida per un&apos;esperienza sicura, con checklist pre-lancio e procedure
                  d&apos;emergenza.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Screenshot dell'app AIR Coach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-3">Un Amico Esperto</h3>
                <p className="text-muted-foreground">
                  Ti conosce e ti supporta sempre, adattando i consigli al tuo livello di esperienza e ai tuoi
                  obiettivi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="section-title">Cosa Dicono i Nostri Utenti</h2>
          <p className="section-subtitle">
            Scopri le esperienze di chi utilizza AIR Coach per migliorare i propri salti.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden relative">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Marco" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Marco</h4>
                  <p className="text-sm text-muted-foreground">Allievo paracadutista</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Grazie ad AIR Coach, ho migliorato i miei salti in pochissimo tempo! L&apos;app mi ha dato consigli
                preziosi che il mio istruttore ha apprezzato molto."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden relative">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Laura" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Laura</h4>
                  <p className="text-sm text-muted-foreground">Paracadutista intermedia</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "AIR Coach è come avere un istruttore personale sempre con me. Mi ha aiutato a superare le mie paure e a
                progredire costantemente."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden relative">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Giovanni" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Giovanni</h4>
                  <p className="text-sm text-muted-foreground">Istruttore di paracadutismo</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Consiglio AIR Coach a tutti i miei allievi. È uno strumento complementare perfetto che li aiuta a
                ricordare le tecniche anche quando non sono con me."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <AppDownload />
    </>
  )
}

