<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CLoopsLab from '$lib/components/CLoopsLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'c-loops');
  const practice = getPractice('c-loops');

  $: page = copy[$language].lessonPages.cLoops;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-loops" />
  <div class="grid">
    <LessonHeader eyebrow={page.eyebrow} title={lesson?.title[$language] ?? ''} description={page.description} code={`for (int i = 1; i <= 10; i++) {\n    printf("%d", i);\n}`} docs={lesson?.docs ?? []} />
    <CLoopsLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
