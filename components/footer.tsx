import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-10 w-10 text-white" />
              <span className="font-heading font-bold text-xl">AIR Coach</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              La tua guida personale per il paracadutismo. Sempre disponibile, sempre al tuo fianco per aiutarti a
              crescere e divertirti in sicurezza.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/come-funziona" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Come Funziona
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>info@aircoach.it</li>
              <li>+39 123 456 7890</li>
              <li>
                <Link href="/contatti" className="text-secondary hover:underline">
                  Inviaci un messaggio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            &copy; {new Date().getFullYear()} AIR Coach. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/80">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/termini" className="hover:text-white transition-colors">
              Termini di Servizio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

