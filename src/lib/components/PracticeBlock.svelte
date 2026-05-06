<script lang="ts">
  import { onMount } from 'svelte';
  import type { Practice } from '$lib/data/practice';
  import { buildFeedbackMessage, evaluateChallengeAnswer } from '$lib/core/answerScoring';
  import { copy, language } from '$lib/i18n';

  export let practice: Practice;

  type WritingGuide = {
    title: string;
    instruction: string;
    placeholder: string;
    expectedKeywords: string[];
    modelAnswer: string;
  };

  let selected: Record<number, number> = {};
  let submitted: Record<number, boolean> = {};
  let answer = '';
  let feedback = '';
  let savedReflection = '';

  $: t = copy[$language];
  $: storageKey = `syntaxlab-practice-${practice.slug}`;
  $: writingGuides = t.writingGuides as Record<string, WritingGuide>;
  $: writingGuide = writingGuides[practice.slug];
  $: challengeTitle = writingGuide?.title ?? practice.challenge.title[$language];
  $: challengeInstruction = writingGuide?.instruction ?? practice.challenge.instruction[$language];
  $: challengePlaceholder = writingGuide?.placeholder ?? practice.challenge.placeholder[$language];
  $: modelAnswer = writingGuide?.modelAnswer ?? practice.challenge.modelAnswer[$language];
  $: expectedKeywords = writingGuide?.expectedKeywords ?? practice.challenge.expectedKeywords[$language];
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

  function useTemplate() {
    answer = answer.trim() ? answer : t.guidedWriting.template;
    feedback = t.practice.templateAdded;
  }

  function addHint() {
    const missing = challengeEvaluation.matches.find((match) => !match.matched)?.keyword;
    const hint = missing ? `${t.guidedWriting.hints[0]} (${missing})` : t.guidedWriting.hints[1];
    answer = `${answer.trim()}\n${hint}`.trim();
    feedback = t.practice.hintAdded;
  }

  function addStarter(starter: string) {
    answer = `${answer.trim()}\n${starter} `.trimStart();
  }

  function clearAnswer() {
    answer = '';
    feedback = '';
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
      <div class="badge">{t.practice.writingAssistant}</div>
      <h3>{challengeTitle}</h3>
      <p class="muted">{challengeInstruction}</p>
    </div>

    <div class="helper-card">
      <div class="label">{t.practice.suggestedSteps}</div>
      <div class="pill-list">
        {#each t.guidedWriting.hints as hint}
          <span>{hint}</span>
        {/each}
      </div>
    </div>

    <div class="challenge-actions">
      <button type="button" class="secondary" on:click={useTemplate}>{t.practice.useTemplate}</button>
      <button type="button" class="secondary" on:click={addHint}>{t.practice.addHint}</button>
      <button type="button" class="secondary" on:click={clearAnswer}>{t.practice.clearAnswer}</button>
    </div>

    <div class="pill-list">
      {#each t.guidedWriting.sentenceStarters as starter}
        <button type="button" class="small-button" on:click={() => addStarter(starter)}>{starter}</button>
      {/each}
    </div>

    <textarea class="guided-textarea" rows="9" bind:value={answer} placeholder={challengePlaceholder}></textarea>

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
      <pre>{modelAnswer}</pre>
    </details>
  </div>
</section>

<style>
  .helper-card {
    border: 1px dashed var(--border);
    border-radius: 1rem;
    padding: 1rem;
    background: rgba(15, 23, 42, 0.03);
  }

  .guided-textarea {
    min-height: 13rem;
    line-height: 1.6;
    resize: vertical;
  }
</style>
