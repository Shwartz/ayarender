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
  <title>Technical drawings | Gallery | AyaRender</title>
  <meta name="description" content="Examples of the Technical drawings" />
</svelte:head>

<section class="hero">
  <div>
    <h1>Presentation Boards</h1>
  </div>
</section>

<section class="large">
  <div class="card">
    <p>
      <a class="btn-back" href="{base}/">Back to Home</a>
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
