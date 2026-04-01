"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-foreground uppercase">
            Marayza <span className="italic font-light text-primary">Estética</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.2em] font-medium uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="https://api.whatsapp.com/send?phone=5511982322586&text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-[11px] tracking-[0.15em] font-medium uppercase px-8 py-3.5 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-xl shadow-foreground/10"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground z-50 mix-blend-difference"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 absolute top-20 left-0 right-0 bg-background border-b border-border shadow-xl">
            <nav className="flex flex-col gap-6 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-3xl font-light tracking-widest text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-border mt-4">
                <a 
                  href="https://api.whatsapp.com/send?phone=5511982322586&text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8F" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center text-[11px] tracking-[0.2em] font-medium uppercase px-12 py-4 bg-foreground text-background w-full"
                >
                  Agendar no WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
