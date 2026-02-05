"use client"

import dynamic from "next/dynamic"
import { HeroSection } from "@/components/sections/HeroSection"
import { IntroSection } from "@/components/sections/IntroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"

/* Seções abaixo da dobra: carregamento dinâmico para melhorar Speed Index / FCP */
const ProcessSection = dynamic(
  () => import("@/components/sections/ProcessSection").then((m) => ({ default: m.ProcessSection })),
  { ssr: true }
)
const StatsSection = dynamic(
  () => import("@/components/sections/StatsSection").then((m) => ({ default: m.StatsSection })),
  { ssr: true }
)
const TestimonialSection = dynamic(
  () => import("@/components/sections/TestimonialSection").then((m) => ({ default: m.TestimonialSection })),
  { ssr: true }
)
const CaseSection = dynamic(
  () => import("@/components/sections/CaseSection").then((m) => ({ default: m.CaseSection })),
  { ssr: true }
)
const ApproachSection = dynamic(
  () => import("@/components/sections/ApproachSection").then((m) => ({ default: m.ApproachSection })),
  { ssr: true }
)
const ProofSection = dynamic(
  () => import("@/components/sections/ProofSection").then((m) => ({ default: m.ProofSection })),
  { ssr: true }
)
const FinalCTASection = dynamic(
  () => import("@/components/sections/FinalCTASection").then((m) => ({ default: m.FinalCTASection })),
  { ssr: true }
)
const WhatsAppButton = dynamic(
  () => import("@/components/ui/WhatsAppButton").then((m) => ({ default: m.WhatsAppButton })),
  { ssr: false }
)

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
        <ProblemSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialSection />
        <CaseSection />
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
