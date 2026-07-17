// Fonte única de verdade para links, textos e dados estruturais do site.
// Nada de URL/telefone/copy duplicado direto nos componentes — tudo passa por aqui.
//
// Todo dado de negócio abaixo (categorias, cursos, depoimentos, canais) foi conferido
// contra a API do WooCommerce, a página real de /cursos e os canais oficiais de
// YouTube/Instagram em 17/07 — ver commit que introduziu este comentário. Não adicionar
// categoria, curso ou depoimento novo sem confirmar na fonte real primeiro.

export const SITE_URL = 'https://emmusicproducoes.com.br';

export const WHATSAPP_NUMBER = '556296655336'; // confirmado — não alterar sem confirmação nova

function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP = {
  producao: waLink('Olá! Vim pelo site da EM Music Produções e quero falar sobre meu projeto musical.'),
  distribuicao: waLink('Olá! Vim pelo site da EM Music Produções e quero colocar minha música nas plataformas digitais.'),
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

// Canais oficiais confirmados por handle (17/07) — ids reais via busca no YouTube,
// não inventar handle novo sem confirmar.
export const SOCIAL = {
  youtube: [
    {
      label: 'EM Produções Official',
      handle: '@emproducooesofficial6670',
      url: 'https://www.youtube.com/@emproducooesofficial6670',
    },
    {
      label: 'Prod. Eder Machado',
      handle: '@PRODERMACHADO',
      url: 'https://www.youtube.com/@PRODERMACHADO',
    },
    {
      label: 'ED Tutoriais',
      handle: '@EDTUTORIAIS',
      url: 'https://www.youtube.com/@EDTUTORIAIS',
    },
  ],
  instagram: [
    { label: 'EM Music Produções', handle: '@emmusicproducoes', url: 'https://www.instagram.com/emmusicproducoes' },
    { label: 'ED Tutoriais', handle: '@edtutoriaiss', url: 'https://www.instagram.com/edtutoriaiss' },
    { label: 'Prod. Eder Machado', handle: '@prod_eder_machado', url: 'https://www.instagram.com/prod_eder_machado/' },
  ],
};

export const SEO = {
  title: 'EM Music Produções | Produção Musical e Distribuição Digital',
  description:
    'Produção musical, arranjo, mixagem, masterização, videoclipe e distribuição para plataformas digitais. Loops, bibliotecas Kontakt e cursos de produção musical pela ED Tutoriais.',
  ogImage: '/images/og-em-music.jpg', // ainda não existe — ver Base.astro
};

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Produção Musical', href: '#producao' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Vídeos', href: '#videos' },
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
    eyebrow: 'Já tenho a música',
    title: 'QUERO COLOCAR MINHA MÚSICA NAS PLATAFORMAS',
    body: 'Já tenho a música pronta e preciso cadastrar e distribuir para Spotify, YouTube Music e as demais plataformas digitais.',
    cta: 'FALAR SOBRE DISTRIBUIÇÃO',
    href: WHATSAPP.distribuicao,
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

// Confirmado contra a API de categorias do WooCommerce (edtutoriais.com.br) em 17/07 —
// só nomes que realmente existem como categoria de produto. "Instrumentos regionais"
// foi removido por não existir.
export const ED_TUTORIAIS_CATEGORIES: BrandCategory[] = [
  { label: 'Bibliotecas Kontakt' },
  { label: 'Loops em WAV' },
  { label: 'Pacote Waves' },
  { label: 'Violão' },
  { label: 'Guitarra' },
  { label: 'Bateria e percussão' },
  { label: 'Sanfona e acordeon' },
  { label: 'Piano' },
  { label: 'Produtos gratuitos' },
];

export type CoursePath = { title: string };

// Temas confirmados na meta descrição real de edtutoriais.com.br/cursos — a página
// carrega o catálogo via JS, então não listamos nome de curso específico que não
// conseguimos confirmar (ex: não existe curso de "REAPER" confirmado).
export const COURSE_PATHS: CoursePath[] = [
  { title: 'Produção musical do zero' },
  { title: 'Mixagem e masterização' },
  { title: 'Produção com Kontakt' },
  { title: 'Cursos e downloads gratuitos' },
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

export type Video = {
  id: string;
  title: string;
  channelLabel: string;
  channelUrl: string;
  thumbnail: string;
  url: string;
};

// Vídeos reais dos 3 canais oficiais, escolhidos pelo desempenho real (views) via
// dados do YouTube em 17/07. Nunca trocar por thumbnail/vídeo genérico de banco.
export const VIDEOS: Video[] = [
  {
    id: 'sBPhjQT0CIw',
    title: 'Adriano Lima — A Casa É Nossa (clipe oficial)',
    channelLabel: 'EM Produções',
    channelUrl: SOCIAL.youtube[0].url,
    thumbnail: 'https://i.ytimg.com/vi/sBPhjQT0CIw/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=sBPhjQT0CIw',
  },
  {
    id: 't42Vel5o7f8',
    title: 'Desperta-me — Eder Machado feat. Júlia Fernandes (clipe oficial)',
    channelLabel: 'Prod. Eder Machado',
    channelUrl: SOCIAL.youtube[1].url,
    thumbnail: 'https://i.ytimg.com/vi/t42Vel5o7f8/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=t42Vel5o7f8',
  },
  {
    id: 'xNcooYAr_r0',
    title: 'Rafaela — Adriano Lima (clipe oficial)',
    channelLabel: 'EM Produções',
    channelUrl: SOCIAL.youtube[0].url,
    thumbnail: 'https://i.ytimg.com/vi/xNcooYAr_r0/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=xNcooYAr_r0',
  },
  {
    id: 'Gbb0YlkDSLk',
    title: 'Yahweh — Júlia Fernandes',
    channelLabel: 'Prod. Eder Machado',
    channelUrl: SOCIAL.youtube[1].url,
    thumbnail: 'https://i.ytimg.com/vi/Gbb0YlkDSLk/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Gbb0YlkDSLk',
  },
  {
    id: 'ej08AN8_xIo',
    title: 'Como resolver "No Library Found" no Kontakt',
    channelLabel: 'ED Tutoriais',
    channelUrl: SOCIAL.youtube[2].url,
    thumbnail: 'https://i.ytimg.com/vi/ej08AN8_xIo/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=ej08AN8_xIo',
  },
  {
    id: 'Cx4iqoDWMLs',
    title: 'Como lançar pads pelo celular (app grátis M PADS)',
    channelLabel: 'ED Tutoriais',
    channelUrl: SOCIAL.youtube[2].url,
    thumbnail: 'https://i.ytimg.com/vi/Cx4iqoDWMLs/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=Cx4iqoDWMLs',
  },
];

export type Testimonial = { quote: string; name: string; role: string };

// Depoimentos reais, copiados da página de produto edtutoriais.com.br (17/07) —
// mesma equipe/mesmo produtor (Eder Machado) por trás da EM Music. Não inventar
// depoimento novo: só usar o que está publicado na fonte.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'A ED Tutoriais tem absolutamente tudo que um produtor precisa! Acabei de adquirir a incrível Biblioteca Nordeste com meu parceiro e mestre da produção, Eder Machado! Qualidade de sobra.',
    name: 'Dorgival Dantas',
    role: 'Artista, músico e compositor — Olho D’Água do Borges/RN',
  },
  {
    quote:
      'Passando aqui para recomendar as bibliotecas da ED Tutoriais do Eder Machado e minha amiga Tamara Tore. Bibliotecas excelentes, muito usadas e respeitadas aqui no Belém do Pará.',
    name: 'Maycon Danin',
    role: 'Maestro, pesquisador da cultura popular e produtor musical',
  },
  {
    quote:
      'Grandes gravadoras e produtores de hits do momento estão apostando nos instrumentos e loops produzidos por Eder Machado.',
    name: 'Fella Brown',
    role: 'Produtor musical de "Zona de Perigo", sucesso de Leo Santana',
  },
];

export type Founder = { name: string; role: string; instagram?: string };

export const FOUNDERS: Founder[] = [
  {
    name: 'Eder Machado',
    role: 'Fundador da ED Tutoriais, sócio da Rede Loops Brasil e CEO da Prod. Eder Machado.',
    instagram: SOCIAL.instagram[2].url,
  },
  {
    name: 'Tamara Tore',
    role: 'Sócia e CEO da ED Tutoriais, sócia da Rede Loops Brasil.',
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
        { label: 'Vídeos', href: '#videos' },
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
