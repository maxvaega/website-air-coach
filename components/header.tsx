"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10" />
          <span className="font-heading font-bold text-xl text-primary">AIR Coach</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/come-funziona" className="font-medium hover:text-primary transition-colors">
            Come Funziona
          </Link>
          <Link href="/chi-siamo" className="font-medium hover:text-primary transition-colors">
            Chi Siamo
          </Link>
          <Link href="/contatti" className="font-medium hover:text-primary transition-colors">
            Contatti
          </Link>
          <Link href="#download" className="btn-primary">
            Scarica l&apos;App
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/come-funziona"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Come Funziona
            </Link>
            <Link
              href="/chi-siamo"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              href="/contatti"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </Link>
            <Link href="#download" className="btn-primary text-center mt-2" onClick={() => setIsMenuOpen(false)}>
              Scarica l&apos;App
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

