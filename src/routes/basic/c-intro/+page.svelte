<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import PracticeBlock from '$lib/components/PracticeBlock.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CIntroLab from '$lib/components/CIntroLab.svelte';
  import { lessons } from '$lib/data/lessons';
  import { getPractice } from '$lib/data/practice';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'c-intro');
  const practice = getPractice('c-intro');

  $: page = copy[$language].lessonPages.cIntro;
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-intro" />

  <div class="grid">
    <LessonHeader
      eyebrow={page.eyebrow}
      title={lesson?.title[$language] ?? ''}
      description={page.description}
      code={`#include <stdio.h>\n\nint main() {\n    printf("Hello, Syntax Lab!\\n");\n    return 0;\n}`}
      docs={lesson?.docs ?? []}
    />

    <CIntroLab />

    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
