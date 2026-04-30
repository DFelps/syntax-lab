<script lang="ts">
  const goals = [
    { justify: 'center', label: 'Centralize o sapo' },
    { justify: 'space-between', label: 'Separe os sapos' },
    { justify: 'flex-end', label: 'Leve tudo para a direita' }
  ];
  let phase = 0;
  let justify = 'flex-start';
  $: target = goals[phase];
  $: success = justify === target.justify;
  function nextPhase() {
    phase = (phase + 1) % goals.length;
    justify = 'flex-start';
  }
</script>

<div class="card grid">
  <div style="display:flex; justify-content:space-between; gap:1rem; align-items:flex-start;">
    <div>
      <div class="badge">Mini game</div>
      <h3>Flex Frog vibes</h3>
      <p style="color: var(--muted);">Objetivo: {target.label}</p>
    </div>
    <button class="secondary" on:click={nextPhase}>Próximo desafio</button>
  </div>
  <label>
    <div class="label">justify-content</div>
    <select bind:value={justify}>
      <option>flex-start</option>
      <option>center</option>
      <option>flex-end</option>
      <option>space-between</option>
      <option>space-around</option>
    </select>
  </label>
  <pre>{`.pond {
  display: flex;
  justify-content: ${justify};
}`}</pre>
  <div class="card" style={`display:flex; justify-content:${justify}; gap:.75rem; min-height: 130px; align-items:center;`}>
    <div style="width:56px;height:56px;border-radius:999px;background:#63e6be;display:grid;place-items:center;color:#07111d;font-weight:800;">🐸</div>
    <div style="width:56px;height:56px;border-radius:999px;background:#7c9cff;display:grid;place-items:center;color:#07111d;font-weight:800;">🐸</div>
  </div>
  <div class="card" style={success ? 'border-color: rgba(99,230,190,0.4);' : 'border-color: rgba(255,255,255,0.08);'}>
    {#if success}
      <strong>Boa!</strong> Você acertou o comportamento desse nível.
    {:else}
      <strong>Tente de novo.</strong> Compare o alinhamento atual com o objetivo.
    {/if}
  </div>
</div>
