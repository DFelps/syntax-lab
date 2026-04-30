<script lang="ts">
  let idade = 15;
  let temCadastro = true;
  let acertouQuiz = false;
  $: podeAvancar = idade >= 14 && temCadastro && acertouQuiz;
  $: explicacao = podeAvancar
    ? 'Você liberou o próximo desafio.'
    : !temCadastro
      ? 'Faça o cadastro para salvar seu progresso.'
      : !acertouQuiz
        ? 'Falta acertar o quiz para avançar.'
        : 'Você já tem idade suficiente, mas ainda precisa completar os requisitos.';
</script>

<div class="card grid">
  <div>
    <div class="badge">Lógica com JS</div>
    <h3>Expressões lógicas</h3>
    <p style="color: var(--muted);">Mexa nas condições e veja quando a expressão vira true ou false.</p>
  </div>
  <div class="split">
    <label>
      <div class="label">Idade</div>
      <input type="range" min="8" max="30" bind:value={idade} />
      <div>{idade} anos</div>
    </label>
    <div class="grid">
      <label class="card" style="display:flex; align-items:center; gap:.75rem;">
        <input style="width:auto;" type="checkbox" bind:checked={temCadastro} />
        <span>Tem cadastro?</span>
      </label>
      <label class="card" style="display:flex; align-items:center; gap:.75rem;">
        <input style="width:auto;" type="checkbox" bind:checked={acertouQuiz} />
        <span>Acertou o quiz?</span>
      </label>
    </div>
  </div>
  <pre>{`const idade = ${idade};
const temCadastro = ${temCadastro};
const acertouQuiz = ${acertouQuiz};

const podeAvancar = idade >= 14 && temCadastro && acertouQuiz;
console.log(podeAvancar);`}</pre>
  <div class="split">
    <div class="card"><strong>Resultado da expressão:</strong> {String(podeAvancar)}</div>
    <div class="card"><strong>Leitura humana:</strong> {explicacao}</div>
  </div>
</div>
