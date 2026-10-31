<script lang="ts">
  import type { MoodboardSection, Project } from '$lib/presentations/types';
  import { moodboardLayouts } from '$lib/presentations/layouts';
  import Slide from './Slide.svelte';
  import SlideFooter from './SlideFooter.svelte';
  import CroppedImage from './CroppedImage.svelte';

  interface Props {
    section: MoodboardSection;
    project: Project;
  }

  let { section, project }: Props = $props();

  let layout = $derived(moodboardLayouts[section.layout]);
</script>

<Slide accent={project.accentColor}>
  {#snippet stage()}
    <div class='board'>
      <h2>{section.title}</h2>
      <div class='grid' style:grid-template-columns={layout.columns} style:grid-template-rows={`repeat(${layout.rows}, 1fr)`}>
        {#each layout.tiles as tile (tile.key)}
          {@const image = section.tiles[tile.key]}
          <div
            class='cell'
            style:grid-column={`${tile.col} / span ${tile.w}`}
            style:grid-row={`${tile.row} / span ${tile.h}`}
          >
            <div class='tile'>
              {#if image}
                <CroppedImage imageId={image.imageId} alt={image.alt} crop={image.crop} sizes='min(50vw, 700px)' />
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/snippet}
  {#snippet footer()}
    <SlideFooter label={section.label} palette={section.palette} branding={project.branding} />
  {/snippet}
</Slide>

<style lang='scss'>
  @use './slide' as *;

  .board {
    display: grid;
    grid-template-rows: u(40) 1fr;
    row-gap: u($gap);
    height: 100%;
  }

  h2 {
    font-size: u(24);
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  .grid {
    display: grid;
    min-height: 0;
  }

  // Cells have no gap; padding creates the 8px gutter so tile spans stay exact.
  .cell {
    padding: u(4);
    min-height: 0;
    min-width: 0;
  }

  .tile {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $side-band;
  }
</style>
