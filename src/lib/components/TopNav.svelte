<script lang="ts">
  import { copy, language, nextLanguage } from '$lib/i18n';

  $: t = copy[$language];
</script>

<nav class="container flex flex-wrap items-center justify-between gap-3 py-4">
  <a href="/" class="flex items-center gap-3 font-black tracking-tight">
    <span class="grid size-9 place-items-center rounded-xl bg-slate-900 text-sm text-white">S</span>
    Syntax Lab
  </a>

  <div class="flex flex-wrap items-center gap-4 text-sm text-slate-500">
    <a href="/basic" class="hover:text-slate-900">{t.basic}</a>
    <a href="/intermediate" class="hover:text-slate-900">{t.intermediate}</a>
    <a href="/advanced" class="hover:text-slate-900">{t.advanced}</a>
    <button type="button" class="small-button" on:click={() => language.set(nextLanguage($language))}>{t.language}</button>
  </div>
</nav>
