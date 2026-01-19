"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("final-cta")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  const benefits = [
    "Diagnóstico preciso do posicionamento atual",
    "Estrutura estratégica de comunicação",
    "Comunicação coesa com o público-alvo",
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center" itemScope itemType="https://schema.org/WebPage">
      {/* Imagem de Fundo - Ocupa toda a largura */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Overlay com gradiente fade da esquerda (menos visível) para direita (100% visível) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
      </div>

      {/* Conteúdo sobreposto */}
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="max-w-2xl space-y-8 py-20">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary text-left drop-shadow-sm">
            Existe uma forma correta de vender pela internet.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-left font-medium drop-shadow-sm">
            Empresas e profissionais autônomos falham em vendas não por falta de tráfego, 
            mas por desorganização da mensagem. Quando a comunicação não segue uma estrutura 
            coerente, a decisão não ocorre.
          </p>

          <div className="pt-4">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 text-base md:text-lg px-8 md:px-12 py-6 h-auto font-semibold w-full sm:w-auto"
            >
              SOLICITAR DIAGNÓSTICO
            </Button>
          </div>

          {/* Bullet Points com Ícones Dourados */}
          <div className="pt-8 space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-secondary" strokeWidth={3} />
                </div>
                <p className="text-gray-800 text-base md:text-lg font-medium">
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
