"use client"

import { FileText, Users, Megaphone } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: FileText,
      title: "Mensagem Desalinhada",
      description: "Comunicação sem hierarquia e sem estrutura que guie a atenção do público para o que realmente importa.",
    },
    {
      icon: Users,
      title: "Público Perdido",
      description: "Falta de coerência entre o que você oferece, como comunica e quem pretende alcançar, gerando insegurança.",
    },
    {
      icon: Megaphone,
      title: "Volume Sem Autoridade",
      description: "Investimento em tráfego sem estrutura de mensagem que ressoe com o padrão de decisão do público.",
    },
  ]

  return (
    <section id="problema" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Introdução da Seção */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-left mb-4">
            A falha não está no investimento. Está na estrutura.
          </h2>
          <p className="text-lg text-gray-700 text-left">
            Empresas investem em tráfego, criatividade e tecnologia, mas ignoram o que realmente 
            determina a conversão de landing pages: uma estrutura de comunicação clara, coerente e alinhada 
            ao posicionamento. Sem ordem, não existe decisão.
          </p>
        </div>

        {/* Três Cards Horizontais */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <div
                key={index}
                className="bg-primary rounded-lg p-8 text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-secondary/20 rounded-full">
                    <IconComponent className="h-8 w-8 text-secondary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
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
        <div className="bg-primary py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-xl md:text-2xl font-semibold">
              O que vende na internet não é insistência. É autoridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
