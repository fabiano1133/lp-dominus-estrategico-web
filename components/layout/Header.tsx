"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [logoError, setLogoError] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center transition-opacity hover:opacity-90"
            aria-label="Ir para o início"
          >
            {!logoError ? (
              <div className="relative h-16 w-auto flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Dominus Estratégico"
                  width={200}
                  height={64}
                  className="object-contain h-16 w-auto"
                  priority
                  sizes="(max-width: 768px) 150px, 200px"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center bg-primary rounded-md">
                  <span className="font-serif text-xl font-bold text-white">D</span>
                </div>
                <div className="hidden sm:block">
                  <span className="font-serif text-xl font-bold text-primary">
                    Dominus Estratégico
                  </span>
                </div>
              </div>
            )}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#problema"
              onClick={(e) => handleScroll(e, "problema")}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              O Problema
            </a>
            <a
              href="#metodo"
              onClick={(e) => handleScroll(e, "metodo")}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              O Método
            </a>
            <a
              href="#final-cta"
              onClick={(e) => handleScroll(e, "final-cta")}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
