"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Leaf, Sun, Zap, Droplets, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Sparkles,
    title: "Limpeza de Pele",
    description: "Limpeza profunda que remove impurezas e renova a pele, deixando-a radiante e saudável.",
    price: "A partir de R$ 120",
    color: "oklch(0.55 0.06 350)"
  },
  {
    icon: Heart,
    title: "Tratamento Facial",
    description: "Procedimentos personalizados para rejuvenescimento, hidratação e revitalização da pele.",
    price: "A partir de R$ 180",
    color: "oklch(0.85 0.04 30)"
  },
  {
    icon: Leaf,
    title: "Peeling",
    description: "Renovação celular que melhora a textura da pele e reduz manchas e linhas finas.",
    price: "A partir de R$ 200",
    color: "oklch(0.55 0.04 150)"
  },
  {
    icon: Sun,
    title: "Microagulhamento",
    description: "Estimula a produção de colágeno para uma pele mais firme e com aspecto rejuvenescido.",
    price: "A partir de R$ 350",
    color: "oklch(0.65 0.12 60)"
  },
  {
    icon: Zap,
    title: "Radiofrequência",
    description: "Tecnologia que combate a flacidez e melhora o contorno facial de forma não invasiva.",
    price: "A partir de R$ 250",
    color: "oklch(0.45 0.08 250)"
  },
  {
    icon: Droplets,
    title: "Hidratação Profunda",
    description: "Tratamento intensivo que devolve a luminosidade e maciez natural da sua pele.",
    price: "A partir de R$ 150",
    color: "oklch(0.75 0.08 200)"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

export function Services() {
  return (
    <section id="servicos" className="relative py-32 lg:py-48 overflow-hidden bg-background">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header - Asymmetric & Sophisticated */}
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase inline-block border-b-2 border-primary/20 pb-2 mb-4 selection:bg-primary/20">
              Menu de Experiências
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground text-balance leading-[1.1]">
              Tratamentos que <br /> <span className="italic font-light opacity-60">celebram</span> sua pele
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md lg:ml-auto"
          >
            <p className="text-muted-foreground leading-relaxed text-pretty uppercase text-[11px] tracking-[0.1em] font-medium selection:bg-primary/20">
              Cada procedimento é uma jornada personalizada. Utilizamos biotecnologia avançada e cuidado individualizado para entregar resultados que transcendem a estética.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Framer Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              <Card className="h-full border-0 bg-transparent shadow-none relative transition-all duration-700 flex flex-col">
                <CardContent className="p-0 flex flex-col h-full bg-transparent">
                  {/* Icon Area */}
                  <div className="relative mb-8 inline-block">
                    <div 
                      className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-700 group-hover:rotate-[10deg] group-hover:scale-110 relative z-10"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon className="h-7 w-7 transition-colors duration-500" style={{ color: service.color }} />
                    </div>
                    {/* Shadow Layer */}
                    <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-full" style={{ backgroundColor: service.color }} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow space-y-4 pr-6">
                    <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-500 flex items-center gap-2">
                      {service.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[13px] tracking-wide font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-700">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing Pin - Taste Skill Principle */}
                  <div className="mt-8 pt-6 border-t border-border/40 flex justify-between items-center group-hover:border-primary/20 transition-colors duration-500">
                    <p className="text-[10px] tracking-[0.3em] font-bold text-muted-foreground uppercase">Investimento</p>
                    <p className="font-serif text-lg text-foreground font-medium">{service.price}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Explore All Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center lg:justify-start"
        >
          <a 
            href="https://api.whatsapp.com/send?phone=5511982322586"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-[10px] tracking-[0.5em] font-black uppercase text-foreground/40 hover:text-primary transition-all duration-700 hover:tracking-[0.6em]"
          >
            Explorar Catálogo Completo
            <div className="h-[2px] w-12 bg-foreground/10 group-hover:bg-primary/40 group-hover:w-20 transition-all duration-700" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
