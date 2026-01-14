<script>
	import LightBox from '../../../components/LightBox.svelte';
	import { base } from '$app/paths';

	const thumbnails = [
		'/assets/portfolio/technical-drawing/bespoke-furniture-thumb.jpg',
		'/assets/portfolio/technical-drawing/built-in-furniture-thumb.jpg',
		'/assets/portfolio/technical-drawing/floor-plan-thumb.jpg',
		'/assets/portfolio/technical-drawing/lighting-plan-thumb.jpg',
		'/assets/portfolio/technical-drawing/technical-elevation-thumb.jpg',
		'/assets/portfolio/technical-drawing/technical-floor-plan-thumb.jpg',
		'/assets/portfolio/technical-drawing/cloakroom-juice-bar-presentation-thumb.jpg',
		'/assets/portfolio/technical-drawing/juice-bar-cloakroom-floorplan-thumb.jpg',
		'/assets/portfolio/technical-drawing/kitchen-floorplan-elevation-thumb.jpg',
		'/assets/portfolio/technical-drawing/kitchen-dining-bar-elevation-thumb.jpg',
		'/assets/portfolio/technical-drawing/office-entrance-floorplan-thumb.jpg',
		'/assets/portfolio/technical-drawing/office-parcel-letterbox-area-thumb.jpg'
	];
	const images = [
		'/assets/portfolio/technical-drawing/bespoke-furniture.jpg',
		'/assets/portfolio/technical-drawing/built-in-furniture.jpg',
		'/assets/portfolio/technical-drawing/floor-plan.jpg',
		'/assets/portfolio/technical-drawing/lighting-plan.jpg',
		'/assets/portfolio/technical-drawing/technical-elevation.jpg',
		'/assets/portfolio/technical-drawing/technical-floor-plan.jpg',
		'/assets/portfolio/technical-drawing/cloakroom-juice-bar-presentation.jpg',
		'/assets/portfolio/technical-drawing/juice-bar-cloakroom-floorplan.jpg',
		'/assets/portfolio/technical-drawing/kitchen-floorplan-elevation.jpg',
		'/assets/portfolio/technical-drawing/kitchen-dining-bar-elevation.jpg',
		'/assets/portfolio/technical-drawing/office-entrance-floorplan.jpg',
		'/assets/portfolio/technical-drawing/office-parcel-letterbox-area.jpg'
	];

	const title = "Technical Drawings | Portfolio | Ayarender";
	const description = "Examples of the Technical Drawings";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}"/>
	<meta property="og:title" content="{title}"/>
	<meta property="og:description" content="{description}"/>
	<meta property="twitter:title" content="{title}"/>
	<meta property="twitter:description" content="{description}"/>
	<meta property="og:image" content="{base}/assets/portfolio/technical-drawing/kitchen-dining-bar-elevation.jpg"/>
	<meta property="og:image:alt" content="Kitchen dining area and bar elevation interior design presentation"/>
	<meta name="robots" content="index,follow"/>
</svelte:head>

<section class='hero'>
	<div class="hero">
		<div>
			<div class="jumbo"></div>
		</div>
		<h1 class="title">
			Technical Drawings
		</h1>
	</div>
</section>

<section class='large'>
	<div class='card'>
		<p class='light'>
			<a class='btn-back' href='{base}/'>Back</a>
		</p>
		<LightBox thumbnails={thumbnails} images={images} />
	</div>
</section>

<style lang='scss'>
  .card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
