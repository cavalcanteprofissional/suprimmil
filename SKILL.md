# SKILL.md — Site Institucional Grupo Suprimmil

## Objetivo

Site institucional/comercial do **Grupo Suprimmil** — holding multi-empresa de metalmecânica e eletromecânica com atuação em 3 estados (PA, CE, SP).

Use **CONTENT.md** (arquivo irmão deste) como única fonte de conteúdo textual real da empresa. Não inventar números, cases ou depoimentos que não estejam lá — usar placeholders explícitos onde faltar informação.

---

## 1. Stack implementada

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Estilo:** Tailwind CSS v4 + shadcn/ui + Base UI (Select)
- **Animações:** Framer Motion (fade-in, count-up, gear) + GSAP/ScrollTrigger (timeline)
- **Ícones:** lucide-react
- **Conteúdo:** Estático via `lib/navigation.ts` + markdown de referência (CONTENT.md)
- **Formulários:** Link `wa.me` (sem backend)
- **Deploy:** Preparado para Vercel
- **SEO:** metadata API, sitemap.xml, robots.txt, schema.org Organization com 3 endereços

---

## 2. Arquitetura de páginas (v0.3.0)

1. **`/` (Home)** — Hero, contadores (16+ anos, 5.300+ m², 3 estados), O Grupo, MVV, Certificações, Áreas de Atuação, Diferenciais, CTA Final, Clientes/Parceiros
2. **`/empresa`** — Sobre o Grupo, MVV, diferenciais, timeline com GSAP/ScrollTrigger desde 2010
3. **`/servicos`** — 6 áreas de atuação + Estrutura e Capacidade Técnica (parque de máquinas, frota, controle de qualidade)
4. **`/contato`** — Dois blocos regionais (Norte e Nordeste), formulário via wa.me com Select @base-ui, mapa com 3 unidades
5. **`/trabalhe-conosco`** — Formulário de candidatura via wa.me com Select @base-ui
6. **Rodapé** — Endereços (PA + CE), contatos por região, redes sociais

---

## 3. Dados centralizados

`src/lib/navigation.ts` contém:
- `navItems` — links de navegação
- `companyInfo` — contatos regionais (Norte + Nordeste), empresas do grupo, endereços

Alterar dados de contato **apenas** em `navigation.ts` — os componentes importam de lá.

---

## 4. Regras de conteúdo

- Todo texto institucional vem de `CONTENT.md`
- Onde `CONTENT.md` sinalizar `[A CONFIRMAR COM CLIENTE]`, deixar comentário `{/* TODO: validar com cliente */}` no código
- Não reintroduzir política de e-commerce (boleto, parcelamento) — site é 100% institucional B2B
- Contatos regionais são estruturantes: Norte (PA) e Nordeste (CE) em todas as páginas

---

## 5. Componentes por camada

### `src/components/ui/` (shadcn/Base UI)
- `button.tsx` — @base-ui/react/button com cva variants
- `card.tsx` — div-based card com header/footer/content
- `input.tsx` — @base-ui/react/input
- `label.tsx` — label acessível
- `textarea.tsx` — textarea nativo estilizado
- `select.tsx` — @base-ui/react/select (Root, Trigger, Value, Popup, List, Item)

### `src/components/animations/`
- `fade-in.tsx` — Wrapper Framer Motion (opacity + translate)
- `count-up.tsx` — Contagem animada com requestAnimationFrame
- `gear-decoration.tsx` — SVG gear giratório (Framer Motion)
- `timeline.tsx` — Timeline com GSAP/ScrollTrigger (fade/slide + linha animada)

### `src/components/layout/`
- `header.tsx` — Nav fixa com mobile menu hamburguer
- `footer.tsx` — Footer 4 colunas: descrição + navegação + contatos + endereços

### `src/components/sections/`
- `clientes-parceiros.tsx` — Grid de logos com gear animado ao fundo

---

## 6. Pendências técnicas

- [ ] Responsividade mobile-first (testar breakpoints sistematicamente)
- [ ] Contraste AA em toda a aplicação
- [ ] Lighthouse 90+ (acessibilidade, performance)
- [ ] Animações adicionais (micro-interações, hover states refinados)
