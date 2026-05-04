<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import { lessons } from '$lib/data/lessons';
  import { filterLessonsByLevel } from '$lib/core/lessonFilters';
  import { language, copy } from '$lib/i18n';

  const basicLessons = filterLessonsByLevel(lessons, 'basic');

  $: t = copy[$language];
</script>

<section class="section container lesson-layout">
  <LessonSidebar />

  <div class="card grid">
    <div class="badge">{t.basicPath}</div>

    <h1>{t.partLabel.replace('{part}', '1')}</h1>

    <div class="grid">
      {#each basicLessons as lesson, index}
        <a href={`/basic/${lesson.slug}`} class="lesson-link">
          <div class="label">
            {t.lessonLabel.replace('{index}', (index + 1).toString())}
            • {lesson.area}
            • {lesson.estimatedMinutes}min
          </div>

          <strong>{lesson.title[$language]}</strong>
          <p class="mt-1 text-slate-600">{lesson.summary[$language]}</p>
        </a>
      {/each}
    </div>
  </div>
</section>