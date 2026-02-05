"use client"

import Link from "next/link"
import { useState, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMouse({ x, y })
    },
    []
  )

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative pt-24 pb-14 md:pt-[10rem] md:pb-[6rem] lg:pt-[12rem] lg:pb-32 bg-background overflow-hidden"
      data-gtm-section="hero"
      onMouseMove={onMouseMove}
    >
      {/* Fundo interativo: orbs em gradiente que reagem ao mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <div
          className="absolute h-[80vmax] w-[80vmax] rounded-full opacity-[0.15] blur-3xl transition-transform duration-700 ease-out"
          style={{
            left: "10%",
            top: "20%",
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
            transform: `translate(${(mouse.x - 50) * 0.3}%, ${(mouse.y - 50) * 0.3}%)`,
          }}
        />
        <div
          className="absolute h-[60vmax] w-[60vmax] rounded-full opacity-[0.12] blur-3xl transition-transform duration-700 ease-out"
          style={{
            right: "5%",
            bottom: "10%",
            background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
            transform: `translate(${(50 - mouse.x) * 0.2}%, ${(50 - mouse.y) * 0.2}%)`,
          }}
        />
        <div
          className="absolute h-[50vmax] w-[50vmax] rounded-full opacity-[0.08] blur-3xl transition-transform duration-500 ease-out"
          style={{
            left: "50%",
            top: "50%",
            background: "radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, transparent 65%)",
            transform: `translate(calc(-50% + ${(mouse.x - 50) * 0.15}%), calc(-50% + ${(mouse.y - 50) * 0.15}%))`,
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex max-w-3xl flex-col items-center lg:max-w-4xl">
            <div className="w-full animate-hero-fade">
              <h1 className="mx-auto max-w-3xl font-serif text-4xl sm:text-5xl md:text-6xl lg:max-w-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-foreground leading-[1.35] tracking-tight">
                Aumente{" "}
                <span className="text-primary">conversões</span>
                {" "}e impulsione seu{" "}
                <span className="text-primary">negócio</span>
              </h1>
            </div>
            <div className="w-full animate-hero-fade animate-hero-fade-delay-1">
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed md:mt-8 md:text-xl">
                Tráfego pago que converte, sites e aplicações web que vendem e landing pages que fecham. Pensado para
                empresas e profissionais autônomos que querem transformar visitas em leads qualificados todos os dias.
              </p>
            </div>
            <div className="w-full animate-hero-fade animate-hero-fade-delay-3 mt-10 md:mt-12">
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-center text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
                  data-gtm-element="cta-hero"
                  data-gtm-action="click"
                  data-gtm-label="conversa-estrategica"
                >
                  <Link href="#final-cta">Impulsionar meu negócio agora</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-center text-base font-medium rounded-md border-2 border-primary text-primary hover:bg-primary/10"
                  data-gtm-element="cta-hero-secondary"
                  data-gtm-action="click"
                  data-gtm-label="ver-processo"
                >
                  <Link href="#como-trabalhamos">Ver como geramos resultados</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
