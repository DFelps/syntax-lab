<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let command = 'git status';

  $: t = copy[$language].labs.gitTerminal;
  $: responses = t.responses;
  $: output = responses[command as keyof typeof responses] ?? t.unknownCommand;
</script>

<div class="card grid">
  <div class="badge">{t.badge}</div>
  <h2>{t.title}</h2>

  <select bind:value={command}>
    {#each Object.keys(responses) as item}
      <option>{item}</option>
    {/each}
  </select>

  <div class="terminal-output">{output}</div>
</div>
