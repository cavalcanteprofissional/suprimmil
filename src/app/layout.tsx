import type { Metadata } from "next"
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/layout/whatsapp-float"
import { BackToTop } from "@/components/layout/back-to-top"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://suprimmil.com.br"),
  title: {
    default: "Grupo Suprimmil — Engenharia, Suprimentos e Montagem Industrial",
    template: "%s | Grupo Suprimmil",
  },
  description:
    "Grupo multi-empresa de metalmecânica e eletromecânica com atuação em 3 estados (PA, CE, SP). Engenharia, caldeiraria, usinagem, suprimentos e montagem industrial desde 2010.",
  keywords: [
    "engenharia industrial",
    "suprimentos metalúrgicos",
    "montagem eletromecânica",
    "manutenção industrial",
    "caldeiraria",
    "usinagem",
    "Barcarena",
    "Ananindeua",
    "Pará",
    "Maracanaú",
    "Ceará",
    "Brazil Amortecedores",
    "Suprimmil",
    "região Norte",
    "região Nordeste",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Grupo Suprimmil",
    description:
      "Grupo multi-empresa de metalmecânica e eletromecânica com atuação em 3 estados — PA, CE e SP.",
    locale: "pt_BR",
    type: "website",
    images: ["/icon.svg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grupo Suprimmil",
  url: "https://suprimmil.com.br",
  logo: "https://suprimmil.com.br/logo.svg",
  description:
    "Holding de empresas de metalmecânica e eletromecânica com atuação em 3 estados — Pará, Ceará e São Paulo.",
  foundingDate: "2010",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Rod. PA 481, Km 16",
      addressLocality: "Barcarena",
      addressRegion: "PA",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "BR 316, Km 8, Nº 195, Centro",
      addressLocality: "Ananindeua",
      addressRegion: "PA",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Rod. Dr. Mendel Steinbruch, 10293, Sala 14, Pajuçara",
      addressLocality: "Maracanaú",
      addressRegion: "CE",
      postalCode: "61932-005",
      addressCountry: "BR",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-91-99393-4925",
      contactType: "sales",
      areaServed: "Norte",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-85-98170-7479",
      contactType: "sales",
      areaServed: "Nordeste",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
      </body>
    </html>
  )
}
