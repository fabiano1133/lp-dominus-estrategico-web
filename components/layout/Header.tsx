"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const SCROLL_THRESHOLD = 24

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const tl = gsap.timeline()
    tl.fromTo(
      bar,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
    const links = bar.querySelectorAll<HTMLElement>("nav a")
    tl.fromTo(
      links,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.06, ease: "power2.out" },
      "-=0.25"
    )
  }, [])

  useEffect(() => {
    if (!mobileOpen || !mobileNavRef.current) return
    const links = mobileNavRef.current.querySelectorAll<HTMLElement>("a")
    gsap.fromTo(
      links,
      { opacity: 0, x: -12 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" }
    )
  }, [mobileOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const navLinks = [
    { href: "#problema", label: "O problema", id: "problema" },
    { href: "#o-que-fazemos", label: "O que fazemos", id: "o-que-fazemos" },
    { href: "#como-trabalhamos", label: "Como trabalhamos", id: "como-trabalhamos" },
    { href: "#quem-ja-passou", label: "Depoimentos", id: "quem-ja-passou" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 sm:px-6 md:pt-5 pointer-events-none"
      data-gtm-section="header"
      aria-label="Navegação principal"
    >
      <div className="flex w-full justify-center">
        <div
          ref={barRef}
          className={`pointer-events-auto ml-0 mr-0 w-fit rounded-2xl transition-all duration-300 ease-out md:w-full md:max-w-7xl ${
            scrolled ? "liquid-glass-strong" : "liquid-glass"
          }`}
        >
          <div className="relative flex h-14 md:h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo à esquerda */}
            <div className="flex items-center">
              <Link
                href="#hero"
                onClick={(e) => handleScroll(e as unknown as React.MouseEvent<HTMLAnchorElement>, "hero")}
                className="flex items-center"
                aria-label="Voltar ao início"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border/70 bg-background/80 shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Dominus Estratégico"
                    fill
                    className="object-contain"
                    sizes="48px"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Links centralizados */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-5 lg:gap-8">
              {navLinks.map(({ href, label, id }) => (
                <a
                  key={id}
                  href={href}
                  onClick={(e) => handleScroll(e, id)}
                  className={`relative inline-block text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 after:pointer-events-none after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-foreground/90 hover:text-foreground"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* CTA + menu mobile à direita */}
            <div className="flex items-center justify-end gap-2">
              <Button
                asChild
                size="sm"
                className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-[0.98]"
                data-gtm-element="cta-header"
                data-gtm-action="click"
                data-gtm-label="conversa-estrategica"
              >
                <Link href="#final-cta">Conversa estratégica</Link>
              </Button>

              <button
                type="button"
                className="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg text-foreground hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile: overlay e popup com cantos arredondados */}
      <div
        className={`md:hidden fixed inset-0 top-[5.5rem] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          ref={mobileNavRef}
          className={`relative mt-3 mx-4 rounded-2xl liquid-glass-strong py-4 transition-all duration-300 ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-90"
          }`}
        >
          <div className="flex flex-col">
            {navLinks.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                onClick={(e) => handleScroll(e, id)}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors duration-200 active:bg-muted/70"
              >
                {label}
              </a>
            ))}
            <div className="px-4 pt-3 mt-2 border-t border-border">
              <Button
                asChild
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-md"
                data-gtm-element="cta-header-mobile"
                data-gtm-action="click"
                data-gtm-label="conversa-estrategica"
              >
                <Link href="#final-cta" onClick={() => setMobileOpen(false)}>
                  Conversa estratégica
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
