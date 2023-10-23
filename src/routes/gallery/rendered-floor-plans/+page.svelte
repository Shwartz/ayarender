<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/gallery/rendered-floor-plans/Juice-bar-and-cloakroom-floorplan-thumb.jpg',
    '/gallery/rendered-floor-plans/kitchen-floor-plan-thumb.jpg',
    '/gallery/rendered-floor-plans/PhResidence-floorplan-thumb.jpg',
    '/gallery/rendered-floor-plans/rendered-floorplan-thumb.jpg',
    '/gallery/rendered-floor-plans/study-floorplan-thumb.jpg',
    '/gallery/rendered-floor-plans/two-bedroom-flat-floorplan-thumb.jpg',
  ];
  const images = [
    '/gallery/rendered-floor-plans/Juice-bar-and-cloakroom-floorplan.jpg',
    '/gallery/rendered-floor-plans/kitchen-floor-plan.jpg',
    '/gallery/rendered-floor-plans/PhResidence-floorplan.jpg',
    '/gallery/rendered-floor-plans/rendered-floorplan.jpg',
    '/gallery/rendered-floor-plans/study-floorplan.jpg',
    '/gallery/rendered-floor-plans/two-bedroom-flat-floorplan.jpg',
  ];
</script>

<svelte:head>
  <title>Rendered Floor Plans | Gallery | AyaRender</title>
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
      <a class="btn-back" href="{base}/gallery">Back to Gallery</a>
    </p>
    <LightBox thumbnails={thumbnails} images={images}  />
  </div>
</section>

<style lang="scss">
  .hero {
    background: url('/images/hero-gallery.jpg') 50% 50% no-repeat;
    background-size: cover;
    color: var(--cWhite);

    div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    h1 {
      margin-bottom: 3rem;
      font-size: 2rem;
      text-align: center;
      text-shadow: 0 0 6px white;
      font-weight: bold;
      letter-spacing: 1px;
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
