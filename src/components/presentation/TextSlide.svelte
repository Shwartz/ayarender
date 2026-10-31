<script lang="ts">
  import type { Project, TextSection } from '$lib/presentations/types';
  import Slide from './Slide.svelte';

  interface Props {
    section: TextSection;
    project: Project;
  }

  let { section, project }: Props = $props();
</script>

<Slide accent={project.accentColor}>
  {#snippet stage()}
    <div class='frame'>
      <div class='content'>
        {#if section.heading}<h2>{section.heading}</h2>{/if}
        {#if section.subheading}<p class='sub'>{section.subheading}</p>{/if}
        {#each section.blocks as block}
          <div class='block'>
            {#if block.title}<h3>{block.title}</h3>{/if}
            <p>{block.body}</p>
          </div>
        {/each}
      </div>
      <div class='side'></div>
    </div>
  {/snippet}
</Slide>

<style lang='scss'>
  @use './slide' as *;

  .frame {
    position: relative;
    height: 100%;
    border: u(2) solid $line;
    overflow: hidden;
  }

  .content {
    padding: u(64) u(160) u(64) u(96);
    max-width: u(960);
  }

  .side {
    position: absolute;
    inset: 0 0 0 auto;
    width: u(128);
    background: $side-band;
  }

  h2 {
    font-size: u(64);
    font-weight: 300;
    line-height: 1.2;
  }

  .sub {
    margin-top: u(24);
    font-size: u(24);
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  .block {
    margin-top: u(40);

    h3 {
      font-size: u(20);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    p {
      margin-top: u(8);
      font-size: u(20);
      line-height: u(32);
    }
  }
</style>
