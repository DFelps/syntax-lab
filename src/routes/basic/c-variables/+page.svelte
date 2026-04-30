<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CVariablesLab from '$lib/components/CVariablesLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';

  const lesson = lessons.find((item) => item.slug === 'c-variables');
  const practice = getPractice('c-variables');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-variables" />
  <div class="grid">
    <LessonHeader eyebrow="C • tipos" title="Variáveis e Tipos em C" description="Variável é uma caixa com nome, tipo e valor. Em C, declarar o tipo faz parte do treino mental: número inteiro, decimal, caractere ou texto." code={`int idade = 18;\nfloat preco = 49.90;\nchar nivel = 'B';\n\nprintf("Idade: %d", idade);`} docs={lesson?.docs ?? []} />
    <CVariablesLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
