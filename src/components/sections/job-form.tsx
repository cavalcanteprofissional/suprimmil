"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import * as Select from "@/components/ui/select"
import { companyInfo } from "@/lib/navigation"

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

export function JobForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nome = data.get("nome") as string
    const email = data.get("email") as string
    const telefone = data.get("telefone") as string
    const area = data.get("area") as string
    const mensagem = data.get("mensagem") as string

    const text = [
      `*Nome:* ${nome}`,
      `*E-mail:* ${email}`,
      `*Telefone:* ${telefone}`,
      `*Área de interesse:* ${area}`,
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
          <Label htmlFor="telefone">Telefone / WhatsApp</Label>
          <Input id="telefone" name="telefone" placeholder="(91) 99999-9999" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="area">Área de interesse</Label>
          <Select.Root name="area" defaultValue="">
            <Select.Trigger id="area" aria-label="Selecione uma área de interesse">
              <Select.Value placeholder="Selecione uma área" />
            </Select.Trigger>
            <Select.Popup>
              <Select.List>
                <Select.Item value="">Selecione uma área</Select.Item>
                {areas.map((area) => (
                  <Select.Item key={area} value={area}>
                    {area}
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Root>
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
        Ao enviar, você será redirecionado ao WhatsApp para anexar seu currículo e concluir a candidatura.
      </p>
      <Button type="submit" size="lg" className="bg-accent-500 hover:bg-accent-600 text-white w-full sm:w-auto">
        Enviar Candidatura
      </Button>
    </form>
  )
}
