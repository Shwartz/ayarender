<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/assets/portfolio/rendered-floor-plans/Juice-bar-and-cloakroom-floorplan-thumb.jpg',
    '/assets/portfolio/rendered-floor-plans/kitchen-floor-plan-thumb.jpg',
    '/assets/portfolio/rendered-floor-plans/PhResidence-floorplan-thumb.jpg',
    '/assets/portfolio/rendered-floor-plans/rendered-floorplan-thumb.jpg',
    '/assets/portfolio/rendered-floor-plans/study-floorplan-thumb.jpg',
    '/assets/portfolio/rendered-floor-plans/two-bedroom-flat-floorplan-thumb.jpg',
  ];
  const images = [
    '/assets/portfolio/rendered-floor-plans/Juice-bar-and-cloakroom-floorplan.jpg',
    '/assets/portfolio/rendered-floor-plans/kitchen-floor-plan.jpg',
    '/assets/portfolio/rendered-floor-plans/PhResidence-floorplan.jpg',
    '/assets/portfolio/rendered-floor-plans/rendered-floorplan.jpg',
    '/assets/portfolio/rendered-floor-plans/study-floorplan.jpg',
    '/assets/portfolio/rendered-floor-plans/two-bedroom-flat-floorplan.jpg',
  ];

  const title = "Rendered Floor Plans | Portfolio | Ayarender";
  const description = "Examples of the Rendered Floor Plans";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}"/>
  <meta property="og:title" content="{title}"/>
  <meta property="og:description" content="{description}"/>
  <meta property="twitter:title" content="{title}"/>
  <meta property="twitter:description" content="{description}"/>
  <meta property="og:image" content="{base}/assets/portfolio/rendered-floor-plans/rendered-floorplan.jpg"/>
  <meta property="og:image:alt" content="Rendered Floor plans"/>
  <meta name="robots" content="index,follow"/>
</svelte:head>

<section class='hero'>
  <div class="hero">
    <div>
      <div class="jumbo"></div>
    </div>
    <h1 class="title">
      Rendered Floor Plans
    </h1>
  </div>
</section>

<section class="large">
  <div class="card">
    <p class='light'>
      <a class="btn-back" href="{base}/">Back</a>
    </p>
    <LightBox thumbnails={thumbnails} images={images}  />
  </div>
</section>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
