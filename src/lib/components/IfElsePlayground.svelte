<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let age = 18;
  let points = 40;

  $: t = copy[$language].labs.ifElse;
  $: accessResult = age >= 18 ? t.canEnter : t.stayBeginner;
  $: bonusResult = points >= 50 ? t.bonusUnlocked : t.keepPracticing;
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
    <label>
      <div class="label">{t.points}: {points}</div>
      <input type="range" min="0" max="100" bind:value={points} />
    </label>
  </div>

  <div class="split">
    <pre>{`if (age >= 18) {
    print("Can enter the adult area.");
} else {
    print("Stay on the beginner path for now.");
}`}</pre>
    <pre>{`if (points >= 50) {
    print("Bonus challenge unlocked.");
} else {
    print("Keep practicing to unlock the bonus.");
}`}</pre>
  </div>

  <div class="split">
    <div class="card"><strong>{t.outputOne}</strong><p>{accessResult}</p></div>
    <div class="card"><strong>{t.outputTwo}</strong><p>{bonusResult}</p></div>
  </div>
</div>
