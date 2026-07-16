"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import * as Select from "@/components/ui/select"
import { companyInfo } from "@/lib/navigation"

const whatsappLink = `https://wa.me/${companyInfo.phoneRaw}`

export function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nome = data.get("nome") as string
    const email = data.get("email") as string
    const telefone = data.get("telefone") as string
    const regiao = data.get("regiao") as string
    const assunto = data.get("assunto") as string
    const mensagem = data.get("mensagem") as string

    const text = [
      `*Nome:* ${nome}`,
      `*E-mail:* ${email}`,
      `*Telefone:* ${telefone}`,
      `*Região:* ${regiao}`,
      assunto ? `*Assunto:* ${assunto}` : "",
      ``,
      mensagem,
    ]
      .filter(Boolean)
      .join("\n")

    window.open(`${whatsappLink}?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome completo</Label>
          <Input id="nome" name="nome" placeholder="Seu nome completo" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input id="telefone" name="telefone" placeholder="(91) 99999-9999" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="regiao">Região</Label>
          <Select.Root name="regiao" defaultValue="">
            <Select.Trigger id="regiao" aria-label="Selecione sua região">
              <Select.Value placeholder="Selecione..." />
            </Select.Trigger>
            <Select.Popup>
              <Select.List>
                <Select.Item value="">Selecione...</Select.Item>
                <Select.Item value="norte">Norte</Select.Item>
                <Select.Item value="nordeste">Nordeste</Select.Item>
                <Select.Item value="outro">Outro</Select.Item>
              </Select.List>
            </Select.Popup>
          </Select.Root>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="assunto">Assunto</Label>
        <Input id="assunto" name="assunto" placeholder="Ex: Orçamento, dúvida..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea id="mensagem" name="mensagem" placeholder="Descreva sua necessidade..." rows={5} required />
      </div>
      <Button type="submit" size="lg" className="bg-accent-500 hover:bg-accent-600 text-white w-full sm:w-auto">
        Enviar via WhatsApp
      </Button>
    </form>
  )
}
