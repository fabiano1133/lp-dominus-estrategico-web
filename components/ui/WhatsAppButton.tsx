"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export function WhatsAppButton({ phoneNumber, message }: WhatsAppButtonProps) {
  // Mensagem alinhada ao Arquétipo Governante: declarativa, objetiva, sem urgência
  const defaultMessage = "Gostaria de solicitar um diagnóstico estratégico."
  const whatsappMessage = encodeURIComponent(message || defaultMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        onClick={handleClick}
        size="lg"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full h-14 px-6 gap-3 group"
        aria-label="Falar diretamente pelo WhatsApp"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
        <span className="font-semibold text-base hidden sm:inline-block">
          Falar Diretamente
        </span>
      </Button>
    </div>
  )
}
