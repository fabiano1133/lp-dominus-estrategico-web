"use client"

import { CheckCircle, Target, TrendingUp, Zap } from "lucide-react"

export function LandingPageSection() {
  const features = [
    {
      icon: Target,
      title: "Estrutura Otimizada para Conversão",
      description: "Criamos Landing Pages com hierarquia visual clara, CTAs estratégicos e fluxo que guia o visitante naturalmente para a ação desejada.",
    },
    {
      icon: TrendingUp,
      title: "Alta Taxa de Conversão",
      description: "Nossas Landing Pages são desenvolvidas com foco em conversão real. Cada elemento é testado e otimizado para maximizar resultados.",
    },
    {
      icon: Zap,
      title: "Mensagem Alinhada ao Público",
      description: "A criação de Landing Pages que convertem começa com uma mensagem que ressoa com seu público-alvo. Mapeamos o perfil psicológico e criamos comunicação estratégica.",
    },
    {
      icon: CheckCircle,
      title: "Design e Copy Estratégicos",
      description: "Combinamos design moderno com copy persuasiva. Cada palavra e cada elemento visual trabalham juntos para criar uma Landing Page que converte de verdade.",
    },
  ]

  return (
    <section id="landing-pages" className="py-20 md:py-28 bg-white" data-gtm-section="landing-pages">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Headline */}
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              O que é uma Landing Page que Converte?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Uma Landing Page que converte não é apenas uma página bonita. É uma estrutura estratégica que combina 
              mensagem clara, design otimizado e fluxo de conversão para transformar visitantes em clientes de forma previsível.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 md:p-8 space-y-4 border border-gray-200 hover:border-secondary/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="flex-shrink-0 p-3 md:p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-primary" strokeWidth={2.5} />
                    </div>
                    <div className="space-y-2 md:space-y-3 pt-1">
                      <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-primary leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-xl p-8 md:p-12 lg:p-16 text-center space-y-6 md:space-y-8 shadow-2xl">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-4">
              Pronto para ter uma Landing Page que Converte?
            </h3>
            <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              Nossa criação de Landing Pages é focada em resultados reais. Cada Landing Page é desenvolvida 
              estrategicamente para aumentar sua taxa de conversão e gerar mais vendas.
            </p>
            <div className="pt-2">
              <a
                href="#final-cta"
                className="inline-block bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 md:px-12 py-4 md:py-5 rounded-lg text-base md:text-lg font-bold shadow-2xl hover:shadow-secondary/50 hover:scale-105 transition-all duration-300"
                data-gtm-element="cta-landing-pages"
                data-gtm-action="click"
                data-gtm-label="solicitar-diagnostico-gratuito"
              >
                Solicitar Diagnóstico Gratuito
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
