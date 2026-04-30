<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CIntroLab from '$lib/components/CIntroLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';

  const lesson = lessons.find((item) => item.slug === 'c-intro');
  const practice = getPractice('c-intro');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-intro" />
  <div class="grid">
    <LessonHeader eyebrow="C • básico" title="Lógica com C" description="Comece pensando como programador: o programa recebe entrada, processa valores e devolve uma saída. C deixa esse fluxo bem explícito." code={`#include <stdio.h>\n\nint main() {\n    printf("Olá, Syntax Lab!");\n    return 0;\n}`} docs={lesson?.docs ?? []} />
    <CIntroLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
