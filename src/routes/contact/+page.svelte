<script lang='ts'>
	import { superForm } from 'sveltekit-superforms/client';
	// import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
	import type { PageData } from './$types';
	import { contactSchema } from '$lib/contactSchema';
	import { BarLoader } from 'svelte-loading-spinners';
	import { base } from '$app/paths';

	export let data: PageData;

	const { form, errors, enhance, message, delayed } = superForm(data.form, {
		taintedMessage: 'Are you sure you want leave?',
		validators: contactSchema
	});

	const title = 'Contacts | Ayarender';
	const description = 'Aija will help you with design Visualisation, 2D and 3D rendering and Technical drawings';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name='description' content='{description}' />
	<meta property='og:title' content='{title}' />
	<meta property='og:description' content='{description}' />
	<meta property='twitter:title' content='{title}' />
	<meta property='twitter:description' content='{description}' />
	<meta property='og:image' content='{base}/images/aija-svarcs-gallery.jpg' />
	<meta property='og:image:alt' content='Aija Svarcs holding colourful picture' />
	<meta name='robots' content='index,follow' />
</svelte:head>

<section class='hero'>
	<div class='hero'>
		<div>
			<div class='jumbo'></div>
		</div>
		<h1 class='title'>
			Contacts
		</h1>
	</div>
</section>

<section class='large vLine'>
	<div class='content'>
		<div class='contactForm'>
			<!--<SuperDebug data={$form} />-->
			<form method='POST' use:enhance action='?/contactForm'>
				<label class='smallText' for='communication'>Your Message</label>
				<textarea
					placeholder='Please email me with details of your project and I will get in touch with you in one working day.'
					id='communication'
					name='communication'
					bind:value={$form.communication}
				></textarea>
				{#if $errors.communication}
					<small class='warning'>{$errors.communication}</small>
				{/if}

				<label class='smallText' for='email'>Email</label>
				<input
					required
					type='email'
					id='email'
					name='email'
					placeholder='Enter your email'
					bind:value={$form.email} />
				{#if $errors.email}
					<small class='warning'>{$errors.email}</small>
				{/if}

				<div class='send light'>
					{#if $delayed}
						<BarLoader color='#ffaa4d' />
					{/if}
					<button class='btn-forward' type='submit'>Send</button>
				</div>
			</form>

			{#if $message}
				<div
					class='mt-1'
					class:success={$message.status === 'success'}
					class:error={$message.status === 'error'}
				>
					{$message.text}
				</div>
			{/if}
		</div>
		<div class='right'>
			<p class='mediumTitle'>Hi, my name is Aija <br /><i>(pronounce as I-ya)</i></p>
			<p>
				Welcome, dear visitor, to a crossroads of creativity and expertise! As you've journeyed to this page, there are
				just two possibilities. First, you might be an interior design connoisseur on a quest for inspiration, in which
				case, your destination is our illustrious Portfolio.</p>
			<p>Alternatively, you could be seeking the guiding light for
				your design documentation and visualization needs. Whatever the case, your design aspirations find their home
				here!
			</p>
		</div>
	</div>
</section>

<style lang='scss'>
  .send {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    backdrop-filter: blur(3px);
    border: 1px solid var(--cSand5);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.4);
  }

  input, textarea {
    border: 1px solid var(--cBlack10);
    border-radius: 4px;
    padding: 4px;
    margin-top: 4px;
    background: var(--cWhite);
  }

  textarea {
    height: 12rem;
  }

  button {
    cursor: pointer;
    margin-right: auto;
  }

  .mt-1 {
    margin-top: 1rem;
  }

  .right {
    margin-top: 3rem;
  }

  .error {
    color: var(--cBrick10);
  }

  .success {
    color: var(--cGreen10);
  }

  .warning {
    color: var(--cOrange10);
  }

  @media (min-width: 800px) {
    .content {
      display: flex;
      align-items: center;
      gap: 3rem;

      > div {
        width: 50%;
      }
    }

    .right {
      margin-top: 0;
    }

    form {
      padding: 2rem 3rem;
    }
  }
</style>
