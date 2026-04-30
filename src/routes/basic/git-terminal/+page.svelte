<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import GitTerminalLab from '$lib/components/GitTerminalLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';

  const lesson = lessons.find((item) => item.slug === 'git-terminal');
  const practice = getPractice('git-terminal');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="git-terminal" />
  <div class="grid">
    <LessonHeader eyebrow="Ferramentas • básico" title="Git e Terminal" description="Depois da lógica e da web, o aluno precisa aprender o mínimo de terminal e Git para trabalhar como dev de verdade." code={`git status\ngit add .\ngit commit -m "cria primeira trilha"`} docs={lesson?.docs ?? []} />
    <GitTerminalLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
