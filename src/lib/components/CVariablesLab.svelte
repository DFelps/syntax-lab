<script lang="ts">
  let price = 49.9;
  let quantity = 3;
  let discount = 10;

  $: total = price * quantity;
  $: finalTotal = total - total * (discount / 100);
</script>

<div class="card grid">
  <div class="badge">Tipos + operadores</div>
  <h2>Change values and see the calculation</h2>
  <div class="split three">
    <label><div class="label">Price</div><input type="number" step="0.01" min="0" bind:value={price} /></label>
    <label><div class="label">Quantage</div><input type="number" min="1" bind:value={quantity} /></label>
    <label><div class="label">Discount %</div><input type="number" min="0" max="100" bind:value={discount} /></label>
  </div>
  <pre>{`float price = ${Number(price).toFixed(2)};
int quantage = ${quantity};
float desconto = ${discount};
float total = price * quantage;
float final = total - total * (desconto / 100);`}</pre>
  <div class="result-grid">
    <div><span>Total</span><strong>R$ {total.toFixed(2)}</strong></div>
    <div><span>Final</span><strong>R$ {finalTotal.toFixed(2)}</strong></div>
  </div>
</div>
