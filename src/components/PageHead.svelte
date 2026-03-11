<script lang="ts">
  interface Props {
    title: string;
    description: string;
    path: string;
    image?: string;
    imageAlt?: string;
  }

  let { title, description, path, image = '/images/rendered-2d-elevation.jpg', imageAlt = 'Interior Visualiser' }: Props = $props();

  const base = 'https://ayarender.com';
  const fullTitle = $derived(title === 'Interior Visualiser'
    ? title
    : `${title} | Ayarender`);

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
   *
   *  ---  USAGE OF THE IMAGE ---
   *  Use 1200 × 630 px (aspect ratio 1.91:1). This is the universal standard that works correctly
   *  across every major platform
   *
   *  File size: Target under 200KB — WhatsApp in particular is strict about image loading speed,
   *  and it's also good SEO hygiene. Use JPEG at 80–85% quality for a photographic render like yours,
   *  as it compresses far better than PNG for photos.
   *
   *  Safe zone: Keep key visual content within the central 1080 × 566 px area, as some platforms
   *  crop the edges slightly.
   */
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{base}{path}" />
  <meta property="og:site_name" content="Ayarender" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="{base}{image}" />
  <meta property="og:image:alt" content={imageAlt} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="{base}{image}" />
  <meta name="robots" content="index,follow" />
</svelte:head>
