"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    title: "Sua própria aplicação web",
    description:
      "Em vez de depender só de redes sociais e planilhas, você tem um ambiente seu, com a sua marca, que passa autoridade e profissionalismo em cada interação.",
  },
  {
    title: "Do lead ao atendimento, no mesmo lugar",
    description:
      "Captura de leads, pedidos e agendamentos centralizados em uma única aplicação web, para você acompanhar funil, priorizar contatos e não perder oportunidades.",
  },
  {
    title: "Processos automatizados que escalam",
    description:
      "Aplicações web sob medida para automatizar follow-ups, notificações e rotinas do dia a dia, liberando tempo para você focar em fechar vendas e entregar. Ex.: painéis de leads, agendas online, áreas do cliente e fluxos internos feitos para o seu negócio.",
  },
]

export function ApproachSection() {
  return (
    <section
      id="o-que-fazemos"
      className="py-20 md:py-28 bg-background"
      data-gtm-section="approach"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-center">
            <span className="text-primary">
              Desenvolvimento de aplicações web sob medida
            </span>{" "}
            para o seu negócio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Se você é{" "}
            <span className="font-medium text-foreground">empresa</span> ou{" "}
            <span className="font-medium text-foreground">profissional autônomo</span>, ter sua{" "}
            <span className="font-semibold text-primary">própria aplicação web</span> significa{" "}
            <span className="font-medium text-foreground">controlar melhor seus leads, atendimentos e vendas</span>, sem
            depender apenas de redes sociais ou ferramentas genéricas.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="p-6 md:p-8 bg-card rounded-xl border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md"
              data-gtm-element="cta-approach"
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
