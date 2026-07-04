import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { companyInfo } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conheça o Grupo Suprimmil — engenharia industrial, suprimentos e montagem eletromecânica desde 2010.",
}

const values = [
  "Segurança — zero acidentes",
  "Planejamento e sustentabilidade",
  "Qualidade e compromisso",
  "Ética e integridade",
  "Melhoria contínua dos processos",
  "Motivação e inovação",
  "Liderança e evolução",
]

const diferenciais = [
  {
    title: "Localização Estratégica",
    desc: "Barcarena e Ananindeua — PA, no coração da região Norte, próximos aos principais polos industriais do estado.",
  },
  {
    title: "Infraestrutura Moderna",
    desc: "Parque fabril equipado com maquinário de ponta para operações de alta complexidade e precisão.",
  },
  {
    title: "Equipe Especializada",
    desc: "Profissionais técnicos e engenheiros em constante treinamento e capacitação, garantindo excelência em cada projeto.",
  },
  {
    title: "Estoque Próprio e Entrega Imediata",
    desc: "Amplo estoque de materiais metalúrgicos para atender demandas com agilidade e sem interrupções.",
  },
  {
    title: "Melhor Preço da Região",
    desc: "Competitividade sem abrir mão da qualidade, segurança e prazos.",
  },
]

const timeline = [
  { year: "2010", text: "Fundação da Suprimmil em Barcarena-PA" },
  { year: "2010", text: "Início das operações em fabricação e recuperação mecânica" },
  { year: "2014", text: "Expansão para montagem eletromecânica e manutenção industrial" },
  { year: "2018", text: "Abertura da filial em Ananindeua — BR 316" },
  { year: "2020", text: "Especialização em overhaul e paradas de alta complexidade" },
  { year: "2024", text: "Ampliação do parque fabril e capacidade de usinagem" },
]

export default function EmpresaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-500 pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Empresa
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
              Sobre o Grupo Suprimmil
            </h1>
            <p className="mt-6 text-lg text-light-300 leading-relaxed">
              Solidez, experiência e compromisso com a indústria da região Norte desde 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-500">
                Engenharia industrial com raízes no Pará
              </h2>
              <p className="mt-6 text-base text-dark-100 leading-relaxed">
                A Suprimmil, situada em Barcarena-PA, atua na região Norte desde 2010
                nas áreas de fabricação e recuperação mecânica industrial e distribuição
                de materiais metalúrgicos, usinagem de alta complexidade, fabricação de
                caldeiraria, tubulação/spools, equipamentos, construção e montagem
                eletromecânica, manutenção industrial e overhaul de alta performance.
              </p>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Nosso objetivo principal é atender as necessidades dos clientes nas áreas
                industrial, de mineração, cosmética e alimentícia, com base em plano
                estratégico, missão, visão e valores sólidos.
              </p>
            </div>
            <div className="bg-dark-300 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-light-500 text-sm">
                {/* TODO: substituir por foto real da empresa */}
                [Imagem institucional]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-500">
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-light-100 border border-light-300">
              <h3 className="text-xl font-bold text-dark-500">Missão</h3>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Atender todas as expectativas e condicionantes dos negócios oriundos em
                fornecimentos de bens e serviços, com responsabilidade, idoneidade e
                ética empresarial.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-light-100 border border-light-300">
              <h3 className="text-xl font-bold text-dark-500">Visão</h3>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Ser a melhor empresa em atendimento a projetos e suprimentos de
                fornecimentos de materiais e equipamentos e serviços de montagem
                eletromecânica e manutenção industrial da região Norte.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-light-100 border border-light-300">
              <h3 className="text-xl font-bold text-dark-500">Valores</h3>
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
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-dark-500">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Nossos Diferenciais
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-dark-400 border border-white/5"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-light-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-500">
              Nossa Trajetória
            </h2>
            <p className="mt-4 text-base text-dark-100">
              Desde 2010 construindo uma história de excelência industrial.
            </p>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-accent-500 ring-4 ring-light-100 shrink-0" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-light-400 mt-1" />
                  )}
                </div>
                <div>
                  <span className="text-sm font-bold text-accent-500">{item.year}</span>
                  <p className="mt-1 text-base text-dark-100">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-500">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
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
        </div>
      </section>
    </>
  )
}
