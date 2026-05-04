<script lang="ts">
  let age = 15;
  let hasAccount = true;
  let passedQuiz = false;
  $: canContinue = age >= 14 && hasAccount && passedQuiz;
  $: explanation = canContinue
    ? 'You unlocked the next challenge.'
    : !hasAccount
      ? 'Create an account to save your progress.'
      : !passedQuiz
        ? 'You still need to pass the quiz before moving on.'
        : 'You are old enough, but still need to complete the requirements.';
</script>

<div class="card grid">
  <div>
    <div class="badge">JavaScript logic</div>
    <h3>Logical expressions</h3>
    <p style="color: var(--muted);">Change the conditions and see when the expression becomes true or false.</p>
  </div>
  <div class="split">
    <label>
      <div class="label">Age</div>
      <input type="range" min="8" max="30" bind:value={age} />
      <div>{age} years old</div>
    </label>
    <div class="grid">
      <label class="card" style="display:flex; align-items:center; gap:.75rem;">
        <input style="width:auto;" type="checkbox" bind:checked={hasAccount} />
        <span>Has account?</span>
      </label>
      <label class="card" style="display:flex; align-items:center; gap:.75rem;">
        <input style="width:auto;" type="checkbox" bind:checked={passedQuiz} />
        <span>Passed quiz?</span>
      </label>
    </div>
  </div>
  <pre>{`const age = ${age};
const hasAccount = ${hasAccount};
const passedQuiz = ${passedQuiz};

const canContinue = age >= 14 && hasAccount && passedQuiz;
console.log(canContinue);`}</pre>
  <div class="split">
    <div class="card"><strong>Expression result:</strong> {String(canContinue)}</div>
    <div class="card"><strong>Human-readable feedback:</strong> {explanation}</div>
  </div>
</div>
