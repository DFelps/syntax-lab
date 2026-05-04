<script lang="ts">
  let command = 'git status';

  const responses: Record<string, string> = {
    'git init': 'Git repository created. The folder can now be versioned.',
    'git status': 'main\nUntracked files:\n  src/routes/basic/c-intro/+page.svelte',
    'git add .': 'Files added to the staging area.',
    'git commit -m "initial syntax lab"': '[main abc123] initial syntax lab\n12 files changed',
    'git log --oneline': 'abc123 initial syntax lab'
  };

  $: output = responses[command] ?? 'Command not registered in this simulator yet.';
</script>

<div class="card grid">
  <div class="badge">terminal</div>
  <h2>Simulate basic commands</h2>
  <select bind:value={command}>
    {#each Object.keys(responses) as item}
      <option value={item}>{item}</option>
    {/each}
  </select>
  <pre>$ {command}</pre>
  <div class="terminal-output">{output}</div>
</div>
