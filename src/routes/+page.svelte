<script>
	import { base } from '$app/paths';
	const title = 'Interior Visualiser';
	const description = 'Converting interior designs in 2D and 3D visualisation';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="og:image" content="{base}/images/rendered-2d-elevation.jpg" />
	<meta property="og:image:alt" content="Example of 2D elevation" />
	<meta name="robots" content="index,follow" />
</svelte:head>

<section class="large overflow">
	<div class="boxes">
    <h1>Home page</h1>
  </div>
</section>

<style lang="scss">

</style>
