"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 lg:gap-24 items-center">
          
          {/* Content side (Text) */}
          <div className="relative order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] tracking-[0.2em] font-bold uppercase mb-8">
                <Sparkles className="h-3 w-3" />
                <span>Estética Avançada em São Paulo</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl font-medium text-foreground leading-[1.1] mb-8 tracking-tight text-balance">
                Realce sua <span className="italic text-primary">beleza</span> natural
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-12 text-pretty font-light uppercase tracking-wide">
                Tratamentos exclusivos que unem tecnologia e arte para revelar a sua melhor versão.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Button asChild size="lg" className="rounded-full h-14 px-10 text-[11px] tracking-[0.2em] font-bold uppercase shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300">
                  <Link href="#servicos">
                    Ver Tratamentos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-10 text-[11px] tracking-[0.2em] font-bold uppercase border-foreground/10 hover:bg-foreground hover:text-background transition-all duration-500">
                  <Link href="#contato">
                    Consultoria Online
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-x-16 gap-y-8 pt-12 border-t border-border/50">
                <div>
                  <p className="font-serif text-4xl font-medium text-foreground">500+</p>
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2 font-bold">Clientes</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-medium text-foreground">08+</p>
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2 font-bold">Anos de Exp.</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-medium text-foreground tracking-tighter">Premium</p>
                  <p className="text-[10px] tracking-widest text-muted-foreground uppercase mt-2 font-bold">Atendimento</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual side */}
          <div className="relative order-2 lg:order-2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="aspect-[3/4] lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10 border-4 border-white/20 bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200"
                  alt="Beleza natural e cuidado"
                  className="w-full h-full object-cover grayscale-[10%] transition-transform duration-1000 hover:scale-105"
                />
              </div>

              {/* Floating Element 1 - Info Card (Refined with Image) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 glass p-5 md:p-6 rounded-[2rem] max-w-[180px] md:max-w-[220px] border border-white/40 shadow-2xl z-20 pointer-events-none"
              >
                {/* Embedded Image in Card */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-4 border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1516238840914-94dfc0c873ae?auto=format&fit=crop&q=80&w=400" 
                    alt="Facial Analysis"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-primary/40 rounded-full" />)}
                </div>
                <p className="font-serif text-sm md:text-md leading-tight mb-2 tracking-tight">Avaliação Digital Gratuita</p>
                <p className="text-[9px] md:text-[10px] tracking-relaxed leading-relaxed text-muted-foreground uppercase font-bold opacity-70">Análise personalizada instantânea.</p>
              </motion.div>

              {/* Floating Element 2 - Badge (Rotating circle) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 md:-top-16 md:-left-16 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center pointer-events-none"
              >
                 <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text className="text-[7px] md:text-[8px] tracking-[0.4em] uppercase fill-foreground/30 font-bold">
                    <textPath href="#circlePath">
                      Beauty Excellence • Personal Care • Estética Premium • 
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_15px_oklch(0.55_0.12_350/0.4)]" />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Background Shape */}
            <div className="absolute -inset-10 border border-foreground/[0.03] rounded-[4rem] -z-10 translate-x-4 translate-y-4" />
          </div>

        </div>
      </div>
    </section>
  )
}
