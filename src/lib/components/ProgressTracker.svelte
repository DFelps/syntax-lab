<script lang="ts">
  import { onMount } from 'svelte';
  import { lessons } from '$lib/data/lessons';

  export let current = '';

  let completed: string[] = [];

  const key = 'syntax-lab-progress-v2';

  onMount(() => {
    const stored = localStorage.getItem(key);
    completed = stored ? JSON.parse(stored) : [];
  });

  $: isCompleted = completed.includes(current);
  $: percent = Math.round((completed.length / lessons.length) * 100);

  function toggleLesson() {
    completed = isCompleted ? completed.filter((slug) => slug !== current) : [...completed, current];
    localStorage.setItem(key, JSON.stringify(completed));
  }
</script>

<div class="card grid compact-card">
  <div class="label">Progresso local</div>
  <div class="progress"><span style={`width:${percent}%`}></span></div>
  <strong>{completed.length} de {lessons.length} aulas concluídas</strong>
  {#if current}
    <button class:secondary={isCompleted} on:click={toggleLesson}>
      {isCompleted ? 'Marcar como não concluída' : 'Concluir esta aula'}
    </button>
  {/if}
</div>
