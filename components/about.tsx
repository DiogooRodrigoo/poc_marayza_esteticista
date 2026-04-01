import { CheckCircle2 } from "lucide-react"

const features = [
  "Profissionais especializados e certificados",
  "Produtos de alta qualidade e procedência",
  "Ambiente acolhedor e confortável",
  "Atendimento personalizado para cada cliente",
  "Tecnologia de ponta em estética",
  "Localização acessível em Cidade Tiradentes",
]

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=600&auto=format&fit=crop"
                    alt="Interior da clínica de estética"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=600&auto=format&fit=crop"
                    alt="Profissional realizando tratamento"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
              <p className="font-serif text-2xl font-semibold text-center">8+</p>
              <p className="text-sm text-center opacity-90">Anos de Experiência</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Sobre Nós
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance mb-6">
              Dedicação à sua beleza e bem-estar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Essence Estética nasceu do amor pela beleza e pelo cuidado personalizado. 
              Localizada no coração de Cidade Tiradentes, nossa clínica oferece um espaço 
              acolhedor onde você pode relaxar e confiar nos melhores tratamentos estéticos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa equipe de profissionais altamente qualificados está comprometida em 
              entender suas necessidades únicas e criar um plano de tratamento personalizado 
              para realçar sua beleza natural.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
