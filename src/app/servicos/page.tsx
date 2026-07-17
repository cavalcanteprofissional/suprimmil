import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import { Settings, Truck, HardHat, Wrench, Cog, Package, Scissors, Hammer, Gauge, Navigation, CheckCircle, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GearDecoration } from "@/components/animations/gear-decoration"
import { companyInfo } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Soluções completas em engenharia industrial, suprimentos, caldeiraria, usinagem CNC, fabricação mecânica, montagem eletromecânica e fornecimento de materiais metálicos. Capacidade técnica com corte plasma, torno CNC e frota própria.",
}

const services = [
  {
    id: "engenharia",
    icon: Settings,
    title: "Engenharia e Projetos",
    description:
      "Projetos personalizados para indústrias em segmentos variados: fabricação e montagem de equipamentos, caldeiraria, tubulação e estrutura metálica.",
    items: [
      "Projetos de engenharia sob medida",
      "Fabricação e montagem de equipamentos industriais",
      "Caldeiraria pesada e estrutural",
      "Tubulação industrial e spools",
      "Estrutura metálica",
    ],
  },
  {
    id: "suprimentos",
    icon: Truck,
    title: "Suprimentos",
    description:
      "Fornecimento de engenharia, projetos e equipamentos, e componentes de caldeiraria, tubulação e estrutura metálica.",
    items: [
      "Fornecimento de equipamentos industriais",
      "Componentes para caldeiraria e tubulação",
      "Materiais para estrutura metálica",
      "Gestão de suprimentos para projetos",
    ],
  },
  {
    id: "construcao",
    icon: HardHat,
    title: "Construção e Montagem Eletromecânica",
    description:
      "Montagem eletromecânica, manutenção industrial e overhaul — paradas de alta complexidade.",
    items: [
      "Montagem eletromecânica industrial",
      "Manutenção industrial programada e corretiva",
      "Overhaul e paradas de alta complexidade",
      "Comissionamento de equipamentos",
    ],
  },
  {
    id: "fabricacao",
    icon: Wrench,
    title: "Fabricação e Recuperação Mecânica",
    description:
      "Peças conforme projeto, soldagem especializada e tratamento térmico com certificação.",
    items: [
      "Peças fabricadas conforme projeto do cliente",
      "Soldagem MIG/MAG e TIG especializada",
      "Tratamento térmico",
      "Jateamento e pintura homologados",
      "Recuperação de componentes industriais",
    ],
  },
  {
    id: "usinagem",
    icon: Cog,
    title: "Usinagem de Peças",
    description:
      "Soluções completas em usinagem para diversas aplicações industriais, inclusive atendimento em campo.",
    items: [
      "Usinagem de precisão",
      "Peças sob desenho ou amostra",
      "Atendimento em campo",
      "Usinagem para mineração, cosmético e alimentício",
    ],
  },
  {
    id: "materiais",
    icon: Package,
    title: "Fornecimento de Materiais Metálicos",
    description:
      "Amplo estoque de materiais metalúrgicos para entrega imediata.",
    items: [
      "Barras, buchas e perfis metálicos",
      "Polias, tubos e chapas",
      "Conexões, flanges e válvulas",
      "Metalon, nylon, latão e bronze",
      "Abrasivos e ferramentas de corte e acabamento",
    ],
  },
]

const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-500 pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <GearDecoration size={220} speed={35} direction="ccw" opacity={0.04} className="top-5 -right-12 hidden lg:block" />
        <GearDecoration size={130} speed={20} direction="cw" opacity={0.03} className="bottom-5 -left-6 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Serviços
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white font-heading">
              Áreas de Atuação
            </h1>
            <p className="mt-6 text-lg text-light-300 leading-relaxed">
              Soluções completas em engenharia industrial, suprimentos, construção e
              manutenção para os setores de indústria, mineração, cosmético e alimentício.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="space-y-16">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-600/10 text-primary-600">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-dark-500 font-heading">
                          {service.title}
                        </h2>
                      </div>
                      <p className="mt-4 text-base text-dark-100 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-6 space-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-dark-100">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl aspect-[4/3] overflow-hidden">
                      <Image
                        src={`/images/servico-${service.id}.jpg`}
                        alt={`Serviço de ${service.title} — Grupo Suprimmil`}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Estrutura e Capacidade Técnica */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Capacidade Técnica
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-500 font-heading">
              Estrutura e Parque de Máquinas
            </h2>
            <p className="mt-4 text-base text-dark-100">
              Mais de 5.300 m² de instalações com equipamentos de ponta para atender
              projetos de alta complexidade.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-6 rounded-xl bg-light-100 border border-light-300 hover:border-accent-500/30 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors mb-4">
                <Scissors className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Corte CNC</h3>
              <ul className="mt-4 space-y-2">
                {["Corte Oxicorte", "Corte Plasma", "Mesa de Corte Plasma CNC"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-dark-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="group p-6 rounded-xl bg-light-100 border border-light-300 hover:border-accent-500/30 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors mb-4">
                <Hammer className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Caldeiraria</h3>
              <ul className="mt-4 space-y-2">
                {["Calandragem de chapas e perfis", "Fabricação de estruturas metálicas", "Tanques e dutos industriais"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-dark-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="group p-6 rounded-xl bg-light-100 border border-light-300 hover:border-accent-500/30 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors mb-4">
                <Gauge className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Usinagem</h3>
              <p className="mt-2 text-xs text-dark-100">Peças de até 3 m de diâmetro</p>
              <ul className="mt-4 space-y-2">
                {["Torno CNC", "Torno Ø1000 x 4000 mm", "Torno Ø3000 x 4000 mm", "Furadeira Radial", "Fresadora", "Plaina"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-dark-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="group p-6 rounded-xl bg-light-100 border border-light-300 hover:border-accent-500/30 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors mb-4">
                <Navigation className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Frota Própria</h3>
              <ul className="mt-4 space-y-2">
                {["Caminhão 3/4", "Munk 12 toneladas", "Munk 10 toneladas"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-dark-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="group p-6 rounded-xl bg-light-100 border border-light-300 hover:border-accent-500/30 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Controle de Qualidade</h3>
              <ul className="mt-4 space-y-2">
                {["Inspeção durante processo produtivo", "Garantia de produto final consistente", "Rastreabilidade de materiais"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-dark-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="group p-6 rounded-xl bg-light-100 border border-light-300 hover:border-accent-500/30 transition-all">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors mb-4">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Pintura e Acabamento</h3>
              <ul className="mt-4 space-y-2">
                {["Jateamento e pintura homologados", "Pintura industrial", "Tratamento anticorrosivo"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-dark-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark-500 overflow-hidden">
        <GearDecoration size={180} speed={30} direction="cw" opacity={0.04} className="-bottom-8 -right-8 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading">
            Precisa de um orçamento?
          </h2>
          <p className="mt-4 text-lg text-light-400 max-w-xl mx-auto">
            Solicite uma proposta personalizada para seu projeto industrial.
          </p>
          <div className="mt-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-base px-8">
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
