"use client"

import { FileText, Users, Megaphone } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: FileText,
      title: "Landing Page que Não Converte",
      description: "Sua Landing Page não guia o visitante para a decisão. Informações importantes competem entre si, e o visitante não sabe o que fazer. Uma Landing Page mal estruturada não converte, mesmo com tráfego qualificado.",
    },
    {
      icon: Users,
      title: "Público Não Se Identifica",
      description: "A comunicação não ressoa com quem realmente importa. Visitantes chegam, mas não se sentem endereçados ou compreendidos.",
    },
    {
      icon: Megaphone,
      title: "Tráfego Sem Conversão",
      description: "Você investe em anúncios e tráfego, mas os visitantes não viram clientes. A mensagem não cria autoridade nem gera confiança suficiente.",
    },
  ]

  return (
    <section id="problema" className="py-20 md:py-28 bg-white" data-gtm-section="problem">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introdução da Seção */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-left mb-4 md:mb-6 leading-tight">
            Você investe em tráfego, mas as vendas não aparecem?
          </h2>
          <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 text-left mb-4 md:mb-6">
            O problema não é o investimento — é a estrutura da sua mensagem
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 text-left leading-relaxed">
            O problema não é falta de investimento ou criatividade. É a estrutura da sua mensagem. 
            Quando a comunicação não segue uma hierarquia clara e alinhada ao seu público, a decisão não acontece — 
            mesmo com tráfego qualificado.
          </p>
        </div>

        {/* Três Cards Horizontais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <div
                key={index}
                className="bg-primary rounded-xl p-6 md:p-8 lg:p-10 text-center space-y-5 md:space-y-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-primary/50"
              >
                <div className="flex justify-center">
                  <div className="p-3 md:p-4 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors">
                    <IconComponent className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-secondary" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                  {problem.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Banda Final com Declaração */}
        <div className="bg-primary rounded-xl py-10 md:py-14 px-4 md:px-6 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              O que vende na internet não é insistência. É autoridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
