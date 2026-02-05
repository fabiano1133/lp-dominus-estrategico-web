"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12 md:py-16" data-gtm-section="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <p className="font-serif text-lg font-bold text-foreground">Dominus Estratégico</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Marketing digital e desenvolvimento web. Estratégia e canal na mesma mão.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">Links</p>
              <nav className="mt-3 flex flex-col gap-2">
                <a href="#o-que-fazemos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  O que fazemos
                </a>
                <a href="#como-trabalhamos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Como trabalhamos
                </a>
                <a href="#depoimentos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Depoimentos
                </a>
                <a href="#final-cta" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </a>
              </nav>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">Sobre</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Estúdio focado em posicionamento, mensagem e canal. Atendimento próximo e dedicado.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Dominus Estratégico. Todos os direitos reservados.
            </p>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
