<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { navState, sections } from '$lib/navState.svelte';

	interface Props {
		variant: 'rail' | 'pills';
	}

	let { variant }: Props = $props();

	const labels: Record<string, () => string> = {
		nav_about: m.nav_about,
		nav_experience: m.nav_experience,
		nav_projects: m.nav_projects
	};
</script>

{#if variant === 'rail'}
	<nav aria-label={m.nav_about() + ', ' + m.nav_experience() + ', ' + m.nav_projects()} class="flex flex-col gap-1">
		{#each sections as section (section.id)}
			<a
				href="#{section.id}"
				class="rounded-md px-2 py-1 text-sm transition-colors {navState.active === section.id
					? 'bg-accent/10 text-accent font-600'
					: 'text-text-dim hover:text-text'}"
				aria-current={navState.active === section.id ? 'true' : undefined}
			>
				{labels[section.labelKey]()}
			</a>
		{/each}
	</nav>
{:else}
	<nav aria-label={m.nav_about() + ', ' + m.nav_experience() + ', ' + m.nav_projects()} class="flex gap-2 overflow-x-auto">
		{#each sections as section (section.id)}
			<a
				href="#{section.id}"
				class="shrink-0 rounded-full border px-3 py-1 text-sm whitespace-nowrap transition-colors {navState.active ===
				section.id
					? 'border-accent text-accent'
					: 'border-border text-text-dim'}"
				aria-current={navState.active === section.id ? 'true' : undefined}
			>
				{labels[section.labelKey]()}
			</a>
		{/each}
	</nav>
{/if}
