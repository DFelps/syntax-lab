export type LocalizedString = {
  en: string;
  pt: string;
};

export type QuizQuestion = {
  question: LocalizedString;
  options: LocalizedString[];
  answer: number;
  explanation: LocalizedString;
};

export type PracticeChallenge = {
  title: LocalizedString;
  instruction: LocalizedString;
  placeholder: LocalizedString;
  expectedKeywords: Record<'en' | 'pt', string[]>;
  modelAnswer: LocalizedString;
};

export type Practice = {
  slug: string;
  title: LocalizedString;
  prompt: LocalizedString;
  checkpoints: LocalizedString[];
  quiz: QuizQuestion[];
  challenge: PracticeChallenge;
};

export const practiceBySlug: Record<string, Practice> = {
  'c-intro': {
    slug: 'c-intro',
    title: { en: 'Active practice: input, processing and output', pt: 'Prática ativa: entrada, processamento e saída' },
    prompt: {
      en: 'Before moving on, explain the program flow in your own words. The goal is to read C as steps, not memorize code.',
      pt: 'Antes de avançar, explique o fluxo do programa com suas próprias palavras. O objetivo é ler C como passos, não memorizar código.'
    },
    checkpoints: [
      { en: 'Identify program input', pt: 'Identificar a entrada do programa' },
      { en: 'Separate processing from output', pt: 'Separar processamento de saída' },
      { en: 'Predict terminal output', pt: 'Prever a saída no terminal' }
    ],
    quiz: [
      {
        question: { en: 'In a simple program, which part represents output?', pt: 'Em um programa simples, qual parte representa a saída?' },
        options: [
          { en: 'User input', pt: 'Entrada do usuário' },
          { en: 'The calculation', pt: 'O cálculo' },
          { en: 'The text displayed with printf', pt: 'O texto exibido com printf' },
          { en: 'The variable type', pt: 'O tipo da variável' }
        ],
        answer: 2,
        explanation: { en: 'Output is what the program returns to the user.', pt: 'Saída é o que o programa devolve para o usuário.' }
      },
      {
        question: { en: 'Which line usually signals a successful C program execution?', pt: 'Qual linha geralmente indica uma execução bem-sucedida em C?' },
        options: [
          { en: '#include <stdio.h>', pt: '#include <stdio.h>' },
          { en: 'int main()', pt: 'int main()' },
          { en: 'printf()', pt: 'printf()' },
          { en: 'return 0;', pt: 'return 0;' }
        ],
        answer: 3,
        explanation: { en: 'return 0 finishes main successfully.', pt: 'return 0 finaliza a função main com sucesso.' }
      }
    ],
    challenge: {
      title: { en: 'Write the mental algorithm', pt: 'Escreva o algoritmo mental' },
      instruction: {
        en: 'Write a 3-line flow for a program that receives an age and checks if the person can join a course.',
        pt: 'Escreva um fluxo de 3 linhas para um programa que recebe uma idade e verifica se a pessoa pode entrar em um curso.'
      },
      placeholder: { en: 'Input: ...\nProcessing: ...\nOutput: ...', pt: 'Entrada: ...\nProcessamento: ...\nSaída: ...' },
      expectedKeywords: { en: ['input', 'age', 'if', 'output'], pt: ['entrada', 'idade', 'if', 'saída'] },
      modelAnswer: {
        en: 'Input: receive the age. Processing: compare age with the minimum age using if. Output: show whether the person can join or not.',
        pt: 'Entrada: receber a idade. Processamento: comparar a idade com a idade mínima usando if. Saída: mostrar se a pessoa pode entrar ou não.'
      }
    }
  },
  'c-variables': {
    slug: 'c-variables',
    title: { en: 'Active practice: types and value changes', pt: 'Prática ativa: tipos e mudanças de valor' },
    prompt: {
      en: 'A variable has a name, type and value. Practice predicting final values after operations.',
      pt: 'Uma variável tem nome, tipo e valor. Pratique prevendo valores finais depois das operações.'
    },
    checkpoints: [
      { en: 'Differentiate int, float and char', pt: 'Diferenciar int, float e char' },
      { en: 'Predict operation results', pt: 'Prever resultados de operações' },
      { en: 'Understand reassignment', pt: 'Entender reatribuição' }
    ],
    quiz: [
      {
        question: { en: 'Which type would you use for 19.90?', pt: 'Qual tipo você usaria para 19.90?' },
        options: [
          { en: 'int', pt: 'int' },
          { en: 'float', pt: 'float' },
          { en: 'char', pt: 'char' },
          { en: 'void', pt: 'void' }
        ],
        answer: 1,
        explanation: { en: 'float stores decimal numbers.', pt: 'float armazena números decimais.' }
      },
      {
        question: { en: 'After int x = 5; x = x + 2;, what is x?', pt: 'Depois de int x = 5; x = x + 2;, quanto vale x?' },
        options: [
          { en: '5', pt: '5' },
          { en: '2', pt: '2' },
          { en: '7', pt: '7' },
          { en: 'x + 2', pt: 'x + 2' }
        ],
        answer: 2,
        explanation: { en: 'The old value is 5. The new value is 5 + 2.', pt: 'O valor antigo é 5. O novo valor é 5 + 2.' }
      }
    ],
    challenge: {
      title: { en: 'Choose the correct types', pt: 'Escolha os tipos corretos' },
      instruction: { en: 'Write 3 C declarations: an age, a price and a level letter.', pt: 'Escreva 3 declarações em C: uma idade, um preço e uma letra de nível.' },
      placeholder: { en: 'int ...\nfloat ...\nchar ...', pt: 'int ...\nfloat ...\nchar ...' },
      expectedKeywords: { en: ['int', 'float', 'char'], pt: ['int', 'float', 'char'] },
      modelAnswer: { en: "int age = 18;\nfloat price = 49.90;\nchar level = 'B';", pt: "int idade = 18;\nfloat preco = 49.90;\nchar nivel = 'B';" }
    }
  },
  'c-if-else': {
    slug: 'c-if-else',
    title: { en: 'Active practice: choosing a path', pt: 'Prática ativa: escolhendo um caminho' },
    prompt: { en: 'The goal is not only writing if. It is predicting which block runs when the condition changes.', pt: 'O objetivo não é só escrever if. É prever qual bloco roda quando a condição muda.' },
    checkpoints: [
      { en: 'Read the condition as a question', pt: 'Ler a condição como uma pergunta' },
      { en: 'Predict true or false', pt: 'Prever verdadeiro ou falso' },
      { en: 'Explain the chosen path', pt: 'Explicar o caminho escolhido' }
    ],
    quiz: [
      {
        question: { en: 'If score = 6 and the rule is score >= 7, which block runs?', pt: 'Se score = 6 e a regra é score >= 7, qual bloco roda?' },
        options: [
          { en: 'if', pt: 'if' },
          { en: 'else', pt: 'else' },
          { en: 'both', pt: 'os dois' },
          { en: 'none', pt: 'nenhum' }
        ],
        answer: 1,
        explanation: { en: '6 >= 7 is false, so the flow goes to else.', pt: '6 >= 7 é falso, então o fluxo vai para o else.' }
      },
      {
        question: { en: 'Which operator checks equality in C?', pt: 'Qual operador verifica igualdade em C?' },
        options: [
          { en: '=', pt: '=' },
          { en: '==', pt: '==' },
          { en: '===', pt: '===' },
          { en: '=>', pt: '=>' }
        ],
        answer: 1,
        explanation: { en: '= assigns a value. == compares values.', pt: '= atribui um valor. == compara valores.' }
      }
    ],
    challenge: {
      title: { en: 'Create a decision', pt: 'Crie uma decisão' },
      instruction: { en: 'Write an if/else in C to check if a numeric password equals 1234.', pt: 'Escreva um if/else em C para verificar se uma senha numérica é igual a 1234.' },
      placeholder: { en: 'if (...) {\n    printf(...);\n} else {\n    printf(...);\n}', pt: 'if (...) {\n    printf(...);\n} else {\n    printf(...);\n}' },
      expectedKeywords: { en: ['if', 'else', '==', 'printf'], pt: ['if', 'else', '==', 'printf'] },
      modelAnswer: { en: 'if (password == 1234) {\n    printf("Access granted");\n} else {\n    printf("Access denied");\n}', pt: 'if (senha == 1234) {\n    printf("Acesso liberado");\n} else {\n    printf("Acesso negado");\n}' }
    }
  },
  'c-loops': {
    slug: 'c-loops',
    title: { en: 'Active practice: controlled repetition', pt: 'Prática ativa: repetição controlada' },
    prompt: { en: 'A loop has an initial value, a condition and an update. Predict how many times it runs.', pt: 'Um loop tem valor inicial, condição e atualização. Preveja quantas vezes ele roda.' },
    checkpoints: [
      { en: 'Find the initial value', pt: 'Encontrar o valor inicial' },
      { en: 'Read the stop condition', pt: 'Ler a condição de parada' },
      { en: 'Check the counter update', pt: 'Verificar a atualização do contador' }
    ],
    quiz: [
      {
        question: { en: 'How many times does this run: for (int i = 1; i <= 3; i++)?', pt: 'Quantas vezes isso roda: for (int i = 1; i <= 3; i++)?' },
        options: [{ en: '1', pt: '1' }, { en: '2', pt: '2' }, { en: '3', pt: '3' }, { en: '4', pt: '4' }],
        answer: 2,
        explanation: { en: 'i is 1, 2 and 3. When it becomes 4, the condition is false.', pt: 'i vale 1, 2 e 3. Quando vira 4, a condição fica falsa.' }
      },
      {
        question: { en: 'Which part usually updates the counter?', pt: 'Qual parte geralmente atualiza o contador?' },
        options: [{ en: 'int i = 1', pt: 'int i = 1' }, { en: 'i <= 10', pt: 'i <= 10' }, { en: 'i++', pt: 'i++' }, { en: 'printf', pt: 'printf' }],
        answer: 2,
        explanation: { en: 'i++ increases the counter after each iteration.', pt: 'i++ aumenta o contador depois de cada repetição.' }
      }
    ],
    challenge: {
      title: { en: 'Write a repetition', pt: 'Escreva uma repetição' },
      instruction: { en: 'Write a for loop that prints numbers from 1 to 5.', pt: 'Escreva um loop for que imprime os números de 1 a 5.' },
      placeholder: { en: 'for (...) {\n    printf(...);\n}', pt: 'for (...) {\n    printf(...);\n}' },
      expectedKeywords: { en: ['for', 'int', '<=', 'printf', '++'], pt: ['for', 'int', '<=', 'printf', '++'] },
      modelAnswer: { en: 'for (int i = 1; i <= 5; i++) {\n    printf("%d", i);\n}', pt: 'for (int i = 1; i <= 5; i++) {\n    printf("%d", i);\n}' }
    }
  },
  'c-functions': {
    slug: 'c-functions',
    title: { en: 'Active practice: parameters and return', pt: 'Prática ativa: parâmetros e retorno' },
    prompt: { en: 'A function is a small machine: it receives values, processes them and returns something.', pt: 'Uma função é uma pequena máquina: recebe valores, processa e retorna algo.' },
    checkpoints: [
      { en: 'Name by action', pt: 'Nomear pela ação' },
      { en: 'Identify parameters', pt: 'Identificar parâmetros' },
      { en: 'Know what it returns', pt: 'Saber o que ela retorna' }
    ],
    quiz: [
      {
        question: { en: 'In int sum(int a, int b), what are the parameters?', pt: 'Em int sum(int a, int b), quais são os parâmetros?' },
        options: [{ en: 'int sum', pt: 'int sum' }, { en: 'a and b', pt: 'a e b' }, { en: 'return', pt: 'return' }, { en: 'int main', pt: 'int main' }],
        answer: 1,
        explanation: { en: 'a and b are the values received by the function.', pt: 'a e b são os valores recebidos pela função.' }
      },
      {
        question: { en: 'Which keyword sends a value back?', pt: 'Qual palavra-chave envia um valor de volta?' },
        options: [{ en: 'printf', pt: 'printf' }, { en: 'include', pt: 'include' }, { en: 'return', pt: 'return' }, { en: 'main', pt: 'main' }],
        answer: 2,
        explanation: { en: 'return sends a value back to the caller.', pt: 'return envia um valor de volta para quem chamou a função.' }
      }
    ],
    challenge: {
      title: { en: 'Create a small function', pt: 'Crie uma pequena função' },
      instruction: { en: 'Write a C function that receives two integers and returns the biggest one.', pt: 'Escreva uma função em C que recebe dois inteiros e retorna o maior deles.' },
      placeholder: { en: 'int max(int a, int b) {\n    ...\n}', pt: 'int max(int a, int b) {\n    ...\n}' },
      expectedKeywords: { en: ['int', 'max', 'if', 'return'], pt: ['int', 'max', 'if', 'return'] },
      modelAnswer: { en: 'int max(int a, int b) {\n    if (a > b) return a;\n    return b;\n}', pt: 'int max(int a, int b) {\n    if (a > b) return a;\n    return b;\n}' }
    }
  },
  'c-arrays': {
    slug: 'c-arrays',
    title: { en: 'Active practice: zero-based indexes', pt: 'Prática ativa: índices começando em zero' },
    prompt: { en: 'Arrays require attention: position 0 is the first item. Predict indexes before using the simulator.', pt: 'Arrays exigem atenção: a posição 0 é o primeiro item. Preveja os índices antes de usar o simulador.' },
    checkpoints: [
      { en: 'Remember index 0', pt: 'Lembrar do índice 0' },
      { en: 'Access a specific position', pt: 'Acessar uma posição específica' },
      { en: 'Iterate with a loop', pt: 'Iterar com um loop' }
    ],
    quiz: [
      {
        question: { en: 'In int nums[3] = {10, 20, 30}; what is nums[1]?', pt: 'Em int nums[3] = {10, 20, 30}; quanto vale nums[1]?' },
        options: [{ en: '10', pt: '10' }, { en: '20', pt: '20' }, { en: '30', pt: '30' }, { en: '1', pt: '1' }],
        answer: 1,
        explanation: { en: 'nums[0] is 10, nums[1] is 20 and nums[2] is 30.', pt: 'nums[0] é 10, nums[1] é 20 e nums[2] é 30.' }
      },
      {
        question: { en: 'Which loop fits known-size arrays well?', pt: 'Qual loop combina bem com arrays de tamanho conhecido?' },
        options: [{ en: 'for', pt: 'for' }, { en: 'switch', pt: 'switch' }, { en: 'if', pt: 'if' }, { en: 'return', pt: 'return' }],
        answer: 0,
        explanation: { en: 'for is great when you know how many positions to visit.', pt: 'for é ótimo quando você sabe quantas posições precisa visitar.' }
      }
    ],
    challenge: {
      title: { en: 'Sum values', pt: 'Some os valores' },
      instruction: { en: 'Write the idea of a loop that sums all values from an array named scores with 5 positions.', pt: 'Escreva a ideia de um loop que soma todos os valores de um array chamado scores com 5 posições.' },
      placeholder: { en: 'int total = 0;\nfor (...) {\n    ...\n}', pt: 'int total = 0;\nfor (...) {\n    ...\n}' },
      expectedKeywords: { en: ['total', 'for', 'scores', '[i]'], pt: ['total', 'for', 'scores', '[i]'] },
      modelAnswer: { en: 'int total = 0;\nfor (int i = 0; i < 5; i++) {\n    total = total + scores[i];\n}', pt: 'int total = 0;\nfor (int i = 0; i < 5; i++) {\n    total = total + scores[i];\n}' }
    }
  },
  html: {
    slug: 'html',
    title: { en: 'Active practice: semantics and structure', pt: 'Prática ativa: semântica e estrutura' },
    prompt: { en: 'HTML is not only visual tags. Choose tags that explain the role of the content.', pt: 'HTML não é só tags visuais. Escolha tags que expliquem o papel do conteúdo.' },
    checkpoints: [
      { en: 'Separate title, paragraph and link', pt: 'Separar título, parágrafo e link' },
      { en: 'Use main/article/section', pt: 'Usar main/article/section' },
      { en: 'Think about semantics before style', pt: 'Pensar em semântica antes do estilo' }
    ],
    quiz: [
      {
        question: { en: 'Which tag represents the main title?', pt: 'Qual tag representa o título principal?' },
        options: [{ en: '<p>', pt: '<p>' }, { en: '<h1>', pt: '<h1>' }, { en: '<a>', pt: '<a>' }, { en: '<span>', pt: '<span>' }],
        answer: 1,
        explanation: { en: '<h1> represents the main title of a page or section.', pt: '<h1> representa o título principal de uma página ou seção.' }
      },
      {
        question: { en: 'Which tag creates a link?', pt: 'Qual tag cria um link?' },
        options: [{ en: '<a>', pt: '<a>' }, { en: '<link>', pt: '<link>' }, { en: '<navlink>', pt: '<navlink>' }, { en: '<url>', pt: '<url>' }],
        answer: 0,
        explanation: { en: '<a> creates navigable links.', pt: '<a> cria links navegáveis.' }
      }
    ],
    challenge: {
      title: { en: 'Build a simple article', pt: 'Monte um artigo simples' },
      instruction: { en: 'Write HTML with article, h1, p and a for a fake news card.', pt: 'Escreva HTML com article, h1, p e a para um card de notícia fictício.' },
      placeholder: { en: '<article>\n  ...\n</article>', pt: '<article>\n  ...\n</article>' },
      expectedKeywords: { en: ['article', 'h1', 'p', 'a'], pt: ['article', 'h1', 'p', 'a'] },
      modelAnswer: { en: '<article>\n  <h1>New lesson published</h1>\n  <p>The platform added an interactive module.</p>\n  <a href="/basic">View lessons</a>\n</article>', pt: '<article>\n  <h1>Nova aula publicada</h1>\n  <p>A plataforma adicionou um módulo interativo.</p>\n  <a href="/basic">Ver aulas</a>\n</article>' }
    }
  },
  css: {
    slug: 'css',
    title: { en: 'Active practice: layout as intention', pt: 'Prática ativa: layout com intenção' },
    prompt: { en: 'Good CSS starts with intention: align, space, highlight or organize.', pt: 'Bom CSS começa com intenção: alinhar, espaçar, destacar ou organizar.' },
    checkpoints: [
      { en: 'Use display flex', pt: 'Usar display flex' },
      { en: 'Choose direction/alignment', pt: 'Escolher direção/alinhamento' },
      { en: 'Control spacing with gap', pt: 'Controlar espaçamento com gap' }
    ],
    quiz: [
      { question: { en: 'Which property enables flexbox?', pt: 'Qual propriedade ativa o flexbox?' }, options: [{ en: 'display: flex', pt: 'display: flex' }, { en: 'position: flex', pt: 'position: flex' }, { en: 'align: flex', pt: 'align: flex' }, { en: 'box: flex', pt: 'box: flex' }], answer: 0, explanation: { en: 'display: flex turns the element into a flex container.', pt: 'display: flex transforma o elemento em um container flex.' } },
      { question: { en: 'Which property aligns on the main axis?', pt: 'Qual propriedade alinha no eixo principal?' }, options: [{ en: 'align-items', pt: 'align-items' }, { en: 'justify-content', pt: 'justify-content' }, { en: 'font-size', pt: 'font-size' }, { en: 'border', pt: 'border' }], answer: 1, explanation: { en: 'justify-content controls distribution on the main axis.', pt: 'justify-content controla a distribuição no eixo principal.' } }
    ],
    challenge: { title: { en: 'Center an item', pt: 'Centralize um item' }, instruction: { en: 'Write CSS to center an item in the middle using flexbox.', pt: 'Escreva CSS para centralizar um item no meio usando flexbox.' }, placeholder: { en: '.box {\n  ...\n}', pt: '.box {\n  ...\n}' }, expectedKeywords: { en: ['display', 'flex', 'justify-content', 'align-items'], pt: ['display', 'flex', 'justify-content', 'align-items'] }, modelAnswer: { en: '.box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}', pt: '.box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}' } }
  },
  javascript: {
    slug: 'javascript',
    title: { en: 'Active practice: browser decisions', pt: 'Prática ativa: decisões no navegador' },
    prompt: { en: 'JavaScript fundamentals should lock in variables, conditions and functions.', pt: 'A base de JavaScript precisa fixar variáveis, condições e funções.' },
    checkpoints: [
      { en: 'Declare with const or let', pt: 'Declarar com const ou let' },
      { en: 'Use comparisons', pt: 'Usar comparações' },
      { en: 'Understand console.log as output', pt: 'Entender console.log como saída' }
    ],
    quiz: [
      { question: { en: 'Which declaration allows reassignment?', pt: 'Qual declaração permite reatribuição?' }, options: [{ en: 'const', pt: 'const' }, { en: 'let', pt: 'let' }, { en: 'class', pt: 'class' }, { en: 'import', pt: 'import' }], answer: 1, explanation: { en: 'let allows reassignment. const does not allow reassigning the binding.', pt: 'let permite reatribuição. const não permite reatribuir o vínculo.' } },
      { question: { en: 'In JS, which operator means logical AND?', pt: 'Em JS, qual operador significa AND lógico?' }, options: [{ en: '||', pt: '||' }, { en: '&&', pt: '&&' }, { en: '!', pt: '!' }, { en: '??', pt: '??' }], answer: 1, explanation: { en: '&& requires both conditions to be true.', pt: '&& exige que as duas condições sejam verdadeiras.' } }
    ],
    challenge: { title: { en: 'Write an access rule', pt: 'Escreva uma regra de acesso' }, instruction: { en: 'Write an if statement in JavaScript that allows access if age is 18 or higher.', pt: 'Escreva um if em JavaScript que libera acesso se a idade for 18 ou maior.' }, placeholder: { en: 'if (...) {\n  console.log(...);\n}', pt: 'if (...) {\n  console.log(...);\n}' }, expectedKeywords: { en: ['if', 'age', '>=', 'console.log'], pt: ['if', 'idade', '>=', 'console.log'] }, modelAnswer: { en: 'if (age >= 18) {\n  console.log("Access granted");\n}', pt: 'if (idade >= 18) {\n  console.log("Acesso liberado");\n}' } }
  },
  'js-logic': {
    slug: 'js-logic',
    title: { en: 'Active practice: combining conditions', pt: 'Prática ativa: combinando condições' },
    prompt: { en: 'A rule can depend on multiple conditions at the same time.', pt: 'Uma regra pode depender de várias condições ao mesmo tempo.' },
    checkpoints: [
      { en: 'Use && when everything must be true', pt: 'Use && quando tudo precisa ser verdadeiro' },
      { en: 'Use || when one option is enough', pt: 'Use || quando uma opção basta' },
      { en: 'Use ! to invert a condition', pt: 'Use ! para inverter uma condição' }
    ],
    quiz: [
      { question: { en: 'If age >= 18 is true and hasAccount is false, age >= 18 && hasAccount is:', pt: 'Se age >= 18 é verdadeiro e hasAccount é falso, age >= 18 && hasAccount é:' }, options: [{ en: 'true', pt: 'true' }, { en: 'false', pt: 'false' }, { en: 'undefined', pt: 'undefined' }, { en: '18', pt: '18' }], answer: 1, explanation: { en: 'With &&, everything must be true.', pt: 'Com &&, tudo precisa ser verdadeiro.' } },
      { question: { en: 'Which operator means OR?', pt: 'Qual operador significa OR?' }, options: [{ en: '&&', pt: '&&' }, { en: '||', pt: '||' }, { en: '!', pt: '!' }, { en: '===', pt: '===' }], answer: 1, explanation: { en: '|| returns true when at least one condition is true.', pt: '|| retorna true quando pelo menos uma condição é verdadeira.' } }
    ],
    challenge: { title: { en: 'Combine two conditions', pt: 'Combine duas condições' }, instruction: { en: 'Write a condition to continue if passedQuiz is true and attempts is less than 3.', pt: 'Escreva uma condição para continuar se passedQuiz for true e attempts for menor que 3.' }, placeholder: { en: 'if (...) {\n  ...\n}', pt: 'if (...) {\n  ...\n}' }, expectedKeywords: { en: ['passedQuiz', 'attempts', '<', '&&'], pt: ['passedQuiz', 'attempts', '<', '&&'] }, modelAnswer: { en: 'if (passedQuiz && attempts < 3) {\n  console.log("Continue");\n}', pt: 'if (passedQuiz && attempts < 3) {\n  console.log("Continuar");\n}' } }
  },
  php: {
    slug: 'php',
    title: { en: 'Active practice: server output', pt: 'Prática ativa: saída do servidor' },
    prompt: { en: 'PHP basics are about variables, conditions and output generated by the server.', pt: 'A base de PHP envolve variáveis, condições e saída gerada pelo servidor.' },
    checkpoints: [
      { en: 'Declare variables with $', pt: 'Declarar variáveis com $' },
      { en: 'Use echo as output', pt: 'Usar echo como saída' },
      { en: 'Mix PHP and HTML carefully', pt: 'Misturar PHP e HTML com cuidado' }
    ],
    quiz: [
      { question: { en: 'How does a PHP variable start?', pt: 'Como uma variável PHP começa?' }, options: [{ en: '#', pt: '#' }, { en: '$', pt: '$' }, { en: '@', pt: '@' }, { en: '%', pt: '%' }], answer: 1, explanation: { en: 'PHP variables start with $.', pt: 'Variáveis PHP começam com $.' } },
      { question: { en: 'Which command prints text in PHP?', pt: 'Qual comando imprime texto em PHP?' }, options: [{ en: 'printText', pt: 'printText' }, { en: 'console.log', pt: 'console.log' }, { en: 'echo', pt: 'echo' }, { en: 'send', pt: 'send' }], answer: 2, explanation: { en: 'echo sends text to the HTML response.', pt: 'echo envia texto para a resposta HTML.' } }
    ],
    challenge: { title: { en: 'Render a greeting', pt: 'Renderize uma saudação' }, instruction: { en: 'Write PHP that stores a name and prints Hello, name.', pt: 'Escreva PHP que guarda um nome e imprime Olá, nome.' }, placeholder: { en: '<?php\n$name = ...;\necho ...;\n?>', pt: '<?php\n$name = ...;\necho ...;\n?>' }, expectedKeywords: { en: ['$', 'echo', 'Hello'], pt: ['$', 'echo', 'Olá'] }, modelAnswer: { en: '<?php\n$name = "Ana";\necho "Hello, $name";\n?>', pt: '<?php\n$name = "Ana";\necho "Olá, $name";\n?>' } }
  },
  'git-terminal': {
    slug: 'git-terminal',
    title: { en: 'Active practice: basic Git flow', pt: 'Prática ativa: fluxo básico do Git' },
    prompt: { en: 'Git gets easier when you understand file states: modified, staged and committed.', pt: 'Git fica mais fácil quando você entende os estados dos arquivos: modificado, em stage e commitado.' },
    checkpoints: [
      { en: 'Check status', pt: 'Verificar status' },
      { en: 'Add files', pt: 'Adicionar arquivos' },
      { en: 'Create commits', pt: 'Criar commits' }
    ],
    quiz: [
      { question: { en: 'Which command shows repository status?', pt: 'Qual comando mostra o status do repositório?' }, options: [{ en: 'git push', pt: 'git push' }, { en: 'git status', pt: 'git status' }, { en: 'git init', pt: 'git init' }, { en: 'git reset', pt: 'git reset' }], answer: 1, explanation: { en: 'git status shows modified and staged files.', pt: 'git status mostra arquivos modificados e em stage.' } },
      { question: { en: 'Which command creates a commit?', pt: 'Qual comando cria um commit?' }, options: [{ en: 'git add', pt: 'git add' }, { en: 'git commit', pt: 'git commit' }, { en: 'git branch', pt: 'git branch' }, { en: 'git log', pt: 'git log' }], answer: 1, explanation: { en: 'git commit records a snapshot of staged files.', pt: 'git commit registra um snapshot dos arquivos em stage.' } }
    ],
    challenge: { title: { en: 'Write the full flow', pt: 'Escreva o fluxo completo' }, instruction: { en: 'Write commands to check status, add everything and create a commit.', pt: 'Escreva comandos para verificar status, adicionar tudo e criar um commit.' }, placeholder: { en: 'git ...\ngit ...\ngit ...', pt: 'git ...\ngit ...\ngit ...' }, expectedKeywords: { en: ['git status', 'git add', 'git commit'], pt: ['git status', 'git add', 'git commit'] }, modelAnswer: { en: 'git status\ngit add .\ngit commit -m "initial lesson"', pt: 'git status\ngit add .\ngit commit -m "aula inicial"' } }
  }
};

export function getPractice(slug: string): Practice | undefined {
  return practiceBySlug[slug];
}
