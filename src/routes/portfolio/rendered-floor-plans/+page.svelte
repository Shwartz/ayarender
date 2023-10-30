<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/portfolio/rendered-floor-plans/Juice-bar-and-cloakroom-floorplan-thumb.jpg',
    '/portfolio/rendered-floor-plans/kitchen-floor-plan-thumb.jpg',
    '/portfolio/rendered-floor-plans/PhResidence-floorplan-thumb.jpg',
    '/portfolio/rendered-floor-plans/rendered-floorplan-thumb.jpg',
    '/portfolio/rendered-floor-plans/study-floorplan-thumb.jpg',
    '/portfolio/rendered-floor-plans/two-bedroom-flat-floorplan-thumb.jpg',
  ];
  const images = [
    '/portfolio/rendered-floor-plans/Juice-bar-and-cloakroom-floorplan.jpg',
    '/portfolio/rendered-floor-plans/kitchen-floor-plan.jpg',
    '/portfolio/rendered-floor-plans/PhResidence-floorplan.jpg',
    '/portfolio/rendered-floor-plans/rendered-floorplan.jpg',
    '/portfolio/rendered-floor-plans/study-floorplan.jpg',
    '/portfolio/rendered-floor-plans/two-bedroom-flat-floorplan.jpg',
  ];
</script>

<svelte:head>
  <title>Rendered Floor Plans | Portfolio | Ayarender</title>
  <meta name="description" content="Examples of the Rendered Floor Plans" />
</svelte:head>

<section class="hero">
  <div>
    <h1>Rendered Floor Plans</h1>
  </div>
</section>

<section class="large">
  <div class="card">
    <p>
      <a class="btn-back" href="{base}/">Back</a>
    </p>
    <LightBox thumbnails={thumbnails} images={images}  />
  </div>
</section>

<style lang="scss">
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

    > div {

    }

    img {
      width: 200px;
    }
  }
</style>
