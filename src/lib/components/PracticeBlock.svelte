<script lang="ts">
  import { onMount } from 'svelte';
  import type { Practice } from '$lib/data/practice';
  import { buildFeedbackMessage, evaluateChallengeAnswer } from '$lib/core/answerScoring';

  export let practice: Practice;

  let selected: Record<number, number> = {};
  let submitted: Record<number, boolean> = {};
  let answer = '';
  let feedback = '';
  let savedReflection = '';

  $: storageKey = `syntaxlab-practice-${practice.slug}`;
  $: completedQuiz = practice.quiz.filter((item, index) => submitted[index] && selected[index] === item.answer).length;
  $: challengeEvaluation = evaluateChallengeAnswer(answer, practice.challenge.expectedKeywords);
  $: challengeScore = challengeEvaluation.score;
  $: challengeMatched = challengeEvaluation.matches.filter((match) => match.matched).map((match) => match.keyword);

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
    feedback = buildFeedbackMessage(answer, challengeEvaluation);
  }

  function saveReflection() {
    localStorage.setItem(storageKey, answer);
    savedReflection = answer;
    feedback = 'Answer saved locally in your browser.';
  }
</script>

<section class="card grid practice-block">
  <div class="practice-header">
    <div>
      <div class="badge">Active practice</div>
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
        <button type="button" class="small-button" on:click={() => submitQuestion(questionIndex)}>Submit</button>
        {#if submitted[questionIndex]}
          <div class={selected[questionIndex] === item.answer ? 'selected-correct' : 'selected-wrong'}>
            {#if selected[questionIndex] === item.answer}
              Correct. {item.explanation}
            {:else}
              Not yet. {item.explanation}
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
      <button type="button" on:click={checkChallenge}>Check attempt</button>
      <button type="button" class="secondary" on:click={saveReflection}>Save answer</button>
    </div>
    {#if feedback}
      <div class="terminal-output">{feedback}</div>
    {/if}
    <div>
      <div class="label">Answer coverage: {challengeScore}%</div>
      <div class="progress"><span style={`width:${challengeScore}%`}></span></div>
    </div>
    <div class="pill-list">
      {#each practice.challenge.expectedKeywords as keyword}
        <span class={challengeMatched.includes(keyword) ? 'keyword-hit' : ''}>{keyword}</span>
      {/each}
    </div>
    <details>
      <summary>Show model answer after trying</summary>
      <pre>{practice.challenge.modelAnswer}</pre>
    </details>
  </div>
</section>
