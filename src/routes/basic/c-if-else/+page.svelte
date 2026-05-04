<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CIfElseLab from '$lib/components/CIfElseLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'c-if-else');
  const practice = getPractice('c-if-else');

  $: page = copy[$language].lessonPages.cIfElse;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-if-else" />
  <div class="grid">
    <LessonHeader eyebrow={page.eyebrow} title={lesson?.title[$language] ?? ''} description={page.description} code={`if (age >= 18) {\n    printf("adult");\n} else {\n    printf("minor");\n}`} docs={lesson?.docs ?? []} />
    <CIfElseLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
