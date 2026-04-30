export type Level = 'basic' | 'intermediate' | 'advanced';

export type Lesson = {
  slug: string;
  title: string;
  level: Level;
  area: string;
  summary: string;
  interaction: string;
  estimatedMinutes: number;
  docs: { label: string; url: string }[];
};

const cDocs = [
  { label: 'C Reference', url: 'https://en.cppreference.com/w/c' },
  { label: 'GNU C Manual', url: 'https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html' }
];

export const lessons: Lesson[] = [
  {
    slug: 'c-intro',
    title: 'Lógica com C',
    level: 'basic',
    area: 'C',
    summary: 'Primeiro contato com algoritmo, entrada, processamento, saída e leitura mental de código em C.',
    interaction: 'Simulador de algoritmo com entrada, processamento e saída.',
    estimatedMinutes: 25,
    docs: cDocs
  },
  {
    slug: 'c-variables',
    title: 'Variáveis e Tipos em C',
    level: 'basic',
    area: 'C',
    summary: 'int, float, char, operadores aritméticos e como valores mudam durante a execução.',
    interaction: 'Laboratório de cálculo com tipos e resultado formatado.',
    estimatedMinutes: 35,
    docs: cDocs
  },
  {
    slug: 'c-if-else',
    title: 'If, Else e Comparações',
    level: 'basic',
    area: 'C',
    summary: 'Decisão, comparação, operadores relacionais e fluxo alternativo em programas simples.',
    interaction: 'Playground de condição com nota, idade e status.',
    estimatedMinutes: 35,
    docs: cDocs
  },
  {
    slug: 'c-loops',
    title: 'Loops com For e While',
    level: 'basic',
    area: 'C',
    summary: 'Repetição controlada, contador, acumulador e diferença prática entre for e while.',
    interaction: 'Gerador de tabuada e somatório com loop visual.',
    estimatedMinutes: 40,
    docs: cDocs
  },
  {
    slug: 'c-functions',
    title: 'Funções em C',
    level: 'basic',
    area: 'C',
    summary: 'Separar responsabilidades, receber parâmetros, retornar valores e reutilizar lógica.',
    interaction: 'Montador de função com parâmetros e retorno calculado.',
    estimatedMinutes: 40,
    docs: cDocs
  },
  {
    slug: 'c-arrays',
    title: 'Arrays e Índices',
    level: 'basic',
    area: 'C',
    summary: 'Listas de valores, posições, índices começando em zero e percorrer arrays com loops.',
    interaction: 'Editor de array com índice selecionado, soma e média.',
    estimatedMinutes: 45,
    docs: cDocs
  },
  {
    slug: 'html',
    title: 'HTML Essencial',
    level: 'basic',
    area: 'HTML',
    summary: 'Estrutura de página, semântica, texto, listas, links e blocos fundamentais da web.',
    interaction: 'Montador de cards com preview instantâneo do HTML.',
    estimatedMinutes: 35,
    docs: [
      { label: 'MDN HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { label: 'MDN HTML Guides', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Guides' }
    ]
  },
  {
    slug: 'css',
    title: 'CSS e Layout',
    level: 'basic',
    area: 'CSS',
    summary: 'Seletores, box model, flexbox e composição visual. Aqui entra o clima de jogo de flex.',
    interaction: 'Mini desafio de alinhamento inspirado em jogos de flex.',
    estimatedMinutes: 40,
    docs: [
      { label: 'MDN CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { label: 'MDN CSS Guides', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Guides' }
    ]
  },
  {
    slug: 'javascript',
    title: 'JavaScript Básico',
    level: 'basic',
    area: 'JavaScript',
    summary: 'Variáveis, condição, operadores, funções e manipulação de dados no navegador.',
    interaction: 'Painel para testar condições e ver o fluxo da decisão.',
    estimatedMinutes: 45,
    docs: [
      { label: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { label: 'MDN JavaScript Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' }
    ]
  },
  {
    slug: 'js-logic',
    title: 'Lógica com JavaScript',
    level: 'basic',
    area: 'JavaScript',
    summary: 'Operadores lógicos, comparação, decisões encadeadas e treino de raciocínio usando JS.',
    interaction: 'Laboratório de expressões lógicas com resposta imediata.',
    estimatedMinutes: 40,
    docs: [
      { label: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { label: 'MDN JavaScript Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' }
    ]
  },
  {
    slug: 'php',
    title: 'PHP Primeiros Passos',
    level: 'basic',
    area: 'PHP',
    summary: 'Sintaxe inicial, echo, variáveis, condição e como PHP conversa com HTML.',
    interaction: 'Simulador de echo e if/else com saída renderizada.',
    estimatedMinutes: 40,
    docs: [
      { label: 'PHP Manual', url: 'https://www.php.net/manual/en/index.php' },
      { label: 'PHP Language Reference', url: 'https://www.php.net/manual/en/langref.php' }
    ]
  },
  {
    slug: 'git-terminal',
    title: 'Git e Terminal',
    level: 'basic',
    area: 'Ferramentas',
    summary: 'Comandos essenciais para criar projeto, versionar alterações e entender o fluxo básico do Git.',
    interaction: 'Simulador de comandos com status do repositório.',
    estimatedMinutes: 35,
    docs: [
      { label: 'Git Book', url: 'https://git-scm.com/book/en/v2' },
      { label: 'Git Reference', url: 'https://git-scm.com/docs' }
    ]
  }
];

export const roadmap = {
  basic: [
    'Lógica com C',
    'Variáveis e tipos',
    'If, else e comparação',
    'Loops',
    'Funções',
    'Arrays',
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'Git e terminal'
  ],
  intermediate: [
    'DOM e eventos',
    'Formulários e validação',
    'APIs e JSON',
    'CRUD com PHP',
    'SQL básico',
    'Projeto guiado completo'
  ],
  advanced: [
    'Autenticação',
    'Banco de dados real',
    'Testes',
    'Segurança',
    'Deploy',
    'Dashboard do aluno'
  ]
};

export const basicGoal = 'Criar base mental forte em programação antes de entrar pesado em frameworks.';
