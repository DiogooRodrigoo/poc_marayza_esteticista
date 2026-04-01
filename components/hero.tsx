import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Clínica de Estética em Cidade Tiradentes
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              Realce sua beleza natural com tratamentos exclusivos
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Descubra tratamentos personalizados que combinam tecnologia avançada e cuidado artesanal para revelar o melhor de você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-base">
                <Link href="#contato">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="#servicos">
                  Conhecer Serviços
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Clientes Satisfeitas</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">8+</p>
                <p className="text-sm text-muted-foreground mt-1">Anos de Experiência</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-primary">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Tratamentos</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
                alt="Tratamento facial relaxante na clínica"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs hidden lg:block">
              <p className="font-serif text-lg font-semibold text-foreground mb-2">Primeira consulta</p>
              <p className="text-sm text-muted-foreground">Avaliação completa e personalizada para entender suas necessidades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
