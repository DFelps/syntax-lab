<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let number = 3;
  let limit = 5;

  $: t = copy[$language].labs.cLoops;
  $: rows = Array.from({ length: limit }, (_, index) => index + 1);
  $: total = rows.reduce((sum, item) => sum + number * item, 0);
</script>

<div class="card grid">
  <div class="badge">{t.badge}</div>
  <h2>{t.title}</h2>

  <div class="split">
    <label>
      <div class="label">{t.number}</div>
      <input type="number" min="1" max="20" bind:value={number} />
    </label>
    <label>
      <div class="label">{t.repetitions}</div>
      <input type="number" min="1" max="20" bind:value={limit} />
    </label>
  </div>

  <pre>{`int total = 0;
for (int i = 1; i <= ${limit}; i++) {
    total = total + (${number} * i);
}`}</pre>

  <div class="loop-list">
    {#each rows as item}
      <span>{number} × {item} = {number * item}</span>
    {/each}
  </div>

  <div class="big-result">{t.resultSum}: {total}</div>
</div>
