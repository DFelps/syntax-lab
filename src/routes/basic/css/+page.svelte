<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import FlexFrogMini from '$lib/components/FlexFrogMini.svelte';
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="css" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">CSS • básico</div>
      <h1 style="margin:0;">CSS e Layout</h1>
      <p style="color:var(--muted); margin:0;">A v1 já nasce com um mini desafio inspirado em jogos de flexbox porque isso fixa muito bem.</p>
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
  </div>
</section>
