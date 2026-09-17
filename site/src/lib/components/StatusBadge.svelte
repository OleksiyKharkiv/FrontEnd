<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	interface Props {
		url: string;
	}

	let { url }: Props = $props();

	type Status = 'checking' | 'online' | 'unreachable';
	let status: Status = $state('checking');

	// Client-side-only reachability check (no server, no adapter changes —
	// this is a purely static site). `mode: 'no-cors'` means we can't read
	// the response body or status code cross-origin, but a resolved fetch
	// (opaque or not) means the request reached a server; a thrown
	// TypeError means DNS/connection failure. That binary signal is enough
	// for "is this actually up right now", which is the whole point —
	// no screenshot, a live check run in the visitor's own browser.
	$effect(() => {
		status = 'checking';
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), 5000);

		fetch(url, { mode: 'no-cors', cache: 'no-store', signal: controller.signal })
			.then(() => {
				status = 'online';
			})
			.catch(() => {
				status = 'unreachable';
			})
			.finally(() => clearTimeout(timeout));

		return () => {
			controller.abort();
			clearTimeout(timeout);
		};
	});
</script>

<span class="inline-flex items-center gap-1.5 text-xs" title={m.status_check_note()}>
	<span
		class="h-1.5 w-1.5 rounded-full {status === 'online'
			? 'bg-code'
			: status === 'unreachable'
				? 'bg-error'
				: 'bg-text-dim animate-pulse'}"
	></span>
	<span class="text-text-dim">
		{status === 'checking' ? m.status_checking() : status === 'online' ? m.status_online() : m.status_unreachable()}
	</span>
</span>
