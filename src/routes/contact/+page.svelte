<script lang="ts">
  import { superForm } from "sveltekit-superforms/client";
  // import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
  import type { PageData } from "./$types";
  import { contactSchema } from "../../lib/contactSchema";
  import { BarLoader } from "svelte-loading-spinners";
  import { base } from "$app/paths";

  export let data: PageData;

  const { form, errors, enhance, message, delayed } = superForm(data.form, {
    taintedMessage: "Are you sure you want leave?",
    validators: contactSchema
  });
</script>

<svelte:head>
  <meta name="description" content="AyaRender: Get in touch" />
</svelte:head>

<section class="hero">
  <div>
    <div class="videoContainer">
      <video autoplay loop muted>
        <source src="{base}/video/purplish.webm" type="video/webm" />
        <source src="{base}/video/purplish.mp4" type="video/mp4" />
      </video>
    </div>
    <h1>Contacts</h1>
  </div>
</section>

<section class="medium">
  <div class="content">
    <div>
      <!--<SuperDebug data={$form} />-->
      <form method="POST" use:enhance action="?/contactForm">
        <label class="smallText" for="communication">Your Message</label>
        <textarea
          placeholder="Please email me with details of your project and I will get in touch with you in one working day."
          id="communication"
          name="communication"
          bind:value={$form.communication}
        ></textarea>
        {#if $errors.communication}
          <small class="warning">{$errors.communication}</small>
        {/if}

        <label class="smallText" for="email">Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          bind:value={$form.email} />
        {#if $errors.email}
          <small class="warning">{$errors.email}</small>
        {/if}

        <div class="send">
          {#if $delayed}
            <BarLoader color="#ffaa4d" />
          {/if}
          <button class="btn-forward" type="submit">Send</button>
        </div>
      </form>

      {#if $message}
        <div
          class="mt-1"
          class:success={$message.status == 'success'}
          class:error={$message.status == 'error'}
        >
          {$message.text}
        </div>
      {/if}
    </div>
    <div class="right">
      <p class="mediumTitle">Hi, my name is Aija <br /><i>(pronounce as Aya or Ah-yah)</i></p>
      <p>There is a technical term for what I do<br/> - Interior Design visualiser, but I would like to call myself
        Spatial Magician.</p>
      <p>I can virtually transfer existing living space and show you images of the property that hasn't even been built
        yet.</p>
      <p>I specialise in Technical Drawings, Rendered Floor Plans, Rendered 2D Elevations and Design Boards</p>
    </div>
  </div>
</section>

<style lang="scss">
  .hero {
    background-size: cover;
    color: var(--cWhite);

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    h1 {
      position: relative;
      margin-bottom: 3rem;
      font-size: 2rem;
      text-align: center;
      text-shadow: 0 0 6px white;
      font-weight: bold;
      letter-spacing: 1px;
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
      background: rgba(0,0,0,0.2);
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
  }

  input, textarea {
    border: 1px solid var(--cBlack5);
    border-radius: 4px;
    padding: 4px;
    margin-top: 4px;
  }

  textarea {
    height: 8rem;
  }

  button {
    cursor: pointer;
    margin-left: auto;
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
      gap: 3rem;
    }

    form {
      width: 300px;
    }

    .right {
      margin-top: 0;
    }
  }


</style>
