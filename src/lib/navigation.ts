export const navItems = [
  { label: "Home", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Serviços", href: "/servicos" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Contato", href: "/contato" },
] as const

export const companyInfo = {
  name: "Grupo Suprimmil",

  /* Região Norte */
  phone: "(91) 99393-4925",
  phoneRaw: "5591993934925",
  email: "gerencia@suprimmil.com.br",
  emailComercial: "comercial@suprimmil.com.br",
  addressBarcarena:
    "Rod. PA 481, Km 16 — Barcarena-PA",
  addressAnanindeua:
    "BR 316, Km 8, Nº 195, Centro, Ananindeua-PA",
  addressMetalmecanica:
    "Rod. PA 481, Km 19 — Barcarena-PA",

  /* Região Nordeste */
  phoneNE: "(85) 98170-7479",
  phoneNERaw: "5585981707479",
  emailNEGerencia: "dir.coo@suprimmil.com.br",
  emailNEExecutivo: "dir.executivo@suprimmil.com.br",
  addressCE:
    "Rod. Dr. Mendel Steinbruch, 10293, Sala 14, 1º andar, Pajuçara, Maracanaú-CE, CEP 61.932-005",

  /* Empresas do Grupo */
  companies: [
    { name: "Suprimmil Metalmecânica", location: "Barcarena-PA (3.300 m²)" },
    { name: "Suprimmil Materiais Metalúrgicos", location: "Barcarena-PA + Ananindeua-PA (2.000 m²)" },
    { name: "Suprimmil CE", location: "Maracanaú-CE" },
    { name: "Brazil Amortecedores", location: "São Caetano do Sul-SP (1.000 m²)" },
  ],

  /* Grupo */
  founded: "2010",
  areaTotal: "5.300+",
  estados: 3,

  /* Legado — validar com cliente se mantém ativo */
  phoneLegacy: "(91) 3013-7730",
  emailLegacy: "vendasv@suprimmil.com.br",
} as const
