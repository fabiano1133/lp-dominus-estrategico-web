"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { IntroSection } from "@/components/sections/IntroSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { StatsSection } from "@/components/sections/StatsSection"
import { TestimonialSection } from "@/components/sections/TestimonialSection"
import { CaseSection } from "@/components/sections/CaseSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { ApproachSection } from "@/components/sections/ApproachSection"
import { ProofSection } from "@/components/sections/ProofSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

export default function Home() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "92984600010"

  return (
    <>
      <main
        id="main"
        className="min-h-screen"
        data-gtm-page="institutional"
        data-gtm-page-name="dominustrategico"
      >
        <HeroSection />
        <IntroSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialSection />
        <CaseSection />
        <ProblemSection />
        <ApproachSection />
        <ProofSection />
        <FinalCTASection />
      </main>
      <WhatsAppButton
        phoneNumber={whatsappNumber}
        message="Gostaria de agendar uma conversa estratégica."
      />
    </>
  )
}
