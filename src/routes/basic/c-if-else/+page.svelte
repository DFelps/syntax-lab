<script lang="ts">
  import LessonSidebar from '$lib/components/LessonSidebar.svelte';
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import CIfElseLab from '$lib/components/CIfElseLab.svelte';
  import { lessons } from '$lib/data/lessons';

  const lesson = lessons.find((item) => item.slug === 'c-if-else');
</script>

<section class="section container lesson-layout">
  <LessonSidebar current="c-if-else" />
  <div class="grid">
    <LessonHeader eyebrow="C • decisão" title="If, Else e Comparações" description="O if decide qual caminho o programa vai seguir. Essa é uma das bases mais importantes para qualquer linguagem depois." code={`if (idade >= 18) {\n    printf("maior de idade");\n} else {\n    printf("menor de idade");\n}`} docs={lesson?.docs ?? []} />
    <CIfElseLab />
  </div>
</section>
