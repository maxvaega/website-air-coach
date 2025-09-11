import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="bg-white rounded-lg p-4 w-fit">
                <Image
                  src="/air-coach-logo-full.jpg"
                  alt="AIR Coach - Always In Reach"
                  width={200}
                  height={120}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              La tua guida personale per il paracadutismo. Sempre disponibile per supportarti in ogni salto con consigli
              esperti e sicurezza garantita.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigazione</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/come-funziona" className="text-muted-foreground hover:text-primary transition-colors">
                  Come Funziona
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-muted-foreground hover:text-primary transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-muted-foreground hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@aircoach.com</li>
              <li>Supporto Beta</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AIR Coach. Tutti i diritti riservati. App in fase beta.</p>
        </div>
      </div>
    </footer>
  )
}
