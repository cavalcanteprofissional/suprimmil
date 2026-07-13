# Changelog — Site Grupo Suprimmil

Todas as mudanças notáveis neste projeto serão documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/), e o projeto segue [Semantic Versioning](https://semver.org/).

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

### Pendente

- [ ] GSAP + ScrollTrigger na timeline da empresa
- [ ] Atualizar coordenadas reais do Google Maps
- [ ] Autorização de uso de marca dos logos de clientes/parceiros

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

### Pendente (gap list)

- [ ] Números reais de anos/funcionários/projetos
- [ ] Handles de redes sociais
- [ ] Fotos reais de obras e instalações
- [ ] Certificações (ISO, NR, etc.)
- [ ] Portfólio de clientes
- [ ] CNPJ e razão social para rodapé
- [ ] Animações GSAP + ScrollTrigger na timeline da empresa
- [ ] Imagens reais nos placeholders das seções
