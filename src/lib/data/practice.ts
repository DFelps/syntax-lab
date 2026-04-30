export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type PracticeChallenge = {
  title: string;
  instruction: string;
  placeholder: string;
  expectedKeywords: string[];
  modelAnswer: string;
};

export type Practice = {
  slug: string;
  title: string;
  prompt: string;
  checkpoints: string[];
  quiz: QuizQuestion[];
  challenge: PracticeChallenge;
};

export const practiceBySlug: Record<string, Practice> = {
  'c-intro': {
    slug: 'c-intro',
    title: 'Treino ativo: entrada, processamento e saída',
    prompt: 'Antes de avançar, explique o caminho do programa com suas palavras. A meta é ler C como uma sequência de passos, não decorar código.',
    checkpoints: ['Identificar o que entra no programa', 'Separar processamento de saída', 'Prever o que aparece no terminal'],
    quiz: [
      {
        question: 'Em um programa simples, qual parte representa a saída?',
        options: ['O valor digitado pelo usuário', 'O cálculo feito pelo programa', 'O texto exibido com printf', 'O tipo da variável'],
        answer: 2,
        explanation: 'Saída é o que o programa devolve para o usuário. Em C básico, normalmente aparece com printf.'
      },
      {
        question: 'Qual linha indica que o programa terminou com sucesso?',
        options: ['#include <stdio.h>', 'int main()', 'printf()', 'return 0;'],
        answer: 3,
        explanation: 'return 0; finaliza a função main sinalizando que o programa terminou normalmente.'
      }
    ],
    challenge: {
      title: 'Escreva o algoritmo mental',
      instruction: 'Escreva em 3 linhas o fluxo de um programa que recebe uma idade e mostra se a pessoa pode entrar em um curso.',
      placeholder: 'Entrada: ...\nProcessamento: ...\nSaída: ...',
      expectedKeywords: ['entrada', 'idade', 'if', 'saída'],
      modelAnswer: 'Entrada: receber a idade. Processamento: comparar idade com a idade mínima usando if. Saída: mostrar se pode entrar ou não.'
    }
  },
  'c-variables': {
    slug: 'c-variables',
    title: 'Treino ativo: tipos e mudança de valor',
    prompt: 'Variável em C tem nome, tipo e valor. O treino aqui é prever o valor final depois das operações.',
    checkpoints: ['Diferenciar int, float e char', 'Prever resultado de operações', 'Entender quando o valor muda'],
    quiz: [
      {
        question: 'Qual tipo você usaria para guardar 19.90?',
        options: ['int', 'float', 'char', 'void'],
        answer: 1,
        explanation: 'float guarda número decimal. int guarda inteiro e char guarda um caractere.'
      },
      {
        question: 'Depois de int x = 5; x = x + 2;, qual é o valor de x?',
        options: ['5', '2', '7', 'x + 2'],
        answer: 2,
        explanation: 'O valor antigo de x é 5. O novo valor vira 5 + 2, ou seja, 7.'
      }
    ],
    challenge: {
      title: 'Declare pensando no tipo',
      instruction: 'Escreva 3 declarações em C: uma idade, um preço e uma letra de nível.',
      placeholder: 'int ...\nfloat ...\nchar ...',
      expectedKeywords: ['int', 'float', 'char'],
      modelAnswer: "int idade = 18;\nfloat preco = 49.90;\nchar nivel = 'B';"
    }
  },
  'c-if-else': {
    slug: 'c-if-else',
    title: 'Treino ativo: escolha de caminho',
    prompt: 'O ponto não é só saber escrever if. É conseguir prever qual bloco roda quando a condição muda.',
    checkpoints: ['Ler a condição como pergunta', 'Prever true ou false', 'Explicar por que caiu no if ou no else'],
    quiz: [
      {
        question: 'Se nota = 6 e a regra é nota >= 7, qual bloco executa?',
        options: ['if', 'else', 'os dois', 'nenhum'],
        answer: 1,
        explanation: '6 >= 7 é falso, então o fluxo vai para o else.'
      },
      {
        question: 'Qual operador testa igualdade em C?',
        options: ['=', '==', '===', '=>'],
        answer: 1,
        explanation: '= atribui valor. == compara igualdade em C.'
      }
    ],
    challenge: {
      title: 'Crie uma decisão',
      instruction: 'Escreva um if/else em C para verificar se uma senha numérica é igual a 1234.',
      placeholder: 'if (...) {\n    printf(...);\n} else {\n    printf(...);\n}',
      expectedKeywords: ['if', 'else', '==', 'printf'],
      modelAnswer: 'if (senha == 1234) {\n    printf("Acesso liberado");\n} else {\n    printf("Acesso negado");\n}'
    }
  },
  'c-loops': {
    slug: 'c-loops',
    title: 'Treino ativo: repetição com controle',
    prompt: 'Loop é contador, condição e atualização. O exercício é prever quantas vezes ele roda antes de ver a resposta.',
    checkpoints: ['Encontrar o valor inicial', 'Ler a condição de parada', 'Ver a atualização do contador'],
    quiz: [
      {
        question: 'Quantas vezes roda: for (int i = 1; i <= 3; i++)?',
        options: ['1', '2', '3', '4'],
        answer: 2,
        explanation: 'O i assume 1, 2 e 3. Quando vira 4, a condição i <= 3 fica falsa.'
      },
      {
        question: 'Qual parte do for normalmente atualiza o contador?',
        options: ['int i = 1', 'i <= 10', 'i++', 'printf'],
        answer: 2,
        explanation: 'i++ aumenta o contador ao final de cada repetição.'
      }
    ],
    challenge: {
      title: 'Escreva uma repetição',
      instruction: 'Escreva um for que imprime os números de 1 até 5.',
      placeholder: 'for (...) {\n    printf(...);\n}',
      expectedKeywords: ['for', 'int', '<=', 'printf', '++'],
      modelAnswer: 'for (int i = 1; i <= 5; i++) {\n    printf("%d", i);\n}'
    }
  },
  'c-functions': {
    slug: 'c-functions',
    title: 'Treino ativo: entrada e retorno',
    prompt: 'Função é uma mini máquina: recebe valores, processa e devolve algo. Treine nome, parâmetros e retorno.',
    checkpoints: ['Nomear a função por ação', 'Identificar parâmetros', 'Saber o que ela retorna'],
    quiz: [
      {
        question: 'Em int somar(int a, int b), quais são os parâmetros?',
        options: ['int somar', 'a e b', 'return', 'int main'],
        answer: 1,
        explanation: 'a e b são os valores recebidos pela função.'
      },
      {
        question: 'Qual palavra devolve o resultado da função?',
        options: ['printf', 'include', 'return', 'main'],
        answer: 2,
        explanation: 'return envia um valor de volta para quem chamou a função.'
      }
    ],
    challenge: {
      title: 'Crie uma função pequena',
      instruction: 'Escreva uma função em C que recebe dois inteiros e retorna o maior deles.',
      placeholder: 'int maior(int a, int b) {\n    ...\n}',
      expectedKeywords: ['int', 'maior', 'if', 'return'],
      modelAnswer: 'int maior(int a, int b) {\n    if (a > b) {\n        return a;\n    }\n    return b;\n}'
    }
  },
  'c-arrays': {
    slug: 'c-arrays',
    title: 'Treino ativo: índice começa em zero',
    prompt: 'Array exige atenção: posição 0 é o primeiro item. Treine prever índice antes de mexer no simulador.',
    checkpoints: ['Lembrar que o primeiro índice é 0', 'Acessar uma posição específica', 'Percorrer array com loop'],
    quiz: [
      {
        question: 'Em int nums[3] = {10, 20, 30}; qual é nums[1]?',
        options: ['10', '20', '30', '1'],
        answer: 1,
        explanation: 'nums[0] é 10, nums[1] é 20 e nums[2] é 30.'
      },
      {
        question: 'Qual loop combina bem para percorrer um array de tamanho conhecido?',
        options: ['for', 'switch', 'if', 'return'],
        answer: 0,
        explanation: 'for é ótimo quando você sabe quantas posições quer percorrer.'
      }
    ],
    challenge: {
      title: 'Some os valores',
      instruction: 'Escreva a ideia de um loop que soma todos os valores de um array notas com 5 posições.',
      placeholder: 'int soma = 0;\nfor (...) {\n    ...\n}',
      expectedKeywords: ['soma', 'for', 'notas', '[i]'],
      modelAnswer: 'int soma = 0;\nfor (int i = 0; i < 5; i++) {\n    soma = soma + notas[i];\n}'
    }
  },
  html: {
    slug: 'html',
    title: 'Treino ativo: semântica e estrutura',
    prompt: 'HTML não é só tag visual. O treino é escolher tags que expliquem o papel do conteúdo.',
    checkpoints: ['Diferenciar título, parágrafo e link', 'Usar estrutura com main/article/section', 'Pensar em semântica antes de estilo'],
    quiz: [
      {
        question: 'Qual tag representa o título principal da página?',
        options: ['<p>', '<h1>', '<a>', '<span>'],
        answer: 1,
        explanation: '<h1> representa o título principal daquela página ou seção.'
      },
      {
        question: 'Qual tag cria um link?',
        options: ['<a>', '<link>', '<navlink>', '<url>'],
        answer: 0,
        explanation: '<a> cria âncoras e links navegáveis.'
      }
    ],
    challenge: {
      title: 'Monte uma notícia simples',
      instruction: 'Escreva um HTML com article, h1, p e a para uma notícia fictícia.',
      placeholder: '<article>\n  ...\n</article>',
      expectedKeywords: ['article', 'h1', 'p', 'a'],
      modelAnswer: '<article>\n  <h1>Nova aula publicada</h1>\n  <p>A plataforma ganhou um módulo interativo.</p>\n  <a href="/basic">Ver aulas</a>\n</article>'
    }
  },
  css: {
    slug: 'css',
    title: 'Treino ativo: layout como intenção',
    prompt: 'CSS bom começa com intenção: alinhar, espaçar, destacar ou organizar. Escreva antes de olhar o resultado.',
    checkpoints: ['Usar display flex', 'Escolher direção/alinhamento', 'Controlar espaçamento com gap'],
    quiz: [
      {
        question: 'Qual propriedade ativa flexbox?',
        options: ['flex: true', 'display: flex', 'position: flex', 'layout: flex'],
        answer: 1,
        explanation: 'display: flex transforma o elemento em um container flex.'
      },
      {
        question: 'Qual propriedade alinha no eixo principal?',
        options: ['align-items', 'justify-content', 'font-weight', 'border-radius'],
        answer: 1,
        explanation: 'justify-content controla distribuição no eixo principal do flex container.'
      }
    ],
    challenge: {
      title: 'Centralize o alvo',
      instruction: 'Escreva CSS para centralizar um item no meio usando flexbox.',
      placeholder: '.arena {\n  ...\n}',
      expectedKeywords: ['display', 'flex', 'justify-content', 'align-items'],
      modelAnswer: '.arena {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'
    }
  },
  javascript: {
    slug: 'javascript',
    title: 'Treino ativo: pensar antes do console',
    prompt: 'JavaScript no básico deve fixar variável, condição e função. Leia o código e tente prever a saída antes de testar.',
    checkpoints: ['Declarar valor com const ou let', 'Usar comparação', 'Entender console.log como saída'],
    quiz: [
      {
        question: 'Qual declaração permite trocar o valor depois?',
        options: ['const', 'let', 'fixed', 'static'],
        answer: 1,
        explanation: 'let permite reatribuição. const não permite trocar a referência depois.'
      },
      {
        question: 'Em JS, qual operador significa “e lógico”?',
        options: ['&&', '||', '!', '=='],
        answer: 0,
        explanation: '&& exige que as duas condições sejam verdadeiras.'
      }
    ],
    challenge: {
      title: 'Crie uma regra de acesso',
      instruction: 'Escreva um if em JavaScript que libera acesso se idade for maior ou igual a 18.',
      placeholder: 'if (...) {\n  console.log(...);\n}',
      expectedKeywords: ['if', 'idade', '>=', 'console.log'],
      modelAnswer: "if (idade >= 18) {\n  console.log('Acesso liberado');\n}"
    }
  },
  'js-logic': {
    slug: 'js-logic',
    title: 'Treino ativo: combinar condições',
    prompt: 'Agora o foco é raciocínio: uma regra pode depender de várias condições ao mesmo tempo.',
    checkpoints: ['Usar && quando tudo precisa ser verdade', 'Usar || quando uma opção basta', 'Usar ! para inverter uma condição'],
    quiz: [
      {
        question: 'Se idade >= 18 é true e temCadastro é false, idade >= 18 && temCadastro resulta em:',
        options: ['true', 'false', 'undefined', '18'],
        answer: 1,
        explanation: 'Com &&, tudo precisa ser true. Como temCadastro é false, o resultado final é false.'
      },
      {
        question: 'Qual operador significa “ou”?',
        options: ['&&', '||', '!=', '==='],
        answer: 1,
        explanation: '|| retorna true quando pelo menos uma condição é verdadeira.'
      }
    ],
    challenge: {
      title: 'Monte uma regra composta',
      instruction: 'Escreva uma condição para avançar se acertouQuiz for true e tentativas for menor que 3.',
      placeholder: 'const podeAvancar = ...;',
      expectedKeywords: ['acertouQuiz', 'tentativas', '<', '&&'],
      modelAnswer: 'const podeAvancar = acertouQuiz && tentativas < 3;'
    }
  },
  php: {
    slug: 'php',
    title: 'Treino ativo: saída no servidor',
    prompt: 'PHP no começo é entender variável, condição e echo. A pessoa precisa saber o que o servidor vai gerar.',
    checkpoints: ['Declarar variável com $', 'Usar echo como saída', 'Misturar PHP com HTML com cuidado'],
    quiz: [
      {
        question: 'Como uma variável começa em PHP?',
        options: ['@', '$', '#', 'var '],
        answer: 1,
        explanation: 'Variáveis em PHP começam com $.'
      },
      {
        question: 'Qual comando imprime texto em PHP?',
        options: ['printText', 'console.log', 'echo', 'printf only'],
        answer: 2,
        explanation: 'echo é uma forma comum de enviar texto para a resposta HTML.'
      }
    ],
    challenge: {
      title: 'Renderize uma saudação',
      instruction: 'Escreva PHP que guarda um nome e imprime Olá, nome.',
      placeholder: '<?php\n$nome = ...;\necho ...;',
      expectedKeywords: ['$nome', 'echo', 'Olá'],
      modelAnswer: "<?php\n$nome = 'Dev';\necho 'Olá, ' . $nome;"
    }
  },
  'git-terminal': {
    slug: 'git-terminal',
    title: 'Treino ativo: fluxo de versionamento',
    prompt: 'Git fixa melhor quando você entende o estado dos arquivos: modificado, staged e commitado.',
    checkpoints: ['Ver estado com git status', 'Adicionar com git add', 'Registrar com git commit'],
    quiz: [
      {
        question: 'Qual comando mostra o estado atual do repositório?',
        options: ['git save', 'git status', 'git upload', 'git check'],
        answer: 1,
        explanation: 'git status mostra arquivos modificados, staged e informações da branch.'
      },
      {
        question: 'Qual comando cria um commit?',
        options: ['git commit -m "msg"', 'git add .', 'git push', 'git init only'],
        answer: 0,
        explanation: 'git commit registra um snapshot dos arquivos que já foram adicionados ao stage.'
      }
    ],
    challenge: {
      title: 'Escreva o fluxo completo',
      instruction: 'Escreva os comandos para ver status, adicionar tudo e criar um commit.',
      placeholder: 'git ...\ngit ...\ngit ...',
      expectedKeywords: ['git status', 'git add', 'git commit'],
      modelAnswer: 'git status\ngit add .\ngit commit -m "cria aula interativa"'
    }
  }
};

export function getPractice(slug: string) {
  return practiceBySlug[slug];
}
