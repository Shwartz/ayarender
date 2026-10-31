<script lang="ts">
  import type { Crop } from '$lib/presentations/types';
  import { imageSrcset, imageUrl, type Variant } from '$lib/presentations/images';

  interface Props {
    imageId: string;
    alt: string;
    crop?: Crop;
    /** `cover` fills the box (may crop); `contain` shows the whole image. */
    fit?: 'cover' | 'contain';
    variants?: Variant[];
    sizes?: string;
  }

  let {
    imageId,
    alt,
    crop = { x: 0.5, y: 0.5, zoom: 1 },
    fit = 'cover',
    variants = ['640w', '1024w', '1280w', '1920w'],
    sizes = '100vw'
  }: Props = $props();

  // The focal point drives both object-position and the zoom origin, so zooming stays centred on it.
  let origin = $derived(`${crop.x * 100}% ${crop.y * 100}%`);
</script>

<!--
  Fills its parent. Parent must be position: relative with a size.
  Crop: x/y focal point (0..1) and zoom (>=1), as saved by the future tile editor.
-->
<img
  src={imageUrl(imageId, variants[variants.length - 1])}
  srcset={imageSrcset(imageId, variants)}
  {sizes}
  {alt}
  style:object-fit={fit}
  style:object-position={origin}
  style:transform-origin={origin}
  style:transform={`scale(${Math.max(1, crop.zoom)})`}
  decoding='async'
/>

<style>
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-inline-size: none;
    max-block-size: none;
    display: block;
  }
</style>
