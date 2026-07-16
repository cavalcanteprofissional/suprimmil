"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

const clientes = [
  { src: "/logos/cliente-01-albras.svg", alt: "Albras" },
  { src: "/logos/cliente-02-agropalma.svg", alt: "Agropalma" },
  { src: "/logos/cliente-03-hydro.svg", alt: "Hydro Alunorte" },
  { src: "/logos/cliente-04.svg", alt: "Cliente 4" },
  { src: "/logos/cliente-05-symrise.svg", alt: "Symrise" },
  { src: "/logos/cliente-06.svg", alt: "Cliente 6" },
  { src: "/logos/cliente-07.svg", alt: "Cliente 7" },
  { src: "/logos/cliente-08.svg", alt: "Cliente 8" },
  { src: "/logos/cliente-09-natura.svg", alt: "Natura" },
  { src: "/logos/cliente-10.svg", alt: "Cliente 10" },
  { src: "/logos/cliente-11.svg", alt: "Cliente 11" },
]

const parceiros = [
  { src: "/logos/parceiro-01-suzano.svg", alt: "Suzano" },
  { src: "/logos/parceiro-02.svg", alt: "Parceiro 2" },
  { src: "/logos/parceiro-03.svg", alt: "Parceiro 3" },
  { src: "/logos/parceiro-04.svg", alt: "Parceiro 4" },
  { src: "/logos/parceiro-05.svg", alt: "Parceiro 5" },
  { src: "/logos/parceiro-06.svg", alt: "Parceiro 6" },
]

const gears = ["/logos/gear01.svg", "/logos/gear02.svg"]

function LogoGear({ logo, index }: { logo: { src: string; alt: string }; index: number }) {
  const gearSrc = gears[index % 2]

  return (
    <div className="relative w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center group">
      <motion.div
        className="absolute inset-0 flex items-center justify-center group-hover:[animation-play-state:paused]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: index % 2 === 0 ? 25 : 18, ease: "linear" }}
      >
        <Image
          src={gearSrc}
          alt=""
          width={120}
          height={120}
          className="object-contain w-full h-full"
          aria-hidden
        />
      </motion.div>
      <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={80}
          height={80}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  )
}

export function ClientesParceiros() {
  return (
    <section className="bg-dark-500 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Clientes e Parceiros
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white font-heading">
              Quem confia no nosso trabalho
            </h2>
            <p className="mt-4 text-base text-light-400">
              Empresas líderes em seus segmentos que fazem parte da nossa história.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-light-400 uppercase tracking-wider text-center mb-8 font-heading">
              Clientes
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
              {clientes.map((cliente, i) => (
                <LogoGear key={cliente.src} logo={cliente} index={i} />
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="w-16 h-px bg-white/10 mx-auto my-12" />

        <FadeIn delay={0.2}>
          <div>
            <h3 className="text-sm font-semibold text-light-400 uppercase tracking-wider text-center mb-8 font-heading">
              Parceiros
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
              {parceiros.map((parceiro, i) => (
                <LogoGear key={parceiro.src} logo={parceiro} index={i + clientes.length} />
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-12 text-center text-xs text-light-500 max-w-lg mx-auto">
            {/* TODO: validar autorização de uso de marca com cada cliente/parceiro */}
            Sujeito a autorização de uso de marca. Nomes dos parceiros adicionais a confirmar com o cliente.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
