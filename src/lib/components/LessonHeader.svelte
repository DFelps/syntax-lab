<script lang="ts">
  import { copy, language } from '$lib/i18n';

  export let eyebrow = '';
  export let title = '';
  export let description = '';
  export let code = '';
  export let docs: { label: string; url: string }[] = [];

  $: t = copy[$language];
</script>

<div class="card grid">
  <div class="badge">{eyebrow}</div>
  <h1 style="margin:0;">{title}</h1>
  <p class="muted">{description}</p>
  {#if code}
    <pre>{code}</pre>
  {/if}
  {#if docs.length}
    <div class="label">{t.officialDocumentation}</div>
    <div class="pill-list">
      {#each docs as doc}
        <a class="lesson-link small-link" href={doc.url} target="_blank" rel="noreferrer">{doc.label}</a>
      {/each}
    </div>
  {/if}
</div>
