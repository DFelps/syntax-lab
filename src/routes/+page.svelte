<script lang="ts">
  import { lessons, roadmap, basicGoal } from '$lib/data/lessons';
  import { copy, language } from '$lib/i18n';
  import { filterLessonsByArea, filterLessonsByLevel, getTotalMinutes } from '$lib/core/lessonFilters';

  const basicLessons = filterLessonsByLevel(lessons, 'basic');
  const cLessons = filterLessonsByArea(basicLessons, 'C');
  const totalMinutes = getTotalMinutes(basicLessons);

  $: t = copy[$language];
</script>

<svelte:head>
  <title>Syntax Lab</title>
  <meta name="description" content={t.metaDescription} />
</svelte:head>

<section class="hero container">
  <div class="badge">SvelteKit • Tailwind • Tests</div>
  <h1>{t.heroTitle}</h1>

  <p class="mt-5 max-w-3xl text-lg text-slate-600">
    {t.heroDescription}
  </p>

  <div class="mt-6 flex flex-wrap gap-3">
    <a href="/basic"><button>{t.startPath}</button></a>
    <a href="/basic/c-intro"><button class="secondary">{t.openLogic}</button></a>
  </div>
</section>

<section class="section container">
  <div class="stat-grid">
    <div class="card">
      <div class="label">{t.statsBasicLessons}</div>
      <strong class="text-3xl">{basicLessons.length}</strong>
    </div>

    <div class="card">
      <div class="label">{t.statsCModules}</div>
      <strong class="text-3xl">{cLessons.length}</strong>
    </div>

    <div class="card">
      <div class="label">{t.statsTime}</div>
      <strong class="text-3xl">{totalMinutes}min</strong>
    </div>

    <div class="card">
      <div class="label">{t.statsFocus}</div>
      <strong>{t.statsFocusValue}</strong>
    </div>
  </div>
</section>

<section class="section container">
  <div class="split">
    <div class="card glow grid">
      <div class="badge">{t.projectIdea}</div>
      <h2>{basicGoal[$language]}</h2>

      <p class="muted">
        {t.projectDescription}
      </p>
    </div>

    <div class="card grid">
      <div class="badge">{t.howItWorks}</div>

      <p class="muted">
        {t.howItWorksDescription}
      </p>

      <div class="progress"><span class="w-[70%]"></span></div>

      <strong>{t.courseSummary}</strong>
    </div>
  </div>
</section>

<section class="section container">
  <div class="grid md:grid-cols-3">
    {#each Object.entries(roadmap) as [level, items]}
      <div class="card">
        <div class="badge">{level}</div>

        <h2 class="mt-4">
          {level === 'basic'
            ? t.levelBasic
            : level === 'intermediate'
            ? t.levelIntermediate
            : t.levelAdvanced}
        </h2>

        <ul class="mt-4 list-disc pl-5 text-slate-600">
          {#each items as item}
            <li class="mb-2">{item[$language]}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>