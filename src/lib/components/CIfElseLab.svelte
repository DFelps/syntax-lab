<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let grade = 7;
  let attendance = 80;

  $: t = copy[$language].labs.cIfElse;
  $: approved = grade >= 7 && attendance >= 75;
  $: recovery = grade >= 5 && attendance >= 75;
  $: status = approved ? t.approved : recovery ? t.recovery : t.failed;
</script>

<div class="card grid">
  <div class="badge">{t.badge}</div>
  <h2>{t.title}</h2>

  <div class="split">
    <label>
      <div class="label">{t.grade}: {grade}</div>
      <input type="range" min="0" max="10" step="0.5" bind:value={grade} />
    </label>
    <label>
      <div class="label">{t.attendance}: {attendance}</div>
      <input type="range" min="0" max="100" step="5" bind:value={attendance} />
    </label>
  </div>

  <pre>{`if (grade >= 7 && attendance >= 75) {
    printf("approved");
} else if (grade >= 5 && attendance >= 75) {
    printf("recovery");
} else {
    printf("failed");
}`}</pre>

  <div class="big-result">{t.result}: {status}</div>
</div>
