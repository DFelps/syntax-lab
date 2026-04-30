<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import { getPractice } from '$lib/data/practice';
  import JsConditionLab from '$lib/components/JsConditionLab.svelte';

  const practice = getPractice('javascript');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="javascript" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">JavaScript • básico</div>
      <h1 style="margin:0;">JavaScript Básico</h1>
      <p style="color:var(--muted); margin:0;">Condição, operadores e fluxo de decisão do lado do navegador.</p>
      <pre>{`if (idade >= 18) {
  console.log('maior de idade');
} else {
  console.log('menor de idade');
}`}</pre>
      <div style="display:flex; flex-wrap:wrap; gap:.75rem;">
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noreferrer">MDN JS Guide</a>
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference" target="_blank" rel="noreferrer">JS Reference</a>
      </div>
    </div>
    <JsConditionLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
