import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/80 py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <p className="font-serif text-2xl tracking-tight text-foreground font-semibold mb-2">
            Marayza <span className="italic font-light text-primary">Esteticista</span>
          </p>
          <p className="text-[10px] tracking-[0.2em] font-medium uppercase text-muted-foreground text-center md:text-left">
            Estética Facial e Corporal
          </p>
        </div>

        {/* Center: Copyright & POC */}
        <div className="flex-1 text-center">
          <p className="text-[10px] leading-relaxed tracking-[0.15em] font-medium uppercase text-muted-foreground">
            © 2026 Desenvolvido por <strong className="text-foreground">Conecta Leste SP</strong>.<br className="hidden md:block"/> 
            Prova de Conceito (POC) do Cliente.<br className="hidden md:block"/> Todos os direitos reservados.
          </p>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex items-center gap-6 flex-1 justify-center md:justify-end">
          <a href="https://www.instagram.com/_marayzaesteticista/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram strokeWidth={1.5} className="w-6 h-6" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5511982322586&text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8F" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
            <MessageCircle strokeWidth={1.5} className="w-6 h-6" />
          </a>
        </div>

      </div>
    </footer>
  )
}
