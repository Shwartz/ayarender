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

  const title = "Rendered 3D Visuals | Portfolio | Ayarender";
  const description = "Examples of the Rendered 3D Visuals";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="{description}"/>
  <meta property="og:title" content="{title}"/>
  <meta property="og:description" content="{description}"/>
  <meta property="twitter:title" content="{title}"/>
  <meta property="twitter:description" content="{description}"/>
  <meta property="og:image" content="{base}/portfolio/rendered-3d-visuals/Show-home-living-room-3D-model.jpg"/>
  <meta property="og:image:alt" content="Show home living room 3D model"/>
  <meta name="robots" content="index,follow"/>
</svelte:head>

<section class='hero'>
  <div class="hero">
    <div>
      <div class="jumbo"></div>
    </div>
    <h1 class="title">
      Rendered 3D Visuals
    </h1>
  </div>
</section>

<section class="large">
  <div class="card">
    <p class='light'>
      <a class="btn-back" href="{base}/#rendered3dVisuals">Back</a>
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
