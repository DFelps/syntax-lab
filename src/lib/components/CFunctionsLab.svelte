<script lang="ts">
  let base = 120;
  let percent = 15;
  let mode = 'discount';

  $: value = base * (percent / 100);
  $: result = mode === 'discount' ? base - value : base + value;
  $: functionName = mode === 'discount' ? 'aplicarDiscount' : 'aplicarAcrescimo';
</script>

<div class="card grid">
  <div class="badge">functions</div>
  <h2>Create a reusable rule</h2>
  <div class="split three">
    <label><div class="label">Valor base</div><input type="number" min="0" bind:value={base} /></label>
    <label><div class="label">Percentual</div><input type="number" min="0" max="100" bind:value={percent} /></label>
    <label><div class="label">Function</div><select bind:value={mode}><option value="discount">Discount</option><option value="increase">Increase</option></select></label>
  </div>
  <pre>{`float ${functionName}(float valor, float percentual) {
    float parte = valor * (percentual / 100);
    return valor ${mode === 'discount' ? '-' : '+'} parte;
}

float resultado = ${functionName}(${base}, ${percent});`}</pre>
  <div class="big-result">Function return: {result.toFixed(2)}</div>
</div>
