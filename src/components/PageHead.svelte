<script lang="ts">
  interface Props {
    title: string;
    description: string;
    path: string;
    image?: string;
    imageAlt?: string;
  }

  let { title, description, path, image = '/images/ayarender-1200x630.jpg', imageAlt = 'Interior Visualiser' }: Props = $props();

  const base = 'https://ayarender.com';
  const fullTitle = $derived(title === 'Interior Visualiser'
    ? title
    : `${title} | Ayarender`);

  // Generate full image URL - handles both static paths and full URLs
  const fullImageUrl = $derived(
    image.startsWith('http')
      ? image
      : `${base}${image}`
  );

  /**
   * PageHead.svelte
   *
   * A reusable component for setting the page title, description, and Open Graph metadata for SEO and social sharing.
   * It accepts props for title, description, path, image, and imageAlt, and uses them to populate the relevant meta tags.
   * The component ensures that each page has unique and descriptive metadata to improve search engine visibility and enhance social media sharing.
   *
   * Props:
   * - title: The title of the page (required)
   * - description: A brief description of the page content (required)
   * - path: The page path, e.g. '/price' or '/visuals/3d-interior-visuals' (required)
   * - image: Open Graph image URL or path (optional)
   *   - For static images: '/images/my-image.jpg' (will be prefixed with base URL)
   *   - For Cloudflare Images: Full URL with '1200x630' variant, e.g.
   *     'https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f1880d59-5f2e-46f8-5880-2a498c5e7400/1200x630'
   * - imageAlt: Alt text for the image (optional, defaults to 'Interior Visualiser')
   *
   * --- OPEN GRAPH IMAGE REQUIREMENTS ---
   *
   * Ideal size: 1200 × 630 px (aspect ratio 1.91:1)
   * This is the universal standard that works correctly across every major platform.
   *
   * For Cloudflare Images:
   * - Use the '1200x630' variant for perfect Open Graph compatibility
   *   Example: https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/{imageId}/1200x630
   *
   * - Available variants: 320w, 640w, 768w, 1024w, 1200x630, 1280w, 1920w, 2560w, public
   * - AVOID: Using responsive variants (320w, 640w, 768w, etc.) for OG images as they have 16:9 ratio (not 1.91:1)
   *
   * File size: Target under 200KB — WhatsApp in particular is strict about image loading speed,
   * and it's also good SEO hygiene. Use JPEG at 80–85% quality for photographic renders,
   * as it compresses far better than PNG for photos.
   *
   * Safe zone: Keep key visual content within the central 1080 × 566 px area, as some platforms
   * (like LinkedIn) may crop the edges slightly.
   *
   * Testing: Use https://www.opengraph.xyz/ or Facebook's Sharing Debugger to preview how
   * your image will appear when shared.
   */
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href="{base}{path}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{base}{path}" />
  <meta property="og:site_name" content="Ayarender" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={fullImageUrl} />
  <meta property="og:image:alt" content={imageAlt} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={fullImageUrl} />
  <meta name="robots" content="index,follow" />
</svelte:head>
