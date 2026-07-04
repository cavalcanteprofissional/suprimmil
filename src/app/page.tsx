import Link from "next/link"
import { Phone, Settings, Truck, HardHat, Wrench, Cog, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { CountUp } from "@/components/animations/count-up"
import { companyInfo } from "@/lib/navigation"

const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`

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
    desc: "Barcarena e Ananindeua — PA, no coração da região Norte.",
  },
  {
    title: "Infraestrutura Moderna",
    desc: "Parque fabril equipado para operações de alta complexidade.",
  },
  {
    title: "Equipe Especializada",
    desc: "Profissionais em constante treinamento e capacitação.",
  },
  {
    title: "Estoque Próprio",
    desc: "Entrega imediata com estoque permanente de materiais.",
  },
  {
    title: "Melhor Preço da Região",
    desc: "Competitividade sem abrir mão da qualidade e segurança.",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-dark-500 pt-16 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-dark-500 to-dark-500" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Engenharia, Suprimentos e Serviços,
              <br />
              <span className="text-accent-500">Construção e Montagem</span>
              <br />
              Eletromecânica
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-light-300 max-w-xl leading-relaxed">
              Soluções completas em engenharia industrial, suprimentos metalúrgicos,
              montagem eletromecânica e manutenção industrial na região Norte desde 2010.
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
      <section className="bg-dark-400 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-3 gap-8 lg:gap-16">
            {[
              { end: 16, suffix: "+", label: "Anos de Atividade" },
              { end: 0, label: "Funcionários", pending: true },
              { end: 0, label: "Projetos Realizados", pending: true },
            ].map((stat) => (
              <FadeIn key={stat.label} delay={0.1}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-accent-500">
                    {stat.end > 0 ? (
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    ) : (
                      `+[X]`
                    )}
                  </div>
                  <div className="mt-2 text-sm text-light-400">
                    {stat.label}
                    {stat.pending && (
                      <span className="block text-xs text-light-500 italic mt-1">
                        {/* TODO: validar com cliente */}
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* O Grupo */}
      <section id="empresa" className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                O Grupo
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-500">
                Solidez industrial desde 2010
              </h2>
              <p className="mt-6 text-base text-dark-100 leading-relaxed">
                A Suprimmil, situada em Barcarena-PA, atua na região Norte desde 2010
                nas áreas de fabricação e recuperação mecânica industrial e distribuição
                de materiais metalúrgicos, usinagem de alta complexidade, fabricação de
                caldeiraria, tubulação/spools, equipamentos, construção e montagem
                eletromecânica, manutenção industrial e overhaul de alta performance.
              </p>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                Nosso objetivo é atender as necessidades dos clientes nos setores
                industrial, de mineração, cosmético e alimentício, com base em um plano
                estratégico sólido.
              </p>
              <Link href="/empresa">
                <Button className="mt-8 bg-primary-600 hover:bg-primary-700 text-white">
                  Saiba Mais
                </Button>
              </Link>
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
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
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
          </FadeIn>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="servicos" className="bg-dark-500">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Áreas de Atuação
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white">
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
                  <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-accent-500 transition-colors">
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
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Diferenciais
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-dark-500">
              Por que escolher a Suprimmil?
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-white border border-light-300"
              >
                <h3 className="text-lg font-semibold text-dark-500">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-100">{item.desc}</p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="bg-dark-500">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="mt-4 text-lg text-light-400 max-w-xl mx-auto">
            Entre em contato com nossa equipe comercial e solicite um orçamento
            personalizado.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-accent-500 hover:text-accent-400 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {companyInfo.phone}
            </a>
            <a
              href={`mailto:${companyInfo.emailVendas}`}
              className="text-lg text-light-300 hover:text-accent-500 transition-colors"
            >
              {companyInfo.emailVendas}
            </a>
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
