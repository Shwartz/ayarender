<script lang="ts">
  import { base } from "$app/paths";
  import { enhance } from '$app/forms';

  export let form;
  let email = '';
  let message= '';
</script>

<section class="hero">
  <div>
    <h1>Contacts</h1>
  </div>
</section>

<section class="medium">
  <div>
    {#if form?.missing}<p class="error">All fields are required</p>{/if}
    {#if !form?.success}
    <form method="POST" use:enhance action="?/contactForm">
      <label for="message">Message</label>
      <textarea
        placeholder="Please send your request and I'll get in touch with you"
        id="message"
        name="message"
        bind:value={message}
        ></textarea>

      <label for="email">Email</label>
      <input
        required
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        bind:value={email} />

      <button type="submit">Submit</button>
    </form>
    {/if}
    {#if form?.success}
      <p>Thank you for sending your request. I will contact you soon.</p>
      <p>Email: {form?.resEmail}, Message: {form?.resMsg}</p>
      <a href="{base}/contact">Send new message</a>
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
</style>
