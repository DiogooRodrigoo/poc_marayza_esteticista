import { Sparkles, Heart, Leaf, Sun, Zap, Droplets } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Sparkles,
    title: "Limpeza de Pele",
    description: "Limpeza profunda que remove impurezas e renova a pele, deixando-a radiante e saudável.",
    price: "A partir de R$ 120",
  },
  {
    icon: Heart,
    title: "Tratamento Facial",
    description: "Procedimentos personalizados para rejuvenescimento, hidratação e revitalização da pele.",
    price: "A partir de R$ 180",
  },
  {
    icon: Leaf,
    title: "Peeling",
    description: "Renovação celular que melhora a textura da pele e reduz manchas e linhas finas.",
    price: "A partir de R$ 200",
  },
  {
    icon: Sun,
    title: "Microagulhamento",
    description: "Estimula a produção de colágeno para uma pele mais firme e com aspecto rejuvenescido.",
    price: "A partir de R$ 350",
  },
  {
    icon: Zap,
    title: "Radiofrequência",
    description: "Tecnologia que combate a flacidez e melhora o contorno facial de forma não invasiva.",
    price: "A partir de R$ 250",
  },
  {
    icon: Droplets,
    title: "Hidratação Profunda",
    description: "Tratamento intensivo que devolve a luminosidade e maciez natural da sua pele.",
    price: "A partir de R$ 150",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance mb-6">
            Tratamentos para realçar sua beleza
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Oferecemos uma variedade de tratamentos estéticos com produtos de alta qualidade e profissionais especializados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
