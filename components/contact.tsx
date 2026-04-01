"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Instagram, MessageCircle, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "R. Pau Jacaré, 11 - sala 5 - Conj. Hab. Santa Etelvina II, São Paulo - SP, 08485-070",
  },
  {
    icon: Phone,
    title: "Agendamento",
    content: "(11) 98232-2586",
    href: "tel:+5511982322586",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Segunda a Sábado: 9h às 19h",
  },
]

export function Contact() {
  return (
    <section id="contato" className="relative py-32 lg:py-48 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20 lg:gap-32 items-center">
          
          {/* Details side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase inline-block border-b-2 border-primary/20 pb-2 mb-4">
                Inicie sua Jornada
              </p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground text-balance leading-[1.1]">
                Um toque de <br /> <span className="italic font-light opacity-60">exclusividade</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-[15px] font-light max-w-sm">
                Estamos prontos para desenhar um protocolo exclusivo para você. Agende sua consultoria e descubra o poder do autocuidado.
              </p>
            </div>

            <div className="space-y-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <info.icon className="h-5 w-5 text-primary opacity-60" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] tracking-[0.2em] font-bold text-muted-foreground uppercase">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} className="font-serif text-xl text-foreground hover:text-primary transition-colors block leading-tight">
                        {info.content}
                      </a>
                    ) : (
                      <p className="font-serif text-xl text-foreground leading-tight max-w-[280px]">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
             <div className="flex items-center gap-8 pt-8 border-t border-border/40">
                <a
                  href="https://www.instagram.com/_marayzaesteticista/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold text-muted-foreground uppercase hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5511982322586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[10px] tracking-[0.2em] font-bold text-muted-foreground uppercase hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
             </div>
          </motion.div>

          {/* New Focused WhatsApp Card - Replaces the form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative"
          >
            <div className="glass p-8 md:p-16 lg:p-20 rounded-[3rem] md:rounded-[4rem] border border-white/40 shadow-2xl relative z-10 overflow-hidden text-center space-y-8 md:space-y-10">
               {/* Visual Accent */}
               <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-primary/10 flex items-center justify-center animate-pulse">
                    <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                  </div>
               </div>

               <div className="space-y-6">
                <h3 className="font-serif text-3xl md:text-5xl font-medium text-foreground tracking-tight">Consultoria <br /> <span className="italic font-light opacity-60">Personalizada</span></h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-[15px] font-light max-w-md mx-auto">
                  Sem formulários, sem esperas. Fale diretamente com nossa especialista e receba um atendimento exclusivo via WhatsApp.
                </p>
               </div>
              
               <div className="pt-6">
                 <Button asChild className="w-full h-16 md:h-20 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white border-0 shadow-2xl shadow-[#25D366]/40 transition-all duration-700 hover:scale-105 active:scale-95 group px-4 md:px-8">
                    <a href="https://api.whatsapp.com/send?phone=5511982322586" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 md:gap-4">
                     <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                       <MessageCircle className="h-5 w-5 md:h-6 md:w-6 fill-white" />
                     </div>
                     <span className="text-[9px] md:text-[11px] tracking-[0.1em] md:tracking-[0.4em] font-black uppercase whitespace-nowrap">Agendar via WhatsApp</span>
                     <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2 group-hover:translate-x-2 transition-transform shrink-0" />
                   </a>
                 </Button>
               </div>

               <p className="text-[9px] tracking-[0.2em] font-bold text-muted-foreground uppercase opacity-60">Atendimento Prioritário • Resultados Reais</p>
            </div>

            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[150px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
