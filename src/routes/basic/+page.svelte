<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import { lessons } from '$lib/data/lessons';

  const basicLessons = lessons.filter((lesson) => lesson.level === 'basic');
</script>

<section class="section container lesson-layout">
  <LessonSidebar />
  <div class="card grid">
    <div class="badge">Nível básico</div>
    <h1>Parte 1</h1>
    
    <div class="grid">
      {#each basicLessons as lesson, index}
        <a href={`/basic/${lesson.slug}`} class="lesson-link">
          <div class="label">Aula {index + 1} • {lesson.area} • {lesson.estimatedMinutes}min</div>
          <strong>{lesson.title}</strong>
          <p class="mt-1 text-slate-600">{lesson.summary}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
