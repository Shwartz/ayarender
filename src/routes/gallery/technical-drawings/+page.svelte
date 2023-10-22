<script>
  import LightBox from "../../../components/LightBox.svelte";
  import { base } from "$app/paths";

  const thumbnails = [
    '/gallery/technical-drawing/bespoke-furniture-thumb.jpg',
    '/gallery/technical-drawing/built-in-furniture-thumb.jpg',
    '/gallery/technical-drawing/floor-plan-thumb.jpg',
    '/gallery/technical-drawing/lighting-plan-thumb.jpg',
    '/gallery/technical-drawing/technical-elevation-thumb.jpg',
    '/gallery/technical-drawing/technical-floor-plan-thumb.jpg',
  ];
  const images = [
    '/gallery/technical-drawing/bespoke-furniture.jpg',
    '/gallery/technical-drawing/built-in-furniture.jpg',
    '/gallery/technical-drawing/floor-plan.jpg',
    '/gallery/technical-drawing/lighting-plan.jpg',
    '/gallery/technical-drawing/technical-elevation.jpg',
    '/gallery/technical-drawing/technical-floor-plan.jpg',
  ];
</script>

<svelte:head>
  <title>Technical drawings | Gallery | AyaRender</title>
  <meta name="description" content="Examples of the Technical drawings" />
</svelte:head>

<section class="hero">
  <div>
    <h1>Technical drawings</h1>
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
