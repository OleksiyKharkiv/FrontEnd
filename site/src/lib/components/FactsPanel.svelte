<script lang="ts">
	import * as m from '$lib/paraglide/messages';

	const skills = $derived(m.skills_items().split(' · '));
	const languages = $derived([m.lang_de(), m.lang_en(), m.lang_uk(), m.lang_ru()]);
</script>

<div class="space-y-6">
	<div>
		<h2 class="font-display text-text mb-2 text-sm font-600">{m.skills_title()}</h2>
		<div class="flex flex-wrap gap-1.5">
			{#each skills as skill (skill)}
				<span class="border-border text-text-dim rounded-full border px-2 py-0.5 text-xs">{skill}</span>
			{/each}
		</div>
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
