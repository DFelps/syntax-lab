<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let studentName = '';
  let goal = '';
  let studyHours = 2;

  $: t = copy[$language].labs.cIntro;
  $: currentName = studentName || t.defaultName;
  $: currentGoal = goal || t.defaultGoal;
  $: output = t.output
    .replace('{name}', currentName)
    .replace('{goal}', currentGoal)
    .replace('{hours}', studyHours.toString());
</script>

<div class="card grid">
  <div class="badge">{t.badge}</div>
  <h2>{t.title}</h2>

  <div class="split">
    <div class="card compact-card">
      <div class="label">{t.conceptTitle}</div>
      <p class="muted">{t.conceptText}</p>
    </div>

    <div class="card compact-card">
      <div class="label">{t.analogyTitle}</div>
      <p class="muted">{t.analogyText}</p>
    </div>
  </div>

  <div class="card compact-card">
    <div class="label">{t.lineByLineTitle}</div>
    <div class="pill-list">
      {#each t.lineByLine as line}
        <span>{line}</span>
      {/each}
    </div>
  </div>

  <div class="card compact-card">
    <div class="label">{t.microPracticeTitle}</div>
    <p class="muted">{t.microPracticeText}</p>
  </div>

  <div class="split">
    <label>
      <div class="label">{t.studentName}</div>
      <input bind:value={studentName} placeholder={t.defaultName} />
    </label>

    <label>
      <div class="label">{t.studyHours}</div>
      <input type="number" min="0" max="12" bind:value={studyHours} />
    </label>
  </div>

  <label>
    <div class="label">{t.goal}</div>
    <input bind:value={goal} placeholder={t.defaultGoal} />
  </label>

  <pre>{`char studentName[] = "${currentName}";
char studyGoal[] = "${currentGoal}";
int studyHours = ${studyHours};

printf("Hello, %s!\\n", studentName);
printf("Today's goal: %s\\n", studyGoal);
printf("Study time: %d hours\\n", studyHours);`}</pre>

  <div class="terminal-output">{output}</div>
</div>
