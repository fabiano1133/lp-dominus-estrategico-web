"use client"

import { useState } from "react"
import Image from "next/image"
import { FadeContent } from "@/components/animations/FadeContent"
import { SplitText } from "@/components/animations/SplitText"
import { Megaphone, Globe, Layout, Code2, User } from "lucide-react"

/** Coloque sua foto em public/fabiano-albuquerque.jpg (recomendado: 600x800px ou proporção 3:4) */
const IMAGE_PATH = "/person-hero.png"

const pillars = [
  { icon: Megaphone, label: "Tráfego pago" },
  { icon: Globe, label: "Criação de sites" },
  { icon: Layout, label: "Landing pages" },
  { icon: Code2, label: "Criação de aplicações web" },
]

export function IntroSection() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="quem-somos"
      className="py-16 md:py-24 bg-background"
      data-gtm-section="intro"
      aria-labelledby="intro-heading"
    >
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <FadeContent
          animateOnMount={false}
          delay={0}
          duration={0.6}
          y={20}
          className="w-full"
        >
          <div className="grid w-full grid-cols-1 items-center gap-10 py-4 md:gap-14 lg:grid-cols-2 lg:gap-16">
            {/* Coluna esquerda: imagem */}
            <div className="relative aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-xl bg-muted mx-auto sm:max-w-[280px] lg:max-w-[320px]">
              {imgError ? (
                <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                  <User className="h-24 w-24" strokeWidth={1} aria-hidden />
                </div>
              ) : (
                <Image
                  src={IMAGE_PATH}
                  alt="Fabiano Albuquerque, especialista em tráfego pago, criação de sites, landing pages e aplicações web"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            {/* Coluna direita: texto */}
            <div className="flex flex-col text-center lg:text-left">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Apresentação
              </p>
              <h2
                id="intro-heading"
                className="mt-2 font-serif text-2xl font-semibold text-foreground md:text-3xl"
              >
                <SplitText
                  delay={0.2}
                  stagger={0.04}
                  duration={0.35}
                  type="fadeUp"
                >
                  Fabiano Albuquerque
                </SplitText>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Sou especialista em{" "}
                <span className="font-medium text-foreground">
                  tráfego pago
                </span>
                ,{" "}
                <span className="font-medium text-foreground">
                  criação de sites
                </span>
                ,{" "}
                <span className="font-medium text-foreground">
                  landing pages de alta conversão
                </span>{" "}
                e{" "}
                <span className="font-medium text-foreground">
                  criação de aplicações web
                </span>
                . Unir estratégia e execução na mesma mão não é um extra — é
                como trabalho: sua mensagem não se perde no caminho.
              </p>
              <ul
                className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                aria-label="Especialidades"
              >
                {pillars.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5">
                      <Icon
                        className="h-4 w-4 shrink-0 text-primary"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
