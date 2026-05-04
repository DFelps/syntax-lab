<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CLoopsLab from '$lib/components/CLoopsLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';

  const lesson = lessons.find((item) => item.slug === 'c-loops');
  const practice = getPractice('c-loops');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-loops" />
  <div class="grid">
    <LessonHeader eyebrow="C • repetition" title="For and While Loops" description="Loops repeat an action without copying the same line many times. First understand counters, stop conditions and updates." code={`for (int i = 1; i <= 10; i++) {\n    printf("%d", i);\n}`} docs={lesson?.docs ?? []} />
    <CLoopsLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
