import Image from "next/image"
import Link from "next/link"

export default function AppDownload() {
  return (
    <section id="download" className="bg-primary text-white py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Impara a lanciarti in sicurezza</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Scarica AIR Coach oggi e porta con te un esperto di paracadutismo ovunque tu vada!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link href="#" className="inline-block">
            <Image
              src="/apple.png?height=60&width=200"
              alt="Scarica su App Store"
              width={200}
              height={60}
              className="h-[60px] w-auto"
            />
          </Link>
          <Link href="#" className="inline-block">
            <Image
              src="/google-play.png?height=60&width=200"
              alt="Scarica su Google Play"
              width={200}
              height={60}
              className="h-[60px] w-auto"
            />
          </Link>
        </div>

        <p className="text-primary-foreground/80 text-sm">Disponibile per iOS e Android. Scarica gratuitamente.</p>
      </div>
    </section>
  )
}

