"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "R. Pau Jacaré, 11 - sala 5 - Conj. Hab. Santa Etelvina II, São Paulo - SP, 08485-070",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 98232-2586",
    href: "tel:+5511982322586",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    content: "Seg-Sáb: 9h às 19h",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redireciona para WhatsApp com a mensagem
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511982322586&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Contato
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance mb-6">
              Agende sua consulta
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Entre em contato conosco para agendar sua avaliação gratuita. Estamos prontos para ajudar você a alcançar seus objetivos de beleza.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-secondary/50 border-border/50">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.title}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_marayzaesteticista/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5511982322586&text=Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20%F0%9F%A7%9A%E2%80%8D%E2%99%80%EF%B8%8F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem ou serviço de interesse"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
