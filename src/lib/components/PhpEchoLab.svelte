<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let studentName = '';
  let moduleName = '';
  let completed = false;

  $: t = copy[$language].labs.phpEcho;
  $: currentName = studentName || t.defaultName;
  $: currentModule = moduleName || t.defaultModule;
  $: output = `${t.hello.replace('{name}', currentName)}\n${t.opened.replace('{module}', currentModule)}\n${completed ? t.congrats : t.pending}`;
</script>

<div class="card grid">
  <div>
    <div class="badge">{t.badge}</div>
    <h3>{t.title}</h3>
  </div>

  <div class="split">
    <label><div class="label">{t.studentName}</div><input bind:value={studentName} placeholder={t.defaultName} /></label>
    <label><div class="label">{t.module}</div><input bind:value={moduleName} placeholder={t.defaultModule} /></label>
  </div>

  <label class="card" style="display:flex; align-items:center; gap:.75rem;">
    <input style="width:auto;" type="checkbox" bind:checked={completed} />
    <span>{t.completed}</span>
  </label>

  <div class="split">
    <pre>{`<?php
$studentName = "${currentName}";
$moduleName = "${currentModule}";
$completed = ${completed ? 'true' : 'false'};

echo "Hello, $studentName!";
echo "You opened the module: $moduleName.";

if ($completed) {
  echo "Congrats on completing the activity.";
} else {
  echo "You still need to finish the challenge.";
}`}</pre>
    <div class="terminal-output">{output}</div>
  </div>
</div>
