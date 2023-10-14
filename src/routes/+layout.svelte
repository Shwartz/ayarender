<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Logo from "/static/icons/logo.svg?component";
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
      <li><a class:active={url === 'gallery'} href="{base}/gallery">Gallery</a></li>
      <li><a class:active={url === 'contact'} href="{base}/contact">Contact</a></li>
    </ul>
  </nav>
  <slot/>
</div>

<style lang="scss">
  nav {
    border-bottom: 1px solid var(--cBlack5);
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
