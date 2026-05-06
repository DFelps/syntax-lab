<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'c-functions-decision');
  const practice = getPractice('c-functions-decision');

  $: page = {
    eyebrow: $language === 'pt' ? 'C • funções com decisão' : 'C • functions with decisions',
    description:
      $language === 'pt'
        ? 'Funções podem receber parâmetros, tomar decisões internas e retornar resultados diferentes.'
        : 'Functions can receive parameters, make internal decisions and return different results.'
  };
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-functions-decision" />

  <div class="grid">
    <LessonHeader
      eyebrow={page.eyebrow}
      title={lesson?.title[$language] ?? ''}
      description={page.description}
      code={`int max(int a, int b) {
    if (a > b) {
        return a;
    }

    return b;
}`}
      docs={lesson?.docs ?? []}
    />

    <div class="card grid">
      <div class="badge">
        {$language === 'pt' ? 'Funções + decisão' : 'Functions + decisions'}
      </div>

      <h2>
        {$language === 'pt'
          ? 'Entenda como a função escolhe um caminho'
          : 'Understand how the function chooses a path'}
      </h2>

      <p style="color: var(--muted);">
        {$language === 'pt'
          ? 'Agora a função não apenas calcula: ela também decide qual valor retornar.'
          : 'Now the function does more than calculate: it also decides which value to return.'}
      </p>
    </div>

    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
