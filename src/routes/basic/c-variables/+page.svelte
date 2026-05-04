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
    <LessonHeader eyebrow="C • types" title="C Variables and Types" description="A variable is a box with a name, type and value. In C, declaring the type is part of the mental model: integer, decimal, character or text." code={`int age = 18;\nfloat price = 49.90;\nchar level = 'B';\n\nprintf("Age: %d", age);`} docs={lesson?.docs ?? []} />
    <CVariablesLab />
    {#if practice}
      <PracticeBlock {practice} />
    {/if}
  </div>
</section>
