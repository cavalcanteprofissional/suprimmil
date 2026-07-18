# TODO — Implementação Site Grupo Suprimmil

> Status geral: 🟢 Implementação em dia
> Stack: Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui + Base UI
> Versão atual: 0.5.0

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

## 🔶 Próximos Passos

### S1 ✅ — Substituição das Artes Placeholders (8 imagens) + Ícones

**Nota:** "Manutenção Industrial" e "Pintura Industrial" foram unificadas — já refletido no código como subitens dos cards existentes.

- [x] Fotos reais do cliente inseridas em `public/images/`
- [x] Home: placeholder `[Imagem institucional]` → `<Image src="/images/home-grupo.jpg">`
- [x] Empresa: placeholder `[Imagem institucional]` → `<Image src="/images/empresa-sobre.jpg">`
- [x] Serviços: 6 placeholders `[Imagem {service.title}]` → `<Image src={/images/servico-${service.id}.jpg}>`
- [x] next/image com lazy loading, aspect-ratio 4:3, object-cover em todas
- [x] Ícones lucide-react nos 6 cards de "Estrutura e Parque de Máquinas" (Scissors, Hammer, Gauge, Navigation, CheckCircle, Palette)
- [x] Hover efeito nos cards (accent-500, group-hover) replicando padrão da Home
- [x] Ícones lucide-react nos cards Missão/Visão/Valores (Target, Eye, Heart)
- [x] Hover pop-up nos cards MVV (-translate-y-1, shadow-lg)
- [x] Cards MVV centralizados (ícone + título)
- [x] Valores em grid de 2 colunas
- [x] lint + typecheck ok

### S1.1 ✅ — Fotos nos cards "Nossos Diferenciais" (Empresa)

- [x] Imagens reais nos 5 cards (Parque de Máquinas, Controle de Qualidade, Equipe, Frota, Atuação)
- [x] next/image com lazy loading, aspect-ratio 4:3, object-cover
- [x] lint + typecheck ok

### S1.2 ✅ — Ajuste layout Trabalhe Conosco

- [x] Grid do formulário e card "Junte-se a nós" com larguras iguais no desktop

### S1.3 ✅ — Alinhamento caixas Contato e Trabalhe Conosco

**Problema:** cards de cada lado ainda não alinhados visualmente entre si no desktop.

**Solução aplicada (Contato):**
- Envolvido conteúdo da coluna esquerda em `p-8 rounded-2xl bg-white border border-light-300 h-full` (mesmo visual do form)
- Reduzido padding dos cards de contato internos de `p-5` → `p-4` (já dentro de container p-8)
- Adicionado `h-full` ao card do formulário (esticar via CSS Grid)

- [x] Contato: wrap coluna esquerda em card p-8
- [x] Contato: inner cards p-5 → p-4
- [x] Contato: form card h-full
- [x] lint + typecheck ok
- [x] Trabalhe Conosco: h2 + p movidos p/ dentro do card p-8, card aninhado removido, ambos os lados como cards diretos no grid
- [x] lint + typecheck ok
- [x] S1.3 concluído

### S1.4 ✅ — UI/UX Footer: logo menor no mobile

- [x] Logo: `max-w-xs` → `max-w-[200px] lg:max-w-xs`
- [x] lint + typecheck ok

### S1.5 ✅ — Footer mobile: icon.svg no lugar de logo.svg

- [x] `icon.svg` consolidado em `src/app/icon.svg` (local ideal Next.js 15)
- [x] Duplicatas removidas (raiz e public/)
- [x] Metadata: `icons` removido do layout.tsx (auto-detectado pelo file convention)
- [x] Footer: `icon.svg` no mobile (lg:hidden) + `logo.svg` no desktop (hidden lg:block)
- [x] lint + typecheck ok

### S1.6 ✅ — Assinatura "Produzido por" no footer

- [x] Imagem movida para `public/images/assinatura-lucas.png`
- [x] Footer: CNPJ substituído por assinatura com link para GitHub
- [x] lint + typecheck ok

### S2 — Seção / Página de Cases e Portfólio (oportunidade)

CONTENT.md lista **15 projetos reais nomeados** (Natura Estação Cosmética, Albras Top Lifting, Hydro Alunorte, Suzano...) com cliente e escopo. São prova social forte e não estão no site.

- [ ] Avaliar com cliente: seção na Home + página dedicada `/cases`?
- [ ] Definir formato: cards com cliente + descrição + imagem do projeto
- [ ] Implementar rota e componente

### S3 — Performance Lighthouse (target 90+)

- [ ] Otimizar imagens (next/image, lazy loading, formato webp)
- [ ] Verificar CLS (layout shift) — especialmente header fixo e animações
- [ ] Revisar contraste de cor (AA)
- [ ] Testar com ferramenta Lighthouse e ajustar

### S4 — Deploy e Validação

- [ ] Deploy na Vercel
- [ ] Configurar domínio
- [ ] Validar SEO (sitemap, robots, OG tags, schema.org)
- [ ] Testar formulários wa.me em produção

---

### Gap List (conteúdo pendente — reportar ao cliente)
- [ ] Números reais (funcionários, projetos concluídos) — para contadores na Home
- [ ] Fotos reais de obras/equipe/instalações (pode substituir os placeholders acima)
- [ ] Nomes exatos dos logos de parceiros não identificados (5)
- [ ] Autorização de uso de marca de cada cliente/parceiro
- [ ] Depoimento/avaliação de cliente 2024/25
- [ ] CNPJ e razão social de cada empresa do grupo (para rodapé)
- [ ] Status da N'Brazil Amortecedores ("em breve" no PPT — verificar)
- [ ] Coordenadas exatas do Google Maps (Barcarena, Ananindeua, Maracanaú)
- [ ] Confirmar se contatos legados (vendasv@suprimmil.com.br, 91 3013-7730) continuam ativos
