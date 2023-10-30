<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/portfolio/presentation-boards/Cloakroom-and-Juice-bar-interior-design-presentation-thumb.jpg',
    '/portfolio/presentation-boards/Juice-bar-and-cloakroom-floorplan-interior-design-presentation-thumb.jpg',
    '/portfolio/presentation-boards/Kitchen-dining-area-and-bar-elevation-interior-design-presentation-thumb.jpg',
    '/portfolio/presentation-boards/Kitchen-floor-plan-and-elevation-interior-design-presentation-thumb.jpg',
    '/portfolio/presentation-boards/Office-entrance-floorplan-interior-design-presentation-thumb.jpg',
    '/portfolio/presentation-boards/Office-parcel-and-letter-box-area-interior-design-presentation-thumb.jpg',
  ];
  const images = [
    '/portfolio/presentation-boards/Cloakroom-and-Juice-bar-interior-design-presentation.jpg',
    '/portfolio/presentation-boards/Juice-bar-and-cloakroom-floorplan-interior-design-presentation.jpg',
    '/portfolio/presentation-boards/Kitchen-dining-area-and-bar-elevation-interior-design-presentation.jpg',
    '/portfolio/presentation-boards/Kitchen-floor-plan-and-elevation-interior-design-presentation.jpg',
    '/portfolio/presentation-boards/Office-entrance-floorplan-interior-design-presentation.jpg',
    '/portfolio/presentation-boards/Office-parcel-and-letter-box-area-interior-design-presentation.jpg',
  ];
</script>

<svelte:head>
  <title>Presentation Boards | Portfolio | Ayarender</title>
  <meta name="description" content="Examples of the Presentation Boards" />
</svelte:head>

<section class="hero">
  <div>
    <h1>Presentation Boards</h1>
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
