<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/portfolio/rendered-2d-elevations/Banana-leaves-cloakroom-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/Biophilic-bathroom-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/Blue-bathroom-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/Cloakroom-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/green-bedroom-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/Japandi-inspired-kitchen-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/Juice-bar-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/Kitchen-and-bar-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/Kitchen-and-dining-area-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/Kitchen-elevation-thumb.jpg',
    '/portfolio/rendered-2d-elevations/WC-and-juice-bar-elevation-thumb.jpg',
  ];
  const images = [
    '/portfolio/rendered-2d-elevations/Banana-leaves-cloakroom-elevation.jpg',
    '/portfolio/rendered-2d-elevations/Biophilic-bathroom-elevation.jpg',
    '/portfolio/rendered-2d-elevations/Blue-bathroom-elevation.jpg',
    '/portfolio/rendered-2d-elevations/Cloakroom-elevation.jpg',
    '/portfolio/rendered-2d-elevations/green-bedroom-elevation.jpg',
    '/portfolio/rendered-2d-elevations/Japandi-inspired-kitchen-elevation.jpg',
    '/portfolio/rendered-2d-elevations/Juice-bar-elevation.jpg',
    '/portfolio/rendered-2d-elevations/Kitchen-and-bar-elevation.jpg',
    '/portfolio/rendered-2d-elevations/Kitchen-and-dining-area-elevation.jpg',
    '/portfolio/rendered-2d-elevations/Kitchen-elevation.jpg',
    '/portfolio/rendered-2d-elevations/WC-and-juice-bar-elevation.jpg',
  ];
</script>

<svelte:head>
  <title>Rendered 2D Elevations | Portfolio | Ayarender</title>
  <meta name="description" content="Examples of the Rendered 2D Elevations" />
</svelte:head>

<section class="hero">
  <div>
    <h1>Rendered 2D Elevations</h1>
  </div>
</section>

<section class="large">
  <div class="card">
    <p class='light'>
      <a class="btn-back" href="{base}/#rendered2dElevations">Back</a>
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
