import type { Lesson } from '$lib/data/lessons';

export function filterLessonsByLevel(lessons: Lesson[], level: Lesson['level']) {
  return lessons.filter((lesson) => lesson.level === level);
}

export function filterLessonsByArea(lessons: Lesson[], area: Lesson['area']) {
  return lessons.filter((lesson) => lesson.area === area);
}

export function getTotalMinutes(lessons: Pick<Lesson, 'estimatedMinutes'>[]) {
  return lessons.reduce((total, lesson) => total + lesson.estimatedMinutes, 0);
}
