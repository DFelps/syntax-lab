<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import { lessons } from '$lib/data/lessons';

  const basicLessons = lessons.filter((lesson) => lesson.level === 'basic');
</script>

<section class="section container lesson-layout">
  <LessonSidebar />
  <div class="card grid">
    <div class="badge">Nível básico</div>
    <h1>Parte 1 do projeto</h1>
    <p class="muted">A v2 começa com C para formar base de lógica e depois conecta o aluno com web, JavaScript, PHP e Git.</p>
    <div class="grid">
      {#each basicLessons as lesson, index}
        <a href={`/basic/${lesson.slug}`} class="lesson-link">
          <div class="label">Aula {index + 1} • {lesson.area} • {lesson.estimatedMinutes}min</div>
          <strong>{lesson.title}</strong>
          <p class="muted" style="margin:.35rem 0 0;">{lesson.summary}</p>
        </a>
      {/each}
    </div>
  </div>
</section>
