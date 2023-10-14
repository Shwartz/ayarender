<script>
  import { GalleryImage, GalleryThumbnail, LightboxGallery } from "svelte-lightbox";
</script>

<section class="hero">
  <div>
    <h1>Technical drawings</h1>
  </div>
</section>

<section class="large">
  <div class="card">
    <LightboxGallery>
      <svelte:fragment slot="thumbnail">
        <div class="sample-class-1">
          <GalleryThumbnail>
            <img src="./thumbnail-0.jpg" alt="Simple lightbox">
          </GalleryThumbnail>
          <div class="sample-class-2">
            <div class="sample-class-3">
              <img src="./thumbnail-0.jpg" alt="Simple lightbox">
            </div>
            <div class="sample-class-4">
              <img src="./thumbnail-0.jpg" alt="Simple lightbox">
            </div>
          </div>
        </div>
      </svelte:fragment>
      <GalleryImage>
        <img src="/images/design-board.jpg" alt="Simple lightbox">
      </GalleryImage>
      <GalleryImage>
        <img src="/images/rendered-2d-elevation.jpg" alt="Simple lightbox">
      </GalleryImage>
    </LightboxGallery>
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
