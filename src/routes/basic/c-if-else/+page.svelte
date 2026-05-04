<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CIfElseLab from '$lib/components/CIfElseLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';

  const lesson = lessons.find((item) => item.slug === 'c-if-else');
  const practice = getPractice('c-if-else');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-if-else" />
  <div class="grid">
    <LessonHeader eyebrow="C • decision" title="If, Else and Comparisons" description="if decides which path the program follows. This is one of the most important foundations for any language later." code={`if (age >= 18) {\n    printf("adult");\n} else {\n    printf("minor");\n}`} docs={lesson?.docs ?? []} />
    <CIfElseLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
