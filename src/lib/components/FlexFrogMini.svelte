<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let phase = 0;
  let justify = 'flex-start';

  const targetValues = ['center', 'space-between', 'flex-end'];

  $: t = copy[$language].labs.flexbox;
  $: target = { justify: targetValues[phase], label: t.targets[phase] };
  $: success = justify === target.justify;

  function nextPhase() {
    phase = (phase + 1) % targetValues.length;
    justify = 'flex-start';
  }
</script>

<div class="card grid">
  <div style="display:flex; justify-content:space-between; gap:1rem; align-items:flex-start;">
    <div>
      <div class="badge">{t.badge}</div>
      <h3>{t.title}</h3>
      <p style="color: var(--muted);">{t.goal}: {target.label}</p>
    </div>

    <button class="secondary" on:click={nextPhase}>{t.nextChallenge}</button>
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
      <strong>{t.niceTitle}</strong> {t.niceText}
    {:else}
      <strong>{t.tryTitle}</strong> {t.tryText}
    {/if}
  </div>
</div>
