"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TopBarSection() {
  return (
    <section
      className="bg-card border-b border-border py-3 text-center"
      data-gtm-section="top-bar"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <p className="text-sm font-medium text-foreground">
          Pronto para estruturar suas vendas?
        </p>
        <Button
          asChild
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md shrink-0"
          data-gtm-element="cta-top-bar"
          data-gtm-action="click"
          data-gtm-label="conversa-estrategica"
        >
          <Link href="#final-cta">Conversa estratégica gratuita</Link>
        </Button>
      </div>
    </section>
  )
}
