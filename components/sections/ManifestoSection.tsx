"use client"

import Image from "next/image"

export function ManifestoSection() {
  return (
    <section className="py-24 bg-gray-50 text-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Logo Centralizado */}
          <div className="flex justify-center">
            <div className="relative h-32 w-auto">
              <Image
                src="/logo.png"
                alt="Dominus Estratégico"
                width={300}
                height={128}
                className="object-contain h-32 w-auto rounded-full"
                priority
              />
            </div>
          </div>

          {/* Manifesto */}
          <div className="space-y-6 text-center">
            <p className="text-2xl md:text-3xl font-bold">
              Não acreditamos em improviso. Acreditamos em estrutura.
            </p>
            
            <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                Autoridade não se anuncia. Se estabelece através de método, ordem e clareza. 
                Quando a comunicação segue uma estrutura de comunicação coerente com o padrão de decisão do 
                público, a escolha ocorre naturalmente.
              </p>
              <p>
                Método supera inspiração. Ordem gera confiança. Previsibilidade gera resultados em vendas pela internet.
              </p>
              <p className="font-semibold pt-4">
                Esta é a base sobre a qual trabalhamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
