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
</script>

<svelte:head>
	<title>Technical Drawings | Portfolio | Ayarender</title>
	<meta name='description' content='Examples of the Technical Drawings' />
</svelte:head>

<section class='hero'>
	<div>
		<h1>Technical Drawings</h1>
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
  .hero {
    background: url('/images/hero-home.jpg') 50% 60% no-repeat;
    background-size: cover;
  }

  @media (min-width: 1200px) {
    .hero {
      background-position: 50% 68%;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    img {
      width: 200px;
    }
  }
</style>
