import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { StructuredData } from "@/components/seo/StructuredData"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: {
    default: "Criação de Landing Pages que Convertem | Agência Especializada | Dominus Estratégico",
    template: "%s | Dominus Estratégico",
  },
  description:
    "Especialistas em criação de Landing Pages que convertem. Estruturamos sua comunicação e criamos Landing Pages estratégicas que transformam visitantes em clientes. Diagnóstico gratuito em 24h.",
  keywords: [
    "criação de landing pages que convertem",
    "landing page que converte",
    "criar landing page de alta conversão",
    "agência criação landing page",
    "landing page estratégica",
    "como criar landing page que converte",
    "landing page profissional",
    "conversão de landing pages",
    "aumentar conversão landing page",
    "marketing digital estratégico",
    "como aumentar vendas online",
    "aumentar conversão de vendas",
    "vendas pela internet",
    "estrutura de comunicação",
    "diagnóstico estratégico gratuito",
    "comunicação estratégica",
    "organizar comunicação digital",
    "posicionamento estratégico",
    "conversão digital",
    "estruturação de mensagem",
    "vendas online",
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
    title: 'Criação de Landing Pages que Convertem | Agência Especializada | Dominus Estratégico',
    description: 'Especialistas em criação de Landing Pages que convertem. Estruturamos sua comunicação e criamos Landing Pages estratégicas que transformam visitantes em clientes. Diagnóstico gratuito em 24h.',
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
    title: 'Criação de Landing Pages que Convertem | Agência Especializada | Dominus Estratégico',
    description: 'Especialistas em criação de Landing Pages que convertem. Estruturamos sua comunicação e criamos Landing Pages estratégicas que transformam visitantes em clientes. Diagnóstico gratuito em 24h.',
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
    google: 'bPEUITpQl_3tYTZF2i1N5F88qw-lRJQcgCr2MVEZfEE',
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
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preload imagem Hero - Crítico para LCP */}
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=1920&h=1080&auto=format&fit=crop"
          as="image"
          fetchPriority="high"
          imageSrcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=640&h=360&auto=format&fit=crop 640w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=1280&h=720&auto=format&fit=crop 1280w, https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=1920&h=1080&auto=format&fit=crop 1920w"
          imageSizes="100vw"
        />
        
        {/* Google tag (gtag.js) - Carregado de forma não bloqueante */}
        <script
          async
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-BB4FQ5RMY2"
        />
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BB4FQ5RMY2', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
        
        {/* Google Tag Manager - Carregado de forma não bloqueante */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NSN2JHVN');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://dominustrategico.com.br'} />
        <meta name="google-site-verification" content="bPEUITpQl_3tYTZF2i1N5F88qw-lRJQcgCr2MVEZfEE" />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSN2JHVN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
