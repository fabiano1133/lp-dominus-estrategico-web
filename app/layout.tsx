import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { StructuredData } from "@/components/seo/StructuredData"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Análise Estratégica de Comunicação | Dominus Estratégico",
    template: "%s | Dominus Estratégico"
  },
  description: "Diagnóstico estratégico de comunicação para empresas e profissionais autônomos. Organize sua comunicação digital, aumente vendas pela internet com Landing Pages alinhadas ao perfil do seu público-alvo. Método estruturado para conversão previsível.",
  keywords: [
    "análise estratégica de comunicação",
    "diagnóstico estratégico de posicionamento",
    "landing page de alta conversão",
    "estruturação de comunicação digital",
    "aumentar vendas pela internet",
    "comunicação estratégica para empresas",
    "organizar comunicação digital",
    "posicionamento estratégico",
    "marketing estratégico",
    "conversão digital",
    "landing page profissional",
    "estruturação de mensagem",
    "comunicação coesa",
    "vendas online",
    "marketing digital estratégico"
  ],
  authors: [{ name: "Dominus Estratégico" }],
  creator: "Dominus Estratégico",
  publisher: "Dominus Estratégico",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dominustrategico.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Dominus Estratégico',
    title: 'Análise Estratégica de Comunicação | Dominus Estratégico',
    description: 'Diagnóstico estratégico de comunicação para empresas e profissionais autônomos. Organize sua comunicação digital e aumente vendas pela internet.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Dominus Estratégico - Análise Estratégica de Comunicação',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Análise Estratégica de Comunicação | Dominus Estratégico',
    description: 'Diagnóstico estratégico de comunicação para empresas e profissionais autônomos. Organize sua comunicação digital e aumente vendas pela internet.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Adicione suas verificações aqui quando tiver
    // google: 'seu-codigo-google',
    // yandex: 'seu-codigo-yandex',
    // bing: 'seu-codigo-bing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://dominustrategico.com.br'} />
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
