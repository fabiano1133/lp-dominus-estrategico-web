"use client"

export function MethodSection() {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico Estratégico",
      description: "Analisamos seu posicionamento atual, identificamos falhas na mensagem e mapeamos o perfil do seu público-alvo para criar uma comunicação que ressoa.",
    },
    {
      number: "2",
      title: "Organização da Mensagem",
      description: "Estruturamos sua comunicação com hierarquia clara, definindo o que é prioritário e eliminando informações que geram confusão ou rejeição.",
    },
    {
      number: "3",
      title: "Criação de Landing Page que Converte",
      description: "Criamos Landing Pages estratégicas alinhadas ao seu público, com fluxo otimizado que guia naturalmente para a conversão. Cada elemento é pensado para aumentar sua taxa de conversão e transformar visitantes em clientes.",
    },
    {
      number: "4",
      title: "Base para Escalar",
      description: "Estabelecemos uma estrutura sólida e replicável para você escalar vendas de forma consistente e mensurável.",
    },
  ]

  return (
    <section id="metodo" className="relative py-20 md:py-28 bg-primary text-white overflow-hidden" data-gtm-section="method">
      {/* Imagem de Fundo Sutil - Lazy Loading */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          filter: "grayscale(100%)",
        }}
        loading="lazy"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          {/* Headline Centralizado */}
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4">
              Criação de Landing Pages que Convertem: Como Fazemos
            </h2>
            <div className="space-y-3 md:space-y-4 pt-4 max-w-3xl mx-auto px-4">
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-secondary">
                Método E.D.E — Estrutura → Direção → Engajamento
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Especializamos na criação de Landing Pages que convertem através de um processo claro e replicável. 
                Organizamos sua mensagem, definimos a direção estratégica e criamos engajamento consistente para gerar 
                conversões previsíveis e mensuráveis.
              </p>
            </div>
          </div>

          {/* Quatro Colunas Horizontais */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-primary/80 backdrop-blur-sm rounded-xl p-6 md:p-8 space-y-4 md:space-y-5 border border-white/10 hover:border-white/20 hover:bg-primary/90 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-center">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-secondary">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-bold text-center leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
