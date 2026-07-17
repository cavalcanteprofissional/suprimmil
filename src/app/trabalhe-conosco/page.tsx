import type { Metadata } from "next"
import { GearDecoration } from "@/components/animations/gear-decoration"
import { JobForm } from "@/components/sections/job-form"
export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description:
    "Envie seu currículo para o Grupo Suprimmil. Estamos sempre em busca de talentos para nossas unidades em Barcarena-PA, Ananindeua-PA e Maracanaú-CE nas áreas de caldeiraria, usinagem, soldagem e engenharia.",
}

const areas = [
  "Engenharia",
  "Montagem Eletromecânica",
  "Manutenção Industrial",
  "Usinagem",
  "Caldeiraria",
  "Soldagem",
  "Administrativo",
  "Comercial / Vendas",
  "Logística",
  "Outra",
]

export default function TrabalheConoscoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-500 pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <GearDecoration size={200} speed={35} direction="ccw" opacity={0.04} className="top-0 -right-12 hidden lg:block" />
        <GearDecoration size={120} speed={20} direction="cw" opacity={0.03} className="bottom-5 -left-6 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Trabalhe Conosco
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white font-heading">
              Faça parte da nossa equipe
            </h1>
            <p className="mt-6 text-lg text-light-300 leading-relaxed">
              Envie seu currículo e candidate-se para oportunidades no Grupo Suprimmil.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Texto institucional */}
            <div>
              <h2 className="text-2xl font-bold text-dark-500 font-heading">
                Junte-se a nós
              </h2>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                O Grupo Suprimmil busca profissionais comprometidos com segurança,
                qualidade e inovação. Se você tem paixão pela indústria e quer
                fazer parte de uma equipe em crescimento, envie sua candidatura.
              </p>
              <div className="mt-8 p-6 rounded-xl bg-white border border-light-300">
                <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wider font-heading">
                  Áreas de Interesse
                </h3>
                <ul className="mt-4 space-y-2">
                  {areas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-dark-100">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <div className="p-8 rounded-2xl bg-white border border-light-300">
                <h2 className="text-2xl font-bold text-dark-500 font-heading">
                  Formulário de Candidatura
                </h2>
                <p className="mt-2 text-sm text-dark-100">
                  Preencha seus dados e envie seu currículo pelo WhatsApp.
                </p>

                <JobForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
