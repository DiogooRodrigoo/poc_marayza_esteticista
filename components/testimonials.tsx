"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Clara",
    role: "Cliente há 2 anos",
    content: "A Marayza transformou minha pele! Os tratamentos são incríveis e a equipe é super atenciosa. Recomendo de olhos fechados.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Juliana Santos",
    role: "Cliente há 1 ano",
    content: "Finalmente encontrei uma clínica de confiança perto de casa. O ambiente é lindo e os resultados são visíveis desde a primeira sessão.",
    rating: 5,
    avatar: "JS",
  },
  {
    name: "Fernanda Lima",
    role: "Cliente há 6 meses",
    content: "Fiz o tratamento de microagulhamento e amei! A profissional explicou tudo com calma e o resultado ficou natural e bonito.",
    rating: 5,
    avatar: "FL",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-32 lg:py-48 bg-background overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase inline-block border-b-2 border-primary/20 pb-2 mb-4">
              Vozes de Confiança
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground text-balance leading-[1.1]">
              Experiências que <br /> <span className="italic font-light opacity-60">inspiram</span> beleza
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="h-full p-10 lg:p-12 rounded-[3rem] bg-card/40 border border-border/40 backdrop-blur-sm hover:border-primary/20 hover:bg-card/60 transition-all duration-700 flex flex-col justify-between">
                
                {/* Quote Icon */}
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                    <Quote className="h-5 w-5 text-primary opacity-40" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-8">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary/60 text-primary/60" />
                    ))}
                  </div>

                  <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {`"${testimonial.content}"`}
                  </p>

                  <div className="pt-8 border-t border-border/40 flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-background group-hover:ring-primary/10 transition-all duration-700">
                      <span className="font-serif text-lg text-primary">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-serif text-lg text-foreground mb-0.5">{testimonial.name}</p>
                      <p className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground uppercase">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-8 right-12 text-[80px] font-serif font-black text-foreground/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-700">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Rating Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-12 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-8"
        >
           <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background" />
              ))}
            </div>
            <p className="text-[11px] tracking-widest font-bold text-muted-foreground uppercase">+1.200 avaliações de clientes satisfeitas</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl">4.9/5</span>
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <span className="text-[10px] tracking-widest font-bold text-muted-foreground uppercase ml-4">Google Business</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
