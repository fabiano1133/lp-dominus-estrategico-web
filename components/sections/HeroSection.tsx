"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("final-cta")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  const benefits = [
    "Análise profunda do seu posicionamento atual",
    "Landing Page estruturada para conversão real",
    "Comunicação alinhada com seu público-alvo",
  ]

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center" itemScope itemType="https://schema.org/WebPage" data-gtm-section="hero">
      {/* Imagem de Fundo - Ocupa toda a largura - Otimizada para LCP */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1920&auto=format&fit=crop')",
          willChange: "transform",
        }}
        role="img"
        aria-label="Estrutura arquitetônica moderna representando organização e método estratégico para criação de Landing Pages que convertem"
      >
        {/* Overlay com gradiente otimizado para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/50" aria-hidden="true"></div>
      </div>

      {/* Conteúdo sobreposto */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="max-w-3xl space-y-10 py-16 md:py-24">
          {/* H1 Otimizado - Quebrado estrategicamente */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary text-left">
              <span className="block">Criação de Landing Pages</span>
              <span className="block text-primary">que Convertem</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary/90 leading-tight">
              Transforme Visitantes em Clientes
            </p>
          </div>
          
          {/* Subheadline Otimizada - Mais curta e direta */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left max-w-2xl font-medium">
            Você investe em tráfego, mas as vendas não aparecem? 
            <span className="font-semibold text-primary"> Especializamos na criação de Landing Pages estratégicas</span> que convertem visitantes em clientes de forma previsível.
          </p>

          {/* CTA Super Destacado */}
          <div className="pt-2 space-y-3">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="group bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base md:text-lg px-10 md:px-14 py-7 md:py-8 h-auto font-bold w-full sm:w-auto shadow-2xl hover:shadow-secondary/50 transition-all duration-300 transform hover:scale-105 rounded-lg"
              data-gtm-element="cta-hero"
              data-gtm-action="click"
              data-gtm-label="solicitar-diagnostico-gratuito"
            >
              <span className="flex items-center gap-2">
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </span>
            </Button>
            
            {/* Microcopy abaixo do CTA */}
            <p className="text-sm md:text-base text-gray-600 font-medium flex items-center gap-2 justify-center sm:justify-start">
              <Check className="h-4 w-4 text-secondary flex-shrink-0" strokeWidth={3} />
              <span>Resposta em até 24h • Análise personalizada • Sem compromisso</span>
            </p>
          </div>

          {/* Benefícios com Cards Sutis */}
          <div className="pt-6 space-y-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Check className="h-5 w-5 md:h-6 md:w-6 text-secondary" strokeWidth={3} />
                  </div>
                </div>
                <p className="text-gray-800 text-base md:text-lg font-semibold leading-relaxed pt-0.5">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
