<script lang="ts">
  import { copy, language } from '$lib/i18n';

  let title = '';
  let description = '';
  let highlight = '';

  $: t = copy[$language].labs.htmlBuilder;
  $: currentTitle = title || t.defaultTitle;
  $: currentDescription = description || t.defaultDescription;
  $: currentHighlight = highlight || t.defaultHighlight;
  $: preview = `<article class="card-preview">\n  <h2>${currentTitle}</h2>\n  <p>${currentDescription}</p>\n  <span>${currentHighlight}</span>\n</article>`;
</script>

<div class="card grid">
  <div>
    <div class="badge">{t.badge}</div>
    <h3>{t.title}</h3>
  </div>

  <div class="split">
    <div class="grid">
      <label><div class="label">{t.titleLabel}</div><input bind:value={title} placeholder={t.defaultTitle} /></label>
      <label><div class="label">{t.descriptionLabel}</div><textarea rows="4" bind:value={description} placeholder={t.defaultDescription}></textarea></label>
      <label><div class="label">{t.highlightLabel}</div><input bind:value={highlight} placeholder={t.defaultHighlight} /></label>
    </div>

    <div class="grid">
      <div class="label">{t.generatedCode}</div>
      <pre>{preview}</pre>

      <div class="label">{t.renderedPreview}</div>
      <div class="card" style="display:grid; gap:.5rem;">
        <h2 style="margin:0;">{currentTitle}</h2>
        <p style="margin:0; color: var(--muted);">{currentDescription}</p>
        <span class="badge">{currentHighlight}</span>
      </div>
    </div>
  </div>
</div>
