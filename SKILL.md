# SKILL.md — Reconstrução do Site Institucional Grupo Suprimmil

## Objetivo

Reconstruir do zero o site institucional/comercial do **Grupo Suprimmil** (atualmente em WordPress + Elementor, ver https://suprimmil.com.br/), migrando para uma stack moderna, rápida e visualmente mais elegante e sofisticada — condizente com uma empresa de engenharia industrial pesada, sem parecer um site genérico de template.

Use **CONTENT.md** (arquivo irmão deste) como única fonte de conteúdo textual real da empresa. Não inventar números, cases ou depoimentos que não estejam lá — usar placeholders explícitos onde faltar informação, e sinalizar ao usuário o que precisa ser validado.

---

## 1. Stack tecnológica recomendada

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Estilo:** Tailwind CSS v4 + shadcn/ui (componentes base) para consistência e velocidade
- **Animações:** Framer Motion para transições de seção e microinterações; considerar GSAP + ScrollTrigger apenas se houver storytelling de scroll (ex: linha do tempo "desde 2010")
- **Conteúdo:** Conteúdo estático tipado (arquivos `.ts`/`.json` gerados a partir do CONTENT.md) — não é necessário CMS headless para o escopo atual, mas deixar estrutura pronta para migrar para um (Sanity ou Payload) se o cliente quiser editar sozinho no futuro
- **Formulário de contato:** Server Action do Next.js + envio via Resend (e-mail) ou integração direta com WhatsApp Business API/link `wa.me`
- **Ícones:** lucide-react
- **Deploy:** Vercel (SSG/ISR nas páginas institucionais, já que o conteúdo muda pouco)
- **SEO técnico:** metadata API do Next.js, sitemap.xml, robots.txt, dados estruturados (schema.org `Organization` + `LocalBusiness`, com os dois endereços de Barcarena e Ananindeua)
- **Acessibilidade:** contraste AA mínimo, navegação por teclado, `alt` descritivo em todas as imagens industriais

Não usar WordPress, Elementor ou qualquer page builder — o objetivo é performance (Lighthouse 90+) e um visual sob controle total do design.

---

## 2. Direção de design (elegante, industrial-premium)

O site atual é genérico (tema Elementor padrão, placeholders de imagem, layout de blocos empilhados). A nova direção deve comunicar **solidez industrial + precisão de engenharia**, evitando o clichê "site de metalúrgica dos anos 2010".

**Paleta (definida com o cliente em jul/2026):**
- Base neutra escura: grafite/chumbo (`#14181C` a `#1F262C`) para seções de destaque e hero — remete a aço e metal
- Cor primária (accent principal): azul-aço (`#2E5C8A`) — transmite solidez técnica e engenharia
- Cor secundária (accent de apoio): laranja industrial (`#F26522`) — usado em gradientes sutis, detalhes e CTAs pontuais, sempre com predominância do azul
- Neutros claros: cinza-claro/branco-osso para seções de conteúdo, evitando branco puro (`#FFFFFF`) que pode parecer "clínico" demais
- Metálico sutil: gradientes discretos em cinza-prata em bordas/dividers para reforçar o tema metalúrgico sem exagerar

**Tipografia (definida com o cliente em jul/2026):**
- Títulos: **Space Grotesk** (bold/black) — fonte grotesca/industrial que transmite precisão técnica
- Corpo de texto: **IBM Plex Sans** — legível, com herança "técnica/engenharia" que combina com o setor
- Hierarquia clara: títulos grandes e confiantes, não comprimidos como no site atual

**Elementos visuais:**
- Fotografia real de obras/equipamentos em alta qualidade (substituir os placeholders genéricos) — se não houver banco de imagens do cliente, usar ilustrações técnicas/linha (blueprint style) como recurso temporário, nunca stock photo genérico de "aperto de mãos corporativo"
- Texturas sutis de metal escovado ou chapa em backgrounds de seção (baixa opacidade, não decorativo excessivo)
- Ícones de linha fina e precisos para cada área de atuação (engenharia, suprimentos, construção, usinagem etc.), não emojis nem ícones genéricos de clipart
- Números institucionais (anos de atividade, funcionários, projetos) animados com contagem ao entrar na viewport — manter o conceito do site atual, mas com tipografia grande e elegante
- Evitar excesso de sombras/glassmorphism "SaaS genérico" — este é um site B2B industrial, a estética deve ser mais sóbria, com micro-animações pontuais (fade + slide sutil), não flashy

---

## 3. Arquitetura de páginas

Manter e expandir a navegação atual, com URLs próprias (não apenas âncoras) para melhor SEO:

1. **`/` (Home)** — Hero + resumo institucional + contadores + resumo das áreas de atuação + CTA de contato
2. **`/empresa`** — Sobre o grupo, missão/visão/valores, diferenciais, história (linha do tempo desde 2010)
3. **`/servicos`** — Detalhamento de cada linha de negócio (Engenharia e Projetos, Suprimentos, Construção, Fabricação e Recuperação Mecânica, Usinagem, Fornecimento de Materiais) — cada uma como seção ou sub-rota `/servicos/[slug]` se o conteúdo crescer
4. **`/trabalhe-conosco`** — Formulário de candidatura (nome, e-mail, telefone, área de interesse, upload de currículo) — a página atual retorna 404, então recriar do zero
5. **`/contato`** — Formulário de contato, mapa incorporado com os dois endereços (Barcarena e Ananindeua), telefones, e-mails, WhatsApp
6. **Rodapé global** — Endereços, redes sociais, e-mails, telefones, links rápidos, CNPJ (quando fornecido)

Manter também âncoras internas na Home (`#empresa`, `#servicos`, `#contato`) para compatibilidade com links já divulgados, mas com páginas completas por trás para SEO.

---

## 4. Estrutura de seções da Home (ordem sugerida)

1. Header fixo com logo, menu, telefone/WhatsApp em destaque e CTA "Fale Conosco"
2. Hero: headline institucional + subheadline + CTA duplo (Fale com um especialista / Conheça nossos serviços)
3. Contadores institucionais (anos, funcionários, projetos)
4. Bloco "O Grupo" — resumo + link para `/empresa`
5. Missão / Visão / Valores em cards ou layout editorial (não apenas lista simples)
6. Áreas de Atuação — grid de 6 cards com ícone + título + descrição curta, linkando para `/servicos`
7. Diferenciais (localização estratégica, infraestrutura, equipe, estoque, entrega)
8. Faixa de contato/CTA final com telefone, e-mail e WhatsApp
9. Footer completo

---

## 5. Regras de conteúdo

- Todo texto institucional deve vir de `CONTENT.md` — não parafrasear a ponto de perder informação técnica (ex: normas de soldagem MIG/MAG e TIG devem permanecer explícitas)
- Onde `CONTENT.md` sinalizar `[A CONFIRMAR COM CLIENTE]`, deixar comentário `{/* TODO: validar com cliente */}` no código e, se necessário, um placeholder visualmente honesto (não inventar número)
- Não reintroduzir a política de e-commerce (boleto com desconto, parcelamento) a menos que o cliente confirme que ainda vende produtos online — por padrão, tratar o novo site como **institucional B2B com formulário de contato/orçamento**, não loja virtual

---

## 6. Ordem de implementação sugerida (checkpoints para o assistente de IA)

1. Setup do projeto (Next.js + TypeScript + Tailwind + shadcn/ui) e configuração de fontes/tema
2. Layout base: Header, Footer, container e grid system
3. Página Home completa com conteúdo real de `CONTENT.md`
4. Página `/empresa`
5. Página `/servicos` (com sub-cards de cada área de atuação)
6. Página `/contato` com formulário funcional (Server Action + envio de e-mail)
7. Página `/trabalhe-conosco` com formulário de candidatura
8. SEO técnico: metadata, sitemap, schema.org, Open Graph (usar dados de `CONTENT.md` seção 1)
9. Revisão de acessibilidade e performance (Lighthouse), responsividade mobile-first
10. Checklist final de conteúdo pendente (seção 9 do `CONTENT.md`) reportado ao cliente antes do deploy

---

## 7. Fora de escopo (não fazer sem pedido explícito)

- Não recriar carrinho de compras/checkout de e-commerce — o cliente confirmou que o site é 100% institucional B2B
- Não inventar depoimentos de clientes ou logos de parceiros
- Não usar imagens de stock genéricas de "trabalhador de capacete sorrindo para câmera" — preferir vazio/placeholder honesto a clichê
- Não desviar da paleta azul-aço (#2E5C8A) + laranja (#F26522) definida com o cliente
