import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Phone, Settings, Truck, HardHat, Wrench, Cog, Package, Target, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { CountUp } from "@/components/animations/count-up"
import { GearDecoration } from "@/components/animations/gear-decoration"
import { ClientesParceiros } from "@/components/sections/clientes-parceiros"
import { companyInfo } from "@/lib/navigation"

export const metadata: Metadata = {
  description:
    "O Grupo Suprimmil é especializado em engenharia industrial, fabricação mecânica, caldeiraria, usinagem CNC, montagem eletromecânica e fornecimento de materiais metalúrgicos. Matriz em Barcarena-PA com filiais no Ceará e São Paulo.",
}

const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`
const whatsappLinkNE = `https://wa.me/${companyInfo.phoneNERaw}`

const serviceAreas = [
  {
    icon: Settings,
    title: "Engenharia e Projetos",
    description:
      "Projetos personalizados para indústrias: fabricação e montagem de equipamentos, caldeiraria, tubulação e estrutura metálica.",
    href: "/servicos#engenharia",
  },
  {
    icon: Truck,
    title: "Suprimentos",
    description:
      "Fornecimento de engenharia, projetos, equipamentos e componentes de caldeiraria, tubulação e estrutura metálica.",
    href: "/servicos#suprimentos",
  },
  {
    icon: HardHat,
    title: "Construção",
    description:
      "Montagem eletromecânica, manutenção industrial e overhaul — paradas de alta complexidade.",
    href: "/servicos#construcao",
  },
  {
    icon: Wrench,
    title: "Fabricação e Recuperação Mecânica",
    description:
      "Peças conforme projeto, soldagem MIG/MAG e TIG, tratamento térmico, jateamento e pintura homologados.",
    href: "/servicos#fabricacao",
  },
  {
    icon: Cog,
    title: "Usinagem de Peças",
    description:
      "Soluções completas em usinagem para aplicações industriais, inclusive atendimento em campo.",
    href: "/servicos#usinagem",
  },
  {
    icon: Package,
    title: "Fornecimento de Materiais",
    description:
      "Barras, buchas, tubos, chapas, conexões, flanges, válvulas, abrasivos e ferramentas industriais.",
    href: "/servicos#materiais",
  },
]

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-dark-500 pt-16 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-dark-500 to-dark-500" />
        <GearDecoration size={300} speed={45} direction="ccw" opacity={0.04} className="top-10 -right-20 hidden lg:block" />
        <GearDecoration size={180} speed={30} direction="cw" opacity={0.03} className="bottom-20 -left-10 hidden lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight font-heading">
              Metalmecânica e Eletromecânica,
              <br />
              <span className="text-accent-500">Seu Parceiro Estratégico</span>
              <br />
              em 3 Estados
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-light-300 max-w-xl leading-relaxed">
              Soluções completas em engenharia, caldeiraria, usinagem, suprimentos
              e montagem industrial. Grupo multi-empresa com atuação no Pará, Ceará e São Paulo desde 2010.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-white text-base px-8"
                >
                  Fale com um Especialista
                </Button>
              </a>
              <Link href="/servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-light-400/30 text-light-200 hover:bg-white/5 text-base px-8"
                >
                  Conheça Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contadores */}
      <section className="bg-dark-400 border-y border-white/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
            {[
              { end: 16, suffix: "+", label: "Anos de Atividade" },
              { end: 5300, suffix: "+", label: "m² de Instalações", format: true },
              { end: 3, suffix: "", label: "Estados com Unidades" },
            ].map((stat) => (
              <FadeIn key={stat.label} delay={0.1}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-accent-500">
                    {stat.format ? (
                      <CountUp end={stat.end} suffix={stat.suffix} format />
                    ) : stat.end > 0 ? (
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    ) : (
                      `[A CONFIRMAR]`
                    )}
                  </div>
                  <div className="mt-2 text-sm text-light-400">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* O Grupo */}
      <section id="empresa" className="bg-light-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
                O Grupo
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-500 font-heading">
                Excelência em metalmecânica desde 2010
              </h2>
              <p className="mt-6 text-base text-dark-100 leading-relaxed">
                O Grupo Suprimmil é uma holding de empresas de metalmecânica e
                eletromecânica, com atuação em 3 estados — Pará, Ceará e São Paulo.
                São mais de <strong>5.300 m²</strong> de instalações somadas entre
                as unidades, distribuídas em 4 empresas do grupo.
              </p>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Atendemos os setores de mineração, cosméticos, alimentício e geração
                de energia, com soluções completas em caldeiraria, usinagem, tubulação
                (spools), equipamentos, manutenção industrial, fabricação e montagem
                eletromecânica.
              </p>
              <Link href="/empresa">
                <Button className="mt-8 bg-primary-600 hover:bg-primary-700 text-white">
                  Saiba Mais
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home-grupo.jpg"
                alt="Instalações do Grupo Suprimmil em Barcarena-PA"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="group p-8 rounded-2xl bg-light-100 border border-light-300 hover:-translate-y-1 hover:shadow-lg transition-all text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 mb-4 mx-auto">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Missão</h3>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Atender todas as expectativas em fabricação metalmecânica industrial
                e na distribuição de materiais metalúrgicos, com responsabilidade
                socioambiental.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-light-100 border border-light-300 hover:-translate-y-1 hover:shadow-lg transition-all text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 mb-4 mx-auto">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Visão</h3>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Ser referência em fabricação mecânica industrial e na distribuição de
                produtos metalúrgicos na região Norte e Nordeste do Brasil.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-light-100 border border-light-300 hover:-translate-y-1 hover:shadow-lg transition-all text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 mb-4 mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-dark-500 group-hover:text-accent-500 transition-colors font-heading">Valores</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-left">
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

      {/* Certificações */}
      <section className="relative bg-dark-400 border-y border-white/5 overflow-hidden">
        <GearDecoration size={200} speed={35} direction="cw" opacity={0.04} className="-top-10 -right-10 hidden lg:block" />
        <GearDecoration size={120} speed={25} direction="ccw" opacity={0.03} className="-bottom-5 -left-5 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <div className="text-center lg:text-left">
              <span className="text-xs font-semibold text-accent-500 uppercase tracking-wider">
                Certificações
              </span>
              <p className="mt-2 text-lg text-light-200 font-semibold">
                Qualificação de Fornecedor Hydro — 2020 e 2022
              </p>
              <p className="text-sm text-light-400 mt-1">
                Atuando em projetos de engenharia, fabricação, montagem e manutenção
                para uma das maiores empresas do setor alumínio no mundo.
              </p>
            </div>
            <div className="h-px w-16 lg:h-16 lg:w-px bg-white/10" />
            <div className="text-center">
              <span className="text-2xl font-bold text-accent-500">100%</span>
              <p className="text-sm text-light-400">Nacional</p>
            </div>
            <div className="h-px w-16 lg:h-16 lg:w-px bg-white/10" />
            <div className="text-center">
              <span className="text-2xl font-bold text-accent-500">+5.300</span>
              <p className="text-sm text-light-400">m² de Instalações</p>
            </div>
            <div className="h-px w-16 lg:h-16 lg:w-px bg-white/10" />
            <div className="text-center">
              <span className="text-2xl font-bold text-accent-500">3</span>
              <p className="text-sm text-light-400">Estados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes e Parceiros */}
      <ClientesParceiros />

      {/* Áreas de Atuação */}
      <section id="servicos" className="bg-dark-500 gear-bg-dark">
        <GearDecoration size={180} speed={35} direction="cw" opacity={0.03} className="-top-8 -left-8 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Áreas de Atuação
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white font-heading">
              Soluções completas para sua indústria
            </h2>
            <p className="mt-4 text-base text-light-400">
              Da engenharia ao fornecimento de materiais, entregamos excelência em
              cada etapa do seu projeto.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => {
              const Icon = area.icon
              return (
                <Link
                  key={area.title}
                  href={area.href}
                  className="group p-6 rounded-xl bg-dark-400 border border-white/5 hover:border-accent-500/30 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/10 text-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-accent-500 transition-colors font-heading">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm text-light-400 leading-relaxed">
                    {area.description}
                  </p>
                </Link>
              )
            })}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Diferenciais
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-500 font-heading">
              Por que escolher a Suprimmil?
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-white border border-light-300"
              >
                <h3 className="text-lg font-semibold text-dark-500 font-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-100">{item.desc}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="relative bg-dark-500 overflow-hidden">
        <GearDecoration size={250} speed={40} direction="ccw" opacity={0.04} className="-bottom-16 -right-16 hidden lg:block" />
        <GearDecoration size={140} speed={20} direction="cw" opacity={0.03} className="top-10 left-10 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="mt-4 text-lg text-light-400 max-w-xl mx-auto">
              Entre em contato com nossa equipe e solicite um orçamento personalizado.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-dark-400 border border-white/5 text-center">
              <h3 className="text-lg font-semibold text-accent-500 font-heading">Região Norte</h3>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 text-lg text-light-200 hover:text-accent-500 transition-colors"
              >
                <Phone className="h-5 w-5 text-accent-500" />
                {companyInfo.phone}
              </a>
              <a
                href={`mailto:${companyInfo.emailComercial}`}
                className="mt-2 block text-sm text-light-400 hover:text-accent-500 transition-colors"
              >
                {companyInfo.emailComercial}
              </a>
            </div>
            <div className="p-6 rounded-xl bg-dark-400 border border-white/5 text-center">
              <h3 className="text-lg font-semibold text-accent-500 font-heading">Região Nordeste</h3>
              <a
                href={whatsappLinkNE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 text-lg text-light-200 hover:text-accent-500 transition-colors"
              >
                <Phone className="h-5 w-5 text-accent-500" />
                {companyInfo.phoneNE}
              </a>
              <a
                href={`mailto:${companyInfo.emailNEGerencia}`}
                className="mt-2 block text-sm text-light-400 hover:text-accent-500 transition-colors"
              >
                {companyInfo.emailNEGerencia}
              </a>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent-500 hover:bg-accent-600 text-white text-base px-8"
              >
                Fale Conosco
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
