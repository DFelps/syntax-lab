<script lang="ts">
  export let eyebrow = '';
  export let title = '';
  export let description = '';
  export let code = '';
  export let docs: { label: string; url: string }[] = [];
</script>

<div class="card grid">
  <div class="badge">{eyebrow}</div>
  <h1>{title}</h1>
  <p class="muted">{description}</p>
  {#if code}
    <pre>{code}</pre>
  {/if}
  {#if docs.length}
    <div class="label">Documentação oficial</div>
    <div class="pill-list">
      {#each docs as doc}
        <a class="lesson-link small-link" href={doc.url} target="_blank" rel="noreferrer">{doc.label}</a>
      {/each}
    </div>
  {/if}
</div>
