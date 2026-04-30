<script lang="ts">
  let number = 7;
  let limit = 10;

  $: rows = Array.from({ length: Number(limit) }, (_, index) => {
    const multiplier = index + 1;
    return `${number} x ${multiplier} = ${number * multiplier}`;
  });
  $: sum = rows.reduce((total, _, index) => total + number * (index + 1), 0);
</script>

<div class="card grid">
  <div class="badge">for / repetição</div>
  <h2>Veja o loop acontecendo</h2>
  <div class="split">
    <label><div class="label">Número</div><input type="number" min="1" max="20" bind:value={number} /></label>
    <label><div class="label">Repetições</div><input type="number" min="1" max="20" bind:value={limit} /></label>
  </div>
  <pre>{`for (int i = 1; i <= ${limit}; i++) {
    printf("${number} x %d = %d", i, ${number} * i);
}`}</pre>
  <div class="loop-list">
    {#each rows as row}
      <span>{row}</span>
    {/each}
  </div>
  <div class="big-result">Soma dos resultados: {sum}</div>
</div>
