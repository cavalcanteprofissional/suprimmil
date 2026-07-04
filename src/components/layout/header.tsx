"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navItems, companyInfo } from "@/lib/navigation"

export function Header() {
  const [open, setOpen] = useState(false)

  const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-500/95 backdrop-blur-sm border-b border-white/5">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 lg:px-8 h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.svg"
            alt="Grupo Suprimmil"
            width={160}
            height={40}
            className="h-8 lg:h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-light-300 hover:text-accent-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-light-300 hover:text-accent-500 transition-colors"
          >
            <Phone className="h-4 w-4 text-accent-500" />
            <span>{companyInfo.phone}</span>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent-500 hover:bg-accent-600 text-white">
              Fale Conosco
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-light-300"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark-500 border-t border-white/5">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-light-300 hover:text-accent-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-white/5 my-2" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-light-300"
            >
              <Phone className="h-4 w-4 text-accent-500" />
              {companyInfo.phone}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button className="bg-accent-500 hover:bg-accent-600 text-white w-full">
                Fale Conosco
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
