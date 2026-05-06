<script lang="ts">
  import PathSidebar from '$lib/components/PathSidebar.svelte';
  import { lessons } from '$lib/data/lessons';
  import { filterLessonsByLevel } from '$lib/core/lessonFilters';
  import { copy, language } from '$lib/i18n';

  const pathLessons = filterLessonsByLevel(lessons, 'advanced');

  $: t = copy[$language];
  $: page = t.advancedPage;
</script>

<section class="section container lesson-layout">
  <PathSidebar level="advanced" />

  <div class="grid">
    <div class="card grid">
      <div class="badge">{page.eyebrow}</div>
      <h1 style="margin:0;">{page.title}</h1>
      <p class="muted">{page.description}</p>
    </div>

    <div class="card grid">
      <div class="label">{t.pathLabels.modulePlan}</div>

      <div class="grid">
        {#each pathLessons as lesson, index}
          <a href={`/advanced/${lesson.slug}`} class="lesson-link">
            <div class="label">
              {t.pathLabels.moduleLabel.replace('{index}', (index + 1).toString())}
              • {lesson.area}
              • {t.pathLabels.estimatedTime.replace('{minutes}', lesson.estimatedMinutes.toString())}
            </div>

            <strong>{lesson.title[$language]}</strong>
            <p class="mt-1 text-slate-600">{lesson.summary[$language]}</p>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
