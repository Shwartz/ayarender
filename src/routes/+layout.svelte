<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Logo from "/src/assets/icons/logo.svg?component";
  import "./globalStyles.css";

  $:url = $page.url.pathname.split("/")[1];
</script>

<div class="page">
  <nav class="section large">
    <ul>
      <li>
        <a class:active={url === ''} href="{base}/">
          <Logo width="48" height="48" />
        </a>
      </li>
      <li><a class:active={url === ''} href="{base}/">Home</a></li>
      <!--<li><a class:active={url === 'portfolio'} href="{base}/portfolio">Portfolio</a></li>-->
      <li><a class:active={url === 'contact'} href="{base}/contact">Contact</a></li>
    </ul>
  </nav>
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
  nav {
    background: var(--cSand1);
    color: var(--cBlack10);
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 1.2rem;

    li:first-child {
      margin-right: 1rem;
    }

    a {
      display: block;

      &.active,
      &:focus {
        text-decoration: underline;
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

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
  }
</style>
