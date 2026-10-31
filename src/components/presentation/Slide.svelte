<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    /** Colour of the bottom band, used when no `footer` snippet is given. */
    accent: string;
    stage: Snippet;
    footer?: Snippet;
  }

  let { accent, stage, footer }: Props = $props();
</script>

<!--
  One slide: fixed 1200x848 design coordinates scaled to the container width (like a PDF page).
  Children size everything with u() from _slide.scss, so nothing reflows at different widths.
-->
<section class='slide-wrap'>
  <div class='slide'>
    <div class='stage'>{@render stage()}</div>
    {#if footer}
      <footer class='footer'>{@render footer()}</footer>
    {:else}
      <div class='band' style:background={accent}></div>
    {/if}
  </div>
</section>

<style lang='scss'>
  @use './slide' as *;

  .slide-wrap {
    container-type: inline-size;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .slide {
    --u: calc(100cqw / #{$slide-width});
    display: grid;
    grid-template-rows: 1fr #{u($footer-height)};
    row-gap: u($gap);
    width: 100cqw;
    aspect-ratio: #{$slide-width} / #{$slide-height};
    padding: u($pad);
    background: #fff;
    color: $ink;
    font-family: $font;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  .stage {
    position: relative;
    min-height: 0;
  }

  // Slides don't share the site's typography: drop global p margins (they pushed footer text off-centre).
  .slide :global(:is(p, h2, h3, ul)) {
    margin: 0;
  }

  .footer,
  .band {
    min-height: 0;
  }

  @media print {
    .slide-wrap {
      width: 297mm;
      max-width: none;
      height: 210mm;
      overflow: hidden;
      break-after: page;
      break-inside: avoid;
    }

    .slide-wrap:last-child {
      break-after: auto;
    }
  }
</style>
