import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { navItems, companyInfo } from "@/lib/navigation"

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/grupo_suprimmil/", ariaLabel: "Instagram Grupo Suprimmil" },
  { label: "Facebook", href: "https://www.facebook.com/100076823992656/photos/", ariaLabel: "Facebook Grupo Suprimmil" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/suprimmil-metal-mec%C3%A2nica-ltda-1b47a6322/", ariaLabel: "LinkedIn Grupo Suprimmil" },
]

export function Footer() {
  const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`
  const whatsappLinkNE = `https://wa.me/${companyInfo.phoneNERaw}`

  return (
    <footer className="bg-dark-500 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="flex items-start gap-4 lg:block lg:col-span-1">
            <Link href="/" className="shrink-0 mb-0 lg:mb-4">
              <Image
                src="/icon.svg"
                alt="Grupo Suprimmil"
                width={120}
                height={120}
                className="lg:hidden w-16 sm:w-20 h-auto"
              />
              <Image
                src="/logo.svg"
                alt="Grupo Suprimmil"
                width={360}
                height={90}
                className="hidden lg:block w-full max-w-xs h-auto"
              />
            </Link>
            <p className="text-sm text-light-400 leading-relaxed max-w-xs">
              Holding de empresas de metalmecânica e eletromecânica com atuação
              em 3 estados — Pará, Ceará e São Paulo — desde 2010.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-light-400 hover:text-accent-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Contato
            </h3>
            <p className="text-xs text-light-500 uppercase tracking-wider mb-2">Norte</p>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-light-400 hover:text-accent-500 transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.emailComercial}`}
                  className="flex items-start gap-2 text-sm text-light-400 hover:text-accent-500 transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                  <span>{companyInfo.emailComercial}</span>
                </a>
              </li>
            </ul>
            <p className="text-xs text-light-500 uppercase tracking-wider mb-2">Nordeste</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLinkNE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-light-400 hover:text-accent-500 transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                  <span>{companyInfo.phoneNE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.emailNEGerencia}`}
                  className="flex items-start gap-2 text-sm text-light-400 hover:text-accent-500 transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                  <span>{companyInfo.emailNEGerencia}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-heading">
              Endereços
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-light-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                <span>Barcarena-PA (Matriz): {companyInfo.addressBarcarena}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-light-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                <span>Ananindeua-PA (Filial): {companyInfo.addressAnanindeua}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-light-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                <span>Maracanaú-CE: {companyInfo.addressCE}</span>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mt-6 mb-4 font-heading">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="flex items-center gap-1 py-2 px-3 -mx-3 text-sm text-light-400 hover:text-accent-500 transition-colors focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2 rounded"
                >
                  {social.label}
                  <ArrowUpRight className="h-3 w-3" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light-500">
          <p>&copy; {new Date().getFullYear()} Grupo Suprimmil. Todos os direitos reservados.</p>
          <a
            href="https://github.com/cavalcanteprofissional"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-light-400 hover:text-accent-500 transition-colors group"
          >
            <span className="text-xs">Produzido por</span>
            <Image
              src="/images/assinatura-lucas.png"
              alt="Lucas Cavalcante"
              width={103}
              height={80}
              className="h-7 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
