<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CFunctionsLab from '$lib/components/CFunctionsLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';

  const lesson = lessons.find((item) => item.slug === 'c-functions');
  const practice = getPractice('c-functions');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-functions" />
  <div class="grid">
    <LessonHeader eyebrow="C • functions" title="C Functions" description="Functions avoid repetition and keep programs organized. They can receive parameters and return a result." code={`int somar(int a, int b) {\n    return a + b;\n}\n\nint resultado = somar(2, 3);`} docs={lesson?.docs ?? []} />
    <CFunctionsLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
