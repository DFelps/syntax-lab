<script lang="ts">
  let temperatura = 24;
  let chovendo = false;
  $: recomendacao = temperatura >= 26 && !chovendo
    ? 'Today is a good day to practice in the park.'
    : chovendo
      ? 'Leve guarda-chuva e pratique em ambiente coberto.'
      : 'Use um casaco leve e continue estudando.';
</script>

<div class="card grid">
  <div>
    <div class="badge">JavaScript in action</div>
    <h3>Decision panel</h3>
  </div>
  <div class="split">
    <label>
      <div class="label">Temperatura</div>
      <input type="range" min="0" max="40" bind:value={temperatura} />
      <div>{temperatura}°C</div>
    </label>
    <label class="card" style="display:flex; align-items:center; gap:.75rem;">
      <input style="width:auto;" type="checkbox" bind:checked={chovendo} />
      <span>Is it raining?</span>
    </label>
  </div>
  <pre>{`const temperatura = ${temperatura};
const chovendo = ${chovendo};

if (temperatura >= 26 && !chovendo) {
  console.log('Today is a good day to practice in the park.');
} else if (chovendo) {
  console.log('Leve guarda-chuva e pratique em ambiente coberto.');
} else {
  console.log('Use um casaco leve e continue estudando.');
}`}</pre>
  <div class="card"><strong>Output:</strong> {recomendacao}</div>
</div>
