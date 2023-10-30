<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/portfolio/3d-renders/Japandi-inspired-3D-kitchen-model-thumb.jpg',
    '/portfolio/3d-renders/Living-room-3D-model-thumb.jpg',
    '/portfolio/3d-renders/Living-room-with-fireplace-3D-model-thumb.jpg',
    '/portfolio/3d-renders/Office-letter-box-area-3D-model-thumb.jpg',
    '/portfolio/3d-renders/Office-parcel-and-letter-box-area-3D-model-thumb.jpg',
    '/portfolio/3d-renders/Show-home-living-room-3D-model-thumb.jpg',
  ];
  const images = [
    '/portfolio/3d-renders/Japandi-inspired-3D-kitchen-model.jpg',
    '/portfolio/3d-renders/Living-room-3D-model.jpg',
    '/portfolio/3d-renders/Living-room-with-fireplace-3D-model.jpg',
    '/portfolio/3d-renders/Office-letter-box-area-3D-model.jpg',
    '/portfolio/3d-renders/Office-parcel-and-letter-box-area-3D-model.jpg',
    '/portfolio/3d-renders/Show-home-living-room-3D-model.jpg',
  ];
</script>

<svelte:head>
  <title>Technical drawings | Gallery | AyaRender</title>
  <meta name="description" content="Examples of the Technical drawings" />
</svelte:head>

<section class="hero">
  <div>
    <h1>3D Renders</h1>
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

    img {
      width: 200px;
    }
  }
</style>
