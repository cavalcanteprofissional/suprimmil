import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { GearDecoration } from "@/components/animations/gear-decoration"
import { Timeline } from "@/components/animations/timeline"
import { companyInfo } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conheça a história, missão, visão e valores do Grupo Suprimmil — holding de metalmecânica e eletromecânica com unidades no Pará, Ceará e São Paulo. Mais de 5.300 m² de instalações desde 2010.",
}

const values = [
  "Sustentabilidade e Qualidade",
  "União",
  "Pronta Entrega",
  "Respeito",
  "Integridade e Pontualidade",
  "Melhorias Contínuas",
  "Motivação",
  "Inovação",
  "Liderança",
]

const diferenciais = [
  {
    title: "Atuação Multi-Estado",
    desc: "Presença no Pará, Ceará e São Paulo — capilaridade para atender sua indústria onde estiver.",
  },
  {
    title: "Parque de Máquinas",
    desc: "Tornos CNC, furadeira radial, fresadora, plaina, corte plasma e oxicorte — capacidade de usinagem de peças até 3m de diâmetro.",
  },
  {
    title: "Frota Própria",
    desc: "Caminhão 3/4 e caminhões Munk de 10 e 12 toneladas para agilidade na entrega e montagem.",
  },
  {
    title: "Equipe Especializada",
    desc: "Engenheiros e técnicos com especializações comprovadas em caldeiraria, usinagem e soldagem.",
  },
  {
    title: "Controle de Qualidade",
    desc: "Rigoroso controle durante todo o processo produtivo, garantindo um produto final consistente.",
  },
]

const timeline = [
  { year: "2010", text: "Fundação da Suprimmil em Barcarena-PA — início das operações em fabricação e recuperação mecânica" },
  { year: "2014", text: "Expansão para montagem eletromecânica e manutenção industrial" },
  { year: "2018", text: "Abertura da filial em Ananindeua — BR 316" },
  { year: "2020", text: "Qualificação de Fornecedor Hydro — projetos de engenharia, fabricação e montagem" },
  { year: "2022", text: "Fundação da Brazil Amortecedores em São Caetano do Sul-SP — linha pesada e vans" },
  { year: "2024", text: "Ampliação do parque fabril e abertura da Suprimmil CE em Maracanaú-CE" },
]

export default function EmpresaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-500 pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <GearDecoration size={260} speed={40} direction="ccw" opacity={0.04} className="top-0 -right-16 hidden lg:block" />
        <GearDecoration size={140} speed={25} direction="cw" opacity={0.03} className="bottom-10 -left-8 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Empresa
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white font-heading">
              Sobre o Grupo Suprimmil
            </h1>
            <p className="mt-6 text-lg text-light-300 leading-relaxed">
              Holding de empresas de metalmecânica e eletromecânica com atuação em 3 estados — Pará, Ceará e São Paulo — desde 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-500 font-heading">
                Excelência em metalmecânica e eletromecânica
              </h2>
              <p className="mt-6 text-base text-dark-100 leading-relaxed">
                Com matriz em Barcarena-PA e empresas nos estados do Pará, Ceará e
                São Paulo, o Grupo Suprimmil se destaca como referência nos setores de
                metalmecânica e eletromecânica. São mais de <strong>5.300 m²</strong>
                de instalações somadas entre as unidades.
              </p>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Nossa atuação abrange fabricação e distribuição de materiais
                metalmecânicos, com soluções completas em caldeiraria, usinagem,
                tubulação (spools), equipamentos, manutenção industrial, fabricação
                e montagem eletromecânica. Atendemos os setores de mineração,
                cosméticos, alimentício e geração de energia.
              </p>
            </div>
            <div className="bg-dark-300 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-light-500 text-sm">
                {/* TODO: substituir por foto real da empresa */}
                [Imagem institucional]
              </span>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-500 font-heading">
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-light-100 border border-light-300">
              <h3 className="text-xl font-bold text-dark-500 font-heading">Missão</h3>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Atender todas as expectativas em fabricação metalmecânica industrial
                e na distribuição de materiais metalúrgicos, com responsabilidade
                socioambiental.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-light-100 border border-light-300">
              <h3 className="text-xl font-bold text-dark-500 font-heading">Visão</h3>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Ser referência em fabricação mecânica industrial e na distribuição de
                produtos metalúrgicos na região Norte e Nordeste do Brasil.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-light-100 border border-light-300">
              <h3 className="text-xl font-bold text-dark-500 font-heading">Valores</h3>
              <ul className="mt-4 space-y-2">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-base text-dark-100">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative bg-dark-500 overflow-hidden">
        <GearDecoration size={200} speed={30} direction="cw" opacity={0.04} className="-top-12 -left-12 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading">
              Nossos Diferenciais
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-dark-400 border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white font-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-light-400">{item.desc}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-500 font-heading">
              Nossa Trajetória
            </h2>
            <p className="mt-4 text-base text-dark-100">
              Desde 2010 construindo uma história de excelência industrial.
            </p>
          </div>
          </FadeIn>
          <div className="mt-12">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark-500 overflow-hidden">
        <GearDecoration size={180} speed={35} direction="ccw" opacity={0.04} className="-bottom-10 -right-10 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24 text-center">
          <FadeIn>
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading">
            Vamos trabalhar juntos?
          </h2>
          <p className="mt-4 text-lg text-light-400 max-w-xl mx-auto">
            Entre em contato e descubra como podemos atender sua indústria.
          </p>
          <div className="mt-8">
            <Link href="/contato">
              <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white text-base px-8">
                Fale Conosco
              </Button>
            </Link>
          </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
