<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let temperature = 22;
  let isRaining = false;

  $: t = copy[$language].labs.jsCondition;
  $: recommendation = temperature >= 24 && !isRaining ? t.park : isRaining ? t.umbrella : t.jacket;
</script>

<div class="card grid">
  <div>
    <div class="badge">{t.badge}</div>
    <h3>{t.title}</h3>
  </div>

  <div class="split">
    <label>
      <div class="label">{t.temperature}: {temperature}°C</div>
      <input type="range" min="0" max="40" bind:value={temperature} />
    </label>

    <label class="card" style="display:flex; align-items:center; gap:.75rem;">
      <input style="width:auto;" type="checkbox" bind:checked={isRaining} />
      <span>{t.raining}</span>
    </label>
  </div>

  <pre>{`if (temperature >= 24 && !isRaining) {
  console.log('Today is a good day to practice in the park.');
} else if (isRaining) {
  console.log('Bring an umbrella and practice indoors.');
} else {
  console.log('Wear a light jacket and keep studying.');
}`}</pre>

  <div class="card"><strong>{t.output}:</strong> {recommendation}</div>
</div>
