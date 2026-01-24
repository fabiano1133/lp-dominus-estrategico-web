"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function IntermediateCTASection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("final-cta")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="cta-intermediate" className="py-16 md:py-20 bg-primary text-white" data-gtm-section="cta-intermediate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight px-4">
            Pronto para transformar visitantes em clientes com uma comunicação estratégica?
          </p>
          
          <Button
            onClick={scrollToForm}
            size="lg"
            className="group bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base md:text-lg px-10 md:px-14 py-6 md:py-7 h-auto font-bold shadow-2xl hover:shadow-secondary/50 hover:scale-105 transition-all duration-300 rounded-lg"
            data-gtm-element="cta-intermediate"
            data-gtm-action="click"
            data-gtm-label="solicitar-diagnostico-gratuito"
          >
            <span className="flex items-center gap-2">
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
