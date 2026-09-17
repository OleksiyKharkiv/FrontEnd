<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import InfraDiagram from '$lib/components/InfraDiagram.svelte';
	import { contact } from '$lib/contact';

	const skills = $derived(m.skills_items().split(' · '));

	const experience = $derived([
		{ role: m.exp1_role(), meta: m.exp1_meta(), body: m.exp1_body() },
		{ role: m.exp2_role(), meta: m.exp2_meta(), body: m.exp2_body() },
		{ role: m.exp3_role(), meta: m.exp3_meta(), body: m.exp3_body() },
		{ role: m.exp4_role(), meta: m.exp4_meta(), body: m.exp4_body() }
	]);

	const languages = $derived([m.lang_de(), m.lang_en(), m.lang_uk(), m.lang_ru()]);
</script>

<section id="hero" class="mb-12">
	<h1 class="font-display text-text text-3xl font-700 sm:text-4xl">Oleksiy Khudoshyn</h1>
	<p class="text-accent font-display mt-1 text-lg font-600">{m.hero_role()}</p>
	<p class="text-text-dim mt-1 text-sm">{m.hero_tagline()} · {m.hero_location()}</p>
	<div class="text-text-dim mt-4 flex flex-wrap gap-4 text-sm">
		<a class="hover:text-accent" href="mailto:{contact.email}">{contact.email}</a>
		<a class="hover:text-accent" href="tel:{contact.phone.replace(/\s/g, '')}">{contact.phone}</a>
		<a class="hover:text-accent" href={contact.github} target="_blank" rel="noreferrer">{contact.githubLabel}</a>
		<a class="hover:text-accent" href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedinLabel}</a>
	</div>
</section>

<section id="summary" class="mb-12">
	<h2 class="font-display text-text-dim mb-3 text-xs font-600 tracking-widest uppercase">
		{m.summary_title()}
	</h2>
	<p class="text-text leading-relaxed">{m.summary_p1()}</p>
	<p class="text-text mt-3 leading-relaxed">{m.summary_p2()}</p>
	<p class="mono text-text-dim mt-3 text-sm italic">{m.summary_quip()}</p>
</section>

<section id="skills" class="mb-12">
	<h2 class="font-display text-text-dim mb-3 text-xs font-600 tracking-widest uppercase">
		{m.skills_title()}
	</h2>
	<div class="flex flex-wrap gap-2">
		{#each skills as skill (skill)}
			<span class="border-border text-text bg-surface rounded-full border px-3 py-1 text-sm">{skill}</span>
		{/each}
	</div>
</section>

<section id="experience" class="mb-12">
	<h2 class="font-display text-text-dim mb-3 text-xs font-600 tracking-widest uppercase">
		{m.experience_title()}
	</h2>
	<ol class="border-border space-y-6 border-l pl-5">
		{#each experience as job (job.role + job.meta)}
			<li>
				<h3 class="font-display text-text font-600">{job.role}</h3>
				<p class="text-accent text-sm">{job.meta}</p>
				<p class="text-text-dim mt-1 leading-relaxed">{job.body}</p>
			</li>
		{/each}
	</ol>
</section>

<section id="projects" class="mb-12">
	<h2 class="font-display text-text-dim mb-3 text-xs font-600 tracking-widest uppercase">
		{m.projects_title()}
	</h2>

	<article class="border-border bg-surface mb-6 rounded-xl border p-5">
		<h3 class="font-display text-text font-600">{m.proj_numi_title()}</h3>
		<p class="text-accent text-sm">{m.proj_numi_meta()}</p>
		<p class="text-text-dim mt-2 leading-relaxed">{m.proj_numi_body()}</p>
		<div class="mt-4">
			<InfraDiagram
				steps={['Cloudflare Tunnel', 'Go + SvelteKit (Docker)', 'SQLite + Litestream']}
				vm="Proxmox · Debian 12 VM"
			/>
		</div>
		<a class="text-accent mt-3 inline-block text-sm hover:underline" href="https://numi.report/" target="_blank" rel="noreferrer">
			{m.proj_numi_link()} →
		</a>
	</article>

	<article class="border-border bg-surface rounded-xl border p-5">
		<h3 class="font-display text-text font-600">{m.proj_lr_title()}</h3>
		<p class="text-accent text-sm">{m.proj_lr_meta()}</p>
		<p class="text-text-dim mt-2 leading-relaxed">{m.proj_lr_body()}</p>
		<div class="mt-4">
			<InfraDiagram
				steps={['Cloudflare Tunnel', 'Traefik → k3s', 'Spring Boot + PostgreSQL']}
				vm="Proxmox · Debian 12 VM"
			/>
		</div>
		<a class="text-accent mt-3 inline-block text-sm hover:underline" href="https://tlab29.com/" target="_blank" rel="noreferrer">
			{m.proj_lr_link()} →
		</a>
	</article>
</section>

<section id="education" class="mb-12">
	<h2 class="font-display text-text-dim mb-3 text-xs font-600 tracking-widest uppercase">
		{m.education_title()}
	</h2>
	<dl class="space-y-2 text-sm">
		<div><dt class="text-text inline font-600">{m.edu1_title()}:</dt> <dd class="text-text-dim inline">{m.edu1_body()}</dd></div>
		<div><dt class="text-text inline font-600">{m.edu2_title()}:</dt> <dd class="text-text-dim inline">{m.edu2_body()}</dd></div>
		<div><dt class="text-text inline font-600">{m.edu3_title()}:</dt> <dd class="text-text-dim inline">{m.edu3_body()}</dd></div>
	</dl>
</section>

<section id="languages" class="mb-12">
	<h2 class="font-display text-text-dim mb-3 text-xs font-600 tracking-widest uppercase">
		{m.languages_title()}
	</h2>
	<ul class="text-text-dim space-y-1 text-sm">
		{#each languages as lang (lang)}
			<li>{lang}</li>
		{/each}
	</ul>
</section>

<footer id="contact" class="border-border text-text-dim border-t pt-6 text-xs leading-relaxed">
	<p>{m.contact_open()}</p>
	<p class="mt-2">{m.footer_consent()}</p>
</footer>
