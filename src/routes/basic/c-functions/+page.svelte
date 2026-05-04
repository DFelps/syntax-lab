<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CFunctionsLab from '$lib/components/CFunctionsLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'c-functions');
  const practice = getPractice('c-functions');

  $: page = copy[$language].lessonPages.cFunctions;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-functions" />
  <div class="grid">
    <LessonHeader eyebrow={page.eyebrow} title={lesson?.title[$language] ?? ''} description={page.description} code={`int sum(int a, int b) {\n    return a + b;\n}\n\nint result = sum(2, 3);`} docs={lesson?.docs ?? []} />
    <CFunctionsLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
