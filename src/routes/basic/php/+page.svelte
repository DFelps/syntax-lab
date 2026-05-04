<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import { getPractice } from '$lib/data/practice';
  import PhpEchoLab from '$lib/components/PhpEchoLab.svelte';

  const practice = getPractice('php');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="php" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">PHP • basics</div>
      <h1 style="margin:0;">PHP First Steps</h1>
      <p style="color:var(--muted); margin:0;">Here the student understands text output, variables and conditions through a response simulator.</p>
      <pre>{`<?php
$nome = 'Dev';
if ($nome) {
  echo 'Hello, Dev';
}`}</pre>
      <div style="display:flex; flex-wrap:wrap; gap:.75rem;">
        <a class="lesson-link" href="https://www.php.net/manual/en/index.php" target="_blank" rel="noreferrer">PHP Manual</a>
        <a class="lesson-link" href="https://www.php.net/manual/en/langref.php" target="_blank" rel="noreferrer">Language Reference</a>
      </div>
    </div>
    <PhpEchoLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
