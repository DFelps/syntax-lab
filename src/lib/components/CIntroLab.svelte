<script lang="ts">
  let name = 'Daniel';
  let goal = 'aprender lógica';
  let hours = 2;

  $: output = `Olá, ${name}!\nPlano: ${goal}\nTempo de estudo hoje: ${hours}h`;
</script>

<div class="card grid">
  <div class="badge">Entrada → processamento → saída</div>
  <h2>Monte o primeiro fluxo mental</h2>
  <div class="split">
    <label><div class="label">Nome</div><input bind:value={name} /></label>
    <label><div class="label">Horas de estudo</div><input type="number" min="0" max="12" bind:value={hours} /></label>
  </div>
  <label><div class="label">Objetivo</div><input bind:value={goal} /></label>
  <pre>{`char nome[] = "${name}";
char objetivo[] = "${goal}";
int horas = ${hours};

printf("Olá, %s!", nome);
printf("Plano: %s", objetivo);
printf("Tempo de estudo hoje: %dh", horas);`}</pre>
  <div class="terminal-output">{output}</div>
</div>
