<script lang="ts">
  let age = 16;
  let points = 42;
  $: accessResult = age >= 18 ? 'Can enter the adult area.' : 'Stay on the beginner path for now.';
  $: bonusResult = points >= 50 ? 'Bonus challenge unlocked.' : 'Keep practicing to unlock the bonus.';
</script>

<div class="card grid">
  <div>
    <div class="badge">Interactivity</div>
    <h3>If / else lab</h3>
    <p style="color: var(--muted);">Change the values and watch the decision change.</p>
  </div>
  <div class="split">
    <label>
      <div class="label">Age</div>
      <input type="range" min="8" max="30" bind:value={age} />
      <div>{age} years old</div>
    </label>
    <label>
      <div class="label">Points</div>
      <input type="range" min="0" max="100" bind:value={points} />
      <div>{points} points</div>
    </label>
  </div>
  <div class="split">
    <pre>{`age = ${age}
if age >= 18:
    print("Can enter the adult area.")
else:
    print("Stay on the beginner path for now.")`}</pre>
    <pre>{`points = ${points}
if points >= 50:
    print("Bonus challenge unlocked.")
else:
    print("Keep practicing to unlock the bonus.")`}</pre>
  </div>
  <div class="split">
    <div class="card"><strong>Output 1</strong><p>{accessResult}</p></div>
    <div class="card"><strong>Output 2</strong><p>{bonusResult}</p></div>
  </div>
</div>
