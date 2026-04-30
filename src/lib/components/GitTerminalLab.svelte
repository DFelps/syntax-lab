<script lang="ts">
  let command = 'git status';

  const responses: Record<string, string> = {
    'git init': 'Repositório Git criado. Agora a pasta pode ser versionada.',
    'git status': 'main\nUntracked files:\n  src/routes/basic/c-intro/+page.svelte',
    'git add .': 'Arquivos adicionados na área de stage.',
    'git commit -m "initial syntax lab"': '[main abc123] initial syntax lab\n12 files changed',
    'git log --oneline': 'abc123 initial syntax lab'
  };

  $: output = responses[command] ?? 'Comando ainda não cadastrado nesse simulador.';
</script>

<div class="card grid">
  <div class="badge">terminal</div>
  <h2>Simule comandos básicos</h2>
  <select bind:value={command}>
    {#each Object.keys(responses) as item}
      <option value={item}>{item}</option>
    {/each}
  </select>
  <pre>$ {command}</pre>
  <div class="terminal-output">{output}</div>
</div>
