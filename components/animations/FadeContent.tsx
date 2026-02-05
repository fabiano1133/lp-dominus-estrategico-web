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

    const cleanupRef = { current: (): void => undefined }

    const run = () => {
      if (animateOnMount) {
        const tween = gsap.fromTo(el, { opacity, y }, { opacity: 1, y: 0, duration, delay, ease: "power3.out" })
        cleanupRef.current = () => tween.kill()
        return
      }
      const tween = gsap.fromTo(
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
      cleanupRef.current = () => {
        tween.kill()
        const trigger = tween.scrollTrigger
        if (trigger) trigger.kill()
      }
    }

    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(run, { timeout: 300 })
      return () => {
        cancelIdleCallback(id)
        cleanupRef.current()
      }
    }
    const t = setTimeout(run, 0)
    return () => {
      clearTimeout(t)
      cleanupRef.current()
    }
  }, [opacity, y, duration, delay, start, once, animateOnMount])

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}
