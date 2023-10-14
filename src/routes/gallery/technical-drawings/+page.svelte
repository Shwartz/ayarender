<script>
  import LightBox from "../../../components/LightBox.svelte";

  const thumbnails = [
    '/gallery/art-06-thumb.jpg',
    '/gallery/art-10-thumb.jpg',
    '/gallery/art-12-thumb.jpg',
    '/gallery/art-13-thumb.jpg',
    '/gallery/art-21-thumb.jpg',
  ];
  const images = [
    '/gallery/art-06.jpg',
    '/gallery/art-10.jpg',
    '/gallery/art-12.jpg',
    '/gallery/art-13.jpg',
    '/gallery/art-21.jpg',
  ];
</script>

<section class="hero">
  <div>
    <h1>Technical drawings</h1>
  </div>
</section>


<section class="large">
  <div class="card">
    <LightBox thumbnails={thumbnails} images={images}  />
  </div>
</section>

<style lang="scss">
  .bg {
    background: var(--gradientBgLight);
  }

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
    align-items: center;

    > div {

    }

    img {
      width: 200px;
    }
  }
</style>
