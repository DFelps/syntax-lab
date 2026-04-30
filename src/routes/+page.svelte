<script lang="ts">
  import { lessons, roadmap, basicGoal } from '$lib/data/lessons';

  const basicLessons = lessons.filter((lesson) => lesson.level === 'basic');
  const cLessons = basicLessons.filter((lesson) => lesson.area === 'C');
  const totalMinutes = basicLessons.reduce((total, lesson) => total + lesson.estimatedMinutes, 0);
</script>

<svelte:head>
  <title>Syntax Lab v3</title>
  <meta name="description" content="Plataforma interativa de aprendizado de programação com SvelteKit" />
</svelte:head>

<section class="hero container">
  <div class="badge">v3 • prática, quiz e Tailwind</div>
  <h1>Aprenda programação mexendo no código.</h1>
  <p class="mt-5 max-w-3xl text-lg text-slate-600">
    Syntax Lab é uma plataforma de estudo com trilhas, playgrounds e desafios curtos. A ideia é aprender lendo pouco, testando bastante e escrevendo respostas com a própria cabeça.
  </p>
  <div class="mt-6 flex flex-wrap gap-3">
    <a href="/basic"><button>Começar pelo básico</button></a>
    <a href="/basic/c-intro"><button class="secondary">Abrir lógica com C</button></a>
  </div>
</section>

<section class="section container">
  <div class="stat-grid">
    <div class="card"><div class="label">Aulas básicas</div><strong class="text-3xl">{basicLessons.length}</strong></div>
    <div class="card"><div class="label">Módulos de C</div><strong class="text-3xl">{cLessons.length}</strong></div>
    <div class="card"><div class="label">Tempo estimado</div><strong class="text-3xl">{totalMinutes}min</strong></div>
    <div class="card"><div class="label">Foco</div><strong>Base real</strong></div>
  </div>
</section>

<section class="section container">
  <div class="split">
    <div class="card glow grid">
      <div class="badge">Ideia do projeto</div>
      <h2>{basicGoal}</h2>
      <p class="muted">A trilha começa com C para fortalecer entrada, processamento, saída, decisão, repetição, função e array. Depois conecta isso com HTML, CSS, JavaScript, PHP e Git.</p>
    </div>
    <div class="card grid">
      <div class="badge">Como estudar</div>
      <p class="muted">Cada aula tem uma parte interativa e uma parte escrita. Não é só clicar no botão certo: a pessoa precisa explicar ou montar a lógica.</p>
      <div class="progress"><span class="w-[70%]"></span></div>
      <strong>Curso, playground e roadmap no mesmo projeto.</strong>
    </div>
  </div>
</section>

<section class="section container">
  <div class="grid md:grid-cols-3">
    {#each Object.entries(roadmap) as [level, items]}
      <div class="card">
        <div class="badge">{level}</div>
        <h2 class="mt-4">{level === 'basic' ? 'Fundação' : level === 'intermediate' ? 'Construção' : 'Mercado'}</h2>
        <ul class="mt-4 list-disc pl-5 text-slate-600">
          {#each items as item}
            <li class="mb-2">{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
