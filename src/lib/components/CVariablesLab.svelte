<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let price = 29.9;
  let quantity = 2;
  let discount = 10;

  $: t = copy[$language].labs.cVariables;
  $: subtotal = price * quantity;
  $: finalTotal = subtotal - subtotal * (discount / 100);
</script>

<div class="card grid">
  <div class="badge">{t.badge}</div>
  <h2>{t.title}</h2>

  <div class="split three">
    <label>
      <div class="label">{t.price}</div>
      <input type="number" step="0.01" min="0" bind:value={price} />
    </label>
    <label>
      <div class="label">{t.quantity}</div>
      <input type="number" min="1" bind:value={quantity} />
    </label>
    <label>
      <div class="label">{t.discount}</div>
      <input type="number" min="0" max="100" bind:value={discount} />
    </label>
  </div>

  <pre>{`float price = ${price.toFixed(2)};
int quantity = ${quantity};
float discount = ${discount};

float subtotal = price * quantity;
float finalTotal = subtotal - subtotal * (discount / 100);`}</pre>

  <div class="result-grid">
    <div><span>{t.subtotal}</span><strong>$ {subtotal.toFixed(2)}</strong></div>
    <div><span>{t.finalTotal}</span><strong>$ {finalTotal.toFixed(2)}</strong></div>
  </div>
</div>
