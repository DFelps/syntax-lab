<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CArraysLab from '$lib/components/CArraysLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';

  const lesson = lessons.find((item) => item.slug === 'c-arrays');
  const practice = getPractice('c-arrays');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-arrays" />
  <div class="grid">
    <LessonHeader eyebrow="C • arrays" title="Arrays and Indexes" description="An array stores multiple values of the same type. The tricky part at first is remembering that the first index is zero." code={`int notas[5] = {8, 7, 10, 6, 9};\nprintf("%d", notas[0]);`} docs={lesson?.docs ?? []} />
    <CArraysLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
