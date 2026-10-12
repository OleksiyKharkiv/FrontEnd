<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { contact } from '$lib/contact';

	const languages = $derived([m.lang_de(), m.lang_en(), m.lang_uk(), m.lang_ru()]);
</script>

<div class="facts-panel space-y-6">
	<div>
		<h2 class="font-display text-text mb-2 text-sm font-600">{m.links_title()}</h2>
		<ul class="space-y-1 text-sm">
			<li>
				<a class="link" href={contact.github} target="_blank" rel="noreferrer">
					GitHub
					<span class="print-url text-text-dim text-xs"> — {contact.githubLabel}</span>
				</a>
			</li>
			<li>
				<a class="link" href={contact.linkedin} target="_blank" rel="noreferrer">
					LinkedIn
					<span class="print-url text-text-dim text-xs"> — {contact.linkedinLabel}</span>
				</a>
			</li>
			<li>
				<a class="link" href="https://numi.report/" target="_blank" rel="noreferrer">
					{m.link_numi()}
					<span class="print-url text-text-dim text-xs"> — numi.report</span>
				</a>
			</li>
			<li>
				<a class="link" href="https://tlab29.com/" target="_blank" rel="noreferrer">
					{m.link_lr()}
					<span class="print-url text-text-dim text-xs"> — tlab29.com</span>
				</a>
			</li>
		</ul>
	</div>

	<div>
		<h2 class="font-display text-text mb-2 text-sm font-600">{m.education_title()}</h2>
		<dl class="space-y-1.5 text-sm">
			<div><dt class="text-text-dim inline">{m.edu0_title()}: </dt><dd class="text-text inline">{m.edu0_body()}</dd></div>
			<div><dt class="text-text-dim inline">{m.edu1_title()}: </dt><dd class="text-text inline">{m.edu1_body()}</dd></div>
			<div><dt class="text-text-dim inline">{m.edu2_title()}: </dt><dd class="text-text inline">{m.edu2_body()}</dd></div>
			<div><dt class="text-text-dim inline">{m.edu3_title()}: </dt><dd class="text-text inline">{m.edu3_body()}</dd></div>
		</dl>
	</div>

	<div>
		<h2 class="font-display text-text mb-2 text-sm font-600">{m.languages_title()}</h2>
		<ul class="text-text-dim space-y-1 text-sm">
			{#each languages as lang (lang)}
				<li>{lang}</li>
			{/each}
		</ul>
	</div>

	<div class="border-accent/40 border-l-2 pl-3">
		<h2 class="font-display text-text mb-1 text-sm font-600">{m.open_to_title()}</h2>
		<p class="text-text-dim text-sm leading-relaxed">{m.contact_open()}</p>
	</div>
</div>
