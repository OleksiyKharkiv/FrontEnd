<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	let theme: 'dark' | 'light' = $state('dark');

	function apply(next: 'dark' | 'light') {
		theme = next;
		document.documentElement.setAttribute('data-theme', next);
		try {
			localStorage.setItem('cv-theme', next);
		} catch {
			// private browsing / blocked storage — theme just won't persist
		}
	}

	function toggle() {
		apply(theme === 'dark' ? 'light' : 'dark');
	}

	$effect(() => {
		let stored: string | null = null;
		try {
			stored = localStorage.getItem('cv-theme');
		} catch {
			// ignore — fall back to system preference below
		}
		if (stored === 'light' || stored === 'dark') {
			apply(stored);
		} else if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
			apply('light');
		}
	});
</script>

<button
	type="button"
	class="border-border text-text-dim hover:text-text hover:border-accent flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-colors"
	onclick={toggle}
	aria-label={m.theme_toggle_label()}
	title={m.theme_toggle_label()}
>
	{#if theme === 'dark'}
		☀
	{:else}
		☾
	{/if}
</button>
