"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  // Mensagem alinhada ao Arquétipo Governante: declarativa, objetiva, sem urgência
  const defaultMessage = "Gostaria de solicitar um diagnóstico estratégico."
  const whatsappMessage = encodeURIComponent(message || defaultMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  const [showDesktop, setShowDesktop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return
      const isDesktop = window.innerWidth >= 1024
      if (!isDesktop) {
        setShowDesktop(false)
        return
      }
      const afterFirstFold = window.scrollY > window.innerHeight * 0.6
      setShowDesktop(afterFirstFold)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* Mobile: sempre visível, sticky */}
      <div className="fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 md:hidden">
        <Button
          onClick={handleClick}
          size="lg"
          className="w-full max-w-xs bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full h-12 px-6 gap-2"
          aria-label="Falar com um especialista pelo WhatsApp"
          data-gtm-element="whatsapp-mobile"
          data-gtm-action="click"
          data-gtm-label="falar-com-especialista"
          data-gtm-channel="whatsapp"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2} />
          <span className="font-semibold text-sm">
            Falar com um especialista
          </span>
        </Button>
      </div>

      {/* Desktop: visível apenas após a primeira dobra */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 hidden md:block transition-opacity duration-300",
          showDesktop ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <Button
          onClick={handleClick}
          size="lg"
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full h-14 px-6 gap-3 group"
          aria-label="Falar com um especialista pelo WhatsApp"
          data-gtm-element="whatsapp-desktop"
          data-gtm-action="click"
          data-gtm-label="falar-com-especialista"
          data-gtm-channel="whatsapp"
        >
          <MessageCircle className="h-6 w-6" strokeWidth={2} />
          <span className="font-semibold text-base">
            Falar com um especialista
          </span>
        </Button>
      </div>
    </>
  )
}
