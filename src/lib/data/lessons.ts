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
    slug: 'c-functions-decision',
    title: { en: 'Functions with Decisions', pt: 'Funções com Decisão' },
    level: 'basic',
    area: 'C',
    summary: {
      en: 'Combine reusable functions with if/else logic and conditional returns.',
      pt: 'Combine funções reutilizáveis com lógica de if/else e retornos condicionais.'
    },
    interaction: {
      en: 'Decision-based function playground with comparisons and validation.',
      pt: 'Playground de funções com decisão, comparações e validação.'
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
  },

  {
    slug: 'dom-events',
    title: { en: 'DOM and Events', pt: 'DOM e Eventos' },
    level: 'intermediate',
    area: 'JavaScript',
    summary: {
      en: 'Read elements, handle user actions and update the page without reloading.',
      pt: 'Leia elementos, trate ações do usuário e atualize a página sem recarregar.'
    },
    interaction: {
      en: 'Event-driven UI flow with state changes.',
      pt: 'Fluxo de interface orientado a eventos com mudanças de estado.'
    },
    estimatedMinutes: 45,
    docs: [
      { label: 'MDN DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
      { label: 'MDN Events', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events' }
    ]
  },
  {
    slug: 'forms-validation',
    title: { en: 'Forms and Validation', pt: 'Formulários e Validação' },
    level: 'intermediate',
    area: 'Frontend',
    summary: {
      en: 'Collect input, validate values and show useful feedback before submitting data.',
      pt: 'Colete dados, valide valores e mostre feedback útil antes de enviar informações.'
    },
    interaction: {
      en: 'Validation checklist for realistic form fields.',
      pt: 'Checklist de validação para campos realistas de formulário.'
    },
    estimatedMinutes: 50,
    docs: [
      { label: 'MDN Forms', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms' },
      { label: 'MDN Constraint Validation', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation' }
    ]
  },
  {
    slug: 'apis-json',
    title: { en: 'APIs and JSON', pt: 'APIs e JSON' },
    level: 'intermediate',
    area: 'JavaScript',
    summary: {
      en: 'Fetch data, understand JSON responses and handle loading and error states.',
      pt: 'Busque dados, entenda respostas JSON e trate estados de carregamento e erro.'
    },
    interaction: {
      en: 'Request lifecycle map: loading, success and error.',
      pt: 'Mapa do ciclo de requisição: carregando, sucesso e erro.'
    },
    estimatedMinutes: 55,
    docs: [
      { label: 'MDN Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
      { label: 'MDN JSON', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON' }
    ]
  },
  {
    slug: 'php-crud',
    title: { en: 'PHP CRUD', pt: 'CRUD com PHP' },
    level: 'intermediate',
    area: 'PHP',
    summary: {
      en: 'Create, read, update and delete records using a simple backend flow.',
      pt: 'Crie, leia, atualize e exclua registros usando um fluxo simples de backend.'
    },
    interaction: {
      en: 'CRUD operation map with request and response thinking.',
      pt: 'Mapa de operações CRUD com raciocínio de requisição e resposta.'
    },
    estimatedMinutes: 60,
    docs: [
      { label: 'PHP Manual', url: 'https://www.php.net/manual/en/index.php' },
      { label: 'PHP PDO', url: 'https://www.php.net/manual/en/book.pdo.php' }
    ]
  },
  {
    slug: 'basic-sql',
    title: { en: 'Basic SQL', pt: 'SQL Básico' },
    level: 'intermediate',
    area: 'Database',
    summary: {
      en: 'Model tables, select data and understand the first query patterns.',
      pt: 'Modele tabelas, selecione dados e entenda os primeiros padrões de consulta.'
    },
    interaction: {
      en: 'Query reading practice with SELECT, WHERE and ORDER BY.',
      pt: 'Prática de leitura de queries com SELECT, WHERE e ORDER BY.'
    },
    estimatedMinutes: 50,
    docs: [
      { label: 'SQLite SELECT', url: 'https://www.sqlite.org/lang_select.html' },
      { label: 'PostgreSQL SELECT', url: 'https://www.postgresql.org/docs/current/sql-select.html' }
    ]
  },
  {
    slug: 'guided-project',
    title: { en: 'Complete Guided Project', pt: 'Projeto Guiado Completo' },
    level: 'intermediate',
    area: 'Project',
    summary: {
      en: 'Connect frontend, backend and persistence in a small complete feature.',
      pt: 'Conecte frontend, backend e persistência em uma funcionalidade pequena e completa.'
    },
    interaction: {
      en: 'Feature breakdown from user story to implementation.',
      pt: 'Quebra de funcionalidade da história de usuário até a implementação.'
    },
    estimatedMinutes: 75,
    docs: [
      { label: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/' },
      { label: 'SvelteKit Docs', url: 'https://svelte.dev/docs/kit/introduction' }
    ]
  },
  {
    slug: 'authentication',
    title: { en: 'Authentication', pt: 'Autenticação' },
    level: 'advanced',
    area: 'Security',
    summary: {
      en: 'Understand login flow, sessions, tokens and protected routes.',
      pt: 'Entenda fluxo de login, sessões, tokens e rotas protegidas.'
    },
    interaction: {
      en: 'Auth flow map from credentials to protected access.',
      pt: 'Mapa do fluxo de autenticação das credenciais ao acesso protegido.'
    },
    estimatedMinutes: 60,
    docs: [
      { label: 'OWASP Authentication', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html' },
      { label: 'MDN HTTP Cookies', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies' }
    ]
  },
  {
    slug: 'real-database',
    title: { en: 'Real Database', pt: 'Banco de Dados Real' },
    level: 'advanced',
    area: 'Database',
    summary: {
      en: 'Move beyond local examples and design persistent relational data.',
      pt: 'Vá além de exemplos locais e desenhe dados relacionais persistentes.'
    },
    interaction: {
      en: 'Schema planning with entities, fields and relationships.',
      pt: 'Planejamento de schema com entidades, campos e relacionamentos.'
    },
    estimatedMinutes: 60,
    docs: [
      { label: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/' },
      { label: 'MySQL Docs', url: 'https://dev.mysql.com/doc/' }
    ]
  },
  {
    slug: 'testing',
    title: { en: 'Testing', pt: 'Testes' },
    level: 'advanced',
    area: 'Quality',
    summary: {
      en: 'Write automated tests for logic, components and important user flows.',
      pt: 'Escreva testes automatizados para lógica, componentes e fluxos importantes do usuário.'
    },
    interaction: {
      en: 'Test case design for happy paths and edge cases.',
      pt: 'Desenho de casos de teste para caminhos felizes e casos de borda.'
    },
    estimatedMinutes: 55,
    docs: [
      { label: 'Vitest', url: 'https://vitest.dev/' },
      { label: 'Testing Library', url: 'https://testing-library.com/docs/' }
    ]
  },
  {
    slug: 'security',
    title: { en: 'Security', pt: 'Segurança' },
    level: 'advanced',
    area: 'Security',
    summary: {
      en: 'Recognize common risks and apply safer defaults in web applications.',
      pt: 'Reconheça riscos comuns e aplique padrões mais seguros em aplicações web.'
    },
    interaction: {
      en: 'Risk checklist for inputs, auth and data exposure.',
      pt: 'Checklist de risco para entradas, autenticação e exposição de dados.'
    },
    estimatedMinutes: 55,
    docs: [
      { label: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
      { label: 'MDN Web Security', url: 'https://developer.mozilla.org/en-US/docs/Web/Security' }
    ]
  },
  {
    slug: 'deploy',
    title: { en: 'Deploy', pt: 'Deploy' },
    level: 'advanced',
    area: 'DevOps',
    summary: {
      en: 'Prepare builds, configure environment variables and publish applications safely.',
      pt: 'Prepare builds, configure variáveis de ambiente e publique aplicações com segurança.'
    },
    interaction: {
      en: 'Deployment checklist from local build to production URL.',
      pt: 'Checklist de deploy do build local até a URL de produção.'
    },
    estimatedMinutes: 50,
    docs: [
      { label: 'SvelteKit Adapters', url: 'https://svelte.dev/docs/kit/adapters' },
      { label: 'Vite Build', url: 'https://vite.dev/guide/build' }
    ]
  },
  {
    slug: 'student-dashboard',
    title: { en: 'Student Dashboard', pt: 'Dashboard do Aluno' },
    level: 'advanced',
    area: 'Product',
    summary: {
      en: 'Turn progress data into a useful dashboard with metrics and learning status.',
      pt: 'Transforme dados de progresso em um dashboard útil com métricas e status de aprendizado.'
    },
    interaction: {
      en: 'Dashboard planning with cards, progress and next actions.',
      pt: 'Planejamento de dashboard com cards, progresso e próximas ações.'
    },
    estimatedMinutes: 65,
    docs: [
      { label: 'Svelte Stores', url: 'https://svelte.dev/docs/svelte/stores' },
      { label: 'Recharts', url: 'https://recharts.org/en-US/' }
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