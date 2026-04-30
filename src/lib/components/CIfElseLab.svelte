<script lang="ts">
  let grade = 7;
  let attendance = 80;

  $: approved = grade >= 7 && attendance >= 75;
  $: recovery = grade >= 5 && grade < 7 && attendance >= 75;
  $: status = approved ? 'aprovado' : recovery ? 'recuperação' : 'reprovado';
</script>

<div class="card grid">
  <div class="badge">if / else</div>
  <h2>Teste uma decisão com duas regras</h2>
  <div class="split">
    <label><div class="label">Nota</div><input type="range" min="0" max="10" step="0.5" bind:value={grade} /><strong>{grade}</strong></label>
    <label><div class="label">Presença %</div><input type="range" min="0" max="100" step="5" bind:value={attendance} /><strong>{attendance}%</strong></label>
  </div>
  <pre>{`float nota = ${grade};
int presenca = ${attendance};

if (nota >= 7 && presenca >= 75) {
    printf("aprovado");
} else if (nota >= 5 && presenca >= 75) {
    printf("recuperação");
} else {
    printf("reprovado");
}`}</pre>
  <div class="big-result">Resultado: {status}</div>
</div>
