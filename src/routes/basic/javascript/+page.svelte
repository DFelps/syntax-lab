<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import { getPractice } from '$lib/data/practice';
  import JsConditionLab from '$lib/components/JsConditionLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'javascript');
  const practice = getPractice('javascript');

  $: page = copy[$language].lessonPages.javascript;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="javascript" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">{page.eyebrow}</div>
      <h1 style="margin:0;">{lesson?.title[$language]}</h1>
      <p style="color:var(--muted); margin:0;">{page.description}</p>
      <pre>{`if (age >= 18) {
  console.log('adult');
} else {
  console.log('minor');
}`}</pre>
      <div style="display:flex; flex-wrap:wrap; gap:.75rem;">
        {#each lesson?.docs ?? [] as doc}
          <a class="lesson-link" href={doc.url} target="_blank" rel="noreferrer">{doc.label}</a>
        {/each}
      </div>
    </div>
    <JsConditionLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
