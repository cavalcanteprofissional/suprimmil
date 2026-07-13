import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { GearDecoration } from "@/components/animations/gear-decoration"
import { companyInfo } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description:
    "Envie seu currículo e candidate-se a oportunidades no Grupo Suprimmil. Áreas: engenharia, montagem, usinagem, caldeiraria e mais.",
}

const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`

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
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
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
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Texto institucional */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-dark-500">
                Junte-se a nós
              </h2>
              <p className="mt-4 text-base text-dark-100 leading-relaxed">
                O Grupo Suprimmil busca profissionais comprometidos com segurança,
                qualidade e inovação. Se você tem paixão pela indústria e quer
                fazer parte de uma equipe em crescimento, envie sua candidatura.
              </p>
              <div className="mt-8 p-6 rounded-xl bg-white border border-light-300">
                <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wider">
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
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-white border border-light-300">
                <h2 className="text-2xl font-bold text-dark-500">
                  Formulário de Candidatura
                </h2>
                <p className="mt-2 text-sm text-dark-100">
                  Preencha seus dados e envie seu currículo pelo WhatsApp.
                </p>

                <form
                  action={whatsappLink}
                  method="GET"
                  target="_blank"
                  className="mt-8 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome completo</Label>
                      <Input
                        id="nome"
                        name="nome"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        placeholder="(91) 99999-9999"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="area">Área de interesse</Label>
                      <select
                        id="area"
                        name="area"
                        className="h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        required
                      >
                        <option value="">Selecione uma área</option>
                        {areas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem / Observações</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Conte um pouco sobre sua experiência e por que deseja trabalhar na Suprimmil..."
                      rows={4}
                    />
                  </div>
                  <p className="text-xs text-light-500">
                    Ao enviar, você será redirecionado ao WhatsApp para anexar seu
                    currículo e concluir a candidatura.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-accent-500 hover:bg-accent-600 text-white w-full sm:w-auto"
                  >
                    Enviar Candidatura
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
