<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import InfraDiagram from '$lib/components/InfraDiagram.svelte';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import SectionNav from '$lib/components/SectionNav.svelte';
	import FactsPanel from '$lib/components/FactsPanel.svelte';
	import { contact } from '$lib/contact';
	import { navState, sections } from '$lib/navState.svelte';

	const experience = $derived([
		{
			role: m.exp1_role(),
			meta: m.exp1_meta(),
			bullets: [m.exp1_bullet1(), m.exp1_bullet2(), m.exp1_bullet3()]
		},
		{
			role: m.exp2_role(),
			meta: m.exp2_meta(),
			bullets: [m.exp2_bullet1(), m.exp2_bullet2(), m.exp2_bullet3()]
		},
		{ role: m.exp3_role(), meta: m.exp3_meta(), bullets: [m.exp3_bullet1()] },
		{ role: m.exp4_role(), meta: m.exp4_meta(), bullets: [m.exp4_bullet1()] }
	]);

	// Scrollspy: whichever tracked section's midline crosses the middle
	// band of the viewport becomes "active" in both the desktop rail and
	// the mobile pill nav (they share navState.active).
	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) navState.active = entry.target.id;
				}
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	});
</script>

<div class="cv-nav-pills no-print">
	<SectionNav variant="pills" />
</div>

<div class="cv-layout">
	<aside class="cv-rail no-print">
		<SectionNav variant="rail" />
		<div class="border-border mt-6 border-t pt-6">
			<FactsPanel />
		</div>
	</aside>

	<div class="cv-main">
		<section class="mb-14">
			<h1 class="font-display text-text text-3xl font-700 sm:text-4xl">Oleksiy Khudoshyn</h1>
			<p class="text-accent font-display mt-1 text-lg font-600">{m.hero_role()}</p>
			<p class="text-text-dim mt-1 text-sm">{m.hero_tagline()} · {m.hero_location()}</p>
			<div class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
				<a class="link" href="mailto:{contact.email}">{contact.email}</a>
				<a class="link" href="tel:{contact.phone.replace(/\s/g, '')}">{contact.phone}</a>
				<a class="link" href={contact.github} target="_blank" rel="noreferrer">{contact.githubLabel}</a>
				<a class="link" href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedinLabel}</a>
			</div>
		</section>

		<section id="about" class="scroll-target mb-16">
			<h2 class="font-display text-text mb-4 text-2xl font-700">{m.summary_title()}</h2>
			<p class="text-text leading-relaxed">{m.summary_p1()}</p>
			<p class="text-text mt-3 leading-relaxed">{m.summary_p2()}</p>
			<p class="mono text-text-dim mt-3 text-sm italic">{m.summary_quip()}</p>
		</section>

		<section id="experience" class="scroll-target mb-16">
			<h2 class="font-display text-text mb-4 text-2xl font-700">{m.experience_title()}</h2>
			<ol class="border-border space-y-8 border-l pl-5">
				{#each experience as job (job.role + job.meta)}
					<li>
						<h3 class="font-display text-text font-600">{job.role}</h3>
						<p class="text-text-dim text-sm">{job.meta}</p>
						<ul class="text-text mt-2 space-y-1 pl-4 leading-relaxed">
							{#each job.bullets as bullet (bullet)}
								<li class="list-disc marker:text-text-dim">{bullet}</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ol>
		</section>

		<section id="projects" class="scroll-target mb-16">
			<h2 class="font-display text-text mb-4 text-2xl font-700">{m.projects_title()}</h2>

			<article class="border-border bg-surface mb-6 rounded-xl border p-5">
				<h3 class="font-display text-text font-600">{m.proj_numi_title()}</h3>
				<p class="text-text-dim text-sm">{m.proj_numi_meta()}</p>
				<p class="text-text-dim mt-2 leading-relaxed">{m.proj_numi_body()}</p>
				<div class="mt-4">
					<InfraDiagram
						steps={['Cloudflare Tunnel', 'Go + SvelteKit (Docker)', 'SQLite + Litestream']}
						vm="Proxmox · Debian 12 VM"
					/>
				</div>
				<div class="mt-3 flex items-center gap-3">
					<a class="link text-sm" href="https://numi.report/" target="_blank" rel="noreferrer">
						{m.proj_numi_link()}
					</a>
					<StatusBadge url="https://numi.report/" />
				</div>
			</article>

			<article class="border-border bg-surface rounded-xl border p-5">
				<h3 class="font-display text-text font-600">{m.proj_lr_title()}</h3>
				<p class="text-text-dim text-sm">{m.proj_lr_meta()}</p>
				<p class="text-text-dim mt-2 leading-relaxed">{m.proj_lr_body()}</p>
				<div class="mt-4">
					<InfraDiagram
						steps={['Cloudflare Tunnel', 'Traefik → k3s', 'Spring Boot + PostgreSQL']}
						vm="Proxmox · Debian 12 VM"
					/>
				</div>
				<div class="mt-3 flex items-center gap-3">
					<a class="link text-sm" href="https://tlab29.com/" target="_blank" rel="noreferrer">
						{m.proj_lr_link()}
					</a>
					<StatusBadge url="https://tlab29.com/" />
				</div>
			</article>
		</section>

		<div class="cv-facts-mobile mb-16">
			<FactsPanel />
		</div>

		<footer class="border-border text-text-dim border-t pt-6 text-xs leading-relaxed">
			<p>{m.footer_consent()}</p>
		</footer>
	</div>
</div>
