# SKILL.md — Site Institucional Grupo Suprimmil

## Objetivo

Site institucional/comercial do **Grupo Suprimmil** — holding multi-empresa de metalmecânica e eletromecânica com atuação em 3 estados (PA, CE, SP).

Use **CONTENT.md** (arquivo irmão deste) como única fonte de conteúdo textual real da empresa. Não inventar números, cases ou depoimentos que não estejam lá — usar placeholders explícitos onde faltar informação.

---

## 1. Stack implementada

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Estilo:** Tailwind CSS v4 + shadcn/ui
- **Animações:** Framer Motion (fade-in, count-up)
- **Ícones:** lucide-react
- **Conteúdo:** Estático via `lib/navigation.ts` + markdown de referência (CONTENT.md)
- **Formulários:** Link `wa.me` (sem backend)
- **Deploy:** Preparado para Vercel
- **SEO:** metadata API, sitemap.xml, robots.txt, schema.org Organization com 3 endereços

---

## 2. Arquitetura de páginas (v0.1.0)

1. **`/` (Home)** — Hero, contadores (16+ anos, 5.300+ m², 3 estados), O Grupo, MVV, Certificações, Áreas de Atuação, Diferenciais, CTA Final
2. **`/empresa`** — Sobre o Grupo, MVV, diferenciais, timeline desde 2010
3. **`/servicos`** — 6 áreas de atuação + Estrutura e Capacidade Técnica (parque de máquinas, frota, controle de qualidade)
4. **`/contato`** — Dois blocos regionais (Norte e Nordeste), formulário via wa.me, mapa com 3 unidades
5. **`/trabalhe-conosco`** — Formulário de candidatura via wa.me com seleção de área
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

## 5. Pendências técnicas

- [ ] GSAP + ScrollTrigger na timeline da empresa (dependência instalada, não implementada)
- [ ] Substituir `<select>` nativo no `/trabalhe-conosco` por componente shadcn
- [ ] Atualizar coordenadas do Google Maps com endereços reais (clientes)
- [ ] Animações adicionais (micro-interações, hover states)
- [ ] Lighthouse 90+ (acessibilidade, performance)
