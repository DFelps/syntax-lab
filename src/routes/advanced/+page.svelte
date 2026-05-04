<script lang="ts">
  import { copy, language } from '$lib/i18n';

  $: page = copy[$language].advancedPage;
</script>

<section class="section container">
  <div class="card grid">
    <div class="badge">{page.eyebrow}</div>
    <h1 style="margin:0;">{page.title}</h1>
    <p style="color:var(--muted); margin:0;">{page.description}</p>
  </div>
</section>
