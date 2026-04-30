<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CFunctionsLab from '$lib/components/CFunctionsLab.svelte';
  import { lessons } from '$lib/data/lessons';

  const lesson = lessons.find((item) => item.slug === 'c-functions');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-functions" />
  <div class="grid">
    <LessonHeader eyebrow="C • funções" title="Funções em C" description="Funções evitam repetição e deixam o programa organizado. Elas podem receber parâmetros e devolver um resultado." code={`int somar(int a, int b) {\n    return a + b;\n}\n\nint resultado = somar(2, 3);`} docs={lesson?.docs ?? []} />
    <CFunctionsLab />
  </div>
</section>
