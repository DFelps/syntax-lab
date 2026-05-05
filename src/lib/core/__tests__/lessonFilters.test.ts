import { describe, expect, it } from 'vitest';
import type { Lesson } from '$lib/data/lessons';
import { filterLessonsByArea, filterLessonsByLevel, getTotalMinutes } from '../lessonFilters';

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

describe('lessonFilters', () => {
  it('filters lessons by level', () => {
    expect(filterLessonsByLevel(lessons, 'basic')).toHaveLength(2);
    expect(filterLessonsByLevel(lessons, 'intermediate')).toHaveLength(1);
  });

  it('filters lessons by area', () => {
    expect(filterLessonsByArea(lessons, 'JavaScript')).toEqual([lessons[1]]);
  });

  it('sums estimated minutes', () => {
    expect(getTotalMinutes(lessons)).toBe(90);
  });
});
