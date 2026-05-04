<script lang="ts">
  import { lessons } from '$lib/data/lessons';
  import ProgressTracker from './ProgressTracker.svelte';
  import { copy, language } from '$lib/i18n';

  export let current = '';

  const basicLessons = lessons.filter((lesson) => lesson.level === 'basic');
  $: t = copy[$language];
</script>

<div class="grid">
  <ProgressTracker {current} />
  <div class="card">
    <div class="label">{t.basicPath}</div>
    <div class="sidebar-list">
      {#each basicLessons as lesson}
        <a class:active={current === lesson.slug} class="lesson-link" href={`/basic/${lesson.slug}`}>
          <strong>{lesson.title[$language]}</strong>
          <div style="color: var(--muted); font-size: .92rem; margin-top: .25rem;">{lesson.interaction[$language]}</div>
        </a>
      {/each}
    </div>
  </div>
</div>
