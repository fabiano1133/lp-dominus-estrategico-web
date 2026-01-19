"use client"

export function AuthoritySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Autoridade Conceitual
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Comunicação eficaz segue padrões. Não padrões genéricos de marketing, 
              mas estruturas que respeitam como diferentes perfis processam informação 
              e tomam decisões.
            </p>

            <p>
              Criatividade sem estrutura gera ruído. Mensagens bonitas que não se alinham 
              ao perfil psicológico dominante do público-alvo geram rejeição inconsciente, 
              mesmo quando o produto ou serviço é superior.
            </p>

            <p>
              Quando a estrutura é correta, quando a mensagem está organizada de forma 
              coerente com o padrão de decisão do público, a escolha ocorre naturalmente. 
              Não é necessário insistir, pressionar ou criar urgência artificial.
            </p>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-xl font-semibold text-primary italic">
                Vender não é insistir. Vender é alinhar identidade, mensagem e estrutura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
