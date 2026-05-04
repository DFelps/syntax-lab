<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let baseAmount = 120;
  let percent = 15;
  let mode = 'discount';

  $: t = copy[$language].labs.cFunctions;
  $: percentageValue = baseAmount * (percent / 100);
  $: result = mode === 'discount' ? baseAmount - percentageValue : baseAmount + percentageValue;
  $: functionName = mode === 'discount' ? 'applyDiscount' : 'applyIncrease';
</script>

<div class="card grid">
  <div class="badge">{t.badge}</div>
  <h2>{t.title}</h2>

  <div class="split three">
    <label>
      <div class="label">{t.baseAmount}</div>
      <input type="number" min="0" bind:value={baseAmount} />
    </label>
    <label>
      <div class="label">{t.percent}</div>
      <input type="number" min="0" max="100" bind:value={percent} />
    </label>
    <label>
      <div class="label">{t.function}</div>
      <select bind:value={mode}>
        <option value="discount">{t.discount}</option>
        <option value="increase">{t.increase}</option>
      </select>
    </label>
  </div>

  <pre>{`float ${functionName}(float amount, float percent) {
    float change = amount * (percent / 100);
    return amount ${mode === 'discount' ? '-' : '+'} change;
}`}</pre>

  <div class="big-result">{t.functionReturn}: {result.toFixed(2)}</div>
</div>
