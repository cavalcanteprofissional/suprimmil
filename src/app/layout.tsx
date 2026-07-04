import type { Metadata } from "next"
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
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
    "Engenharia industrial, suprimentos metalúrgicos, montagem eletromecânica e manutenção industrial na Região Norte do Brasil.",
  keywords: [
    "engenharia industrial",
    "suprimentos metalúrgicos",
    "montagem eletromecânica",
    "manutenção industrial",
    "Barcarena",
    "Ananindeua",
    "Pará",
    "região Norte",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Grupo Suprimmil",
    description:
      "Engenharia, Suprimentos, Construção, Montagem Eletromecânica e Manutenção Industrial",
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
    "Engenharia industrial, suprimentos metalúrgicos, montagem eletromecânica e manutenção industrial.",
  foundingDate: "2010",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Rodovia PA-481, S/N — Águas Verdes",
      addressLocality: "Barcarena",
      addressRegion: "PA",
      postalCode: "68445-000",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "BR 316, Km 8, Nº 195, Centro",
      addressLocality: "Ananindeua",
      addressRegion: "PA",
      addressCountry: "BR",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-91-99393-4925",
      contactType: "sales",
    },
    {
      "@type": "ContactPoint",
      telephone: "+55-91-3013-7730",
      contactType: "customer service",
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
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
