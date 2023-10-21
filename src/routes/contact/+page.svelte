<script lang="ts">
  import { superForm } from "sveltekit-superforms/client"
  import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
  import type { PageData } from "./$types"
  import { contactSchema } from "../../lib/contactSchema";
  export let data: PageData;

  const { form, errors, enhance, message } = superForm(data.form, {
    taintedMessage: "Are you sure you want leave?",
    validators: contactSchema
  });
</script>

<section class="hero">
  <div>
    <h1>Contacts</h1>
  </div>
</section>

<section class="medium">
  <div>
    <SuperDebug data={$form} />

    <form method="POST" use:enhance action="?/contactForm">
      <label for="communication">Your Message</label>
      <textarea
        placeholder="Please send your request and I'll get in touch with you"
        id="communication"
        name="communication"
        bind:value={$form.communication}
        ></textarea>
      {#if $errors.communication}
        <small>{$errors.communication}</small>
      {/if}

      <label for="email">Email</label>
      <input
        required
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        bind:value={$form.email} />
      {#if $errors.email}
        <small>{$errors.email}</small>
      {/if}

      <button type="submit">Submit</button>
    </form>

    {#if $message}
      <div
        class:success={$message.status == 'success'}
        class:error={$message.status == 'error'}
      >
        {$message.text}
      </div>
    {/if}
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

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border: 1px solid grey;
  }

  textarea {
    border: 1px solid grey;
  }

  button {
    border: 1px solid orange;
    cursor: pointer;
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }
</style>
