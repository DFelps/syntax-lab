<script lang="ts">
  import { onMount } from 'svelte';
  import { lessons } from '$lib/data/lessons';
  import { getProgressPercent, readProgress, toggleProgress, writeProgress } from '$lib/core/progressStorage';

  export let current = '';

  let completed: string[] = [];

  const key = 'syntax-lab-progress-v3';

  onMount(() => {
    completed = readProgress(localStorage, key);
  });

  $: isCompleted = completed.includes(current);
  $: percent = getProgressPercent(completed, lessons.length);

  function toggleLesson() {
    completed = writeProgress(localStorage, toggleProgress(current, completed), key);
  }
</script>

<div class="card grid compact-card">
  <div class="label">Local progress</div>
  <div class="progress"><span style={`width:${percent}%`}></span></div>
  <strong>{completed.length} of {lessons.length} lessons completed</strong>
  {#if current}
    <button class:secondary={isCompleted} on:click={toggleLesson}>
      {isCompleted ? 'Mark as incomplete' : 'Complete this lesson'}
    </button>
  {/if}
</div>
