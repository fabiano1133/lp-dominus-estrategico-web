"use client"

import { WhatsAppButton } from "@/components/ui/WhatsAppButton"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { MethodSection } from "@/components/sections/MethodSection"
import { LandingPageSection } from "@/components/sections/LandingPageSection"
import { IntermediateCTASection } from "@/components/sections/IntermediateCTASection"
import { ManifestoSection } from "@/components/sections/ManifestoSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"

export default function Home() {
  // Número do WhatsApp (formato: 5511999999999 - sem espaços, parênteses ou hífens)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"
  
  return (
    <>
      <main className="min-h-screen" data-gtm-page="landing-page" data-gtm-page-name="dominustrategico">
        <HeroSection />
        <ProblemSection />
        <MethodSection />
        <LandingPageSection />
        <IntermediateCTASection />
        <ManifestoSection />
        <FinalCTASection />
      </main>
      <WhatsAppButton 
        phoneNumber={whatsappNumber}
        message="Gostaria de solicitar um diagnóstico estratégico."
      />
    </>
  )
}
