<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { getLocale, locales, setLocale } from '$lib/paraglide/runtime';
</script>

<div class="flex items-center gap-1" role="group" aria-label={m.lang_switch_label()}>
	{#each locales as locale (locale)}
		<button
			type="button"
			class="rounded-full border px-2 py-0.5 text-xs uppercase transition-colors {getLocale() ===
			locale
				? 'border-accent text-accent'
				: 'border-border text-text-dim hover:text-text'}"
			onclick={() => setLocale(locale)}
			aria-pressed={getLocale() === locale}
		>
			{locale}
		</button>
	{/each}
</div>
