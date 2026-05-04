<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CVariablesLab from '$lib/components/CVariablesLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'c-variables');
  const practice = getPractice('c-variables');

  $: page = copy[$language].lessonPages.cVariables;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-variables" />
  <div class="grid">
    <LessonHeader eyebrow={page.eyebrow} title={lesson?.title[$language] ?? ''} description={page.description} code={`int age = 18;\nfloat price = 49.90;\nchar level = 'B';\n\nprintf("Age: %d", age);`} docs={lesson?.docs ?? []} />
    <CVariablesLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
