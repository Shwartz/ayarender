<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Logo from "/src/assets/icons/logo.svg?component";
  import "./globalStyles.css";

  $:url = $page.url.pathname.split("/")[1];
</script>

<div class="page">

  <section>
    <div class="nav">
      <div>
          <a class:active={url === '' || url === 'portfolio'} href="{base}/">Home</a>
          <a class:active={url === 'contact'} href="{base}/contact">Contact</a>
          <!--<li><a class:active={url === 'portfolio'} href="{base}/portfolio">Portfolio</a></li>-->
      </div>
      <div>
        <a href="{base}/">
          <Logo width="48" height="48" />
        </a>
      </div>
      <div>&nbsp;</div>
    </div>
  </section>

  <slot />
  <footer class="large section">
    <div>
      <p class="left">&copy; 2023 Ayarender | Follow on <a href="https://instagram.com/aya.render">
        <img alt="Instagram"
             src="/icons/instagram.svg"
             height="24" width="24"></a>
      </p>
      <p>Created by <a href="https://shvarcs.com/">Shvarcs</a></p>
    </div>
  </footer>
</div>

<style lang="scss">
  .nav {
    display: flex;
    flex-direction: column-reverse;

    div {
      align-items: center;
    }

    div:nth-child(1) {
      margin-top: 1rem;
      text-align: center;

      a {
        display: inline-block;
        padding: 0.5rem 1.5rem;

        &.active {
          border-radius: 20px;
          background: var(--cBlack10);
          color: var(--cWhite);
          font-weight: 700;
        }
      }
    }

    div:nth-child(2) {
      text-align: center;
    }

    div:nth-child(3) {
      display: none;
    }

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 64px 1fr;

      div:nth-child(1) {
        display: flex;
        margin: 0;
        text-align: left;
      }

      div:nth-child(3) {
        display: block;
      }
    }
  }



  footer {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background: var(--cBlack8);
    color: var(--cSand5);
    min-height: 12rem;

    div {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      max-width: 800px;
      margin: auto;
    }

    p {
      font-size: 1rem;
      margin: 0;
      line-height: 1.5rem;
    }

    .left {
      display: flex;
      gap: 0.5rem;
    }

    img {
      display: block;
      width: 24px;
      height: 24px;
      filter: grayscale(60%);
      transition: filter 300ms;

      &:hover {
        filter: grayscale(0);
      }
    }

    a {
      text-decoration: underline;

      &:hover {
        color: var(--cWhite);
      }
    }

    @media (min-width: 800px) {
      div {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
</style>
