<script lang="ts">
  let idade = 16;
  let pontos = 42;
  $: resultado = idade >= 18 ? 'Pode entrar na área adulta.' : 'Fica na trilha inicial por enquanto.';
  $: conquista = pontos >= 50 ? 'Desafio bônus liberado.' : 'Continue praticando para liberar o bônus.';
</script>

<div class="card grid">
  <div>
    <div class="badge">Interatividade</div>
    <h3>Laboratório de if / else</h3>
    <p style="color: var(--muted);">Troque os valores e observe como a decisão muda.</p>
  </div>
  <div class="split">
    <label>
      <div class="label">Idade</div>
      <input type="range" min="8" max="30" bind:value={idade} />
      <div>{idade} anos</div>
    </label>
    <label>
      <div class="label">Pontos</div>
      <input type="range" min="0" max="100" bind:value={pontos} />
      <div>{pontos} pontos</div>
    </label>
  </div>
  <div class="split">
    <pre>{`idade = ${idade}
if idade >= 18:
    print("Pode entrar na área adulta.")
else:
    print("Fica na trilha inicial por enquanto.")`}</pre>
    <pre>{`pontos = ${pontos}
if pontos >= 50:
    print("Desafio bônus liberado.")
else:
    print("Continue praticando para liberar o bônus.")`}</pre>
  </div>
  <div class="split">
    <div class="card"><strong>Saída 1</strong><p>{resultado}</p></div>
    <div class="card"><strong>Saída 2</strong><p>{conquista}</p></div>
  </div>
</div>
