<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CArraysLab from '$lib/components/CArraysLab.svelte';
  import { lessons } from '$lib/data/lessons';

  const lesson = lessons.find((item) => item.slug === 'c-arrays');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-arrays" />
  <div class="grid">
    <LessonHeader eyebrow="C • arrays" title="Arrays e Índices" description="Array guarda vários valores do mesmo tipo. A parte que mais confunde no começo é lembrar que o primeiro índice é zero." code={`int notas[5] = {8, 7, 10, 6, 9};\nprintf("%d", notas[0]);`} docs={lesson?.docs ?? []} />
    <CArraysLab />
  </div>
</section>
