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
    <LessonHeader eyebrow="C • repetição" title="Loops com For e While" description="Loop serve para repetir uma ação sem copiar a mesma linha várias vezes. Primeiro entenda contador, condição de parada e atualização." code={`for (int i = 1; i <= 10; i++) {\n    printf("%d", i);\n}`} docs={lesson?.docs ?? []} />
    <CLoopsLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
