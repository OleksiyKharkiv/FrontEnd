<script lang="ts">
	interface Props {
		steps: string[];
		vm: string;
	}

	let { steps, vm }: Props = $props();

	const boxWidth = 140;
	const gap = 34;
	const boxHeight = 46;
	const width = $derived(steps.length * boxWidth + (steps.length - 1) * gap + 16);
	const height = 90;
	const y = 8;
</script>

<svg viewBox="0 0 {width} {height}" class="w-full max-w-full" role="img" aria-label={steps.join(' → ') + ' — ' + vm}>
	<rect
		x="4"
		y="2"
		width={width - 8}
		height={height - 20}
		rx="10"
		fill="none"
		stroke="var(--color-border)"
		stroke-dasharray="4 4"
	/>
	{#each steps as step, i (step)}
		{@const x = 8 + i * (boxWidth + gap)}
		<rect x={x} y={y} width={boxWidth} height={boxHeight} rx="8" fill="var(--color-surface)" stroke="var(--color-accent)" />
		<foreignObject x={x} y={y} width={boxWidth} height={boxHeight}>
			<div
				xmlns="http://www.w3.org/1999/xhtml"
				style="display:flex;align-items:center;justify-content:center;height:100%;padding:0 6px;font-family:var(--font-body);font-size:11px;line-height:1.2;text-align:center;color:var(--color-text);"
			>
				{step}
			</div>
		</foreignObject>
		{#if i < steps.length - 1}
			<line
				x1={x + boxWidth}
				y1={y + boxHeight / 2}
				x2={x + boxWidth + gap}
				y2={y + boxHeight / 2}
				stroke="var(--color-text-dim)"
				stroke-width="1.5"
				marker-end="url(#arrow)"
			/>
		{/if}
	{/each}
	<text x={width / 2} y={height - 4} text-anchor="middle" font-size="10" fill="var(--color-text-dim)" font-family="var(--font-body)">
		{vm}
	</text>
	<defs>
		<marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
			<path d="M0,0 L8,4 L0,8 Z" fill="var(--color-text-dim)" />
		</marker>
	</defs>
</svg>
