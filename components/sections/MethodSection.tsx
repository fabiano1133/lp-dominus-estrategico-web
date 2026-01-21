"use client"

export function MethodSection() {
  const steps = [
    {
      number: "1",
      title: "Diagnóstico de Posicionamento",
      description: "Análise profunda do posicionamento atual, identificação de falhas invisíveis na mensagem e mapeamento do perfil psicológico dominante do público-alvo.",
    },
    {
      number: "2",
      title: "Organização da Mensagem",
      description: "Estruturação hierárquica da comunicação, definição de prioridades e eliminação de ruídos que geram rejeição inconsciente.",
    },
    {
      number: "3",
      title: "Estrutura de Conversão",
      description: "Criação de Landing Page alinhada ao padrão de decisão do público, com fluxo coerente que guia naturalmente para a conversão.",
    },
    {
      number: "4",
      title: "Padronização para Escala",
      description: "Estabelecimento de base sólida e replicável para escalar vendas de forma consistente e mensurável.",
    },
  ]

  return (
    <section id="metodo" className="relative py-24 bg-primary text-white overflow-hidden">
      {/* Imagem de Fundo Sutil */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          filter: "grayscale(100%)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Headline Centralizado */}
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">
              Nós seguimos um método claro para ordenar, posicionar e estruturar sua comunicação.
            </h2>
            <div className="space-y-2 pt-4 max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-secondary">
                Método E.D.E — Estrutura → Direção → Engajamento
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed">
                Estruturamos a sua comunicação digital, definimos a direção estratégica da mensagem e criamos 
                engajamento digital consistente para gerar conversão de landing pages e leads qualificados.
              </p>
            </div>
          </div>

          {/* Quatro Colunas Horizontais */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-primary/80 backdrop-blur-sm rounded-lg p-6 space-y-4 border border-white/10"
              >
                <div className="flex justify-center">
                  <span className="text-6xl md:text-7xl font-serif font-bold text-secondary">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-center">
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
