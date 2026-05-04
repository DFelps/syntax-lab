<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import { getPractice } from '$lib/data/practice';
  import JsLogicLab from '$lib/components/JsLogicLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'js-logic');
  const practice = getPractice('js-logic');

  $: page = copy[$language].lessonPages.jsLogic;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="js-logic" />
  <div class="grid">
    <div class="card grid">
      <div class="badge">{page.eyebrow}</div>
      <h1 style="margin:0;">{lesson?.title[$language]}</h1>
      <p style="color:var(--muted); margin:0;">{page.description}</p>
      <pre>{`const canContinue = age >= 14 && hasAccount && passedQuiz;

if (canContinue) {
  console.log('Next challenge released');
}`}</pre>
      <div style="display:flex; flex-wrap:wrap; gap:.75rem;">
        {#each lesson?.docs ?? [] as doc}
          <a class="lesson-link" href={doc.url} target="_blank" rel="noreferrer">{doc.label}</a>
        {/each}
      </div>
    </div>
    <JsLogicLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
