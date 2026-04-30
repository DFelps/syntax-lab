<script lang="ts">
  let temperatura = 24;
  let chovendo = false;
  $: recomendacao = temperatura >= 26 && !chovendo
    ? 'Hoje é um bom dia para praticar no parque.'
    : chovendo
      ? 'Leve guarda-chuva e pratique em ambiente coberto.'
      : 'Use um casaco leve e continue estudando.';
</script>

<div class="card grid">
  <div>
    <div class="badge">JavaScript em ação</div>
    <h3>Painel de decisões</h3>
  </div>
  <div class="split">
    <label>
      <div class="label">Temperatura</div>
      <input type="range" min="0" max="40" bind:value={temperatura} />
      <div>{temperatura}°C</div>
    </label>
    <label class="card" style="display:flex; align-items:center; gap:.75rem;">
      <input style="width:auto;" type="checkbox" bind:checked={chovendo} />
      <span>Está chovendo?</span>
    </label>
  </div>
  <pre>{`const temperatura = ${temperatura};
const chovendo = ${chovendo};

if (temperatura >= 26 && !chovendo) {
  console.log('Hoje é um bom dia para praticar no parque.');
} else if (chovendo) {
  console.log('Leve guarda-chuva e pratique em ambiente coberto.');
} else {
  console.log('Use um casaco leve e continue estudando.');
}`}</pre>
  <div class="card"><strong>Saída:</strong> {recomendacao}</div>
</div>
