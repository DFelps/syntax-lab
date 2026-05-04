<script lang="ts">
  import { onMount } from 'svelte';
  import type { Practice } from '$lib/data/practice';
  import { buildFeedbackMessage, evaluateChallengeAnswer } from '$lib/core/answerScoring';
  import { copy, language } from '$lib/i18n';

  export let practice: Practice;

  let selected: Record<number, number> = {};
  let submitted: Record<number, boolean> = {};
  let answer = '';
  let feedback = '';
  let savedReflection = '';

  $: t = copy[$language];
  $: storageKey = `syntaxlab-practice-${practice.slug}`;
  $: expectedKeywords = practice.challenge.expectedKeywords[$language];
  $: completedQuiz = practice.quiz.filter((item, index) => submitted[index] && selected[index] === item.answer).length;
  $: challengeEvaluation = evaluateChallengeAnswer(answer, expectedKeywords);
  $: challengeScore = challengeEvaluation.score;
  $: challengeMatched = challengeEvaluation.matches.filter((match) => match.matched).map((match) => match.keyword);
  $: answerCoverage = t.practice.answerCoverage.replace('{score}', challengeScore.toString());

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
    feedback = buildFeedbackMessage(answer, challengeEvaluation, {
      empty: t.practice.feedbackEmpty,
      passed: t.practice.feedbackPassed,
      missing: t.practice.feedbackMissing,
      missingLabel: t.practice.feedbackMissingLabel
    });
  }

  function saveReflection() {
    localStorage.setItem(storageKey, answer);
    savedReflection = answer;
    feedback = t.practice.savedLocal;
  }
</script>

<section class="card grid practice-block">
  <div class="practice-header">
    <div>
      <div class="badge">{t.practice.active}</div>
      <h2>{practice.title[$language]}</h2>
      <p class="muted">{practice.prompt[$language]}</p>
    </div>
    <div class="practice-score">
      <span>{t.practice.quiz}</span>
      <strong>{completedQuiz}/{practice.quiz.length}</strong>
    </div>
  </div>

  <div class="checkpoint-grid">
    {#each practice.checkpoints as checkpoint, index}
      <div>
        <span>{index + 1}</span>
        <p>{checkpoint[$language]}</p>
      </div>
    {/each}
  </div>

  <div class="grid">
    {#each practice.quiz as item, questionIndex}
      <div class="quiz-card">
        <strong>{questionIndex + 1}. {item.question[$language]}</strong>
        <div class="option-grid">
          {#each item.options as option, optionIndex}
            <button
              type="button"
              class={selected[questionIndex] === optionIndex ? 'selected-option' : 'secondary'}
              on:click={() => choose(questionIndex, optionIndex)}
            >
              {option[$language]}
            </button>
          {/each}
        </div>
        <button type="button" class="small-button" on:click={() => submitQuestion(questionIndex)}>{t.practice.submit}</button>
        {#if submitted[questionIndex]}
          <div class={selected[questionIndex] === item.answer ? 'selected-correct' : 'selected-wrong'}>
            {#if selected[questionIndex] === item.answer}
              {t.practice.correct} {item.explanation[$language]}
            {:else}
              {t.practice.notYet} {item.explanation[$language]}
            {/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="challenge-card grid">
    <div>
      <h3>{practice.challenge.title[$language]}</h3>
      <p class="muted">{practice.challenge.instruction[$language]}</p>
    </div>
    <textarea rows="7" bind:value={answer} placeholder={practice.challenge.placeholder[$language]}></textarea>
    <div class="challenge-actions">
      <button type="button" on:click={checkChallenge}>{t.practice.checkAttempt}</button>
      <button type="button" class="secondary" on:click={saveReflection}>{t.practice.saveAnswer}</button>
    </div>
    {#if feedback}
      <div class="terminal-output">{feedback}</div>
    {/if}
    <div>
      <div class="label">{answerCoverage}</div>
      <div class="progress"><span style={`width:${challengeScore}%`}></span></div>
    </div>
    <div class="pill-list">
      {#each expectedKeywords as keyword}
        <span class={challengeMatched.includes(keyword) ? 'keyword-hit' : ''}>{keyword}</span>
      {/each}
    </div>
    <details>
      <summary>{t.practice.showModelAnswer}</summary>
      <pre>{practice.challenge.modelAnswer[$language]}</pre>
    </details>
  </div>
</section>
