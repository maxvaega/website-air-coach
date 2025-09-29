"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
              <Image
                src="/favicon.svg"
                alt="AIR Coach Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain px-0.5"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">AIR Coach</h1>
              <p className="text-xs opacity-90">Always In Reach</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/come-funziona" className="hover:text-accent transition-colors">
              Come Funziona
            </Link>
            <Link href="/chi-siamo" className="hover:text-accent transition-colors">
              Chi Siamo
            </Link>
            <Link href="/contatti" className="hover:text-accent transition-colors">
              Contatti
            </Link>
            <Link href="/contatti">
              <Button variant="secondary" size="sm">
                Richiedi Accesso Beta
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/come-funziona" className="hover:text-accent transition-colors">
                Come Funziona
              </Link>
              <Link href="/chi-siamo" className="hover:text-accent transition-colors">
                Chi Siamo
              </Link>
              <Link href="/contatti" className="hover:text-accent transition-colors">
                Contatti
              </Link>
              <Link href="/contatti">
                <Button variant="secondary" size="sm" className="w-fit">
                  Richiedi Accesso Beta
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
