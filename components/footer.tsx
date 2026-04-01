import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/40 py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid md:grid-cols-3 gap-16 items-start pb-20 border-b border-border/40">
          
          {/* Logo & Identity */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <p className="font-serif text-3xl tracking-tight text-foreground font-medium mb-1">
                Marayza <span className="italic font-light opacity-60">Estética</span>
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-primary/40 to-transparent" />
            </Link>
            <p className="text-[10px] tracking-[0.3em] font-bold text-muted-foreground uppercase leading-relaxed max-w-[200px]">
              Beleza que transcende, cuidado que transforma.
            </p>
          </div>

          {/* Quick Links / Sitemap */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.3em] font-bold text-foreground uppercase border-l-2 border-primary/40 pl-3">Tratamentos</p>
              <ul className="space-y-4">
                <li><Link href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Facial</Link></li>
                <li><Link href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Corporal</Link></li>
                <li><Link href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Massagens</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.3em] font-bold text-foreground uppercase border-l-2 border-primary/40 pl-3">Institucional</p>
              <ul className="space-y-4">
                <li><Link href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Sobre Nós</Link></li>
                <li><Link href="#depoimentos" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Resultados</Link></li>
                <li><Link href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Agendamento</Link></li>
              </ul>
            </div>
          </div>

          {/* Social Presence */}
          <div className="flex flex-col md:items-end space-y-8">
             <div className="flex items-center gap-6">
                <a 
                  href="https://www.instagram.com/_marayzaesteticista/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-500"
                  aria-label="Instagram"
                >
                  <Instagram strokeWidth={1} className="w-6 h-6 text-foreground" />
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=5511982322586" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-500"
                  aria-label="WhatsApp"
                >
                  <MessageCircle strokeWidth={1} className="w-6 h-6 text-foreground" />
                </a>
             </div>
             <p className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground uppercase selection:bg-primary/20 md:text-right">
               © 2026 Marayza Estética. <br />
               Todos os direitos reservados.
             </p>
          </div>
        </div>

        {/* Legal & Credits - Taste Skill Minimalist */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-[9px] tracking-[0.2em] font-bold text-muted-foreground/60 uppercase">
             <span className="hover:text-foreground cursor-default transition-colors">São Paulo, BR</span>
             <div className="w-1 h-1 bg-border rounded-full" />
             <span className="hover:text-foreground cursor-default transition-colors">Beauty & Wellness</span>
          </div>
          <p className="text-[9px] tracking-[0.3em] font-black uppercase text-muted-foreground/40 text-center md:text-right">
            Curadoria Digital por <span className="text-primary/60">Conecta Leste SP</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
