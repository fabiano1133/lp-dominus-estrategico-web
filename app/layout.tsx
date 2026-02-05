import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import { StructuredData } from "@/components/seo/StructuredData"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Marketing Digital e Desenvolvimento Web | Dominus Estratégico",
    template: "%s | Dominus Estratégico",
  },
  description:
    "Estratégia de marketing e desenvolvimento web na mesma mão. Posicionamento que vira presença. Presença que gera lead.",
  keywords: [
    "marketing digital",
    "desenvolvimento web",
    "site institucional",
    "landing page",
    "estratégia de marketing",
    "posicionamento digital",
    "lead qualificado",
    "conversão",
    "agência marketing",
    "criação de sites",
  ],
  authors: [{ name: "Dominus Estratégico" }],
  creator: "Dominus Estratégico",
  publisher: "Dominus Estratégico",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dominusestrategico.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Dominus Estratégico",
    title: "Marketing Digital e Desenvolvimento Web | Dominus Estratégico",
    description: "Estratégia de marketing e desenvolvimento web na mesma mão. Posicionamento que vira presença.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Dominus Estratégico - Marketing Digital e Desenvolvimento Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Digital e Desenvolvimento Web | Dominus Estratégico",
    description: "Estratégia de marketing e desenvolvimento web na mesma mão. Posicionamento que vira presença.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "bPEUITpQl_3tYTZF2i1N5F88qw-lRJQcgCr2MVEZfEE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://dominusestrategico.com.br"} />
        <meta name="google-site-verification" content="bPEUITpQl_3tYTZF2i1N5F88qw-lRJQcgCr2MVEZfEE" />
      </head>
      <body className="font-sans antialiased">
        {/* Skip link para acessibilidade (visível ao focar com teclado) */}
        <a href="#main" className="skip-link">
          Pular para o conteúdo principal
        </a>

        {/* Scripts carregados após a página interativa (melhora LCP/TBT no PageSpeed) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17905134573"
          strategy="lazyOnload"
        />
        <Script id="gtag-config" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17905134573');
          `}
        </Script>
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NWSQCQZK');`}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWSQCQZK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
