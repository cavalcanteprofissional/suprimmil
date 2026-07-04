import type { Metadata } from "next"
import Link from "next/link"
import { Settings, Truck, HardHat, Wrench, Cog, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça as áreas de atuação do Grupo Suprimmil: engenharia, suprimentos, construção, fabricação mecânica, usinagem e fornecimento de materiais.",
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
      <section className="bg-dark-500 pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Serviços
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
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
                        <h2 className="text-2xl lg:text-3xl font-bold text-dark-500">
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
                    <div className="bg-dark-300 rounded-2xl aspect-[4/3] flex items-center justify-center">
                      <span className="text-light-500 text-sm">
                        {/* TODO: substituir por foto real */}
                        [Imagem {service.title}]
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-500">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
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
