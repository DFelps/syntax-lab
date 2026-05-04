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
    <LessonHeader eyebrow="Tools • basics" title="Git and Terminal" description="After logic and web basics, the student needs enough terminal and Git to work as a real developer." code={`git status\ngit add .\ngit commit -m "create first path"`} docs={lesson?.docs ?? []} />
    <GitTerminalLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
