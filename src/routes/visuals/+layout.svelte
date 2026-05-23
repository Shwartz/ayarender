<script lang='ts'>
  import { page } from '$app/state';
  import VisualsSubmenu from '../../components/VisualsSubmenu.svelte';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let currentPath = $derived(page.url.pathname);
</script>

<div class='visuals-layout'>
  <VisualsSubmenu {currentPath} />

  {@render children?.()}
</div>

<style>
  .visuals-layout {
    padding: 2rem;
  }
</style>
