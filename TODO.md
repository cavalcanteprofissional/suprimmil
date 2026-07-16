# TODO — Implementação Site Grupo Suprimmil

> Status geral: 🟢 Quase completo — aguardando deploy e conteúdo do cliente
> Stack: Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui + Base UI
> Versão atual: 0.4.0

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
| Animações | Framer Motion (fade/slide/contadores/gear) + GSAP/ScrollTrigger (timeline) |
| Select | @base-ui/react/select (substitui select nativo) |
| PWA | Não — apenas favicon básico |
| Tema estético | Usinagem — engrenagens (gears) como elemento decorativo |
| Logo | Arquivo fornecido em `public/logo.svg` |

---

## ✅ Concluído

### Fase 1 — Setup do Projeto
- Setup Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui
- Configuração de tema: paleta azul-aço + laranja
- Fontes: Space Grotesk + IBM Plex Sans
- Metadata base, schema.org (3 endereços)

### Fase 2 — Layout Base
- Header fixo com logo, navegação, WhatsApp, CTA
- Navegação mobile (hamburguer)
- Footer com endereços (PA + CE), contatos regionais (Norte + Nordeste)

### Fases 3–8 — Conteúdo e SEO
- Todas as páginas implementadas (Home, Empresa, Serviços, Contato, Trabalhe Conosco)
- SEO técnico (metadata, sitemap, robots, schema.org, OG)
- Tema estético de engrenagens (GearDecoration, gear-bg pattern, logos giratórios)

### Fase 9 — Animações e Polimento (v0.3.0 – v0.4.0)

#### Implementado
- [x] GSAP + ScrollTrigger na linha do tempo da empresa
- [x] suppressHydrationWarning no `<html>`
- [x] Responsividade mobile-first (grids, touch targets, timeline, footer, body overflow)
- [x] Componente Select @base-ui
- [x] FadeIn animações na página Empresa
- [x] Coordenadas reais do Google Maps
- [x] Redes sociais reais (Instagram, Facebook, LinkedIn)
- [x] Acessibilidade: skip-to-content, focus-visible, aria-label, aria-hidden
- [x] Performance: lazy loading nos mapas
- [x] WhatsApp Float button
- [x] Back to Top button
- [x] Active nav state (usePathname + aria-current)
- [x] Formulários via client handler (wa.me com dados)
- [x] Consistência visual: accent color, font-heading em todos os headings, labels unificados
- [x] Micro-interações: hover mapas, hover logos (scale+pause), hamburger rotate, timeline line opacidade
- [x] Metadata descritivas em todas as páginas

### Assets
- Logos de clientes (11) e parceiros (6) em `public/logos/`
- gear01.svg e gear02.svg em `public/logos/`
- Logo principal em `public/logo.svg`

---

## 🔶 Pendente

### Fase 10 — Deploy e Validação
- [ ] Deploy na Vercel
- [ ] Lighthouse 90+
- [ ] Revisão de contraste AA

### Gap List (conteúdo pendente — reportar ao cliente)
- [ ] Números reais (funcionários, projetos)
- [ ] Fotos reais de obras/equipe/instalações (8 placeholders)
- [ ] Nomes exatos dos logos de parceiros não identificados (5)
- [ ] Autorização de uso de marca de cada cliente/parceiro
- [ ] Depoimento/avaliação de cliente 2024/25
- [ ] CNPJ e razão social de cada empresa do grupo
- [ ] Status da N'Brazil Amortecedores
- [ ] Coordenadas exatas do Google Maps
- [ ] Confirmar se contatos legados (vendasv, 3013-7730) continuam ativos
