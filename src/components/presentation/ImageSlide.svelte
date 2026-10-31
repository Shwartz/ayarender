<script lang="ts">
  import type { ImageSection, Project } from '$lib/presentations/types';
  import { imageUrl } from '$lib/presentations/images';
  import Slide from './Slide.svelte';
  import SlideFooter from './SlideFooter.svelte';
  import CroppedImage from './CroppedImage.svelte';

  interface Props {
    section: ImageSection;
    project: Project;
  }

  let { section, project }: Props = $props();
</script>

<Slide accent={project.accentColor}>
  {#snippet stage()}
    <div class='frame' class:inset={section.fit === 'inset'}>
      <div class='window'>
        <CroppedImage
          imageId={section.image.imageId}
          alt={section.image.alt}
          crop={section.image.crop}
          fit={section.fit === 'inset' ? 'contain' : 'cover'}
          sizes='min(100vw, 1400px)'
        />
        {#if section.zoomable}
          <a
            class='open-full'
            href={imageUrl(section.image.imageId, '1920w')}
            target='_blank'
            rel='noopener'
            aria-label='Open full-size image in a new tab'
          ></a>
        {/if}
      </div>
    </div>
  {/snippet}
  {#snippet footer()}
    <SlideFooter label={section.label} caption={section.caption} branding={project.branding} />
  {/snippet}
</Slide>

<style lang='scss'>
  @use './slide' as *;

  .frame {
    height: 100%;
    border: u(2) solid $line;

    &.inset {
      padding: u(40);
    }
  }

  .window {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .open-full {
    position: absolute;
    inset: 0;
    cursor: zoom-in;

    @media print {
      display: none;
    }
  }
</style>
