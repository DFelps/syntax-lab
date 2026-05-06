<script lang="ts">
  import LessonHeader from '$lib/components/LessonHeader.svelte';
  import PathSidebar from '$lib/components/PathSidebar.svelte';
  import { lessons } from '$lib/data/lessons';
  import { copy, language } from '$lib/i18n';

  const lesson = lessons.find((item) => item.slug === 'apis-json');

  $: t = copy[$language];
  $: content = t.pathLessons.apisJson;
</script>

<section class="section container lesson-layout">
  <PathSidebar level="intermediate" current="apis-json" />

  <div class="grid">
    <LessonHeader
      eyebrow={content.eyebrow}
      title={lesson?.title[$language] ?? ''}
      description={lesson?.summary[$language] ?? ''}
      code={content.code}
      docs={lesson?.docs ?? []}
    />

    <div class="split">
      <div class="card grid">
        <div class="badge">{t.pathLabels.overview}</div>
        <p class="muted">{content.goal}</p>
        <strong>{lesson?.interaction[$language] ?? ''}</strong>
      </div>

      <div class="card grid">
        <div class="badge">{t.pathLabels.nextStep}</div>
        <p class="muted">{content.next}</p>
      </div>
    </div>

    <div class="card grid">
      <div class="badge">{t.pathLabels.whatYouPractice}</div>

      <ul class="mt-4 list-disc pl-5 text-slate-600">
        {#each content.concepts as concept}
          <li class="mb-2">{concept}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>
