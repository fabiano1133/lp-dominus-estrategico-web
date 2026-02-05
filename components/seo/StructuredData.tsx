export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dominusestrategico.com.br"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dominus Estratégico",
    description:
      "Estratégia de marketing e desenvolvimento web na mesma mão. Posicionamento que vira presença. Presença que gera lead.",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/logo.png`,
    serviceType: [
      "Marketing Digital",
      "Desenvolvimento Web",
      "Estratégia de Marketing",
      "Site Institucional",
      "Landing Page",
      "Posicionamento Digital",
    ],
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Marketing e Desenvolvimento",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estratégia de Marketing",
            description:
              "Posicionamento, mensagem e funil. Campanhas e conteúdo com métrica clara: lead, agendamento, venda.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desenvolvimento Web",
            description:
              "Site institucional, landing page, página de captura. Código limpo, rápido e alinhado à estratégia.",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Portuguese",
      areaServed: "BR",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
