import Image from "next/image"
import Link from "next/link"
import { Download, UserCircle, MessageSquare } from "lucide-react"
import AppDownload from "@/components/app-download"

export default function ComeFunziona() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Come Funziona AIR Coach</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Scopri come AIR Coach può trasformare la tua esperienza di paracadutismo con pochi semplici passi.
          </p>
        </div>
      </section>

      {/* Step by Step Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">1. Scarica l&apos;app</h2>
                  <p className="text-muted-foreground mb-4">
                    AIR Coach è disponibile gratuitamente su App Store e Google Play. Scaricala sul tuo smartphone e
                    avrai sempre con te un coach esperto.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="#" className="inline-block">
                      <Image
                        src="/placeholder.svg?height=50&width=150"
                        alt="Scarica su App Store"
                        width={150}
                        height={50}
                        className="h-[50px] w-auto"
                      />
                    </Link>
                    <Link href="#" className="inline-block">
                      <Image
                        src="/placeholder.svg?height=50&width=150"
                        alt="Scarica su Google Play"
                        width={150}
                        height={50}
                        className="h-[50px] w-auto"
                      />
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Screenshot dell'app AIR Coach"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Screenshot del profilo utente"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <UserCircle className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">2. Crea il tuo profilo</h2>
                  <p className="text-muted-foreground mb-4">
                    Imposta il tuo livello di esperienza, i tuoi obiettivi e le tue preferenze. AIR Coach utilizzerà
                    queste informazioni per personalizzare i consigli in base alle tue esigenze specifiche.
                  </p>
                  <p className="text-muted-foreground">
                    Più informazioni fornisci, più accurati saranno i consigli che riceverai. Puoi aggiornare il tuo
                    profilo in qualsiasi momento man mano che progredisci.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 order-2 md:order-1">
                  <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <MessageSquare className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                    3. Ricevi consigli in ogni momento
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    AIR Coach sarà sempre a tua disposizione per fornirti consigli, suggerimenti e promemoria. Che tu
                    stia pianificando un salto, preparandoti o riflettendo su un&apos;esperienza passata, l&apos;app ti
                    supporterà in ogni fase.
                  </p>
                  <p className="text-muted-foreground">
                    Accedi a tutorial, checklist di sicurezza e consigli personalizzati in base al tuo livello e alle
                    condizioni meteo attuali.
                  </p>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=300"
                      alt="Screenshot dei consigli dell'app"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom text-center">
          <h2 className="section-title">Guarda AIR Coach in azione</h2>
          <p className="section-subtitle">
            Questo breve video ti mostrerà come AIR Coach può aiutarti a migliorare la tua esperienza di paracadutismo.
          </p>

          <div className="max-w-3xl mx-auto mt-12 bg-white p-4 rounded-xl shadow-md">
            <div className="aspect-video relative bg-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white">Video dimostrativo di AIR Coach</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="#download" className="btn-primary">
              Prova AIR Coach Oggi
            </Link>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <AppDownload />
    </>
  )
}

