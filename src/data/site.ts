// Fonte única de verdade para links, textos e dados estruturais do site.
// Nada de URL/telefone/copy duplicado direto nos componentes — tudo passa por aqui.

export const SITE_URL = 'https://emmusicproducoes.com.br';

export const WHATSAPP_NUMBER = '556296655336'; // confirmado — não alterar sem confirmação nova

function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP = {
  producao: waLink('Olá! Vim pelo site da EM Music Produções e quero falar sobre meu projeto musical.'),
  lancamento: waLink('Olá! Vim pelo site da EM Music Produções e quero entender como organizar o lançamento da minha música.'),
  geral: waLink('Olá! Vim pelo site da EM Music Produções e quero saber mais.'),
  projeto: waLink('Olá! Vim pelo site da EM Music Produções e quero falar sobre um projeto de produção musical.'),
};

export const EXTERNAL_LINKS = {
  edTutoriais: 'https://edtutoriais.com.br',
  edTutoriaisCursos: 'https://edtutoriais.com.br/cursos',
  samplesBrasil: 'https://samplesbrasil.com',
  // Rede Loops Brasil não tem endereço público confirmado no projeto —
  // a marca aparece no ecossistema sem link até que exista um domínio oficial.
  redeLoopsBrasil: null as string | null,
};

export const SEO = {
  title: 'EM Music Produções | Produção Musical, Loops e Cursos',
  description:
    'Produção musical, videoclipes, orientação para artistas, loops, bibliotecas Kontakt, arquivos WAV e cursos de produção musical.',
  ogImage: '/images/og-em-music.jpg', // ainda não existe — ver Base.astro
};

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Produção Musical', href: '#producao' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Loops e Instrumentos', href: '#loops' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Ecossistema', href: '#ecossistema' },
];

export type Pathway = {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external: boolean;
};

export const PATHWAYS: Pathway[] = [
  {
    number: '01',
    eyebrow: 'Artista',
    title: 'QUERO PRODUZIR MINHA MÚSICA',
    body: 'Tenho uma música e quero transformar minha ideia em uma produção profissional.',
    cta: 'COMEÇAR MEU PROJETO',
    href: WHATSAPP.producao,
    external: true,
  },
  {
    number: '02',
    eyebrow: 'Produtor musical',
    title: 'QUERO LOOPS E INSTRUMENTOS',
    body: 'Quero loops, samples, bibliotecas Kontakt, arquivos WAV, MIDI e instrumentos para minhas produções.',
    cta: 'COMPRAR NA ED TUTORIAIS',
    href: EXTERNAL_LINKS.edTutoriais,
    external: true,
  },
  {
    number: '03',
    eyebrow: 'Quero aprender',
    title: 'QUERO APRENDER PRODUÇÃO MUSICAL',
    body: 'Quero começar ou evoluir na produção musical com conteúdos práticos.',
    cta: 'CONHECER OS CURSOS',
    href: EXTERNAL_LINKS.edTutoriaisCursos,
    external: true,
  },
  {
    number: '04',
    eyebrow: 'Quero lançar',
    title: 'QUERO ORGANIZAR MEU LANÇAMENTO',
    body: 'Preciso de orientação para organizar meu projeto, cadastrar minha música e preparar o lançamento.',
    cta: 'CONHECER AS OPÇÕES',
    href: WHATSAPP.lancamento,
    external: true,
  },
];

export const SERVICES: string[] = [
  'Produção musical',
  'Arranjo',
  'Gravação',
  'Edição',
  'Mixagem',
  'Masterização',
  'Videoclipe',
  'Cadastro musical',
  'Distribuição para plataformas digitais',
  'Orientação para artistas',
];

export type BrandCategory = { label: string };

export const ED_TUTORIAIS_CATEGORIES: BrandCategory[] = [
  { label: 'Bibliotecas Kontakt' },
  { label: 'Loops em WAV' },
  { label: 'MIDI' },
  { label: 'Baterias' },
  { label: 'Guitarras e violões' },
  { label: 'Baixos' },
  { label: 'Teclados' },
  { label: 'Instrumentos regionais' },
  { label: 'Produtos gratuitos' },
];

