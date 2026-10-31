<script lang="ts">
  import type { ProjectBranding } from '$lib/presentations/types';
  import { imageUrl } from '$lib/presentations/images';

  interface Props {
    label: string;
    caption?: string;
    palette?: string[];
    branding: ProjectBranding;
  }

  let { label, caption, palette, branding }: Props = $props();
</script>

<!-- Three zones: room label | caption or colour palette | client logo. No Aya branding by design. -->
<div class='zones'>
  <p class='label'>{label}</p>

  <div class='centre'>
    {#if palette?.length}
      <span class='palette-title'>Colour palette</span>
      <ul class='swatches' aria-label='Colour palette'>
        {#each palette as colour (colour)}
          <li style:background={colour}></li>
        {/each}
      </ul>
    {:else if caption}
      <p class='caption'>{caption}</p>
    {/if}
  </div>

  <div class='logo'>
    {#if branding.logoImageId}
      <img src={imageUrl(branding.logoImageId, '640w')} alt='' />
    {:else if branding.logoText}
      <span>{branding.logoText}</span>
    {/if}
  </div>
</div>

<style lang='scss'>
  @use './slide' as *;

  .zones {
    display: grid;
    grid-template-columns: 3fr 4fr 2fr;
    height: 100%;
    align-items: center;
  }

  .label,
  .centre,
  .logo {
    display: flex;
    align-items: center;
    height: u(64);
  }

  .label {
    padding-left: u(24);
    font-size: u(24);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .centre,
  .logo {
    justify-content: center;
    border-left: u(2) solid $line;
  }

  .centre {
    gap: u(32);
  }

  .caption,
  .palette-title {
    font-size: u(16);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .palette-title {
    max-width: u(96);
    text-align: center;
  }

  .swatches {
    display: flex;
    gap: u(24);

    li {
      width: u(48);
      height: u(48);
      border-radius: 50%;
    }
  }

  .logo {
    padding: 0 u(16);
    font-size: u(24);
    font-style: italic;

    img {
      width: auto;
      max-width: 100%;
      height: u(56);
      max-height: none;
      object-fit: contain;
    }
  }
</style>
