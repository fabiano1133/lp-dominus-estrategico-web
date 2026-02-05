"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeContent } from "@/components/animations/FadeContent"

const benefits = [
  {
    title: "Aumentar taxa de conversão",
    description:
      "Páginas e mensagem alinhadas ao seu público aumentam conversão. Otimização com critério leva ao próximo nível.",
  },
  {
    title: "Reduzir custo de aquisição",
    description: "Mais resultado com o tráfego que você já tem. Canal que converte reduz custo por lead.",
  },
  {
    title: "Atendimento próximo e dedicado",
    description: "Trabalhamos com poucos projetos. Experiência de estúdio: atenção ao seu negócio em cada etapa.",
  },
]

export function ProblemSection() {
  return (
    <section
      id="problema"
      className="py-20 md:py-28 bg-card"
      data-gtm-section="problem"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeContent delay={0.05} duration={0.7} y={24} className="w-full">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-center">
              Quando{" "}
              <span className="text-primary">
                tráfego pago
              </span>{" "}
              e um{" "}
              <span className="text-primary">
                site bem estruturado
              </span>{" "}
              trabalham juntos,{" "}
              <span className="text-primary">
                cada clique
              </span>{" "}
              vale{" "}
              <span className="text-primary">
                muito mais
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Gere mais leads qualificados — orçamentos, agendamentos e contatos prontos para comprar — com o tráfego que
              você já tem.
            </p>
          </FadeContent>

          <FadeContent delay={0.15} duration={0.7} y={28} className="mt-14">
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 bg-background rounded-xl border border-border"
                >
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeContent>

          <FadeContent delay={0.25} duration={0.7} y={24} className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md"
              data-gtm-element="cta-problem"
              data-gtm-action="click"
              data-gtm-label="conversa-estrategica"
            >
              <Link href="#final-cta">Quero uma conversa estratégica</Link>
            </Button>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}
