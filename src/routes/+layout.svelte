<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Logo from "/static/icons/logo.svg?component";
  import "./globalStyles.css";
</script>

<div class="page">
  <nav>
    <ul>
      <li>
        <a class:active={$page.url.pathname === '/'} href="{base}/">
          <Logo width="48" height="48" />
        </a>
      </li>
      <li><a class:active={$page.url.pathname === '/'} href="{base}/">Home</a></li>
      <li><a class:active={$page.url.pathname === '/gallery'} href="{base}/gallery">Gallery</a></li>
      <li><a class:active={$page.url.pathname === '/contact'} href="{base}/contact">Contact</a></li>
    </ul>
  </nav>
  <slot/>
</div>

<style lang="scss">
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 4px 0;
    border-bottom: 1px solid var(--cBlack5);

    a {
      display: block;
      &.active,
      &:focus {
        text-decoration: underline;
      }
    }
  }
</style>
