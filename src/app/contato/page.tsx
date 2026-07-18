import type { Metadata } from "next"
import { Phone, Mail, MapPin } from "lucide-react"
import { GearDecoration } from "@/components/animations/gear-decoration"
import { ContactForm } from "@/components/sections/contact-form"
import { companyInfo } from "@/lib/navigation"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Grupo Suprimmil. Matriz em Barcarena-PA, filiais em Ananindeua-PA e Maracanaú-CE. Solicite orçamento para projetos de engenharia, fabricação mecânica, caldeiraria, usinagem e montagem industrial.",
}

const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`
const whatsappLinkNE = `https://wa.me/${companyInfo.phoneNERaw}`

const contactNorte = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: companyInfo.phone,
    href: whatsappLink,
    target: "_blank",
  },
  {
    icon: Mail,
    label: "Gerência",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: Mail,
    label: "Comercial",
    value: companyInfo.emailComercial,
    href: `mailto:${companyInfo.emailComercial}`,
  },
]

const contactNordeste = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: companyInfo.phoneNE,
    href: whatsappLinkNE,
    target: "_blank",
  },
  {
    icon: Mail,
    label: "Diretoria COO",
    value: companyInfo.emailNEGerencia,
    href: `mailto:${companyInfo.emailNEGerencia}`,
  },
  {
    icon: Mail,
    label: "Diretoria Executiva",
    value: companyInfo.emailNEExecutivo,
    href: `mailto:${companyInfo.emailNEExecutivo}`,
  },
]

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-500 pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
        <GearDecoration size={240} speed={40} direction="ccw" opacity={0.04} className="top-0 -right-16 hidden lg:block" />
        <GearDecoration size={130} speed={25} direction="cw" opacity={0.03} className="bottom-8 -left-6 hidden lg:block" />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
              Contato
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-white font-heading">
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
            {/* Informações — duas regiões */}
            <div className="lg:col-span-1">
              <div className="p-8 rounded-2xl bg-white border border-light-300 h-full">
                <div className="space-y-8">
                  {/* Região Norte */}
                  <div>
                    <h3 className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-4 font-heading">
                      Região Norte
                    </h3>
                    <div className="space-y-3">
                      {contactNorte.map((item) => {
                        const Icon = item.icon
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target={item.target}
                            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-light-300 hover:border-accent-500/30 transition-colors group"
                          >
                            <div className="flex items-center justify-center w-11 h-11 md:w-10 md:h-10 rounded-lg bg-accent-500/10 text-accent-500 shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                              <Icon className="h-6 w-6 md:h-5 md:w-5" />
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
                  </div>
                  {/* Região Nordeste */}
                  <div>
                    <h3 className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-4 font-heading">
                      Região Nordeste
                    </h3>
                    <div className="space-y-3">
                      {contactNordeste.map((item) => {
                        const Icon = item.icon
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target={item.target}
                            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-light-300 hover:border-accent-500/30 transition-colors group"
                          >
                            <div className="flex items-center justify-center w-11 h-11 md:w-10 md:h-10 rounded-lg bg-accent-500/10 text-accent-500 shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                              <Icon className="h-6 w-6 md:h-5 md:w-5" />
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
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-white border border-light-300 h-full">
                <h2 className="text-2xl font-bold text-dark-500 font-heading">
                  Envie sua mensagem
                </h2>
                <p className="mt-2 text-sm text-dark-100">
                  Preencha o formulário abaixo e nossa equipe retornará em breve.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-500 font-heading">
              Nossas Unidades
            </h2>
            <p className="mt-4 text-base text-dark-100">
              Estamos estrategicamente localizados nos estados do Pará, Ceará e São Paulo.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-light-300 hover:border-accent-500/30 hover:shadow-md transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39894.567!2d-48.7214!3d-1.5345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46c8a0b8f9b0b%3A0x0!2sBarcarena%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Matriz Barcarena-PA"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-dark-500">
                  <MapPin className="h-4 w-4 text-accent-500" />
                  Matriz — Barcarena-PA
                </div>
                <p className="mt-1 text-sm text-dark-100">{companyInfo.addressBarcarena}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-light-300 hover:border-accent-500/30 hover:shadow-md transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39891.234!2d-48.3744!3d-1.3657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a4627a8b1f4321%3A0x0!2sAnanindeua%2C%20PA!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Filial Ananindeua-PA"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-dark-500">
                  <MapPin className="h-4 w-4 text-accent-500" />
                  Filial — Ananindeua-PA
                </div>
                <p className="mt-1 text-sm text-dark-100">{companyInfo.addressAnanindeua}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-light-300 hover:border-accent-500/30 hover:shadow-md transition-all">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39885.456!2d-38.6247!3d-3.8771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75a3b0b5b12345%3A0x0!2sMaracana%C3%BA%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Suprimmil CE Maracanaú-CE"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-dark-500">
                  <MapPin className="h-4 w-4 text-accent-500" />
                  Suprimmil CE — Maracanaú-CE
                </div>
                <p className="mt-1 text-sm text-dark-100">{companyInfo.addressCE}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
