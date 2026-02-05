import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e tratamento de dados do Dominus Estratégico.",
}

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-3xl">
        <Link
          href="/"
          className="inline-block text-sm font-medium text-muted-foreground hover:text-foreground mb-10"
        >
          ← Voltar ao início
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
        <div className="mt-10 prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            O Dominus Estratégico trata com cuidado os dados que você envia pelo formulário de contato e pelo site.
            Estas informações são usadas apenas para responder sua solicitação, agendar conversas e melhorar sua
            experiência, e não são compartilhadas com terceiros para fins de marketing sem seu consentimento.
          </p>
          <p>
            Ao enviar o formulário, você concorda que podemos armazenar nome, e-mail e telefone para contato. Se quiser
            excluir ou corrigir seus dados, entre em contato conosco.
          </p>
          <p>
            Utilizamos cookies e tecnologias semelhantes para análise (ex.: Google Analytics) e para campanhas de
            tráfego pago, conforme configurações do seu navegador. Você pode ajustar as preferências de cookies nas
            configurações do navegador.
          </p>
          <p>
            Para dúvidas sobre esta política, utilize o formulário de contato ou o canal indicado no site.
          </p>
        </div>
      </div>
    </div>
  )
}
