export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dominustrategico.com.br"
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Dominus Estratégico",
    "alternateName": "Análise Estratégica de Comunicação",
    "description": "Diagnóstico estratégico de comunicação para empresas e profissionais autônomos. Organize sua comunicação digital, aumente vendas pela internet com Landing Pages alinhadas ao perfil do seu público-alvo.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/logo.png`,
    "serviceType": [
      "Análise Estratégica de Comunicação",
      "Diagnóstico de Posicionamento",
      "Estruturação de Landing Pages",
      "Organização de Comunicação Digital"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Estruturação Estratégica",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnóstico Estratégico de Comunicação",
            "description": "Análise profunda do posicionamento atual, identificação de falhas invisíveis na mensagem e mapeamento do perfil psicológico dominante do público-alvo."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Organização da Mensagem",
            "description": "Estruturação hierárquica da comunicação, definição de prioridades e eliminação de ruídos que geram rejeição inconsciente."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estruturação de Landing Page",
            "description": "Criação de Landing Page alinhada ao padrão de decisão do público, com fluxo coerente que guia naturalmente para a conversão."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Padronização para Conversão Previsível",
            "description": "Estabelecimento de base sólida e replicável para escalar vendas de forma consistente e mensurável."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
