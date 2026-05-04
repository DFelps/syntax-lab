<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import GitTerminalLab from '$lib/components/GitTerminalLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'git-terminal');
  const practice = getPractice('git-terminal');

  $: page = copy[$language].lessonPages.gitTerminal;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="git-terminal" />
  <div class="grid">
    <LessonHeader eyebrow={page.eyebrow} title={lesson?.title[$language] ?? ''} description={page.description} code={`git status\ngit add .\ngit commit -m "create first path"`} docs={lesson?.docs ?? []} />
    <GitTerminalLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
