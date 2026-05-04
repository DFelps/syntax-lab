import type { Lesson } from '$lib/data/lessons';

const mockText = (text: string) => ({
  en: text,
  pt: text
});

const lessons: Lesson[] = [
  {
    slug: 'html',
    title: mockText('HTML'),
    level: 'basic',
    area: 'HTML',
    summary: mockText(''),
    interaction: mockText(''),
    estimatedMinutes: 20,
    docs: []
  },
  {
    slug: 'dom',
    title: mockText('DOM'),
    level: 'intermediate',
    area: 'JavaScript',
    summary: mockText(''),
    interaction: mockText(''),
    estimatedMinutes: 40,
    docs: []
  },
  {
    slug: 'css',
    title: mockText('CSS'),
    level: 'basic',
    area: 'CSS',
    summary: mockText(''),
    interaction: mockText(''),
    estimatedMinutes: 30,
    docs: []
  }
];