<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Logo from "/src/assets/icons/logo.svg?component";
  import "./globalStyles.css";

  $:url = $page.url.pathname.split('/')[1];
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
  <slot/>
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

    a {
      display: block;
      &.active,
      &:focus {
        text-decoration: underline;
      }
    }
  }
</style>
