<script>
	import { base } from '$app/paths';
	const title = 'Process & Pricing | Ayarender';
	const description = 'Learn about our interior visualization process and pricing for 2D and 3D rendering services';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="og:image" content="{base}/images/3d-render.jpg" />
	<meta property="og:image:alt" content="3D interior rendering example" />
	<meta name="robots" content="index,follow" />
</svelte:head>

<section class="hero">
	<div class="hero">
		<div>
			<div class="jumbo"></div>
		</div>
		<h1 class="title">Process & Pricing</h1>
	</div>
</section>

<section class="large vLine">
	<div class="content">
		<h2>Our Process</h2>
		<p>Coming soon - detailed information about our interior visualization process.</p>

		<h2>Pricing</h2>
		<p>Coming soon - transparent pricing for our services.</p>

		<p>In the meantime, feel free to <a href="/contact">contact us</a> for a custom quote.</p>
	</div>
</section>

<style lang="scss">
	.hero {
		position: relative;
		min-height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, var(--aya-navy-900) 0%, var(--aya-navy-700) 100%);

		.jumbo {
			position: absolute;
			inset: 0;
			background-image: url('/images/presentation-board.jpg');
			background-size: cover;
			background-position: center;
			opacity: 0.3;
		}

		.title {
			position: relative;
			z-index: 1;
			color: var(--aya-white);
			font-size: 3rem;
			margin: 0;
		}
	}

	.content {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;

		h2 {
			color: var(--aya-navy-900);
			margin-top: 2rem;
			margin-bottom: 1rem;
		}

		p {
			line-height: 1.6;
			margin-bottom: 1rem;
		}

		a {
			color: var(--aya-navy-700);
			text-decoration: underline;

			&:hover {
				color: var(--aya-navy-500);
			}
		}
	}
</style>
