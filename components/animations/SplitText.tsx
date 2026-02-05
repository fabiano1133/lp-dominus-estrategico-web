"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SplitTextProps {
  children: string
  className?: string
  /** Delay antes de iniciar a animação (segundos) */
  delay?: number
  /** Duração por caractere (segundos) */
  duration?: number
  /** Intervalo entre caracteres (segundos) */
  stagger?: number
  /** Animação: 'fadeUp' | 'fade' */
  type?: "fadeUp" | "fade"
  /** Se true, anima ao entrar no viewport. Se false, anima no mount. */
  scrollTrigger?: boolean
  [key: string]: unknown
}

export function SplitText({
  children,
  className,
  delay = 0,
  duration = 0.4,
  stagger = 0.03,
  type = "fadeUp",
  scrollTrigger = true,
  ...props
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const chars = el.querySelectorAll<HTMLElement>("[data-split-char]")
    if (chars.length === 0) return

    const from: gsap.TweenVars =
      type === "fadeUp"
        ? { opacity: 0, y: 14 }
        : { opacity: 0 }
    const to: gsap.TweenVars =
      type === "fadeUp"
        ? { opacity: 1, y: 0, duration, ease: "power2.out" }
        : { opacity: 1, duration, ease: "power2.out" }

    const animation = gsap.fromTo(chars, from, {
      ...to,
      delay,
      stagger: { each: stagger },
      overwrite: true,
      ...(scrollTrigger && {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }),
    })

    return () => {
      animation.kill()
      const trigger = animation.scrollTrigger
      if (trigger) trigger.kill()
    }
  }, [children, delay, duration, stagger, type, scrollTrigger])

  const chars = Array.from(children)

  return (
    <span ref={ref} className={className} {...props}>
      {chars.map((char, i) => (
        <span
          key={`${char}-${i}`}
          data-split-char
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}
