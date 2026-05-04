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
      eyebrow: 'Intermediate level',
      title: 'Reserved for the next product stage',
      description: 'This path will include forms, DOM, APIs, lightweight persistence and larger challenges.'
    },
    advancedPage: {
      eyebrow: 'Advanced level',
      title: 'Reserved for the product evolution',
      description: 'This path will include authentication, database work, dashboards, gamification and a stronger code editor.'
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
      eyebrow: 'Nível intermediário',
      title: 'Reservado para a próxima etapa do produto',
      description: 'Esta trilha vai incluir formulários, DOM, APIs, persistência leve e desafios maiores.'
    },
    advancedPage: {
      eyebrow: 'Nível avançado',
      title: 'Reservado para a evolução do produto',
      description: 'Esta trilha vai incluir autenticação, banco de dados, dashboards, gamificação e um editor de código mais forte.'
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