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
      <div class="badge">PHP • básico</div>
      <h1 style="margin:0;">PHP Primeiros Passos</h1>
      <p style="color:var(--muted); margin:0;">Aqui a pessoa entende saída de texto, variável e condição, vendo um simulador da resposta.</p>
      <pre>{`<?php
$nome = 'Dev';
if ($nome) {
  echo 'Olá, Dev';
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
