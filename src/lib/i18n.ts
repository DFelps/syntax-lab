import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Language = 'en' | 'pt';

const defaultLanguage: Language = 'en';
const storageKey = 'syntax-lab-language';

function initialLanguage(): Language {
  if (!browser) return defaultLanguage;

  const saved = localStorage.getItem(storageKey);
  return saved === 'pt' || saved === 'en' ? saved : defaultLanguage;
}

export const language = writable<Language>(initialLanguage());

language.subscribe((value) => {
  if (browser) localStorage.setItem(storageKey, value);
});

export function nextLanguage(current: Language): Language {
  return current === 'en' ? 'pt' : 'en';
}

export const copy = {
  en: {
    basic: 'Basic',
    intermediate: 'Intermediate',
    advanced: 'Advanced',

    language: 'PT',

    startPath: 'Start the basic path',
    openLogic: 'Open C logic',

    heroTitle: 'Learn programming by working with code.',
    heroDescription:
      'Syntax Lab is an interactive learning platform with guided paths, playgrounds and short challenges. The goal is to learn by testing ideas, writing answers and receiving useful feedback.',
    metaDescription: 'Interactive coding learning platform built with SvelteKit',

    statsBasicLessons: 'Basic lessons',
    statsCModules: 'C modules',
    statsTime: 'Estimated time',
    statsFocus: 'Focus',
    statsFocusValue: 'Real practice',

    projectIdea: 'Project idea',
    projectDescription:
      'The path starts with C to build strong fundamentals around input, processing, output, decisions, loops, functions and arrays. Then it connects those ideas with HTML, CSS, JavaScript, PHP and Git.',

    howItWorks: 'How it works',
    howItWorksDescription:
      'Each lesson combines an interactive block with a written challenge. It is not only about clicking the right option: the student needs to explain or build the logic.',

    courseSummary: 'Course, playground and roadmap in one project.',

    levelBasic: 'Foundation',
    levelIntermediate: 'Build',
    levelAdvanced: 'Career-ready',

    progressLabel: 'Local progress',
    progressText: '{completed} of {total} lessons completed',
    markIncomplete: 'Mark as incomplete',
    markComplete: 'Complete this lesson',

    basicPath: 'Basic path',
    partLabel: 'Part {part}',
    lessonLabel: 'Lesson {index}',
    officialDocumentation: 'Official documentation',

    intermediatePage: {
      eyebrow: 'Intermediate path',
      title: 'Build real application skills',
      description: 'Move beyond the basics with DOM, forms, APIs, persistence and a guided project structure.'
    },
    advancedPage: {
      eyebrow: 'Advanced path',
      title: 'Get closer to production-ready work',
      description: 'Practice authentication, databases, testing, security, deployment and dashboard thinking.'
    },

    pathLabels: {
      intermediatePath: 'Intermediate path',
      advancedPath: 'Advanced path',
      moduleLabel: 'Module {index}',
      estimatedTime: '{minutes}min',
      openModule: 'Open module',
      overview: 'Overview',
      whatYouPractice: 'What you practice',
      starterCode: 'Starter code',
      nextStep: 'Next step',
      modulePlan: 'Module plan'
    },

    pathLessons: {
      domEvents: {
        eyebrow: 'JavaScript • DOM',
        goal: 'Connect a user action to a visible interface change.',
        next: 'Build a small counter, menu toggle or filter using event listeners and state.',
        concepts: ['querySelector', 'addEventListener', 'state changes', 'rendering feedback'],
        code: `const button = document.querySelector('[data-action]');\nconst output = document.querySelector('[data-output]');\nlet clicks = 0;\n\nbutton?.addEventListener('click', () => {\n  clicks += 1;\n  if (output) output.textContent = ` + "`Clicked ${clicks} times`" + `;\n});`
      },
      formsValidation: {
        eyebrow: 'Frontend • forms',
        goal: 'Validate fields before sending data and explain useful feedback to the user.',
        next: 'Create a sign-up form with required fields, email validation and clear error messages.',
        concepts: ['required fields', 'email format', 'error messages', 'submit handling'],
        code: `function validateEmail(email: string) {\n  return email.includes('@') && email.includes('.');\n}\n\nconst formState = {\n  name: 'Student',\n  email: 'student@example.com'\n};`
      },
      apisJson: {
        eyebrow: 'JavaScript • APIs',
        goal: 'Understand the request lifecycle: loading, success and error.',
        next: 'Fetch a list of items, show a loading state and render a fallback error message.',
        concepts: ['fetch', 'JSON parsing', 'loading state', 'error state'],
        code: `async function loadLessons() {\n  const response = await fetch('/api/lessons');\n  if (!response.ok) throw new Error('Request failed');\n  return response.json();\n}`
      },
      phpCrud: {
        eyebrow: 'PHP • CRUD',
        goal: 'Map each CRUD action to a route, request and response.',
        next: 'Design a simple products endpoint with create, list, update and delete operations.',
        concepts: ['create', 'read', 'update', 'delete', 'HTTP methods'],
        code: `GET /products\nPOST /products\nPUT /products/{id}\nDELETE /products/{id}`
      },
      basicSql: {
        eyebrow: 'Database • SQL',
        goal: 'Read simple queries and understand how filters change returned rows.',
        next: 'Write SELECT queries with WHERE and ORDER BY for a product table.',
        concepts: ['tables', 'columns', 'SELECT', 'WHERE', 'ORDER BY'],
        code: `SELECT name, price, stock\nFROM products\nWHERE stock > 0\nORDER BY price DESC;`
      },
      guidedProject: {
        eyebrow: 'Project • integration',
        goal: 'Connect UI, state, backend and persistence in one small feature.',
        next: 'Build a task or product feature from user story to working flow.',
        concepts: ['user story', 'frontend state', 'API contract', 'data persistence'],
        code: `User story:\nAs a student, I want to save my progress,\nso I can continue the path later.`
      },
      authentication: {
        eyebrow: 'Security • auth',
        goal: 'Understand the difference between identity, session and authorization.',
        next: 'Draw the login flow from credentials to protected route access.',
        concepts: ['credentials', 'session', 'token', 'protected route'],
        code: `POST /login\nSet-Cookie: session=...\nGET /dashboard\nAuthorization check: required`
      },
      realDatabase: {
        eyebrow: 'Database • modeling',
        goal: 'Plan tables, fields and relationships before writing code.',
        next: 'Model users, lessons and progress as relational tables.',
        concepts: ['entities', 'relationships', 'primary keys', 'foreign keys'],
        code: `users(id, name, email)\nlessons(id, slug, title)\nprogress(user_id, lesson_id, completed_at)`
      },
      testing: {
        eyebrow: 'Quality • tests',
        goal: 'Write tests for logic that should not break during refactors.',
        next: 'Create test cases for progress percentage, answer scoring and lesson filtering.',
        concepts: ['unit tests', 'edge cases', 'expected result', 'regression safety'],
        code: `expect(getProgressPercent(['html'], 4)).toBe(25);`
      },
      security: {
        eyebrow: 'Security • web',
        goal: 'Think about risk before trusting input or exposing data.',
        next: 'Create a checklist for input validation, auth checks and safe output.',
        concepts: ['validation', 'authorization', 'safe output', 'least privilege'],
        code: `if (!currentUser) {\n  throw new Error('Authentication required');\n}\n\nif (!canAccess(currentUser, resource)) {\n  throw new Error('Access denied');\n}`
      },
      deploy: {
        eyebrow: 'DevOps • deploy',
        goal: 'Prepare the app to run outside the local machine.',
        next: 'Check build command, environment variables, logs and rollback plan.',
        concepts: ['build', 'environment variables', 'logs', 'rollback'],
        code: `npm run build\nPUBLIC_API_URL=https://api.example.com\nNODE_ENV=production`
      },
      studentDashboard: {
        eyebrow: 'Product • dashboard',
        goal: 'Turn progress data into useful learning insights.',
        next: 'Design cards for completed lessons, weak areas and next recommended module.',
        concepts: ['metrics', 'progress', 'recommendations', 'visual hierarchy'],
        code: `const dashboard = {\n  completedLessons: 8,\n  weakArea: 'JavaScript Logic',\n  nextModule: 'DOM and Events'\n};`
      }
    },

    practice: {
      active: 'Active practice',
      quiz: 'Quiz',
      submit: 'Submit',
      correct: 'Correct.',
      notYet: 'Not yet.',
      checkAttempt: 'Check attempt',
      saveAnswer: 'Save answer',
      savedLocal: 'Answer saved locally in your browser.',
      answerCoverage: 'Answer coverage: {score}%',
      showModelAnswer: 'Show model answer after trying',
      feedbackEmpty: 'Write an attempt first. The goal is to think before checking the model answer.',
      feedbackPassed: 'Nice. Your answer already covers the main structure. Compare it with the model and adjust names, syntax or order if needed.',
      feedbackMissing: 'Some important parts are still missing.{missing} Try to complete the logic before opening the model answer.',
      feedbackMissingLabel: ' Missing: {items}.'
    },

    labs: {
      cIntro: {
        badge: 'Input → processing → output',
        title: 'Build your first mental flow',
        studentName: 'Student name',
        studyHours: 'Study hours',
        goal: 'Goal',
        defaultName: 'Student',
        defaultGoal: 'practice programming logic',
        output: "Hello, {name}!\nToday's goal: {goal}\nStudy time: {hours} hours"
      },
      cVariables: {
        badge: 'types + operators',
        title: 'Change values and see the calculation',
        price: 'Price',
        quantity: 'Quantity',
        discount: 'Discount %',
        subtotal: 'Subtotal',
        finalTotal: 'Final total'
      },
      cIfElse: {
        badge: 'if / else',
        title: 'Test a decision with two rules',
        grade: 'Grade',
        attendance: 'Attendance %',
        approved: 'approved',
        recovery: 'recovery',
        failed: 'failed',
        result: 'Result'
      },
      cLoops: {
        badge: 'for / repetition',
        title: 'Watch the loop running',
        number: 'Number',
        repetitions: 'Repetitions',
        resultSum: 'Result sum'
      },
      cFunctions: {
        badge: 'functions',
        title: 'Create a reusable rule',
        baseAmount: 'Base amount',
        percent: 'Percent',
        function: 'Function',
        discount: 'Discount',
        increase: 'Increase',
        functionReturn: 'Function return'
      },
      cArrays: {
        badge: 'arrays',
        title: 'Index starts at zero',
        values: 'Comma-separated values',
        selectedIndex: 'Selected index',
        sum: 'Sum',
        average: 'Average'
      },
      flexbox: {
        badge: 'Mini game',
        title: 'Flexbox alignment',
        goal: 'Goal',
        nextChallenge: 'Next challenge',
        niceTitle: 'Nice!',
        niceText: 'You matched the behavior for this level.',
        tryTitle: 'Try again.',
        tryText: 'Compare the current alignment with the goal.',
        targets: [
          'Center the frogs',
          'Separate the frogs',
          'Move everything to the right'
        ]
      },
      gitTerminal: {
        badge: 'terminal',
        title: 'Simulate basic commands',
        unknownCommand: 'Command not registered in this simulator yet.',
        responses: {
          'git init': 'Git repository created. The folder can now be versioned.',
          'git status': 'main\nUntracked files:\n  src/routes/basic/c-intro/+page.svelte',
          'git add .': 'Files added to the staging area.',
          'git commit -m "initial syntax lab"': '[main abc123] initial syntax lab\n12 files changed',
          'git log --oneline': 'abc123 initial syntax lab'
        }
      },
      htmlBuilder: {
        badge: 'Live preview',
        title: 'HTML card builder',
        titleLabel: 'Title',
        descriptionLabel: 'Description',
        highlightLabel: 'Highlight',
        generatedCode: 'Generated code',
        renderedPreview: 'Rendered preview',
        defaultTitle: 'My first card',
        defaultDescription: 'I am learning HTML and understanding page structure.',
        defaultHighlight: 'Semantics + practice'
      },
      ifElse: {
        badge: 'Interactivity',
        title: 'If / else lab',
        description: 'Change the values and watch the decision change.',
        age: 'Age',
        points: 'Points',
        canEnter: 'Can enter the adult area.',
        stayBeginner: 'Stay on the beginner path for now.',
        bonusUnlocked: 'Bonus challenge unlocked.',
        keepPracticing: 'Keep practicing to unlock the bonus.',
        outputOne: 'Output 1',
        outputTwo: 'Output 2'
      },
      jsCondition: {
        badge: 'JavaScript in action',
        title: 'Decision panel',
        temperature: 'Temperature',
        raining: 'Is it raining?',
        output: 'Output',
        park: 'Today is a good day to practice in the park.',
        umbrella: 'Bring an umbrella and practice indoors.',
        jacket: 'Wear a light jacket and keep studying.'
      },
      jsLogic: {
        badge: 'JavaScript logic',
        title: 'Logical expressions',
        description: 'Change the conditions and see when the expression becomes true or false.',
        age: 'Age',
        hasAccount: 'Has account?',
        passedQuiz: 'Passed quiz?',
        expressionResult: 'Expression result',
        feedback: 'Human-readable feedback',
        unlocked: 'You unlocked the next challenge.',
        createAccount: 'Create an account to save your progress.',
        passQuiz: 'You still need to pass the quiz before moving on.',
        completeRequirements: 'You are old enough, but still need to complete the requirements.'
      },
      phpEcho: {
        badge: 'Simulator',
        title: 'PHP echo + if/else',
        studentName: 'Student name',
        module: 'Module',
        completed: 'Activity completed?',
        defaultName: 'Dev',
        defaultModule: 'PHP Basics',
        hello: 'Hello, {name}!',
        opened: 'You opened the module: {module}.',
        congrats: 'Congrats on completing the activity.',
        pending: 'You still need to finish the challenge.'
      }
    },

    lessonPages: {
      cIntro: {
        eyebrow: 'C • basics',
        description:
          'Start thinking like a programmer: the program receives input, processes values and returns output. C makes this flow very explicit.'
      },
      cVariables: {
        eyebrow: 'C • types',
        description:
          'A variable is a box with a name, type and value. In C, declaring the type is part of the mental model: integer, decimal, character or text.'
      },
      cIfElse: {
        eyebrow: 'C • decision',
        description:
          'if decides which path the program follows. This is one of the most important foundations for any language later.'
      },
      cLoops: {
        eyebrow: 'C • repetition',
        description:
          'Loops repeat an action without copying the same line many times. First understand counters, stop conditions and updates.'
      },
      cFunctions: {
        eyebrow: 'C • functions',
        description:
          'Functions avoid repetition and keep programs organized. They can receive parameters and return a result.'
      },
      cArrays: {
        eyebrow: 'C • arrays',
        description:
          'An array stores multiple values of the same type. The tricky part at first is remembering that the first index is zero.'
      },
      html: {
        eyebrow: 'HTML • basics',
        description: 'The idea here is to learn structure and semantics while seeing the result immediately.'
      },
      css: {
        eyebrow: 'CSS • basics',
        description:
          'This version includes a mini challenge inspired by flexbox games because it makes layout easier to remember.'
      },
      javascript: {
        eyebrow: 'JavaScript • basics',
        description: 'Conditions, operators and decision flow in the browser.'
      },
      jsLogic: {
        eyebrow: 'JavaScript • logic',
        description: 'Separate module for comparisons, logical operators and reading expressions.'
      },
      php: {
        eyebrow: 'PHP • basics',
        description:
          'Here the student understands text output, variables and conditions through a response simulator.'
      },
      gitTerminal: {
        eyebrow: 'Tools • basics',
        description:
          'After logic and web basics, the student needs enough terminal and Git to work as a real developer.'
      }
    }
  },
  pt: {
    basic: 'Básico',
    intermediate: 'Intermediário',
    advanced: 'Avançado',

    language: 'EN',

    startPath: 'Começar trilha básica',
    openLogic: 'Abrir lógica com C',

    heroTitle: 'Aprenda programação trabalhando com código.',
    heroDescription:
      'Syntax Lab é uma plataforma interativa com trilhas guiadas, playgrounds e desafios curtos. O objetivo é aprender testando ideias, escrevendo respostas e recebendo feedback útil.',
    metaDescription: 'Plataforma interativa de aprendizado de programação com SvelteKit',

    statsBasicLessons: 'Aulas básicas',
    statsCModules: 'Módulos em C',
    statsTime: 'Tempo estimado',
    statsFocus: 'Foco',
    statsFocusValue: 'Prática real',

    projectIdea: 'Ideia do projeto',
    projectDescription:
      'O caminho começa com C para construir uma base forte em entrada, processamento, saída, decisões, loops, funções e arrays. Depois conecta esses conceitos com HTML, CSS, JavaScript, PHP e Git.',

    howItWorks: 'Como funciona',
    howItWorksDescription:
      'Cada aula combina um bloco interativo com um desafio escrito. Não é só clicar na opção correta: o aluno precisa explicar ou construir a lógica.',

    courseSummary: 'Curso, playground e roadmap em um só projeto.',

    levelBasic: 'Fundação',
    levelIntermediate: 'Construção',
    levelAdvanced: 'Preparação profissional',

    progressLabel: 'Progresso local',
    progressText: '{completed} de {total} aulas concluídas',
    markIncomplete: 'Marcar como não concluída',
    markComplete: 'Concluir esta aula',

    basicPath: 'Trilha básica',
    partLabel: 'Parte {part}',
    lessonLabel: 'Aula {index}',
    officialDocumentation: 'Documentação oficial',

    intermediatePage: {
      eyebrow: 'Trilha intermediária',
      title: 'Construa habilidades de aplicação real',
      description: 'Avance além do básico com DOM, formulários, APIs, persistência e estrutura de projeto guiado.'
    },
    advancedPage: {
      eyebrow: 'Trilha avançada',
      title: 'Chegue mais perto de código pronto para produção',
      description: 'Pratique autenticação, banco de dados, testes, segurança, deploy e pensamento de dashboard.'
    },

    pathLabels: {
      intermediatePath: 'Trilha intermediária',
      advancedPath: 'Trilha avançada',
      moduleLabel: 'Módulo {index}',
      estimatedTime: '{minutes}min',
      openModule: 'Abrir módulo',
      overview: 'Visão geral',
      whatYouPractice: 'O que você pratica',
      starterCode: 'Código inicial',
      nextStep: 'Próximo passo',
      modulePlan: 'Plano do módulo'
    },

    pathLessons: {
      domEvents: {
        eyebrow: 'JavaScript • DOM',
        goal: 'Conecte uma ação do usuário a uma mudança visível na interface.',
        next: 'Construa um contador, menu toggle ou filtro usando event listeners e estado.',
        concepts: ['querySelector', 'addEventListener', 'mudanças de estado', 'feedback renderizado'],
        code: `const button = document.querySelector('[data-action]');\nconst output = document.querySelector('[data-output]');\nlet clicks = 0;\n\nbutton?.addEventListener('click', () => {\n  clicks += 1;\n  if (output) output.textContent = ` + "`Clicked ${clicks} times`" + `;\n});`
      },
      formsValidation: {
        eyebrow: 'Frontend • formulários',
        goal: 'Valide campos antes de enviar dados e explique feedback útil para o usuário.',
        next: 'Crie um formulário de cadastro com campos obrigatórios, validação de email e mensagens claras.',
        concepts: ['campos obrigatórios', 'formato de email', 'mensagens de erro', 'tratamento do submit'],
        code: `function validateEmail(email: string) {\n  return email.includes('@') && email.includes('.');\n}\n\nconst formState = {\n  name: 'Student',\n  email: 'student@example.com'\n};`
      },
      apisJson: {
        eyebrow: 'JavaScript • APIs',
        goal: 'Entenda o ciclo da requisição: carregando, sucesso e erro.',
        next: 'Busque uma lista de itens, mostre estado de carregamento e renderize uma mensagem de erro.',
        concepts: ['fetch', 'parse de JSON', 'estado de carregamento', 'estado de erro'],
        code: `async function loadLessons() {\n  const response = await fetch('/api/lessons');\n  if (!response.ok) throw new Error('Request failed');\n  return response.json();\n}`
      },
      phpCrud: {
        eyebrow: 'PHP • CRUD',
        goal: 'Mapeie cada ação CRUD para uma rota, requisição e resposta.',
        next: 'Desenhe um endpoint simples de produtos com criar, listar, atualizar e excluir.',
        concepts: ['create', 'read', 'update', 'delete', 'métodos HTTP'],
        code: `GET /products\nPOST /products\nPUT /products/{id}\nDELETE /products/{id}`
      },
      basicSql: {
        eyebrow: 'Banco • SQL',
        goal: 'Leia queries simples e entenda como filtros mudam as linhas retornadas.',
        next: 'Escreva SELECTs com WHERE e ORDER BY para uma tabela de produtos.',
        concepts: ['tabelas', 'colunas', 'SELECT', 'WHERE', 'ORDER BY'],
        code: `SELECT name, price, stock\nFROM products\nWHERE stock > 0\nORDER BY price DESC;`
      },
      guidedProject: {
        eyebrow: 'Projeto • integração',
        goal: 'Conecte UI, estado, backend e persistência em uma pequena funcionalidade.',
        next: 'Construa uma feature de tarefas ou produtos da história de usuário até o fluxo funcionando.',
        concepts: ['história de usuário', 'estado no frontend', 'contrato de API', 'persistência de dados'],
        code: `User story:\nAs a student, I want to save my progress,\nso I can continue the path later.`
      },
      authentication: {
        eyebrow: 'Segurança • auth',
        goal: 'Entenda a diferença entre identidade, sessão e autorização.',
        next: 'Desenhe o fluxo de login das credenciais até o acesso a uma rota protegida.',
        concepts: ['credenciais', 'sessão', 'token', 'rota protegida'],
        code: `POST /login\nSet-Cookie: session=...\nGET /dashboard\nAuthorization check: required`
      },
      realDatabase: {
        eyebrow: 'Banco • modelagem',
        goal: 'Planeje tabelas, campos e relacionamentos antes de escrever código.',
        next: 'Modele usuários, aulas e progresso como tabelas relacionais.',
        concepts: ['entidades', 'relacionamentos', 'chaves primárias', 'chaves estrangeiras'],
        code: `users(id, name, email)\nlessons(id, slug, title)\nprogress(user_id, lesson_id, completed_at)`
      },
      testing: {
        eyebrow: 'Qualidade • testes',
        goal: 'Escreva testes para lógicas que não podem quebrar em refactors.',
        next: 'Crie casos de teste para percentual de progresso, pontuação de resposta e filtro de aulas.',
        concepts: ['testes unitários', 'casos de borda', 'resultado esperado', 'segurança contra regressão'],
        code: `expect(getProgressPercent(['html'], 4)).toBe(25);`
      },
      security: {
        eyebrow: 'Segurança • web',
        goal: 'Pense em risco antes de confiar em entrada ou expor dados.',
        next: 'Crie um checklist para validação de entrada, autorização e saída segura.',
        concepts: ['validação', 'autorização', 'saída segura', 'menor privilégio'],
        code: `if (!currentUser) {\n  throw new Error('Authentication required');\n}\n\nif (!canAccess(currentUser, resource)) {\n  throw new Error('Access denied');\n}`
      },
      deploy: {
        eyebrow: 'DevOps • deploy',
        goal: 'Prepare a aplicação para rodar fora da máquina local.',
        next: 'Confira comando de build, variáveis de ambiente, logs e plano de rollback.',
        concepts: ['build', 'variáveis de ambiente', 'logs', 'rollback'],
        code: `npm run build\nPUBLIC_API_URL=https://api.example.com\nNODE_ENV=production`
      },
      studentDashboard: {
        eyebrow: 'Produto • dashboard',
        goal: 'Transforme dados de progresso em insights úteis de aprendizado.',
        next: 'Desenhe cards de aulas concluídas, pontos fracos e próximo módulo recomendado.',
        concepts: ['métricas', 'progresso', 'recomendações', 'hierarquia visual'],
        code: `const dashboard = {\n  completedLessons: 8,\n  weakArea: 'JavaScript Logic',\n  nextModule: 'DOM and Events'\n};`
      }
    },

    practice: {
      active: 'Prática ativa',
      quiz: 'Quiz',
      submit: 'Enviar',
      correct: 'Correto.',
      notYet: 'Ainda não.',
      checkAttempt: 'Verificar tentativa',
      saveAnswer: 'Salvar resposta',
      savedLocal: 'Resposta salva localmente no seu navegador.',
      answerCoverage: 'Cobertura da resposta: {score}%',
      showModelAnswer: 'Mostrar resposta modelo após tentar',
      feedbackEmpty: 'Escreva uma tentativa primeiro. O objetivo é pensar antes de conferir a resposta modelo.',
      feedbackPassed: 'Boa. Sua resposta já cobre a estrutura principal. Compare com o modelo e ajuste nomes, sintaxe ou ordem se precisar.',
      feedbackMissing: 'Algumas partes importantes ainda estão faltando.{missing} Tente completar a lógica antes de abrir a resposta modelo.',
      feedbackMissingLabel: ' Faltando: {items}.'
    },

    labs: {
      cIntro: {
        badge: 'Entrada → processamento → saída',
        title: 'Construa seu primeiro fluxo mental',
        studentName: 'Nome do estudante',
        studyHours: 'Horas de estudo',
        goal: 'Objetivo',
        defaultName: 'Estudante',
        defaultGoal: 'praticar lógica de programação',
        output: 'Olá, {name}!\nObjetivo de hoje: {goal}\nTempo de estudo: {hours} horas'
      },
      cVariables: {
        badge: 'tipos + operadores',
        title: 'Altere valores e veja o cálculo',
        price: 'Preço',
        quantity: 'Quantidade',
        discount: 'Desconto %',
        subtotal: 'Subtotal',
        finalTotal: 'Total final'
      },
      cIfElse: {
        badge: 'if / else',
        title: 'Teste uma decisão com duas regras',
        grade: 'Nota',
        attendance: 'Presença %',
        approved: 'aprovado',
        recovery: 'recuperação',
        failed: 'reprovado',
        result: 'Resultado'
      },
      cLoops: {
        badge: 'for / repetição',
        title: 'Veja o loop rodando',
        number: 'Número',
        repetitions: 'Repetições',
        resultSum: 'Soma final'
      },
      cFunctions: {
        badge: 'funções',
        title: 'Crie uma regra reutilizável',
        baseAmount: 'Valor base',
        percent: 'Percentual',
        function: 'Função',
        discount: 'Desconto',
        increase: 'Acréscimo',
        functionReturn: 'Retorno da função'
      },
      cArrays: {
        badge: 'arrays',
        title: 'O índice começa em zero',
        values: 'Valores separados por vírgula',
        selectedIndex: 'Índice selecionado',
        sum: 'Soma',
        average: 'Média'
      },
      flexbox: {
        badge: 'Mini jogo',
        title: 'Alinhamento com Flexbox',
        goal: 'Objetivo',
        nextChallenge: 'Próximo desafio',
        niceTitle: 'Boa!',
        niceText: 'Você acertou o comportamento deste nível.',
        tryTitle: 'Tente novamente.',
        tryText: 'Compare o alinhamento atual com o objetivo.',
        targets: [
          'Centralize os sapos',
          'Separe os sapos',
          'Mova tudo para a direita'
        ]
      },
      gitTerminal: {
        badge: 'terminal',
        title: 'Simule comandos básicos',
        unknownCommand: 'Comando ainda não registrado neste simulador.',
        responses: {
          'git init': 'Repositório Git criado. A pasta agora pode ser versionada.',
          'git status': 'main\nArquivos não rastreados:\n  src/routes/basic/c-intro/+page.svelte',
          'git add .': 'Arquivos adicionados à área de stage.',
          'git commit -m "initial syntax lab"': '[main abc123] initial syntax lab\n12 arquivos alterados',
          'git log --oneline': 'abc123 initial syntax lab'
        }
      },
      htmlBuilder: {
        badge: 'Prévia ao vivo',
        title: 'Construtor de card HTML',
        titleLabel: 'Título',
        descriptionLabel: 'Descrição',
        highlightLabel: 'Destaque',
        generatedCode: 'Código gerado',
        renderedPreview: 'Prévia renderizada',
        defaultTitle: 'Meu primeiro card',
        defaultDescription: 'Estou aprendendo HTML e entendendo a estrutura da página.',
        defaultHighlight: 'Semântica + prática'
      },
      ifElse: {
        badge: 'Interatividade',
        title: 'Laboratório de if / else',
        description: 'Altere os valores e veja a decisão mudar.',
        age: 'Idade',
        points: 'Pontos',
        canEnter: 'Pode entrar na área adulta.',
        stayBeginner: 'Continue na trilha iniciante por enquanto.',
        bonusUnlocked: 'Desafio bônus desbloqueado.',
        keepPracticing: 'Continue praticando para desbloquear o bônus.',
        outputOne: 'Saída 1',
        outputTwo: 'Saída 2'
      },
      jsCondition: {
        badge: 'JavaScript em ação',
        title: 'Painel de decisão',
        temperature: 'Temperatura',
        raining: 'Está chovendo?',
        output: 'Saída',
        park: 'Hoje é um bom dia para praticar no parque.',
        umbrella: 'Leve um guarda-chuva e pratique em um local fechado.',
        jacket: 'Use uma jaqueta leve e continue estudando.'
      },
      jsLogic: {
        badge: 'Lógica com JavaScript',
        title: 'Expressões lógicas',
        description: 'Altere as condições e veja quando a expressão fica verdadeira ou falsa.',
        age: 'Idade',
        hasAccount: 'Tem conta?',
        passedQuiz: 'Passou no quiz?',
        expressionResult: 'Resultado da expressão',
        feedback: 'Feedback em linguagem humana',
        unlocked: 'Você desbloqueou o próximo desafio.',
        createAccount: 'Crie uma conta para salvar seu progresso.',
        passQuiz: 'Você ainda precisa passar no quiz antes de continuar.',
        completeRequirements: 'Você tem idade suficiente, mas ainda precisa concluir os requisitos.'
      },
      phpEcho: {
        badge: 'Simulador',
        title: 'PHP echo + if/else',
        studentName: 'Nome do estudante',
        module: 'Módulo',
        completed: 'Atividade concluída?',
        defaultName: 'Dev',
        defaultModule: 'PHP Básico',
        hello: 'Olá, {name}!',
        opened: 'Você abriu o módulo: {module}.',
        congrats: 'Parabéns por concluir a atividade.',
        pending: 'Você ainda precisa finalizar o desafio.'
      }
    },

    lessonPages: {
      cIntro: {
        eyebrow: 'C • básico',
        description:
          'Comece a pensar como programador: o programa recebe uma entrada, processa valores e devolve uma saída. C deixa esse fluxo bem explícito.'
      },
      cVariables: {
        eyebrow: 'C • tipos',
        description:
          'Uma variável é uma caixa com nome, tipo e valor. Em C, declarar o tipo faz parte do modelo mental: inteiro, decimal, caractere ou texto.'
      },
      cIfElse: {
        eyebrow: 'C • decisão',
        description:
          'if decide qual caminho o programa segue. Essa é uma das bases mais importantes para qualquer linguagem depois.'
      },
      cLoops: {
        eyebrow: 'C • repetição',
        description:
          'Loops repetem uma ação sem copiar a mesma linha várias vezes. Primeiro entenda contadores, condições de parada e atualizações.'
      },
      cFunctions: {
        eyebrow: 'C • funções',
        description:
          'Funções evitam repetição e mantêm programas organizados. Elas podem receber parâmetros e retornar um resultado.'
      },
      cArrays: {
        eyebrow: 'C • arrays',
        description:
          'Um array armazena vários valores do mesmo tipo. A parte mais estranha no começo é lembrar que o primeiro índice é zero.'
      },
      html: {
        eyebrow: 'HTML • básico',
        description: 'A ideia aqui é aprender estrutura e semântica vendo o resultado imediatamente.'
      },
      css: {
        eyebrow: 'CSS • básico',
        description:
          'Esta versão inclui um mini desafio inspirado em jogos de flexbox, porque isso ajuda a lembrar melhor de layout.'
      },
      javascript: {
        eyebrow: 'JavaScript • básico',
        description: 'Condições, operadores e fluxo de decisão no navegador.'
      },
      jsLogic: {
        eyebrow: 'JavaScript • lógica',
        description: 'Módulo separado para comparações, operadores lógicos e leitura de expressões.'
      },
      php: {
        eyebrow: 'PHP • básico',
        description:
          'Aqui o aluno entende saída de texto, variáveis e condições usando um simulador de resposta.'
      },
      gitTerminal: {
        eyebrow: 'Ferramentas • básico',
        description:
          'Depois da lógica e da base web, o aluno precisa de terminal e Git suficientes para trabalhar como dev de verdade.'
      }
    }
  }
} as const;

type CopySchema = typeof copy.en;
export type CopyKey = keyof CopySchema;