export type CoursePath = { title: string };

export const COURSE_PATHS: CoursePath[] = [
  { title: 'Começar do zero' },
  { title: 'Produzir no REAPER' },
  { title: 'Melhorar mixagem e masterização' },
  { title: 'Aprender Kontakt' },
  { title: 'Produzir ritmos brasileiros' },
];

export type ProcessStep = { number: string; title: string };

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'VOCÊ APRESENTA SUA IDEIA' },
  { number: '02', title: 'ENTENDEMOS O PROJETO' },
  { number: '03', title: 'PRODUZIMOS E ACOMPANHAMOS' },
  { number: '04', title: 'A MÚSICA FICA PRONTA PARA SEGUIR ADIANTE' },
];

export type Brand = {
  slug: string;
  name: string;
  logoPath: string; // caminho em /public — ver src/utils/assets.ts pro fallback
  description: string;
  actions: { label: string; href: string; external: boolean }[];
};

export const BRANDS: Brand[] = [
  {
    slug: 'em-music',
    name: 'EM Music Produções',
    logoPath: '/images/brands/em-music.png',
    description: 'Produção musical, audiovisual e desenvolvimento de projetos artísticos.',
    actions: [
      { label: 'Conhecer os serviços', href: '#servicos', external: false },
      { label: 'Falar no WhatsApp', href: WHATSAPP.geral, external: true },
    ],
  },
  {
    slug: 'ed-tutoriais',
    name: 'ED Tutoriais',
    logoPath: '/images/brands/ed-tutoriais.png',
    description: 'Loops, bibliotecas Kontakt, arquivos WAV, MIDI, instrumentos e conteúdos de produção musical.',
    actions: [
      { label: 'Acessar a loja', href: EXTERNAL_LINKS.edTutoriais, external: true },
      { label: 'Acessar os cursos', href: EXTERNAL_LINKS.edTutoriaisCursos, external: true },
    ],
  },
  {
    slug: 'rede-loops-brasil',
    name: 'Rede Loops Brasil',
    logoPath: '/images/brands/rede-loops-brasil.png',
    description: 'Estrutura empresarial e desenvolvimento do ecossistema de produção fonográfica.',
    actions: [], // sem link confirmado — ver EXTERNAL_LINKS.redeLoopsBrasil
  },
  {
    slug: 'samples-brasil',
    name: 'Samples Brasil',
    logoPath: '/images/brands/samples-brasil.png',
    description: 'Produtos e soluções voltados ao mercado internacional.',
    actions: [{ label: 'Visitar Samples Brasil', href: EXTERNAL_LINKS.samplesBrasil, external: true }],
  },
];

export const MOBILE_ACTIONS = [
  { label: 'Produzir', href: WHATSAPP.producao, external: true },
  { label: 'Loops', href: EXTERNAL_LINKS.edTutoriais, external: true },
  { label: 'Cursos', href: EXTERNAL_LINKS.edTutoriaisCursos, external: true },
];

export const FOOTER_LINKS = {
  columns: [
    {
      heading: 'EM Music Produções',
      links: [
        { label: 'Produção Musical', href: '#producao' },
        { label: 'Serviços', href: '#servicos' },
      ],
    },
    {
      heading: 'Loops e Cursos',
      links: [
        { label: 'Loops e Instrumentos', href: '#loops' },
        { label: 'Cursos', href: '#cursos' },
      ],
    },
    {
      heading: 'Ecossistema',
      links: [
        { label: 'ED Tutoriais', href: EXTERNAL_LINKS.edTutoriais, external: true },
        { label: 'Samples Brasil', href: EXTERNAL_LINKS.samplesBrasil, external: true },
        { label: 'Rede Loops Brasil', href: null, external: false },
      ],
    },
  ],
};
