<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import { lessons } from '$lib/data/lessons';
  import { filterLessonsByLevel } from '$lib/core/lessonFilters';

  const basicLessons = filterLessonsByLevel(lessons, 'basic');
</script>

<section class="section container lesson-layout">
  <LessonSidebar />
  <div class="card grid">
    <div class="badge">Basic path</div>
    <h1>Part 1</h1>
    
    <div class="grid">
      {#each basicLessons as lesson, index}
        <a href={`/basic/${lesson.slug}`} class="lesson-link">
          <div class="label">Lesson {index + 1} • {lesson.area} • {lesson.estimatedMinutes}min</div>
          <strong>{lesson.title}</strong>
          <p class="mt-1 text-slate-600">{lesson.summary}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
