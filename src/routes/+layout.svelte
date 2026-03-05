<script lang='ts'>
  import { base } from '$app/paths';
  import { page } from '$app/state';
  import './globalStyles.css';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let url = $derived(page.url.pathname.split('/')[1]);
</script>

<div class='page'>
  <div class='wrap'>
    <header class='main'>
      <a class='logo' href='/'>
        <img src='/icons/logo.svg' alt='Ayarender Logo' />
        <span>Aija Svarcs</span>
      </a>
      <nav>
        <a class:active={url === '' || url === 'portfolio'} href='/'>Home</a>
        <a class:active={url === 'visuals'} href='/visuals/3d-interior-visuals'>Interior Visuals</a>
        <a class:active={url === 'price'} href='/'>Process &amp; Pricing</a>
        <a class:active={url === 'contact'} href='/contact'>Contact</a>
      </nav>
    </header>

    {@render children?.()}

    <footer class='large section'>
      <div>
        <p class='left'>
          &copy; 2025 Ayarender | Follow on <a href='https://instagram.com/aya.render'>
          <img alt='Instagram' src='/icons/instagram.svg' height='24' width='24' /></a
        >
        </p>
        <p class='shvarcs'>Created by <a class='animate' href='https://shvarcs.com/'>Shvarcs</a></p>
      </div>
    </footer>
  </div>
</div>

<style lang='scss'>
  header.main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  .wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    background: #fff;
    margin: 0 1rem;
    margin-inline: auto;
    max-width: 1280px;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  footer {
    margin-top: auto;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .logo img {
    width: 48px;
    height: 48px;
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  nav a {
    text-decoration: none;
    color: var(--cNight);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 300ms;

    border: 1px solid red;

    &.active {
      background-color: var(--cNight);
      color: var(--cWhite);
    }

    &:not(.active):hover {
      background-color: var(--cNight);
      color: var(--cWhite);
    }
  }

  footer {
    min-height: 2rem;

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

    @media (min-width: 800px) {
      div {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .shvarcs {
      font-size: 0.8rem;
    }
  }
</style>
