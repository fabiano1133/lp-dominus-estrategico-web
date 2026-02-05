import type { Metadata } from "next"
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
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17905134573"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17905134573');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NWSQCQZK');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://dominusestrategico.com.br"} />
        <meta name="google-site-verification" content="bPEUITpQl_3tYTZF2i1N5F88qw-lRJQcgCr2MVEZfEE" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWSQCQZK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
