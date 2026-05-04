<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import { getPractice } from '$lib/data/practice';
  import FlexFrogMini from '$lib/components/FlexFrogMini.svelte';

  const practice = getPractice('css');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="css" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">CSS • basics</div>
      <h1 style="margin:0;">CSS and Layout</h1>
      <p style="color:var(--muted); margin:0;">This version includes a mini challenge inspired by flexbox games because it makes layout easier to remember.</p>
      <pre>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`}</pre>
      <div style="display:flex; flex-wrap:wrap; gap:.75rem;">
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">MDN CSS</a>
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides" target="_blank" rel="noreferrer">CSS Guides</a>
      </div>
    </div>
    <FlexFrogMini />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
