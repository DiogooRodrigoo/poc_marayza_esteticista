import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Maria Clara",
    role: "Cliente há 2 anos",
    content: "A Essence transformou minha pele! Os tratamentos são incríveis e a equipe é super atenciosa. Recomendo de olhos fechados.",
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

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance mb-6">
            O que nossas clientes dizem
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A satisfação das nossas clientes é nossa maior recompensa. Veja o que elas têm a dizer sobre a experiência na Essence Estética.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50">
              <CardContent className="p-6 lg:p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
