"use client"

import { Button } from "@/components/ui/button"

export function IntermediateCTASection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("final-cta")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl font-semibold">
            Trabalhamos com quem decide estruturar o seu marketing digital estratégico com método.
          </p>
          
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-12 py-6 h-auto font-semibold"
          >
            Quero estruturar minhas vendas
          </Button>
        </div>
      </div>
    </section>
  )
}
