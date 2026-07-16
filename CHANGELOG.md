# Changelog — Site Grupo Suprimmil

Todas as mudanças notáveis neste projeto serão documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/), e o projeto segue [Semantic Versioning](https://semver.org/).

---

## [0.4.0] — 2026-07-15

### Adicionado

- **WhatsApp Float**: botão fixo inferior direito laranja com link wa.me em todas as páginas
- **Back to Top**: botão fixo acima do WhatsApp que aparece após 300px de scroll
- **Active Nav State**: destaque no link da página atual via `usePathname()` + `aria-current="page"`
- **Formulários via client handler**: ContactForm e JobForm montam `?text=` com dados do formulário para wa.me
- **Consistência Visual**: `accent-500` padrão (#f26522) em todos os section labels, `font-heading` em 48 headings
- **Micro-interações**: hover com borda/sombra nos mapas, hover scale+pause nos logos clientes, rotação no hamburger, opacidade 60% na linha da timeline
- **Metadata mais descritivas**: home, contato, empresa, servicos, trabalhe-conosco com descrições ricas em SEO

### Modificado

- **Section padding unificado**: contadores e certificações migrados para `py-16 lg:py-24`
- **Serviços**: label "Capacidade Técnica" corrigido para `text-accent-500`
- **Home**: section label "Diferenciais" corrigido para `text-accent-500`
- **Hamburger icon**: `transition-transform duration-300 rotate-90` ao alternar
- **Linha da timeline**: opacidade aumentada de 30% para 60%
- **Mapas**: adicionados `hover:border-accent-500/30 hover:shadow-md transition-all`

### Corrigido

- Contraste dos labels de seção: alguns usavam `text-primary-600` em vez de `text-accent-500`
- Padding inconsistente entre seções (contadores/certificações com `py-12` enquanto as demais usavam `py-16`)

---

## [0.3.0] — 2026-07-15

### Adicionado

- **Componente Select (`@base-ui/react/select`)**: substitui selects nativos no formulário de Contato e Trabalhe Conosco — acessível, estilizado com padrão shadcn, com indicador de check e animação de popup
- **Componente Timeline com GSAP + ScrollTrigger**: revelação animada com fade/slide dos itens da linha do tempo + animação de crescimento da linha vertical — dependência `gsap` v3.15 finalmente implementada
- **Skip-to-content link**: atalho de teclado "Pular para o conteúdo principal" no `layout.tsx`
- **Focus-visible styles**: `focus-visible:outline-2` nos links de navegação (Header, Footer, mobile menu)

### Modificado

- **Página Empresa**: todas as seções agora usam `<FadeIn>` para animação de entrada (antes 0 animações)
- **Página Empresa**: timeline substituída por `<Timeline>` com GSAP ScrollTrigger
- **Selects substituídos**: `/contato` e `/trabalhe-conosco` — de `<select>` nativo para `@base-ui/react/select` com estilo shadcn
- **Coordenadas do Google Maps**: atualizadas de placeholders para coordenadas reais aproximadas de Barcarena, Ananindeua e Maracanaú
- **Redes Sociais (Footer)**: links alterados de `href="#"` para URLs placeholder (facebook.com/suprimmil, instagram.com/suprimmil, linkedin.com/company/suprimmil) com `aria-label` descritivo
- **Ícones decorativos**: `aria-hidden` em ícones de telefone (Header), seta externa (Footer) e engrenagens (GearDecoration)
- **Header links**: `focus-visible:outline-2` adicionado para navegação por teclado

### Corrigido

- Select nativo no `/trabalhe-conosco` usava estilo diferente do resto do formulário — padronizado com `@base-ui/react/select`
- Falta de animações na página Empresa — inconsistência com o padrão das demais páginas
- Redes sociais: migrado de `href="#"` placeholder para URLs reais (Instagram, Facebook, LinkedIn)

### Modificado

- **Responsividade mobile**: correções em 10+ pontos para adequação a viewport 320px e touch targets WCAG

### Pendente

- [ ] Performance Lighthouse 90+
- [ ] Conteúdo real a validar com cliente (fotos, CNPJ, autorizações)

---

## [0.2.0] — 2026-07-13

### Adicionado

- **Seção Clientes e Parceiros**: grid de logos na Home page com gear SVG animado ao fundo
- **Componente GearDecoration**: SVG de engrenagem animado (rotação cw/ccw) para decoração de seções escuras
- **Gear-bg pattern**: padrão de fundo sutil com engrenagens via CSS (`gear-bg` / `gear-bg-dark`)
- **Decorações gear**: gear animados nos heroes (Home, Empresa, Serviços, Contato, Trabalhe Conosco) e seções escuras
- **gear01.svg e gear02.svg**: dois modelos de engrenagem como background dos logos (alternados, velocidades diferentes)
- **Logos atualizadas**: 10 clientes + 6 parceiros em `public/logos/` com nomenclatura `cliente-NN-nome.svg` / `parceiro-NN-nome.svg`

### Modificado

- **Home page**: hero atualizado para "3 estados", contadores reais (5.300+ m², 3 estados), MVV oficial do PPT, nova faixa de Certificações Hydro, diferenciais com frota/parque de máquinas, CTA com dois blocos regionais
- **Logos clientes/parceiros**: animação alterada — gear de fundo gira (gear01=25s, gear02=18s), logo fica estática
- **Header**: logo Suprimmil aumentado (h-16 lg:h-[4.5rem])
- **Footer**: logo Suprimmil aumentado (h-16)
- **Empresa**: texto institucional multi-empresa, MVV oficial, timeline expandida (Brazil Amortecedores 2022, Suprimmil CE 2024)
- **Serviços**: nova seção "Estrutura e Capacidade Técnica" (parque de máquinas, frota, controle de qualidade)
- **Contato**: dois blocos regionais (Norte + Nordeste), mapa com 3 unidades (Barcarena, Ananindeua, Maracanaú)
- **Footer**: endereço CE, contatos Nordeste, descrição multi-estado
- **Trabalhe Conosco**: select estilizado com padrão shadcn
- **navigation.ts**: contatos regionais (Norte + Nordeste), empresas do grupo, endereço CE
- **layout.tsx**: schema.org com 3 endereços + contact points regionais
- **CONTENT.md**: mesclado com PPT institucional (holding multi-empresa, certificações, portfólio, clientes)
- **SKILL.md**: atualizado com arquitetura real e dados centralizados

### Removido

- Diretório `logos/` raiz (realocado para `public/logos/` com nomenclatura padronizada)
- Diretório `att/` (arquivos de merge temporários)
- Diretório `logos_att/` (processado)
- `public/icon.svg` (conflito com `src/app/icon.svg`)

### Corrigido

- Conflito `public/file and page file` para `/icon.svg` — removido `public/icon.svg`
- Erro de hidratação causado por extensões de navegador — adicionado `suppressHydrationWarning` no `<html>`

---

## [0.1.0] — 2026-07-04

### Adicionado

- Setup do projeto: Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui
- Configuração de tema: paleta azul-aço (#2E5C8A) + laranja (#F26522)
- Fontes: Space Grotesk (títulos) + IBM Plex Sans (corpo)
- Ícones: lucide-react
- Animações: Framer Motion (fade-in nas seções, contagem animada)

### Layout Base

- Header fixo com logo, navegação, WhatsApp em destaque e CTA "Fale Conosco"
- Navegação mobile com menu hamburguer
- Footer global com endereços (Barcarena + Ananindeua), contatos, redes sociais e links rápidos

### Páginas

- **Home (`/`)**: Hero com headline + CTA duplo, contadores animados, "O Grupo", Missão/Visão/Valores, 6 áreas de atuação, diferenciais, CTA final
- **Empresa (`/empresa`)**: Sobre o Grupo, timeline desde 2010, missão/visão/valores, diferenciais competitivos
- **Serviços (`/servicos`)**: Grid detalhado das 6 áreas de atuação (engenharia, suprimentos, construção, fabricação, usinagem, materiais)
- **Contato (`/contato`)**: Formulário via WhatsApp, informações de contato, mapa Google Maps (Barcarena + Ananindeua)
- **Trabalhe Conosco (`/trabalhe-conosco`)**: Formulário de candidatura via WhatsApp com seleção de área de interesse

### SEO

- metadata API em todas as páginas
- sitemap.xml e robots.txt dinâmicos
- Schema.org Organization + LocalBusiness com 2 endereços
- Open Graph tags

### Assets

- Logo (SVG) e ícone (SVG) organizados em `public/`
- Favicon configurado via metadata
