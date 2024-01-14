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

  const title = "Rendered 2D Elevations | Portfolio | Ayarender";
  const description = "Examples of the Rendered 2D Elevations";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}"/>
  <meta property="og:title" content="{title}"/>
  <meta property="og:description" content="{description}"/>
  <meta property="twitter:title" content="{title}"/>
  <meta property="twitter:description" content="{description}"/>
  <meta property="og:image" content="{base}/portfolio/rendered-2d-elevations/Japandi-inspired-kitchen-elevation.jpg"/>
  <meta property="og:image:alt" content="Rendered 2D Elevations"/>
  <meta name="robots" content="index,follow"/>
</svelte:head>

<section class='hero'>
  <div class="hero">
    <div>
      <div class="jumbo"></div>
    </div>
    <h1 class="title">
      Rendered 2D Elevations
    </h1>
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
  /*.hero {
    background: url('/images/hero-home.jpg') 50% 60% no-repeat;
    background-size: cover;
  }*/
/*
  @media (min-width: 1200px) {
    .hero {
      background-position: 50% 68%;
    }
  }*/

  .card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
