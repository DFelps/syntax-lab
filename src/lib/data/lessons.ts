export type Level = 'basic' | 'intermediate' | 'advanced';

export type LocalizedString = {
  en: string;
  pt: string;
};

export type Lesson = {
  slug: string;
  title: LocalizedString;
  level: Level;
  area: string;
  summary: LocalizedString;
  interaction: LocalizedString;
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
    title: { en: 'Logic with C', pt: 'Lógica com C' },
    level: 'basic',
    area: 'C',
    summary: {
      en: 'First contact with algorithms, input, processing, output and reading C code mentally.',
      pt: 'Primeiro contato com algoritmos, entrada, processamento, saída e leitura mental de código C.'
    },
    interaction: {
      en: 'Algorithm simulator with input, processing and output.',
      pt: 'Simulador de algoritmo com entrada, processamento e saída.'
    },
    estimatedMinutes: 25,
    docs: cDocs
  },
  {
    slug: 'c-variables',
    title: { en: 'C Variables and Types', pt: 'Variáveis e Tipos em C' },
    level: 'basic',
    area: 'C',
    summary: {
      en: 'int, float, char, arithmetic operators and how values change during execution.',
      pt: 'int, float, char, operadores aritméticos e como valores mudam durante a execução.'
    },
    interaction: {
      en: 'Calculation lab with types and formatted output.',
      pt: 'Laboratório de cálculo com tipos e saída formatada.'
    },
    estimatedMinutes: 35,
    docs: cDocs
  },
  {
    slug: 'c-if-else',
    title: { en: 'If, Else and Comparisons', pt: 'If, Else e Comparações' },
    level: 'basic',
    area: 'C',
    summary: {
      en: 'Decisions, comparisons, relational operators and alternative flow in simple programs.',
      pt: 'Decisões, comparações, operadores relacionais e fluxo alternativo em programas simples.'
    },
    interaction: {
      en: 'Condition playground with score, age and status.',
      pt: 'Playground de condições com nota, idade e status.'
    },
    estimatedMinutes: 35,
    docs: cDocs
  },
  {
    slug: 'c-loops',
    title: { en: 'For and While Loops', pt: 'Loops For e While' },
    level: 'basic',
    area: 'C',
    summary: {
      en: 'Controlled repetition, counters, accumulators and practical differences between for and while.',
      pt: 'Repetição controlada, contadores, acumuladores e diferenças práticas entre for e while.'
    },
    interaction: {
      en: 'Multiplication table and sum generator with visual loop.',
      pt: 'Gerador de tabuada e soma com loop visual.'
    },
    estimatedMinutes: 40,
    docs: cDocs
  },
  {
    slug: 'c-functions',
    title: { en: 'C Functions', pt: 'Funções em C' },
    level: 'basic',
    area: 'C',
    summary: {
      en: 'Separate responsibilities, receive parameters, return values and reuse logic.',
      pt: 'Separar responsabilidades, receber parâmetros, retornar valores e reutilizar lógica.'
    },
    interaction: {
      en: 'Function builder with parameters and calculated return.',
      pt: 'Construtor de função com parâmetros e retorno calculado.'
    },
    estimatedMinutes: 40,
    docs: cDocs
  },
  {
    slug: 'c-arrays',
    title: { en: 'Arrays and Indexes', pt: 'Arrays e Índices' },
    level: 'basic',
    area: 'C',
    summary: {
      en: 'Value lists, positions, zero-based indexes and array iteration with loops.',
      pt: 'Listas de valores, posições, índices começando em zero e iteração com loops.'
    },
    interaction: {
      en: 'Array editor with selected index, sum and average.',
      pt: 'Editor de array com índice selecionado, soma e média.'
    },
    estimatedMinutes: 45,
    docs: cDocs
  },
  {
    slug: 'html',
    title: { en: 'Essential HTML', pt: 'HTML Essencial' },
    level: 'basic',
    area: 'HTML',
    summary: {
      en: 'Page structure, semantics, text, lists, links and fundamental web blocks.',
      pt: 'Estrutura da página, semântica, textos, listas, links e blocos fundamentais da web.'
    },
    interaction: {
      en: 'Card builder with instant HTML preview.',
      pt: 'Construtor de card com prévia HTML instantânea.'
    },
    estimatedMinutes: 35,
    docs: [
      { label: 'MDN HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { label: 'MDN HTML Guides', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Guides' }
    ]
  },
  {
    slug: 'css',
    title: { en: 'CSS and Layout', pt: 'CSS e Layout' },
    level: 'basic',
    area: 'CSS',
    summary: {
      en: 'Selectors, box model, flexbox and visual composition with a small flexbox game feel.',
      pt: 'Seletores, box model, flexbox e composição visual com sensação de mini jogo de flexbox.'
    },
    interaction: {
      en: 'Mini alignment challenge inspired by flexbox games.',
      pt: 'Mini desafio de alinhamento inspirado em jogos de flexbox.'
    },
    estimatedMinutes: 40,
    docs: [
      { label: 'MDN CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { label: 'MDN CSS Guides', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Guides' }
    ]
  },
  {
    slug: 'javascript',
    title: { en: 'JavaScript Basic', pt: 'JavaScript Básico' },
    level: 'basic',
    area: 'JavaScript',
    summary: {
      en: 'Variables, conditions, operators, functions and browser data manipulation.',
      pt: 'Variáveis, condições, operadores, funções e manipulação de dados no navegador.'
    },
    interaction: {
      en: 'Panel to test conditions and inspect decision flow.',
      pt: 'Painel para testar condições e inspecionar o fluxo de decisão.'
    },
    estimatedMinutes: 45,
    docs: [
      { label: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { label: 'MDN JavaScript Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' }
    ]
  },
  {
    slug: 'js-logic',
    title: { en: 'JavaScript Logic', pt: 'Lógica com JavaScript' },
    level: 'basic',
    area: 'JavaScript',
    summary: {
      en: 'Logical operators, comparisons, chained decisions and reasoning practice with JS.',
      pt: 'Operadores lógicos, comparações, decisões encadeadas e prática de raciocínio com JS.'
    },
    interaction: {
      en: 'Logical expression lab with immediate feedback.',
      pt: 'Laboratório de expressão lógica com feedback imediato.'
    },
    estimatedMinutes: 40,
    docs: [
      { label: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { label: 'MDN JavaScript Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' }
    ]
  },
  {
    slug: 'php',
    title: { en: 'PHP First Steps', pt: 'Primeiros Passos com PHP' },
    level: 'basic',
    area: 'PHP',
    summary: {
      en: 'Initial syntax, echo, variables, conditions and how PHP talks to HTML.',
      pt: 'Sintaxe inicial, echo, variáveis, condições e como PHP conversa com HTML.'
    },
    interaction: {
      en: 'Echo and if/else simulator with rendered output.',
      pt: 'Simulador de echo e if/else com saída renderizada.'
    },
    estimatedMinutes: 40,
    docs: [
      { label: 'PHP Manual', url: 'https://www.php.net/manual/en/index.php' },
      { label: 'PHP Language Reference', url: 'https://www.php.net/manual/en/langref.php' }
    ]
  },
  {
    slug: 'git-terminal',
    title: { en: 'Git and Terminal', pt: 'Git e Terminal' },
    level: 'basic',
    area: 'Tools',
    summary: {
      en: 'Essential commands to create a project, version changes and understand basic Git flow.',
      pt: 'Comandos essenciais para criar um projeto, versionar mudanças e entender o fluxo básico do Git.'
    },
    interaction: {
      en: 'Command simulator with repository status.',
      pt: 'Simulador de comandos com status do repositório.'
    },
    estimatedMinutes: 35,
    docs: [
      { label: 'Git Book', url: 'https://git-scm.com/book/en/v2' },
      { label: 'Git Reference', url: 'https://git-scm.com/docs' }
    ]
  }
];

export const roadmap = {
  basic: [
    { en: 'Logic with C', pt: 'Lógica com C' },
    { en: 'Variables and types', pt: 'Variáveis e tipos' },
    { en: 'If, else and comparison', pt: 'If, else e comparação' },
    { en: 'Loops', pt: 'Loops' },
    { en: 'Functions', pt: 'Funções' },
    { en: 'Arrays', pt: 'Arrays' },
    { en: 'HTML', pt: 'HTML' },
    { en: 'CSS', pt: 'CSS' },
    { en: 'JavaScript', pt: 'JavaScript' },
    { en: 'PHP', pt: 'PHP' },
    { en: 'Git and terminal', pt: 'Git e terminal' }
  ],
  intermediate: [
    { en: 'DOM and events', pt: 'DOM e eventos' },
    { en: 'Forms and validation', pt: 'Formulários e validação' },
    { en: 'APIs and JSON', pt: 'APIs e JSON' },
    { en: 'PHP CRUD', pt: 'CRUD com PHP' },
    { en: 'Basic SQL', pt: 'SQL básico' },
    { en: 'Complete guided project', pt: 'Projeto guiado completo' }
  ],
  advanced: [
    { en: 'Authentication', pt: 'Autenticação' },
    { en: 'Real database', pt: 'Banco de dados real' },
    { en: 'Testing', pt: 'Testes' },
    { en: 'Security', pt: 'Segurança' },
    { en: 'Deploy', pt: 'Deploy' },
    { en: 'Student dashboard', pt: 'Dashboard do aluno' }
  ]
};

export const basicGoal = {
  en: 'Build a strong programming foundation focused on logic, structure and real problem solving.',
  pt: 'Construir uma base sólida de programação focada em lógica, estrutura e resolução de problemas reais.'
} as const;