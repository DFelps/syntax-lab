<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import { getPractice } from '$lib/data/practice';
  import JsLogicLab from '$lib/components/JsLogicLab.svelte';

  const practice = getPractice('js-logic');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="js-logic" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">JavaScript • lógica</div>
      <h1 style="margin:0;">Lógica com JavaScript</h1>
      <p style="color:var(--muted); margin:0;">Módulo separado para trabalhar comparação, operadores lógicos e leitura de expressões.</p>
      <pre>{`const podeAvancar = idade >= 14 && temCadastro && acertouQuiz;

if (podeAvancar) {
  console.log('Próximo desafio liberado');
}`}</pre>
      <div style="display:flex; flex-wrap:wrap; gap:.75rem;">
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noreferrer">MDN JS Guide</a>
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" target="_blank" rel="noreferrer">JS Reference</a>
      </div>
    </div>
    <JsLogicLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
