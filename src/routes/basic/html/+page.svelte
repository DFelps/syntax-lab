<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import { getPractice } from '$lib/data/practice';
  import HtmlBuilder from '$lib/components/HtmlBuilder.svelte';

  const practice = getPractice('html');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="html" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">HTML • basics</div>
      <h1 style="margin:0;">Essential HTML</h1>
      <p style="color:var(--muted); margin:0;">The idea here is to learn structure and semantics while seeing the result immediately.</p>
      <pre>{`<main>
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>
</main>`}</pre>
      <div style="display:flex; flex-wrap:wrap; gap:.75rem;">
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">MDN HTML</a>
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides" target="_blank" rel="noreferrer">HTML Guides</a>
      </div>
    </div>
    <HtmlBuilder />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
