<script lang='ts'>
  import TextSlide from '$components/presentation/TextSlide.svelte';
  import MoodboardSlide from '$components/presentation/MoodboardSlide.svelte';
  import ImageSlide from '$components/presentation/ImageSlide.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  let project = $derived(data.project);
</script>

<svelte:head>
  <title>{project.title}</title>
  <meta name='robots' content='noindex, nofollow' />
</svelte:head>

<main class='deck'>
  {#each project.sections as section}
    {#if section.type === 'text'}
      <TextSlide {section} {project} />
    {:else if section.type === 'moodboard'}
      <MoodboardSlide {section} {project} />
    {:else if section.type === 'image'}
      <ImageSlide {section} {project} />
    {/if}
  {/each}
</main>

<style>
  /* Dark strip between slides mirrors scrolling through the PDF. */
  .deck {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 100vh;
    padding: 8px 0;
    background: #1c1c1c;
  }

  @media print {
    @page {
      size: A4 landscape;
      margin: 0;
    }

    .deck {
      gap: 0;
      padding: 0;
      background: none;
    }
  }
</style>
