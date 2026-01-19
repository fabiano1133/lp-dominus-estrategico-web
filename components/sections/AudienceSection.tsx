"use client"

export function AudienceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Para Quem É / Para Quem Não É
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-primary border-b-2 border-secondary pb-2">
                É Para
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Quem decide e assume responsabilidade pelos resultados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Quem busca método, não fórmulas mágicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Quem entende que comunicação é sistema, não improviso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>Quem valoriza estrutura sobre criatividade solta</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-primary border-b-2 border-gray-300 pb-2">
                Não É Para
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold mt-1">×</span>
                  <span>Curiosos que buscam informação sem compromisso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold mt-1">×</span>
                  <span>Quem busca fórmulas rápidas e promessas milagrosas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold mt-1">×</span>
                  <span>Quem prefere criatividade sem estrutura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold mt-1">×</span>
                  <span>Quem não está disposto a seguir um método</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-lg font-semibold text-primary">
              Clareza sobre o público evita desperdício de tempo e recursos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
