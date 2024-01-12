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
</script>

<svelte:head>
	<meta name='description' content='Get in touch | Ayarender' />
</svelte:head>

<section class='hero'>
	<div>
		<div class='videoContainer'>
			<video preload autoplay loop muted playsinline>
				<source src='{base}/video/hero-contacts.webm' type='video/webm' />
				<source src='{base}/video/hero-contacts.mp4' type='video/mp4' />
			</video>
		</div>
		<h1>Contacts</h1>
	</div>
</section>

<section class='large fullHeight'>
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
			<p class='mediumTitle'>Hi, my name is Aija <br /><i>(pronounce as Aya or Ah-yah)</i></p>
			<p>There is a technical term for what I do<br /> - <em>Interior Design visualiser</em>, but I would like to call
				myself <em>Spatial Magician</em>.</p>
			<p>I can virtually transfer existing living space and show you images of the property that hasn't even been built
				yet.</p>
			<p>I specialise in Technical Drawings, Rendered Floor Plans, Rendered 2D Elevations and Design Boards</p>
		</div>
	</div>
</section>

<style lang='scss'>
  .hero {
    background-size: cover;

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    h1 {
      font-size: clamp(2rem, 3vw, 4rem);
    }
  }

  .videoContainer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgb(63 32 33 / 40%);
    }

    video {
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  i {
    font-style: italic;
    font-size: 1rem;
  }

  em {
    /*font-family: var(--font-bold);*/
    font-weight: 700;
  }

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

  .fullHeight {
    /* full height - nav */
    min-height: calc(100vh - 388px);
    background: url('/images/bg-contacts.jpg') no-repeat 50%;
    background-size: cover;
  }
</style>
