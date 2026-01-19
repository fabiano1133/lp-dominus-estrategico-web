"use client"

export function DeliverablesSection() {
  const deliverables = [
    {
      title: "Análise estratégica do posicionamento",
      description: "Identificação precisa de falhas invisíveis na comunicação atual.",
    },
    {
      title: "Clareza e hierarquia da mensagem",
      description: "Estruturação que guia a atenção para o que realmente importa.",
    },
    {
      title: "Landing Page alinhada ao perfil do público",
      description: "Página de conversão coerente com o padrão de decisão identificado.",
    },
    {
      title: "Base sólida para escalar vendas",
      description: "Sistema replicável e mensurável para crescimento consistente.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              O Que Você Recebe
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 space-y-3"
              >
                <h3 className="font-serif text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <p className="text-lg text-gray-600 italic">
              Resultado e estrutura. Nada mais, nada menos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
