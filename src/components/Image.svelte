<script lang="ts">
  import { browser } from '$app/environment';

  interface ImageProps {
    imgId: string;
    alt: string;
    className?: string;
    // Expandable lightbox: click to zoom (desktop only)
    expandable?: boolean;
  }

  const { imgId, className, alt, expandable = false }: ImageProps = $props();

  const url = 'https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA';

  // Derived srcset - all available variants
  let srcset = $derived(
    `${url}/${imgId}/640w 640w, ${url}/${imgId}/768w 768w, ${url}/${imgId}/1024w 1024w, ${url}/${imgId}/1280w 1280w`
  );

  // Sizes for responsive images - full width on mobile, constrained on desktop
  let sizes = $derived('(max-width: 799px) 100vw, 1216px');

  // Lightbox srcset for expanded view (larger variants)
  let lightboxSrcset = $derived(
    `${url}/${imgId}/768w 768w, ${url}/${imgId}/1024w 1024w, ${url}/${imgId}/1280w 1280w, ${url}/${imgId}/1920w 1920w`
  );

  let isExpanded = $state(false);

  // Detect if device supports lightbox (desktop with fine pointer)
  let supportsLightbox = $state(true);

  $effect(() => {
    if (!browser || !expandable) return;

    // Check if device has hover capability and fine pointer (desktop)
    const desktopQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const widthQuery = window.matchMedia('(min-width: 48rem)');

    function updateSupport() {
      supportsLightbox = desktopQuery.matches && widthQuery.matches;
    }

    updateSupport();

    desktopQuery.addEventListener('change', updateSupport);
    widthQuery.addEventListener('change', updateSupport);

    return () => {
      desktopQuery.removeEventListener('change', updateSupport);
      widthQuery.removeEventListener('change', updateSupport);
    };
  });

  // Handle image click - only expand on desktop devices
  function handleImageClick() {
    if (expandable && supportsLightbox) {
      isExpanded = true;
      if (browser) {
        document.body.style.overflow = 'hidden';
      }
    }
  }

  // Close expanded image
  function closeExpanded() {
    isExpanded = false;
    if (browser) {
      document.body.style.overflow = '';
    }
  }

  // Handle escape key
  $effect(() => {
    if (!browser || !expandable) return;

    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isExpanded) {
        closeExpanded();
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  });
</script>

{#snippet imageElement()}
  <img
    src="{url}/{imgId}/1024w"
    {srcset}
    {sizes}
    {alt}
    class={className}
    loading="lazy"
  />
{/snippet}

<div class="image-wrapper" class:expandable={expandable && supportsLightbox}>
  {#if expandable && supportsLightbox}
    <button
      class="image-button"
      onclick={handleImageClick}
      onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick()}
      aria-label="Click to expand image"
    >
      {@render imageElement()}
    </button>
  {:else}
    {@render imageElement()}
  {/if}
</div>

<!-- Expanded lightbox overlay -->
{#if isExpanded}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div class="lightbox-overlay" onclick={closeExpanded} role="button" tabindex="0">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
      <button class="lightbox-close" onclick={closeExpanded} aria-label="Close expanded image">×</button>
      <img
        src="{url}/{imgId}/1280w"
        srcset={lightboxSrcset}
        sizes="90vw"
        {alt}
      />
    </div>
  </div>
{/if}

<style lang="scss">
  .image-wrapper {
    display: inline-block;
    width: 100%;

    &.expandable {
      // Only show zoom cursor on desktop
      @media (min-width: 48rem) {
        .image-button {
          cursor: zoom-in;
        }

        img {
          transition: opacity 0.2s ease;
        }

        .image-button:hover img {
          opacity: 0.9;
        }
      }
    }
  }

  .image-button {
    // Reset button styles to make it look like a div
    all: unset;
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    background: none;
    text-align: left;

    // Ensure image fills button
    img {
      display: block;
      width: 100%;
      border-radius: 0.5rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    // Focus outline for keyboard navigation
    &:focus-visible {
      outline: 3px solid var(--aya-navy-500);
      outline-offset: 2px;
      border-radius: 0.5rem;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(13, 27, 42, 0.95); // Using aya-navy-900 with transparency
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    animation: fadeIn 0.25s ease;

    // Hide on mobile/tablet (let native pinch-zoom work)
    @media (max-width: 48rem) {
      display: none;
    }
  }

  .lightbox-content {
    position: relative;
    max-width: 95vw;
    max-height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

    img {
      max-width: 100%;
      max-height: 95vh;
      object-fit: contain;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
      border-radius: 0.5rem;
    }
  }

  .lightbox-close {
    position: absolute;
    top: -50px;
    right: 0;
    background: transparent;
    border: none;
    color: var(--aya-white);
    font-size: 48px;
    line-height: 1;
    cursor: pointer;
    padding: 0;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }

    &:focus-visible {
      outline: 3px solid var(--aya-sand-100);
      outline-offset: 2px;
      border-radius: 0.25rem;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.85);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>

