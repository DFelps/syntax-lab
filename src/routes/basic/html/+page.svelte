<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import HtmlBuilder from '$lib/components/HtmlBuilder.svelte';
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="html" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">HTML • básico</div>
      <h1 style="margin:0;">HTML Essencial</h1>
      <p style="color:var(--muted); margin:0;">A ideia aqui é aprender estrutura e semântica vendo o resultado imediatamente.</p>
      <pre>{`<main>
  <article>
    <h1>Título</h1>
    <p>Conteúdo</p>
  </article>
</main>`}</pre>
      <div style="display:flex; flex-wrap:wrap; gap:.75rem;">
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">MDN HTML</a>
        <a class="lesson-link" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides" target="_blank" rel="noreferrer">HTML Guides</a>
      </div>
    </div>
    <HtmlBuilder />
  </div>
</section>
