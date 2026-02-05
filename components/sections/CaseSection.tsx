"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Megaphone, Globe, Layout, Code2 } from "lucide-react"

// Iconify entrega o SVG com a cor na URL (evita ícones pretos do Simple Icons)
const ICON_BASE = "https://api.iconify.design/simple-icons"
const ICON_COLOR = "64748b" // slate-500 — visível em fundo claro
const ICON_SIZE = 56

function techLogoUrl(slug: string) {
  return `${ICON_BASE}/${slug}.svg?color=%23${ICON_COLOR}&height=${ICON_SIZE}`
}

const techLogos = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Google Ads", slug: "googleads" },
  { name: "Google Analytics", slug: "googleanalytics" },
  { name: "Meta (Facebook e Instagram)", slug: "meta" },
]

const services = [
  {
    icon: Megaphone,
    title: "Tráfego pago",
    text: "Levo as pessoas certas até você, com anúncios alinhados à sua mensagem.",
  },
  {
    icon: Globe,
    title: "Criação de sites",
    text: "Seu site transmite posicionamento e convida à ação, não só informa.",
  },
  {
    icon: Layout,
    title: "Landing pages",
    text: "Páginas feitas para converter: mensagem e formulário na mesma linha.",
  },
  {
    icon: Code2,
    title: "Aplicações web",
    text: "Sistemas que automatizam e escalam o que gera venda no dia a dia.",
  },
]

export function CaseSection() {
  return (
    <section
      id="caso"
      className="py-20 md:py-28 bg-background"
      data-gtm-section="case"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight text-center">
            Como uso todos os meus serviços para aumentar suas vendas
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            Não trabalho um canal isolado. Estratégia, tráfego, site, LP e aplicação se conectam para que cada etapa gere mais resultado: da primeira impressão à venda fechada.
          </p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Logos das techs — parados, escala de cinza clara */}
          <p className="mt-14 mb-4 text-center text-sm font-medium text-muted-foreground">
            Tecnologias e canais com que trabalho
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 py-6">
            {techLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex shrink-0 items-center justify-center opacity-100 brightness-105 contrast-105 hover:brightness-110 transition-[filter]"
                title={logo.name}
              >
                <img
                  src={techLogoUrl(logo.slug)}
                  alt=""
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 sm:h-14 sm:w-14"
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            Diagnóstico primeiro, proposta alinhada ao que você precisa, execução com transparência. O objetivo é um só: aumentar suas vendas.
          </p>

          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md"
              data-gtm-element="cta-case"
              data-gtm-action="click"
              data-gtm-label="conversa-estrategica"
            >
              <Link href="#final-cta">Quero vender mais — conversa gratuita</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
