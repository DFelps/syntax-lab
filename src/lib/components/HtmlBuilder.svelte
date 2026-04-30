<script lang="ts">
  let titulo = 'Meu primeiro card';
  let descricao = 'Estou aprendendo HTML e entendendo estrutura.';
  let destaque = 'Semântica + prática';
  $: preview = `<article class="card-preview">\n  <h2>${titulo}</h2>\n  <p>${descricao}</p>\n  <span>${destaque}</span>\n</article>`;
</script>

<div class="card grid">
  <div>
    <div class="badge">Preview ao vivo</div>
    <h3>Montador de card em HTML</h3>
  </div>
  <div class="split">
    <div class="grid">
      <label><div class="label">Título</div><input bind:value={titulo} /></label>
      <label><div class="label">Descrição</div><textarea rows="4" bind:value={descricao}></textarea></label>
      <label><div class="label">Destaque</div><input bind:value={destaque} /></label>
    </div>
    <div class="grid">
      <div class="label">Código gerado</div>
      <pre>{preview}</pre>
      <div class="label">Render</div>
      <div class="card" style="display:grid; gap:.5rem;">
        <h2 style="margin:0;">{titulo}</h2>
        <p style="margin:0; color: var(--muted);">{descricao}</p>
        <span class="badge">{destaque}</span>
      </div>
    </div>
  </div>
</div>
