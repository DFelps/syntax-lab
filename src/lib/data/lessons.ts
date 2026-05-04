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
    title: 'Logic with C',
    level: 'basic',
    area: 'C',
    summary: 'First contact with algorithms, input, processing, output and reading C code mentally.',
    interaction: 'Algorithm simulator with input, processing and output.',
    estimatedMinutes: 25,
    docs: cDocs
  },
  {
    slug: 'c-variables',
    title: 'C Variables and Types',
    level: 'basic',
    area: 'C',
    summary: 'int, float, char, arithmetic operators and how values change during execution.',
    interaction: 'Calculation lab with types and formatted output.',
    estimatedMinutes: 35,
    docs: cDocs
  },
  {
    slug: 'c-if-else',
    title: 'If, Else and Comparisons',
    level: 'basic',
    area: 'C',
    summary: 'Decisions, comparisons, relational operators and alternative flow in simple programs.',
    interaction: 'Condition playground with score, age and status.',
    estimatedMinutes: 35,
    docs: cDocs
  },
  {
    slug: 'c-loops',
    title: 'For and While Loops',
    level: 'basic',
    area: 'C',
    summary: 'Controlled repetition, counters, accumulators and practical differences between for and while.',
    interaction: 'Multiplication table and sum generator with visual loop.',
    estimatedMinutes: 40,
    docs: cDocs
  },
  {
    slug: 'c-functions',
    title: 'C Functions',
    level: 'basic',
    area: 'C',
    summary: 'Separate responsibilities, receive parameters, return values and reuse logic.',
    interaction: 'Function builder with parameters and calculated return.',
    estimatedMinutes: 40,
    docs: cDocs
  },
  {
    slug: 'c-arrays',
    title: 'Arrays and Indexes',
    level: 'basic',
    area: 'C',
    summary: 'Value lists, positions, zero-based indexes and array iteration with loops.',
    interaction: 'Array editor with selected index, sum and average.',
    estimatedMinutes: 45,
    docs: cDocs
  },
  {
    slug: 'html',
    title: 'Essential HTML',
    level: 'basic',
    area: 'HTML',
    summary: 'Page structure, semantics, text, lists, links and fundamental web blocks.',
    interaction: 'Card builder with instant HTML preview.',
    estimatedMinutes: 35,
    docs: [
      { label: 'MDN HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { label: 'MDN HTML Guides', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Guides' }
    ]
  },
  {
    slug: 'css',
    title: 'CSS and Layout',
    level: 'basic',
    area: 'CSS',
    summary: 'Selectors, box model, flexbox and visual composition with a small flexbox game feel.',
    interaction: 'Mini alignment challenge inspired by flexbox games.',
    estimatedMinutes: 40,
    docs: [
      { label: 'MDN CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { label: 'MDN CSS Guides', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Guides' }
    ]
  },
  {
    slug: 'javascript',
    title: 'JavaScript Basic',
    level: 'basic',
    area: 'JavaScript',
    summary: 'Variables, conditions, operators, functions and browser data manipulation.',
    interaction: 'Panel to test conditions and inspect decision flow.',
    estimatedMinutes: 45,
    docs: [
      { label: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { label: 'MDN JavaScript Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' }
    ]
  },
  {
    slug: 'js-logic',
    title: 'JavaScript Logic',
    level: 'basic',
    area: 'JavaScript',
    summary: 'Logical operators, comparisons, chained decisions and reasoning practice with JS.',
    interaction: 'Logical expression lab with immediate feedback.',
    estimatedMinutes: 40,
    docs: [
      { label: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { label: 'MDN JavaScript Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' }
    ]
  },
  {
    slug: 'php',
    title: 'PHP First Steps',
    level: 'basic',
    area: 'PHP',
    summary: 'Initial syntax, echo, variables, conditions and how PHP talks to HTML.',
    interaction: 'Echo and if/else simulator with rendered output.',
    estimatedMinutes: 40,
    docs: [
      { label: 'PHP Manual', url: 'https://www.php.net/manual/en/index.php' },
      { label: 'PHP Language Reference', url: 'https://www.php.net/manual/en/langref.php' }
    ]
  },
  {
    slug: 'git-terminal',
    title: 'Git and Terminal',
    level: 'basic',
    area: 'Tools',
    summary: 'Essential commands to create a project, version changes and understand basic Git flow.',
    interaction: 'Command simulator with repository status.',
    estimatedMinutes: 35,
    docs: [
      { label: 'Git Book', url: 'https://git-scm.com/book/en/v2' },
      { label: 'Git Reference', url: 'https://git-scm.com/docs' }
    ]
  }
];

export const roadmap = {
  basic: [
    'Logic with C',
    'Variables and types',
    'If, else and comparison',
    'Loops',
    'Functions',
    'Arrays',
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'Git and terminal'
  ],
  intermediate: [
    'DOM and events',
    'Forms and validation',
    'APIs and JSON',
    'PHP CRUD',
    'Basic SQL',
    'Complete guided project'
  ],
  advanced: [
    'Authentication',
    'Real database',
    'Testing',
    'Security',
    'Deploy',
    'Student dashboard'
  ]
};

export const basicGoal = {
  en: "Build a strong programming foundation focused on logic, structure and real problem solving.",
  pt: "Construir uma base sólida de programação focada em lógica, estrutura e resolução de problemas reais."
} as const;
