"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"

const features = [
  "Especialistas Certificadas",
  "Tecnologia de Alta Performance",
  "Protocolos Personalizados",
  "Bioestimuladores de última geração",
  "Ambiente de Luxo e Conforto",
  "Foco na Beleza Natural",
]

export function About() {
  return (
    <section id="sobre" className="relative py-32 lg:py-48 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Images - Asymmetric & Layered */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 grid grid-cols-12 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="col-span-8 aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10"
              >
                <img
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800&auto=format&fit=crop"
                  alt="Clínica Marayza Estética"
                  className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 40, y: -40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
                className="col-span-6 -mt-[40%] ml-auto aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/15 border-8 border-background z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=600&auto=format&fit=crop"
                  alt="Procedimento estético profissional"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Experience Badge - Taste Skill Style */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] border border-white/40 hidden md:block z-30"
            >
              <div className="space-y-1">
                <p className="font-serif text-5xl font-medium text-primary">08</p>
                <p className="text-[10px] tracking-[0.4em] font-bold text-muted-foreground uppercase">Anos de Excelência</p>
              </div>
            </motion.div>

            {/* Decorative Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[120px] -z-10" />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase selection:bg-primary/20">
                A Alma da Marayza Estética
              </p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground text-balance leading-[1.1]">
                Ciência, arte <br /> e <span className="italic font-light opacity-60">dedicação</span>
              </h2>
              <div className="w-20 h-[2px] bg-primary/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-xl text-muted-foreground leading-relaxed font-light text-pretty selection:bg-primary/20">
                A Marayza Estética não é apenas uma clínica. É um espaço de transformação onde cada detalhe foi pensado para acolher sua essência. 
              </p>
              <p className="text-muted-foreground leading-relaxed text-[15px] selection:bg-primary/20">
                Localizada em Cidade Tiradentes, nossa missão é democratizar a estética de alto padrão, unindo biotecnologia de ponta a um atendimento artesanal e profundamente humano.
              </p>
            </motion.div>

            {/* Features - Grid with motion */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid sm:grid-cols-2 gap-y-6 gap-x-12"
            >
              {features.map((feature, index) => (
                <div key={index} className="group flex items-center gap-4 py-2 border-b border-border/40 hover:border-primary/20 transition-all duration-500">
                  <CheckCircle2 className="h-4 w-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[11px] tracking-[0.1em] font-semibold text-foreground/80 uppercase group-hover:text-primary transition-colors">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <a 
                href="https://api.whatsapp.com/send?phone=5511982322586"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-6"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.3em] font-bold text-muted-foreground uppercase mb-1">Nosso Propósito</span>
                  <span className="text-lg font-serif group-hover:text-primary transition-colors flex items-center gap-2">
                    Conheça nossa história
                    <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
