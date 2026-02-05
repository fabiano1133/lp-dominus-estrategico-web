"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeContent } from "@/components/animations/FadeContent"

const steps = [
  {
    number: "1",
    title: "Identificar gargalos de conversão",
    description: "Analisamos sua página e comportamento do usuário para encontrar pontos de atrito que reduzem conversões.",
  },
  {
    number: "2",
    title: "Otimizar mensagem e canal",
    description: "Definimos o que dizer, para quem e em que ordem. Canal (site, LP) alinhado à estratégia.",
  },
  {
    number: "3",
    title: "Estratégia + execução",
    description: "Mensagem, canal e cronograma definidos. Executamos com transparência e métricas claras.",
  },
  {
    number: "4",
    title: "Acompanhar e ajustar",
    description: "Você acompanha o que importa. Ajustamos com base em dado, não em achismo.",
  },
]

export function ProcessSection() {
  return (
    <section
      id="como-trabalhamos"
      className="py-20 md:py-28 bg-background"
      data-gtm-section="process"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-center">
            Nosso <span className="text-primary">processo</span>: do tráfego ao <span className="text-primary">cliente</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Processo claro reduz incerteza. Assim transformamos visitantes em leads e clientes.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <FadeContent
                key={step.number}
                animateOnMount={false}
                delay={index * 0.1}
                duration={0.5}
                y={20}
                start="top 88%"
              >
                <div
                  className="relative p-6 md:p-8 bg-card rounded-xl border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span
                    className="absolute -top-3 -left-1 w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold text-lg flex items-center justify-center"
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mt-4">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeContent>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md"
              data-gtm-element="cta-process"
              data-gtm-action="click"
              data-gtm-label="conversa-estrategica"
            >
              <Link href="#final-cta">Quero uma conversa estratégica</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
