<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let currentPath = $derived(page.url.pathname);
</script>

<div class="visuals-layout">
	<nav class="submenu">
		<a
			href="{base}/visuals/3d-interior-visuals"
			class:active={currentPath.includes('3d-interior-visuals')}
		>
			3D Interior Visuals
		</a>
		<a
			href="{base}/visuals/rendered-floor-plans"
			class:active={currentPath.includes('rendered-floor-plans')}
		>
			Rendered Floor Plans
		</a>
		<a
			href="{base}/visuals/rendered-elevations"
			class:active={currentPath.includes('rendered-elevations')}
		>
			Rendered Elevations
		</a>
		<a
			href="{base}/visuals/technical-drawings"
			class:active={currentPath.includes('technical-drawings')}
		>
			Technical Drawings
		</a>
	</nav>

	{@render children?.()}
</div>

<style>
	.visuals-layout {
		padding: 2rem;
	}

	.submenu {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		padding: 1rem;
		background: #f5f5f5;
	}

	.submenu a {
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: #333;
		border-bottom: 2px solid transparent;
	}

	.submenu a:hover {
		color: #000;
	}

	.submenu a.active {
		border-bottom-color: #000;
		font-weight: bold;
	}
</style>
