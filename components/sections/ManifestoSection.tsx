"use client"

import Image from "next/image"

export function ManifestoSection() {
  return (
    <section id="manifesto" className="py-20 md:py-28 bg-gray-50 text-primary" data-gtm-section="manifesto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
          {/* Logo Centralizado */}
          <div className="flex justify-center">
            <div className="relative h-28 md:h-32 w-auto">
              <Image
                src="/logo.png"
                alt="Dominus Estratégico"
                width={300}
                height={128}
                className="object-contain h-28 md:h-32 w-auto rounded-full"
                priority
                quality={85}
                loading="eager"
              />
            </div>
          </div>

          {/* Manifesto */}
          <div className="space-y-6 md:space-y-8 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight px-4">
              Não acreditamos em improviso. Acreditamos em estrutura.
            </p>
            
            <div className="space-y-5 md:space-y-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-4">
              <p>
                Autoridade não se anuncia. Se estabelece através de método, ordem e clareza. 
                Quando a comunicação segue uma estrutura de comunicação coerente com o padrão de decisão do 
                público, a escolha ocorre naturalmente.
              </p>
              <p>
                Método supera inspiração. Ordem gera confiança. Previsibilidade gera resultados em vendas pela internet.
              </p>
              <p className="font-bold pt-2 md:pt-4 text-lg md:text-xl lg:text-2xl">
                Esta é a base sobre a qual trabalhamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
