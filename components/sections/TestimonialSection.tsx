"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "Entendem o negócio primeiro, propõem o que faz sentido e executam com clareza.",
    name: "Nome do cliente",
  },
  {
    quote: "Tráfego passou a converter. Estratégia e página alinhadas, resultado em semanas.",
    name: "Maria Silva",
  },
  {
    quote: "Site e LP com foco em conversão. Leads qualificados aumentaram.",
    name: "Ricardo Mendes",
  },
  {
    quote: "Processo transparente, métricas claras. Aplicação web resolveu um gargalo grande.",
    name: "Ana Costa",
  },
  {
    quote: "Diagnóstico e execução na mesma mão. Comunicação coerente em todos os canais.",
    name: "Paulo Oliveira",
  },
]

export function TestimonialSection() {
  const [index, setIndex] = useState(0)
  const len = testimonials.length

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + len) % len)
    },
    [len]
  )

  useEffect(() => {
    const id = setInterval(() => go(1), 6000)
    return () => clearInterval(id)
  }, [go])

  const t = testimonials[index]

  return (
    <section
      id="depoimentos"
      className="py-14 md:py-20 bg-card"
      data-gtm-section="testimonial"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight text-center mb-2">
          O que quem passou por aqui diz
        </h2>
        <p className="text-sm text-muted-foreground text-center max-w-xl mx-auto mb-10">
          Resultados reais com{" "}
          <span className="font-medium text-foreground">
            tráfego pago, sites, landing pages de alta conversão
          </span>{" "}
          e{" "}
          <span className="font-medium text-foreground">
            aplicações web sob medida
          </span>
          .
        </p>

        <div className="relative max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            key={index}
            className="px-8 md:px-12 text-center animate-fade-in"
          >
            <blockquote className="text-foreground text-base md:text-lg leading-relaxed">
              &quot;{t.quote}&quot;
            </blockquote>
            <footer className="mt-4 text-sm text-muted-foreground">
              <cite className="not-italic font-medium text-foreground">
                {t.name}
              </cite>
            </footer>
          </div>

          <div className="flex justify-center gap-2 mt-8" aria-label="Posição do depoimento">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Ir ao depoimento ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
