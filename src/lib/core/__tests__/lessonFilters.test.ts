import { describe, expect, it } from 'vitest';
import { filterLessonsByArea, filterLessonsByLevel, getTotalMinutes } from '../lessonFilters';
import type { Lesson } from '$lib/data/lessons';

const lessons: Lesson[] = [
  { slug: 'html', title: 'HTML', level: 'basic', area: 'HTML', summary: '', interaction: '', estimatedMinutes: 20, docs: [] },
  { slug: 'dom', title: 'DOM', level: 'intermediate', area: 'JavaScript', summary: '', interaction: '', estimatedMinutes: 40, docs: [] },
  { slug: 'css', title: 'CSS', level: 'basic', area: 'CSS', summary: '', interaction: '', estimatedMinutes: 30, docs: [] }
];

describe('lesson filters', () => {
  it('filters lessons by level', () => {
    expect(filterLessonsByLevel(lessons, 'basic')).toHaveLength(2);
  });

  it('filters lessons by area', () => {
    expect(filterLessonsByArea(lessons, 'CSS')[0].slug).toBe('css');
  });

  it('sums estimated lesson time', () => {
    expect(getTotalMinutes(lessons)).toBe(90);
  });
});
