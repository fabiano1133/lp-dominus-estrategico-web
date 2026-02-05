"use client"

import { useRef, useEffect, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface FadeContentProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  opacity?: number
  start?: string
  once?: boolean
  /** Se true, anima no mount (ex.: hero no topo). Se false, anima ao entrar no viewport. */
  animateOnMount?: boolean
  [key: string]: unknown
}

export function FadeContent({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 24,
  opacity = 0,
  start = "top 85%",
  once = true,
  animateOnMount = false,
  ...props
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (animateOnMount) {
      gsap.fromTo(el, { opacity, y }, { opacity: 1, y: 0, duration, delay, ease: "power3.out" })
      return
    }

    gsap.fromTo(
      el,
      { opacity, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      }
    )
  }, [opacity, y, duration, delay, start, once, animateOnMount])

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}
