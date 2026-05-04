<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let rawValues = '8, 7, 10, 6, 9';
  let selected = 0;

  $: t = copy[$language].labs.cArrays;
  $: values = rawValues
    .split(',')
    .map((item) => Number(item.trim()))
    .filter((item) => !Number.isNaN(item));
  $: selectedValue = values[selected] ?? 0;
  $: sum = values.reduce((total, item) => total + item, 0);
  $: average = values.length ? sum / values.length : 0;
</script>

<div class="card grid">
  <div class="badge">{t.badge}</div>
  <h2>{t.title}</h2>

  <label>
    <div class="label">{t.values}</div>
    <input bind:value={rawValues} />
  </label>

  <label>
    <div class="label">{t.selectedIndex}</div>
    <input type="number" min="0" max={Math.max(values.length - 1, 0)} bind:value={selected} />
  </label>

  <pre>{`int scores[] = {${values.join(', ')}};
printf("%d", scores[${selected}]);`}</pre>

  <div class="array-row">
    {#each values as value, index}
      <span class:selected={index === selected}>{index}: {value}</span>
    {/each}
  </div>

  <div class="result-grid">
    <div><span>{t.sum}</span><strong>{sum}</strong></div>
    <div><span>{t.average}</span><strong>{average.toFixed(2)}</strong></div>
  </div>
</div>
