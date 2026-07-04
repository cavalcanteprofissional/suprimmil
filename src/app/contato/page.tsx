import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { companyInfo } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Grupo Suprimmil. Solicite um orçamento ou tire suas dúvidas com nossa equipe.",
}

const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: companyInfo.phone,
    href: whatsappLink,
    target: "_blank",
  },
  {
    icon: Phone,
    label: "Central de Atendimento",
    value: companyInfo.phoneAlt,
    href: `tel:${companyInfo.phoneAlt.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-mail Institucional",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: Mail,
    label: "E-mail Comercial",
    value: companyInfo.emailVendas,
    href: `mailto:${companyInfo.emailVendas}`,
  },
]

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-500 pt-24 lg:pt-32 pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Contato
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white">
              Entre em Contato
            </h1>
            <p className="mt-6 text-lg text-light-300 leading-relaxed">
              Solicite um orçamento, tire dúvidas ou agende uma visita técnica.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light-100">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Informações */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-dark-500">Informações</h2>
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-light-300 hover:border-accent-500/30 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-500/10 text-accent-500 shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-light-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <p className="text-sm font-medium text-dark-500 mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-white border border-light-300">
                <h2 className="text-2xl font-bold text-dark-500">
                  Envie sua mensagem
                </h2>
                <p className="mt-2 text-sm text-dark-100">
                  Preencha o formulário abaixo e nossa equipe retornará em breve.
                </p>

                <form
                  action={whatsappLink}
                  method="GET"
                  target="_blank"
                  className="mt-8 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>
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
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        placeholder="(91) 99999-9999"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto</Label>
                      <Input
                        id="assunto"
                        name="assunto"
                        placeholder="Ex: Orçamento, dúvida..."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      placeholder="Descreva sua necessidade..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-accent-500 hover:bg-accent-600 text-white w-full sm:w-auto"
                  >
                    Enviar via WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-500">
              Nossas Unidades
            </h2>
            <p className="mt-4 text-base text-dark-100">
              Estamos estrategicamente localizados para atender toda a região Norte.
            </p>
          </div>
          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-light-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39889.123!2d-48.750!3d-1.500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMzAnMDAuMCJTIDQ4wrA0NScwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Barcarena"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-dark-500">
                  <MapPin className="h-4 w-4 text-accent-500" />
                  Matriz — Barcarena
                </div>
                <p className="mt-1 text-sm text-dark-100">{companyInfo.addressBarcarena}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-light-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39889.123!2d-48.380!3d-1.365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjEnNTQuMCJTIDQ4wrAyMic0OC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Ananindeua"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-dark-500">
                  <MapPin className="h-4 w-4 text-accent-500" />
                  Filial — Ananindeua
                </div>
                <p className="mt-1 text-sm text-dark-100">{companyInfo.addressAnanindeua}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
