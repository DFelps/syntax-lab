<script lang="ts">
  import { lessons, type Level } from '$lib/data/lessons';
  import { filterLessonsByLevel } from '$lib/core/lessonFilters';
  import { copy, language } from '$lib/i18n';

  export let level: Level = 'intermediate';
  export let current = '';

  $: t = copy[$language];
  $: pathLessons = filterLessonsByLevel(lessons, level);
  $: pathBase = level === 'intermediate' ? '/intermediate' : '/advanced';
  $: pathLabel = level === 'intermediate' ? t.pathLabels.intermediatePath : t.pathLabels.advancedPath;
</script>

<div class="card">
  <div class="label">{pathLabel}</div>

  <div class="sidebar-list">
    {#each pathLessons as lesson}
      <a class:active={current === lesson.slug} class="lesson-link" href={`${pathBase}/${lesson.slug}`}>
        <strong>{lesson.title[$language]}</strong>
        <div style="color: var(--muted); font-size: .92rem; margin-top: .25rem;">
          {lesson.interaction[$language]}
        </div>
      </a>
    {/each}
  </div>
</div>
