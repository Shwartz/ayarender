<script lang="ts">
  import { superForm } from "sveltekit-superforms/client";
  // import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
  import type { PageData } from "./$types";
  import { contactSchema } from "../../lib/contactSchema";
  import { BarLoader } from "svelte-loading-spinners";

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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nulla facilisis, iaculis mi eget,
        dictum eros. Morbi tristique mi et feugiat aliquam. Curabitur malesuada quis purus a aliquam. Proin consectetur
        vel orci vel fermentum. Vestibulum dignissim euismod metus, sed semper odio semper vel. Nullam sodales pulvinar
        convallis. Vestibulum egestas leo mi, quis tincidunt diam aliquam ac.</p>
    </div>
  </div>
</section>

<style lang="scss">
  .hero {
    background: url('/images/hero-contacts.jpg') 50% 50% no-repeat;
    background-size: cover;
    color: var(--cWhite);

    div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    h1 {
      margin-bottom: 3rem;
      font-size: 2rem;
      text-align: center;
      text-shadow: 0 0 6px white;
      font-weight: bold;
      letter-spacing: 1px;
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
