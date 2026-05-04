<script lang="ts">
  let nome = 'Dev';
  let modulo = 'PHP Basics';
  let concluido = false;
  $: output = `Hello, ${nome}!\nYou opened the module: ${modulo}.\n${concluido ? 'Congrats on completing the activity.' : 'You still need to finish the challenge.'}`;
</script>

<div class="card grid">
  <div>
    <div class="badge">Simulador</div>
    <h3>PHP echo + if/else</h3>
  </div>
  <div class="split">
    <label><div class="label">Nome</div><input bind:value={nome} /></label>
    <label><div class="label">Module</div><input bind:value={modulo} /></label>
  </div>
  <label class="card" style="display:flex; align-items:center; gap:.75rem;">
    <input style="width:auto;" type="checkbox" bind:checked={concluido} />
    <span>Activity completed?</span>
  </label>
  <div class="split">
    <pre>{`<?php
$nome = "${nome}";
$modulo = "${modulo}";
$concluido = ${concluido ? 'true' : 'false'};

echo "Hello, $nome!";
echo "You opened the module: $modulo.";

if ($concluido) {
  echo "Congrats on completing the activity.";
} else {
  echo "You still need to finish the challenge.";
}`}</pre>
    <pre>{output}</pre>
  </div>
</div>
