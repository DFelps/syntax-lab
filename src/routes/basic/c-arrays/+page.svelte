<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CArraysLab from '$lib/components/CArraysLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'c-arrays');
  const practice = getPractice('c-arrays');

  $: page = copy[$language].lessonPages.cArrays;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-arrays" />
  <div class="grid">
    <LessonHeader eyebrow={page.eyebrow} title={lesson?.title[$language] ?? ''} description={page.description} code={`int scores[5] = {8, 7, 10, 6, 9};\nprintf("%d", scores[0]);`} docs={lesson?.docs ?? []} />
    <CArraysLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
