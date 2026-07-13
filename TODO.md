# TODO — Implementação Site Grupo Suprimmil

> Status geral: 🟡 Em andamento — Pós-Fase 1
> Stack: Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui
> Versão atual: 0.2.0

---

## Decisões do Projeto (jul/2026)

| Decisão | Escolha |
|---|---|
| Paleta | Azul-aço `#2E5C8A` (primário) + Laranja `#F26522` (secundário) — gradiente com predominância azul |
| Tipografia | Space Grotesk (títulos) + IBM Plex Sans (corpo) |
| Modelo de negócio | 100% institucional B2B — sem e-commerce |
| Formulário de contato | Link `wa.me` (sem Server Action/backend) |
| Trabalhe Conosco | Link `wa.me` (sem upload de currículo) |
| Mapa | Google Maps embed (Barcarena + Ananindeua + Maracanaú) |
| Animações | Framer Motion (transições/contadores/gear) + GSAP (timeline empresa — pendente) |
| PWA | Não — apenas favicon básico |
| Tema estético | Usinagem — engrenagens (gears) como elemento decorativo |
| Logo | Cliente fornecerá o arquivo |

---

## ✅ Concluído (v0.1.0 — v0.2.0)

### Fase 1 — Setup do Projeto
- Setup Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui
- Configuração de tema: paleta azul-aço + laranja
- Fontes: Space Grotesk + IBM Plex Sans
- Metadata base, schema.org (3 endereços)

### Fase 2 — Layout Base
- Header fixo com logo, navegação, WhatsApp, CTA
- Navegação mobile (hamburguer)
- Footer com endereços (PA + CE), contatos regionais (Norte + Nordeste)

### Fase 3 — Home (`/`)
- Hero com headline + CTA duplo
- Contadores animados (16+ anos, 5.300+ m², 3 estados)
- O Grupo (texto multi-empresa)
- MVV (versão oficial do PPT)
- Faixa de Certificações (Hydro 2020/2022)
- Clientes e Parceiros (gear frames animados)
- Grid Áreas de Atuação (6 áreas)
- Diferenciais (multi-estado, máquinas, frota)
- CTA final (Norte + Nordeste)

### Fase 4 — Empresa (`/empresa`)
- Sobre o Grupo (holding multi-empresa, 3 estados)
- MVV oficial, diferenciais, timeline expandida

### Fase 5 — Serviços (`/servicos`)
- 6 áreas de atuação detalhadas
- Seção Estrutura e Capacidade Técnica (parque de máquinas, frota)

### Fase 6 — Contato (`/contato`)
- Dois blocos regionais (Norte + Nordeste)
- Formulário via wa.me
- Mapa com 3 unidades (PA + CE)

### Fase 7 — Trabalhe Conosco (`/trabalhe-conosco`)
- Formulário wa.me com seleção de área
- Select estilizado (shadcn)

### Fase 8 — SEO Técnico
- metadata API em todas as páginas
- sitemap.xml, robots.txt
- Schema.org com 3 endereços
- Open Graph

### Estética — Engrenagens (v0.2.0)
- Componente GearDecoration (SVG animado com Framer Motion)
- Gear rotating nos heroes e seções escuras
- Gear-bg pattern sutil no CSS
- gear01.svg e gear02.svg como background giratório dos logos (gear01=25s, gear02=18s)
- Logos estáticos sobrepostos ao gear giratório

### Assets
- Logos de clientes (10) e parceiros (6) em `public/logos/`
- Nomenclatura: `cliente-NN-nome.svg` / `parceiro-NN-nome.svg`
- gear01.svg e gear02.svg em `public/logos/`

---

## 🔶 Pendente

### Fase 9 — Animações e Polimento
- [ ] GSAP + ScrollTrigger na linha do tempo da empresa
- [x] suppressHydrationWarning no `<html>` para evitar mismatch de extensões
- [ ] Responsividade mobile-first (testar breakpoints)
- [ ] Acessibilidade: contraste AA, navegação por teclado
- [ ] Performance: Lighthouse 90+
- [ ] Revisão de conteúdo pendente

### Fase 10 — Deploy
- [ ] Deploy na Vercel
- [ ] Checklist final de conteúdo pendente reportado ao cliente

---

## Gap List (conteúdo pendente — reportar ao cliente)

- [ ] Números reais (funcionários, projetos)
- [ ] Handles de redes sociais
- [ ] Fotos reais de obras/equipe/instalações (8 placeholders)
- [ ] Nomes exatos dos logos de parceiros não identificados (5)
- [ ] Autorização de uso de marca de cada cliente/parceiro
- [ ] Depoimento/avaliação de cliente 2024/25
- [ ] CNPJ e razão social de cada empresa do grupo
- [ ] Status da N'Brazil Amortecedores
- [ ] Coordenadas exatas do Google Maps
- [ ] Confirmar se contatos legados (vendasv, 3013-7730) continuam ativos
