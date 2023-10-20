<script>
  import { base } from "$app/paths";
</script>

<section class="hero">
  <div>
    <h1>Contacts</h1>
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
</style>
