# TODO — Implementação Site Grupo Suprimmil

> Status geral: 🟡 Em andamento — Fase 1
> Stack: Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui

---

## Decisões do Projeto (jul/2026)

| Decisão | Escolha |
|---|---|
| Paleta | Azul-aço `#2E5C8A` (primário) + Laranja `#F26522` (secundário) — gradiente com predominância azul |
| Tipografia | Space Grotesk (títulos) + IBM Plex Sans (corpo) |
| Modelo de negócio | 100% institucional B2B — sem e-commerce |
| Formulário de contato | Link `wa.me` (sem Server Action/backend) |
| Trabalhe Conosco | Link `wa.me` (sem upload de currículo) |
| Mapa | Google Maps embed (Barcarena + Ananindeua) |
| Animações | Framer Motion (transições/contadores) + GSAP (timeline empresa) |
| PWA | Não — apenas favicon básico |
| Logo | Cliente fornecerá o arquivo |

---

## Fase 1 — Setup do Projeto

- [ ] `npx create-next-app@latest` com App Router + TypeScript
- [ ] Configurar Tailwind CSS v4
- [ ] Inicializar shadcn/ui (components.json, botão, card, formulário, navbar)
- [ ] Configurar fontes: Space Grotesk (títulos) + IBM Plex Sans (corpo) via `next/font`
- [ ] Configurar tema de cores no Tailwind (azul-aço primário, laranja secundário, neutros escuros)
- [ ] Configurar metadata base do Next.js (layout root)
- [ ] Configurar schema.org (Organization + LocalBusiness) no layout root
- [ ] Verificar build funcionando (`npm run build`)

## Fase 2 — Layout Base

- [ ] Header fixo com logo, navegação, telefone/WhatsApp em destaque, CTA "Fale Conosco"
- [ ] Footer global com endereços (Barcarena + Ananindeua), e-mails, telefones, WhatsApp, redes sociais, links rápidos
- [ ] Container responsivo e grid system consistente
- [ ] Navegação mobile (menu hamburguer)

## Fase 3 — Home (`/`)

- [ ] Hero com headline institucional + subheadline + CTA duplo
- [ ] Contadores institucionais animados (anos, funcionários, projetos) com `[A CONFIRMAR]`
- [ ] Bloco "O Grupo" com resumo + link `/empresa`
- [ ] Missão / Visão / Valores em cards
- [ ] Grid Áreas de Atuação (6 cards com ícone + título + descrição)
- [ ] Diferenciais (localização, infraestrutura, equipe, estoque, entrega)
- [ ] Faixa de CTA final (telefone, e-mail, WhatsApp)
- [ ] Âncoras internas (`#empresa`, `#servicos`, `#contato`)

## Fase 4 — Empresa (`/empresa`)

- [ ] Sobre o Grupo (texto institucional de CONTENT.md)
- [ ] Missão, Visão e Valores
- [ ] Diferenciais competitivos
- [ ] Linha do tempo "Desde 2010"
- [ ] CTA de contato

## Fase 5 — Serviços (`/servicos`)

- [ ] Grid detalhado das 6 áreas de atuação:
  - Engenharia e Projetos
  - Suprimentos
  - Construção (montagem eletromecânica, manutenção, overhaul)
  - Fabricação e Recuperação Mecânica
  - Usinagem de Peças
  - Fornecimento de Materiais Metálicos
- [ ] Cada área com ícone, descrição completa, aplicações

## Fase 6 — Contato (`/contato`)

- [ ] Formulário de contato → link `wa.me` (sem backend)
- [ ] Mapa Google Maps embed com marcadores duplos (Barcarena + Ananindeua)
- [ ] Cards de informações: telefones, e-mails, WhatsApp, redes sociais
- [ ] Layout responsivo

## Fase 7 — Trabalhe Conosco (`/trabalhe-conosco`)

- [ ] Formulário de candidatura → link `wa.me` com mensagem pré-preenchida
- [ ] Informações sobre vagas
- [ ] Layout responsivo

## Fase 8 — SEO Técnico

- [ ] `metadata` API em todas as páginas
- [ ] `sitemap.xml` dinâmico
- [ ] `robots.txt`
- [ ] Dados estruturados (schema.org Organization + LocalBusiness) no layout root
- [ ] Open Graph / Twitter Cards

## Fase 9 — Animações e Polimento

- [ ] Animações com Framer Motion (fade + slide sutis nas seções, contadores animados)
- [ ] GSAP + ScrollTrigger na linha do tempo da empresa
- [ ] Responsividade mobile-first (testar breakpoints)
- [ ] Acessibilidade: contraste AA, navegação por teclado, `alt` descritivo
- [ ] Favicon
- [ ] Performance: Lighthouse 90+
- [ ] Revisão de conteúdo pendente (gap list do CONTENT.md §9)

## Fase 10 — Deploy

- [ ] Deploy na Vercel
- [ ] Checklist final de conteúdo pendente reportado ao cliente

---

## Gap List (conteúdo pendente — reportar ao cliente)

- [ ] Números reais (anos, funcionários, projetos)
- [ ] Handles de redes sociais
- [ ] Fotos reais de obras/equipe/instalações
- [ ] Certificações (ISO, NR, etc.)
- [ ] Portfólio de clientes (permissão de logos)
- [ ] CNPJ e razão social para rodapé
