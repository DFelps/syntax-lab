<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let age = 16;
  let hasAccount = true;
  let passedQuiz = false;

  $: t = copy[$language].labs.jsLogic;
  $: canContinue = age >= 14 && hasAccount && passedQuiz;
  $: explanation = canContinue
    ? t.unlocked
    : !hasAccount
      ? t.createAccount
      : !passedQuiz
        ? t.passQuiz
        : t.completeRequirements;
</script>

<div class="card grid">
  <div>
    <div class="badge">{t.badge}</div>
    <h3>{t.title}</h3>
    <p style="color: var(--muted);">{t.description}</p>
  </div>

  <div class="split">
    <label>
      <div class="label">{t.age}: {age}</div>
      <input type="range" min="8" max="30" bind:value={age} />
    </label>
    <div class="grid">
      <label class="card" style="display:flex; align-items:center; gap:.75rem;">
        <input style="width:auto;" type="checkbox" bind:checked={hasAccount} />
        <span>{t.hasAccount}</span>
      </label>
      <label class="card" style="display:flex; align-items:center; gap:.75rem;">
        <input style="width:auto;" type="checkbox" bind:checked={passedQuiz} />
        <span>{t.passedQuiz}</span>
      </label>
    </div>
  </div>

  <pre>{`const canContinue = age >= 14 && hasAccount && passedQuiz;`}</pre>

  <div class="split">
    <div class="card"><strong>{t.expressionResult}:</strong> {String(canContinue)}</div>
    <div class="card"><strong>{t.feedback}:</strong> {explanation}</div>
  </div>
</div>
