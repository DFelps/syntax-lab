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
    title: 'Active practice: input, processing and output',
    prompt: 'Before moving on, explain the program flow in your own words. The goal is to read C as steps, not memorize code.',
    checkpoints: ['Identify program input', 'Separate processing from output', 'Predict terminal output'],
    quiz: [
      { question: 'In a simple program, which part represents output?', options: ['User input', 'The calculation', 'The text displayed with printf', 'The variable type'], answer: 2, explanation: 'Output is what the program returns to the user.' },
      { question: 'Which line usually signals a successful C program execution?', options: ['#include <stdio.h>', 'int main()', 'printf()', 'return 0;'], answer: 3, explanation: 'return 0 finishes main successfully.' }
    ],
    challenge: { title: 'Write the mental algorithm', instruction: 'Write a 3-line flow for a program that receives an age and checks if the person can join a course.', placeholder: 'Input: ...\nProcessing: ...\nOutput: ...', expectedKeywords: ['input', 'age', 'if', 'output'], modelAnswer: 'Input: receive the age. Processing: compare age with the minimum age using if. Output: show whether the person can join or not.' }
  },
  'c-variables': {
    slug: 'c-variables',
    title: 'Active practice: types and value changes',
    prompt: 'A variable has a name, type and value. Practice predicting final values after operations.',
    checkpoints: ['Differentiate int, float and char', 'Predict operation results', 'Understand reassignment'],
    quiz: [
      { question: 'Which type would you use for 19.90?', options: ['int', 'float', 'char', 'void'], answer: 1, explanation: 'float stores decimal numbers.' },
      { question: 'After int x = 5; x = x + 2;, what is x?', options: ['5', '2', '7', 'x + 2'], answer: 2, explanation: 'The old value is 5. The new value is 5 + 2.' }
    ],
    challenge: { title: 'Choose the correct types', instruction: 'Write 3 C declarations: an age, a price and a level letter.', placeholder: 'int ...\nfloat ...\nchar ...', expectedKeywords: ['int', 'float', 'char'], modelAnswer: "int age = 18;\nfloat price = 49.90;\nchar level = 'B';" }
  },
  'c-if-else': {
    slug: 'c-if-else',
    title: 'Active practice: choosing a path',
    prompt: 'The goal is not only writing if. It is predicting which block runs when the condition changes.',
    checkpoints: ['Read the condition as a question', 'Predict true or false', 'Explain the chosen path'],
    quiz: [
      { question: 'If score = 6 and the rule is score >= 7, which block runs?', options: ['if', 'else', 'both', 'none'], answer: 1, explanation: '6 >= 7 is false, so the flow goes to else.' },
      { question: 'Which operator checks equality in C?', options: ['=', '==', '===', '=>'], answer: 1, explanation: '= assigns a value. == compares values.' }
    ],
    challenge: { title: 'Create a decision', instruction: 'Write an if/else in C to check if a numeric password equals 1234.', placeholder: 'if (...) {\n    printf(...);\n} else {\n    printf(...);\n}', expectedKeywords: ['if', 'else', '==', 'printf'], modelAnswer: 'if (password == 1234) {\n    printf("Access granted");\n} else {\n    printf("Access denied");\n}' }
  },
  'c-loops': {
    slug: 'c-loops',
    title: 'Active practice: controlled repetition',
    prompt: 'A loop has an initial value, a condition and an update. Predict how many times it runs.',
    checkpoints: ['Find the initial value', 'Read the stop condition', 'Check the counter update'],
    quiz: [
      { question: 'How many times does this run: for (int i = 1; i <= 3; i++)?', options: ['1', '2', '3', '4'], answer: 2, explanation: 'i is 1, 2 and 3. When it becomes 4, the condition is false.' },
      { question: 'Which part usually updates the counter?', options: ['int i = 1', 'i <= 10', 'i++', 'printf'], answer: 2, explanation: 'i++ increases the counter after each iteration.' }
    ],
    challenge: { title: 'Write a repetition', instruction: 'Write a for loop that prints numbers from 1 to 5.', placeholder: 'for (...) {\n    printf(...);\n}', expectedKeywords: ['for', 'int', '<=', 'printf', '++'], modelAnswer: 'for (int i = 1; i <= 5; i++) {\n    printf("%d", i);\n}' }
  },
  'c-functions': {
    slug: 'c-functions',
    title: 'Active practice: parameters and return',
    prompt: 'A function is a small machine: it receives values, processes them and returns something.',
    checkpoints: ['Name by action', 'Identify parameters', 'Know what it returns'],
    quiz: [
      { question: 'In int sum(int a, int b), what are the parameters?', options: ['int sum', 'a and b', 'return', 'int main'], answer: 1, explanation: 'a and b are the values received by the function.' },
      { question: 'Which keyword sends a value back?', options: ['printf', 'include', 'return', 'main'], answer: 2, explanation: 'return sends a value back to the caller.' }
    ],
    challenge: { title: 'Create a small function', instruction: 'Write a C function that receives two integers and returns the biggest one.', placeholder: 'int max(int a, int b) {\n    ...\n}', expectedKeywords: ['int', 'max', 'if', 'return'], modelAnswer: 'int max(int a, int b) {\n    if (a > b) return a;\n    return b;\n}' }
  },
  'c-arrays': {
    slug: 'c-arrays',
    title: 'Active practice: zero-based indexes',
    prompt: 'Arrays require attention: position 0 is the first item. Predict indexes before using the simulator.',
    checkpoints: ['Remember index 0', 'Access a specific position', 'Iterate with a loop'],
    quiz: [
      { question: 'In int nums[3] = {10, 20, 30}; what is nums[1]?', options: ['10', '20', '30', '1'], answer: 1, explanation: 'nums[0] is 10, nums[1] is 20 and nums[2] is 30.' },
      { question: 'Which loop fits known-size arrays well?', options: ['for', 'switch', 'if', 'return'], answer: 0, explanation: 'for is great when you know how many positions to visit.' }
    ],
    challenge: { title: 'Sum values', instruction: 'Write the idea of a loop that sums all values from an array named scores with 5 positions.', placeholder: 'int total = 0;\nfor (...) {\n    ...\n}', expectedKeywords: ['total', 'for', 'scores', '[i]'], modelAnswer: 'int total = 0;\nfor (int i = 0; i < 5; i++) {\n    total = total + scores[i];\n}' }
  },
  html: {
    slug: 'html',
    title: 'Active practice: semantics and structure',
    prompt: 'HTML is not only visual tags. Choose tags that explain the role of the content.',
    checkpoints: ['Separate title, paragraph and link', 'Use main/article/section', 'Think about semantics before style'],
    quiz: [
      { question: 'Which tag represents the main title?', options: ['<p>', '<h1>', '<a>', '<span>'], answer: 1, explanation: '<h1> represents the main title of a page or section.' },
      { question: 'Which tag creates a link?', options: ['<a>', '<link>', '<navlink>', '<url>'], answer: 0, explanation: '<a> creates navigable links.' }
    ],
    challenge: { title: 'Build a simple article', instruction: 'Write HTML with article, h1, p and a for a fake news card.', placeholder: '<article>\n  ...\n</article>', expectedKeywords: ['article', 'h1', 'p', 'a'], modelAnswer: '<article>\n  <h1>New lesson published</h1>\n  <p>The platform added an interactive module.</p>\n  <a href="/basic">View lessons</a>\n</article>' }
  },
  css: {
    slug: 'css',
    title: 'Active practice: layout as intention',
    prompt: 'Good CSS starts with intention: align, space, highlight or organize.',
    checkpoints: ['Use display flex', 'Choose direction/alignment', 'Control spacing with gap'],
    quiz: [
      { question: 'Which property enables flexbox?', options: ['display: flex', 'position: flex', 'align: flex', 'box: flex'], answer: 0, explanation: 'display: flex turns the element into a flex container.' },
      { question: 'Which property aligns on the main axis?', options: ['align-items', 'justify-content', 'font-size', 'border'], answer: 1, explanation: 'justify-content controls distribution on the main axis.' }
    ],
    challenge: { title: 'Center an item', instruction: 'Write CSS to center an item in the middle using flexbox.', placeholder: '.box {\n  ...\n}', expectedKeywords: ['display', 'flex', 'justify-content', 'align-items'], modelAnswer: '.box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}' }
  },
  javascript: {
    slug: 'javascript',
    title: 'Active practice: browser decisions',
    prompt: 'JavaScript fundamentals should lock in variables, conditions and functions.',
    checkpoints: ['Declare with const or let', 'Use comparisons', 'Understand console.log as output'],
    quiz: [
      { question: 'Which declaration allows reassignment?', options: ['const', 'let', 'class', 'import'], answer: 1, explanation: 'let allows reassignment. const does not allow reassigning the binding.' },
      { question: 'In JS, which operator means logical AND?', options: ['||', '&&', '!', '??'], answer: 1, explanation: '&& requires both conditions to be true.' }
    ],
    challenge: { title: 'Write an access rule', instruction: 'Write an if statement in JavaScript that allows access if age is 18 or higher.', placeholder: 'if (...) {\n  console.log(...);\n}', expectedKeywords: ['if', 'age', '>=', 'console.log'], modelAnswer: 'if (age >= 18) {\n  console.log("Access granted");\n}' }
  },
  'js-logic': {
    slug: 'js-logic',
    title: 'Active practice: combining conditions',
    prompt: 'A rule can depend on multiple conditions at the same time.',
    checkpoints: ['Use && when everything must be true', 'Use || when one option is enough', 'Use ! to invert a condition'],
    quiz: [
      { question: 'If age >= 18 is true and hasAccount is false, age >= 18 && hasAccount is:', options: ['true', 'false', 'undefined', '18'], answer: 1, explanation: 'With &&, everything must be true.' },
      { question: 'Which operator means OR?', options: ['&&', '||', '!', '==='], answer: 1, explanation: '|| returns true when at least one condition is true.' }
    ],
    challenge: { title: 'Combine two conditions', instruction: 'Write a condition to continue if passedQuiz is true and attempts is less than 3.', placeholder: 'if (...) {\n  ...\n}', expectedKeywords: ['passedQuiz', 'attempts', '<', '&&'], modelAnswer: 'if (passedQuiz && attempts < 3) {\n  console.log("Continue");\n}' }
  },
  php: {
    slug: 'php',
    title: 'Active practice: server output',
    prompt: 'PHP basics are about variables, conditions and output generated by the server.',
    checkpoints: ['Declare variables with $', 'Use echo as output', 'Mix PHP and HTML carefully'],
    quiz: [
      { question: 'How does a PHP variable start?', options: ['#', '$', '@', '%'], answer: 1, explanation: 'PHP variables start with $.' },
      { question: 'Which command prints text in PHP?', options: ['printText', 'console.log', 'echo', 'send'], answer: 2, explanation: 'echo sends text to the HTML response.' }
    ],
    challenge: { title: 'Render a greeting', instruction: 'Write PHP that stores a name and prints Hello, name.', placeholder: '<?php\n$name = ...;\necho ...;\n?>', expectedKeywords: ['$', 'echo', 'Hello'], modelAnswer: '<?php\n$name = "Ana";\necho "Hello, $name";\n?>' }
  },
  'git-terminal': {
    slug: 'git-terminal',
    title: 'Active practice: basic Git flow',
    prompt: 'Git gets easier when you understand file states: modified, staged and committed.',
    checkpoints: ['Check status', 'Add files', 'Create commits'],
    quiz: [
      { question: 'Which command shows repository status?', options: ['git push', 'git status', 'git init', 'git reset'], answer: 1, explanation: 'git status shows modified and staged files.' },
      { question: 'Which command creates a commit?', options: ['git add', 'git commit', 'git branch', 'git log'], answer: 1, explanation: 'git commit records a snapshot of staged files.' }
    ],
    challenge: { title: 'Write the full flow', instruction: 'Write commands to check status, add everything and create a commit.', placeholder: 'git ...\ngit ...\ngit ...', expectedKeywords: ['git status', 'git add', 'git commit'], modelAnswer: 'git status\ngit add .\ngit commit -m "initial lesson"' }
  }
};

export function getPractice(slug: string): Practice | undefined {
  return practiceBySlug[slug];
}
