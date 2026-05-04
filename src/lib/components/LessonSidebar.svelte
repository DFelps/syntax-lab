<script lang="ts">
  import { lessons } from '$lib/data/lessons';
  import ProgressTracker from './ProgressTracker.svelte';

  export let current = '';

  const basicLessons = lessons.filter((lesson) => lesson.level === 'basic');
</script>

<div class="grid">
  <ProgressTracker {current} />
  <div class="card">
    <div class="label">Basic path</div>
    <div class="sidebar-list">
      {#each basicLessons as lesson}
        <a class:active={current === lesson.slug} class="lesson-link" href={`/basic/${lesson.slug}`}>
          <strong>{lesson.title}</strong>
          <div style="color: var(--muted); font-size: .92rem; margin-top: .25rem;">{lesson.interaction}</div>
        </a>
      {/each}
    </div>
  </div>
</div>
