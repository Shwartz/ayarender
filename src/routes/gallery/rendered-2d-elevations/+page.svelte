<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/gallery/rendered-2d-elevations/Banana-leaves-cloakroom-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/Biophilic-bathroom-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/Blue-bathroom-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/Cloakroom-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/green-bedroom-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/Japandi-inspired-kitchen-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/Juice-bar-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/Kitchen-and-bar-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/Kitchen-and-dining-area-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/Kitchen-elevation-thumb.jpg',
    '/gallery/rendered-2d-elevations/WC-and-juice-bar-elevation-thumb.jpg',
  ];
  const images = [
    '/gallery/rendered-2d-elevations/Banana-leaves-cloakroom-elevation.jpg',
    '/gallery/rendered-2d-elevations/Biophilic-bathroom-elevation.jpg',
    '/gallery/rendered-2d-elevations/Blue-bathroom-elevation.jpg',
    '/gallery/rendered-2d-elevations/Cloakroom-elevation.jpg',
    '/gallery/rendered-2d-elevations/green-bedroom-elevation.jpg',
    '/gallery/rendered-2d-elevations/Japandi-inspired-kitchen-elevation.jpg',
    '/gallery/rendered-2d-elevations/Juice-bar-elevation.jpg',
    '/gallery/rendered-2d-elevations/Kitchen-and-bar-elevation.jpg',
    '/gallery/rendered-2d-elevations/Kitchen-and-dining-area-elevation.jpg',
    '/gallery/rendered-2d-elevations/Kitchen-elevation.jpg',
    '/gallery/rendered-2d-elevations/WC-and-juice-bar-elevation.jpg',
  ];
</script>

<svelte:head>
  <title>Rendered 2D Elevations | Gallery | AyaRender</title>
  <meta name="description" content="Examples of the 2D Elevations" />
</svelte:head>

<section class="hero">
  <div>
    <h1>2D Elevations</h1>
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
