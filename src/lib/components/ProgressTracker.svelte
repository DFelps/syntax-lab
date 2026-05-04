<script lang="ts">
  import { onMount } from 'svelte';
  import { lessons } from '$lib/data/lessons';
  import { copy, language } from '$lib/i18n';
  import { getProgressPercent, readProgress, toggleProgress, writeProgress } from '$lib/core/progressStorage';

  export let current = '';

  let completed: string[] = [];

  const key = 'syntax-lab-progress-v3';

  onMount(() => {
    completed = readProgress(localStorage, key);
  });

  $: t = copy[$language];
  $: isCompleted = completed.includes(current);
  $: percent = getProgressPercent(completed, lessons.length);
  $: progressText = t.progressText
    .replace('{completed}', completed.length.toString())
    .replace('{total}', lessons.length.toString());

  function toggleLesson() {
    completed = writeProgress(localStorage, toggleProgress(current, completed), key);
  }
</script>

<div class="card grid compact-card">
  <div class="label">{t.progressLabel}</div>
  <div class="progress"><span style={`width:${percent}%`}></span></div>
  <strong>{progressText}</strong>

  {#if current}
    <button class:secondary={isCompleted} on:click={toggleLesson}>
      {isCompleted ? t.markIncomplete : t.markComplete}
    </button>
  {/if}
</div>