<script lang="ts">
  let raw = '8, 7, 10, 6, 9';
  let selected = 0;

  $: values = raw.split(',').map((item) => Number(item.trim())).filter((item) => !Number.isNaN(item));
  $: safeIndex = Math.min(Number(selected), Math.max(values.length - 1, 0));
  $: current = values[safeIndex] ?? 0;
  $: sum = values.reduce((total, item) => total + item, 0);
  $: average = values.length ? sum / values.length : 0;
</script>

<div class="card grid">
  <div class="badge">arrays</div>
  <h2>Índice começa em zero</h2>
  <label><div class="label">Valores separados por vírgula</div><input bind:value={raw} /></label>
  <label><div class="label">Índice selecionado</div><input type="number" min="0" max={Math.max(values.length - 1, 0)} bind:value={selected} /></label>
  <pre>{`int notas[] = { ${values.join(', ')} };
int indice = ${safeIndex};
int valor = notas[indice];`}</pre>
  <div class="array-row">
    {#each values as value, index}
      <div class:active={index === safeIndex}><span>{index}</span><strong>{value}</strong></div>
    {/each}
  </div>
  <div class="result-grid">
    <div><span>Valor no índice {safeIndex}</span><strong>{current}</strong></div>
    <div><span>Soma</span><strong>{sum}</strong></div>
    <div><span>Média</span><strong>{average.toFixed(2)}</strong></div>
  </div>
</div>
