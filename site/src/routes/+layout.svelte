<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LangSwitch from '$lib/components/LangSwitch.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	let { children } = $props();

	function printPage() {
		window.print();
	}
</script>

<svelte:head>
	<title>{m.meta_title()}</title>
	<meta name="description" content={m.meta_description()} />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="mx-auto flex min-h-screen max-w-6xl flex-col px-4">
	<header
		class="no-print border-border sticky top-0 z-10 flex items-center justify-between gap-3 border-b bg-[var(--color-bg)]/90 py-3 backdrop-blur"
	>
		<span class="font-display text-text text-sm font-600">Oleksiy Khudoshyn</span>
		<div class="flex items-center gap-3">
			<button
				type="button"
				class="border-border text-text-dim hover:text-text hover:border-accent rounded-full border px-3 py-1 text-xs transition-colors"
				onclick={printPage}
			>
				{m.print_button()}
			</button>
			<LangSwitch />
			<ThemeToggle />
		</div>
	</header>

	<main class="flex-1 py-8">
		{@render children()}
	</main>
</div>
