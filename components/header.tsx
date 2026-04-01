"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, ArrowRight, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

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
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-4 py-4 lg:px-8 lg:py-6",
          scrolled ? "translate-y-0" : "translate-y-2"
        )}
      >
        <div 
          className={cn(
            "mx-auto max-w-7xl transition-all duration-700 ease-in-out rounded-full border border-transparent",
            scrolled ? "glass px-6 lg:px-12 py-3 backdrop-blur-xl" : "bg-transparent px-2"
          )}
        >
          <div className="flex items-center justify-between h-14 lg:h-16">
            
            {/* Logo */}
            <Link href="/" className="group relative flex items-center gap-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-serif text-xl lg:text-2xl font-semibold tracking-tight text-foreground uppercase"
              >
                Marayza <span className="italic font-light text-primary transition-all duration-500 group-hover:tracking-widest">Estética</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={link.href}
                    className="text-[10px] tracking-[0.25em] font-medium uppercase text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary transition-all duration-500 -translate-x-1/2 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <a 
                  href="https://api.whatsapp.com/send?phone=5511982322586&text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-semibold uppercase px-8 py-3.5 bg-foreground text-background overflow-hidden transition-all duration-500 hover:pr-10 rounded-full"
                >
                  <span className="relative z-10 text-nowrap">Agendar Consulta</span>
                  <ArrowRight className="absolute right-4 h-4 w-4 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
                </a>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground z-50 relative rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Moved OUTSIDE header to avoid clipping by parent transform */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl px-6 pt-6 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col h-full max-w-sm mx-auto">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between h-14 mb-8">
                <Link href="/" className="group relative flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <div className="font-serif text-xl font-semibold tracking-tight text-foreground uppercase">
                    Marayza <span className="italic font-light text-primary">Estética</span>
                  </div>
                </Link>
                
                <button
                  className="p-2 text-foreground rounded-full hover:bg-black/5 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Fechar Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4 py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="font-serif text-[28px] font-light tracking-[0.15em] text-foreground/80 hover:text-primary transition-all duration-300 py-4 block border-b border-border/30 uppercase"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-10 border-t border-border/30 space-y-12"
              >
                <div className="flex flex-col gap-6">
                  <div className="space-y-1">
                    <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground">Fale conosco</p>
                    <p className="text-lg font-serif">11 98232-2586</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://www.instagram.com/marayzaesteticista/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-border/50 hover:border-primary hover:text-primary transition-all"
                    >
                      <Instagram size={20} strokeWidth={1} />
                    </a>
                  </div>
                </div>

                <a 
                  href="https://api.whatsapp.com/send?phone=5511982322586&text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] font-bold uppercase px-8 py-5 bg-foreground text-background rounded-full w-full active:scale-95 transition-all shadow-xl shadow-black/5"
                >
                  Agendar Agora
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
