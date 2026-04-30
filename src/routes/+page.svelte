<script lang="ts">
  import { lessons, roadmap, basicGoal } from '$lib/data/lessons';

  const basicLessons = lessons.filter((lesson) => lesson.level === 'basic');
  const cLessons = basicLessons.filter((lesson) => lesson.area === 'C');
  const totalMinutes = basicLessons.reduce((total, lesson) => total + lesson.estimatedMinutes, 0);
</script>

<svelte:head>
  <title>Syntax Lab v2</title>
  <meta name="description" content="Plataforma interativa de aprendizado de programação com SvelteKit" />
</svelte:head>

<section class="hero container">
  <div class="badge">v2 • básico com C completo</div>
  <h1 style="font-size: clamp(2.4rem, 6vw, 4.7rem); max-width: 13ch;">Aprenda programação mexendo no código.</h1>
  <p class="muted" style="max-width: 70ch; font-size: 1.1rem; margin-top:1rem;">
    Syntax Lab é uma plataforma de estudo com trilhas, playgrounds e desafios visuais. A v2 fortalece a base com C antes de avançar para web, backend e ferramentas.
  </p>
  <div style="display:flex; gap:.8rem; flex-wrap:wrap; margin-top: 1.2rem;">
    <a href="/basic"><button>Começar pelo básico</button></a>
    <a href="/basic/c-intro"><button class="secondary">Abrir lógica com C</button></a>
  </div>
</section>

<section class="section container">
  <div class="stat-grid">
    <div class="card"><div class="label">Aulas básicas</div><strong style="font-size:2rem;">{basicLessons.length}</strong></div>
    <div class="card"><div class="label">Módulos de C</div><strong style="font-size:2rem;">{cLessons.length}</strong></div>
    <div class="card"><div class="label">Tempo estimado</div><strong style="font-size:2rem;">{totalMinutes}min</strong></div>
    <div class="card"><div class="label">Foco</div><strong>Base real</strong></div>
  </div>
</section>

<section class="section container">
  <div class="split">
    <div class="card glow grid">
      <div class="badge">Filosofia da v2</div>
      <h2>{basicGoal}</h2>
      <p class="muted">A ideia é não ensinar só sintaxe solta. O aluno entende entrada, processamento, saída, decisão, repetição, função, array e só depois conecta isso com HTML, CSS, JavaScript e PHP.</p>
    </div>
    <div class="card grid">
      <div class="badge">Como estudar</div>
      <p class="muted">Cada aula tem teoria curta, código base e um laboratório para alterar valores e ver o resultado imediatamente.</p>
      <div class="progress"><span style="width:70%"></span></div>
      <strong>Produto com cara de curso, playground e roadmap ao mesmo tempo.</strong>
    </div>
  </div>
</section>

<section class="section container">
  <div class="grid" style="grid-template-columns: repeat(3, minmax(0,1fr));">
    {#each Object.entries(roadmap) as [level, items]}
      <div class="card">
        <div class="badge">{level}</div>
        <h2 style="margin-top: .9rem;">{level === 'basic' ? 'Fundação' : level === 'intermediate' ? 'Construção' : 'Mercado'}</h2>
        <ul style="color: var(--muted); padding-left: 1.1rem;">
          {#each items as item}
            <li style="margin-bottom: .55rem;">{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
