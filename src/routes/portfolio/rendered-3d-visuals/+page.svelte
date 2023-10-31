<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/portfolio/rendered-3d-visuals/Japandi-inspired-3D-kitchen-model-thumb.jpg',
    '/portfolio/rendered-3d-visuals/Living-room-3D-model-thumb.jpg',
    '/portfolio/rendered-3d-visuals/Living-room-with-fireplace-3D-model-thumb.jpg',
    '/portfolio/rendered-3d-visuals/Office-letter-box-area-3D-model-thumb.jpg',
    '/portfolio/rendered-3d-visuals/Office-parcel-and-letter-box-area-3D-model-thumb.jpg',
    '/portfolio/rendered-3d-visuals/Show-home-living-room-3D-model-thumb.jpg',
  ];
  const images = [
    '/portfolio/rendered-3d-visuals/Japandi-inspired-3D-kitchen-model.jpg',
    '/portfolio/rendered-3d-visuals/Living-room-3D-model.jpg',
    '/portfolio/rendered-3d-visuals/Living-room-with-fireplace-3D-model.jpg',
    '/portfolio/rendered-3d-visuals/Office-letter-box-area-3D-model.jpg',
    '/portfolio/rendered-3d-visuals/Office-parcel-and-letter-box-area-3D-model.jpg',
    '/portfolio/rendered-3d-visuals/Show-home-living-room-3D-model.jpg',
  ];
</script>

<svelte:head>
  <title>Rendered 3D Visuals | Portfolio | Ayarender</title>
  <meta name="description" content="Examples of the Rendered 3D Visuals" />
</svelte:head>

<section class="hero">
  <div>
    <h1>Rendered 3D Visuals</h1>
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

    img {
      width: 200px;
    }
  }
</style>
