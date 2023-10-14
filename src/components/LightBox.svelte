<script>
  import { GalleryImage, GalleryThumbnail, LightboxGallery } from "svelte-lightbox";

  export let thumbnails;
  export let images;
</script>

<LightboxGallery>
  <svelte:fragment slot="thumbnail">
    <div class="lightBox">
      {#each thumbnails as thumb}
        <GalleryThumbnail>
          <img src="{thumb}" alt="{thumb}">
        </GalleryThumbnail>
      {/each}
    </div>
  </svelte:fragment>
  {#each images as img}
    <GalleryImage>
      <img src="{img}" alt="{img}">
    </GalleryImage>
  {/each}
</LightboxGallery>

<style lang="scss">
  .lightBox {
    --min: 220px;
    --gap: 2rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    width: 100%;

  }
</style>
