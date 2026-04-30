<script lang="ts">
  import { onMount } from 'svelte';
  import type { Practice } from '$lib/data/practice';

  export let practice: Practice;

  let selected: Record<number, number> = {};
  let submitted: Record<number, boolean> = {};
  let answer = '';
  let feedback = '';
  let savedReflection = '';

  $: storageKey = `syntaxlab-practice-${practice.slug}`;
  $: completedQuiz = practice.quiz.filter((item, index) => submitted[index] && selected[index] === item.answer).length;
  $: challengeMatched = practice.challenge.expectedKeywords.filter((keyword) => answer.toLowerCase().includes(keyword.toLowerCase()));
  $: challengeScore = practice.challenge.expectedKeywords.length ? Math.round((challengeMatched.length / practice.challenge.expectedKeywords.length) * 100) : 0;

  onMount(() => {
    savedReflection = localStorage.getItem(storageKey) ?? '';
    answer = savedReflection;
  });

  function choose(questionIndex: number, optionIndex: number) {
    selected = { ...selected, [questionIndex]: optionIndex };
    submitted = { ...submitted, [questionIndex]: false };
  }

  function submitQuestion(questionIndex: number) {
    submitted = { ...submitted, [questionIndex]: true };
  }

  function checkChallenge() {
    if (!answer.trim()) {
      feedback = 'Escreva uma tentativa primeiro. A ideia é forçar o raciocínio antes de ver a resposta.';
      return;
    }

    if (challengeScore >= 70) {
      feedback = 'Boa. Sua resposta já tem a estrutura principal. Compare com o modelo e ajuste nomes, sintaxe ou ordem se precisar.';
      return;
    }

    feedback = 'Ainda falta alguma parte importante. Veja as palavras-chave abaixo e tente completar a lógica antes de olhar o modelo.';
  }

  function saveReflection() {
    localStorage.setItem(storageKey, answer);
    savedReflection = answer;
    feedback = 'Resposta salva no navegador.';
  }
</script>

<section class="card grid practice-block">
  <div class="practice-header">
    <div>
      <div class="badge">Prática ativa</div>
      <h2>{practice.title}</h2>
      <p class="muted">{practice.prompt}</p>
    </div>
    <div class="practice-score">
      <span>Quiz</span>
      <strong>{completedQuiz}/{practice.quiz.length}</strong>
    </div>
  </div>

  <div class="checkpoint-grid">
    {#each practice.checkpoints as checkpoint, index}
      <div>
        <span>{index + 1}</span>
        <p>{checkpoint}</p>
      </div>
    {/each}
  </div>

  <div class="grid">
    {#each practice.quiz as item, questionIndex}
      <div class="quiz-card">
        <strong>{questionIndex + 1}. {item.question}</strong>
        <div class="option-grid">
          {#each item.options as option, optionIndex}
            <button
              type="button"
              class={selected[questionIndex] === optionIndex ? 'selected-option' : 'secondary'}
              on:click={() => choose(questionIndex, optionIndex)}
            >
              {option}
            </button>
          {/each}
        </div>
        <button type="button" class="small-button" on:click={() => submitQuestion(questionIndex)}>Responder</button>
        {#if submitted[questionIndex]}
          <div class={selected[questionIndex] === item.answer ? 'selected-correct' : 'selected-wrong'}>
            {#if selected[questionIndex] === item.answer}
              Acertou. {item.explanation}
            {:else}
              Ainda não. {item.explanation}
            {/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="challenge-card grid">
    <div>
      <h3>{practice.challenge.title}</h3>
      <p class="muted">{practice.challenge.instruction}</p>
    </div>
    <textarea rows="7" bind:value={answer} placeholder={practice.challenge.placeholder}></textarea>
    <div class="challenge-actions">
      <button type="button" on:click={checkChallenge}>Conferir tentativa</button>
      <button type="button" class="secondary" on:click={saveReflection}>Salvar resposta</button>
    </div>
    {#if feedback}
      <div class="terminal-output">{feedback}</div>
    {/if}
    <div>
      <div class="label">Cobertura da resposta: {challengeScore}%</div>
      <div class="progress"><span style={`width:${challengeScore}%`}></span></div>
    </div>
    <div class="pill-list">
      {#each practice.challenge.expectedKeywords as keyword}
        <span class={challengeMatched.includes(keyword) ? 'keyword-hit' : ''}>{keyword}</span>
      {/each}
    </div>
    <details>
      <summary>Ver resposta modelo depois de tentar</summary>
      <pre>{practice.challenge.modelAnswer}</pre>
    </details>
  </div>
</section>
