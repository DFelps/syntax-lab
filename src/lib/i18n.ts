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
    lessonLabel: 'Lesson {index}'
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
    lessonLabel: 'Aula {index}'
  }
} as const;

type CopySchema = typeof copy.en;
export type CopyKey = keyof CopySchema;