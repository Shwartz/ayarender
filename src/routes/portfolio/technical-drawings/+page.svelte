<script>
	import LightBox from '../../../components/LightBox.svelte';
	import { base } from '$app/paths';

	const thumbnails = [
		'/portfolio/technical-drawing/bespoke-furniture-thumb.jpg',
		'/portfolio/technical-drawing/built-in-furniture-thumb.jpg',
		'/portfolio/technical-drawing/floor-plan-thumb.jpg',
		'/portfolio/technical-drawing/lighting-plan-thumb.jpg',
		'/portfolio/technical-drawing/technical-elevation-thumb.jpg',
		'/portfolio/technical-drawing/technical-floor-plan-thumb.jpg',
		'/portfolio/technical-drawing/Cloakroom-and-Juice-bar-interior-design-presentation-thumb.jpg',
		'/portfolio/technical-drawing/Juice-bar-and-cloakroom-floorplan-interior-design-presentation-thumb.jpg',
		'/portfolio/technical-drawing/Kitchen-floor-plan-and-elevation-interior-design-presentation-thumb.jpg',
		'/portfolio/technical-drawing/Kitchen-dining-area-and-bar-elevation-interior-design-presentation-thumb.jpg',
		'/portfolio/technical-drawing/Office-entrance-floorplan-interior-design-presentation-thumb.jpg',
		'/portfolio/technical-drawing/Office-parcel-and-letter-box-area-interior-design-presentation-thumb.jpg'
	];
	const images = [
		'/portfolio/technical-drawing/bespoke-furniture.jpg',
		'/portfolio/technical-drawing/built-in-furniture.jpg',
		'/portfolio/technical-drawing/floor-plan.jpg',
		'/portfolio/technical-drawing/lighting-plan.jpg',
		'/portfolio/technical-drawing/technical-elevation.jpg',
		'/portfolio/technical-drawing/technical-floor-plan.jpg',
		'/portfolio/technical-drawing/Cloakroom-and-Juice-bar-interior-design-presentation.jpg',
		'/portfolio/technical-drawing/Juice-bar-and-cloakroom-floorplan-interior-design-presentation.jpg',
		'/portfolio/technical-drawing/Kitchen-floor-plan-and-elevation-interior-design-presentation.jpg',
		'/portfolio/technical-drawing/Kitchen-dining-area-and-bar-elevation-interior-design-presentation.jpg',
		'/portfolio/technical-drawing/Office-entrance-floorplan-interior-design-presentation.jpg',
		'/portfolio/technical-drawing/Office-parcel-and-letter-box-area-interior-design-presentation.jpg'
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
	<meta property="og:image" content="{base}/portfolio/technical-drawing/Kitchen-dining-area-and-bar-elevation-interior-design-presentation.jpg"/>
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
			<a class='btn-back' href='{base}/#technicalDrawings'>Back</a>
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
