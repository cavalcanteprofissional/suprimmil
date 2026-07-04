# Changelog — Site Grupo Suprimmil

Todas as mudanças notáveis neste projeto serão documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/), e o projeto segue [Semantic Versioning](https://semver.org/).

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
