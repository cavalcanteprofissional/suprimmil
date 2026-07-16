"use client"

import { Phone } from "lucide-react"
import { companyInfo } from "@/lib/navigation"

const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-accent-500 text-white shadow-lg hover:bg-accent-600 hover:scale-110 active:scale-95 transition-all duration-200 animate-in fade-in slide-in-from-bottom-4"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}
