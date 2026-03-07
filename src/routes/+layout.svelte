<script lang='ts'>
  import { page } from '$app/state';
  import './globalStyles.css';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let url = $derived(page.url.pathname.split('/')[1]);
  let mobileMenuOpen = $state(false);
  let mobileMenuPanel: HTMLDivElement | undefined = $state();

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    // Focus the mobile menu panel when opened for keyboard navigation
    if (mobileMenuOpen) {
      setTimeout(() => {
        mobileMenuPanel?.focus();
      }, 50);
    }
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && mobileMenuOpen) {
      closeMobileMenu();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div class='page'>
  <div class='wrap'>
    <header class='main'>
      <a class='logo' href='/'>
        <img src='/icons/logo.svg' alt='Ayarender Logo' />
        <span>AYARENDER</span>
      </a>
      <nav class='desktop-nav' aria-label='Main navigation'>
        <a class:active={url === 'visuals'} href='/visuals/3d-interior-visuals'>Interior Visuals</a>
        <a class:active={url === 'price'} href='/price'>Process &amp; Pricing</a>
        <a class:active={url === 'contact'} href='/contact'>Contact</a>
      </nav>
      <a class='btn booking desktop-cta' href='/contact'>Book a project</a>

      <!-- Hamburger Button (Mobile Only) -->
      <button
        class='hamburger'
        onclick={toggleMobileMenu}
        aria-label='Toggle menu'
        aria-expanded={mobileMenuOpen}
      >
        <span class:open={mobileMenuOpen}></span>
        <span class:open={mobileMenuOpen}></span>
        <span class:open={mobileMenuOpen}></span>
      </button>
    </header>

    <!-- Mobile Menu Panel -->
    {#if mobileMenuOpen}
      <div
        bind:this={mobileMenuPanel}
        class='mobile-menu-panel'
        role='dialog'
        aria-modal='true'
        aria-label='Mobile navigation menu'
        tabindex='-1'
      >
        <nav class='mobile-nav' aria-label='Main navigation'>
          <a
            class:active={url === ''}
            href='/'
            onclick={closeMobileMenu}
          >
            Home
          </a>

          <div class='nav-section' role='group' aria-label='Interior Visuals submenu'>
            <p class='parent-item'>Interior Visuals</p>
            <a
              class='sub-item'
              class:active={page.url.pathname.includes('3d-interior-visuals')}
              href='/visuals/3d-interior-visuals'
              onclick={closeMobileMenu}
            >
              3D Interior Visuals
            </a>
            <a
              class='sub-item'
              class:active={page.url.pathname.includes('rendered-floor-plans')}
              href='/visuals/rendered-floor-plans'
              onclick={closeMobileMenu}
            >
              Rendered Floor Plans
            </a>
            <a
              class='sub-item'
              class:active={page.url.pathname.includes('rendered-elevations')}
              href='/visuals/rendered-elevations'
              onclick={closeMobileMenu}
            >
              Rendered Elevations
            </a>
            <a
              class='sub-item'
              class:active={page.url.pathname.includes('technical-drawings')}
              href='/visuals/technical-drawings'
              onclick={closeMobileMenu}
            >
              Technical Drawings
            </a>
          </div>

          <a
            class:active={url === 'price'}
            href='/price'
            onclick={closeMobileMenu}
          >
            Process &amp; Pricing
          </a>
          <a
            class:active={url === 'contact'}
            href='/contact'
            onclick={closeMobileMenu}
          >
            Contact
          </a>

          <a class='btn booking mobile-cta' href='/contact' onclick={closeMobileMenu}>
            Book a project
          </a>
        </nav>
      </div>

      <!-- Backdrop Overlay -->
      <div
        class='backdrop'
        onclick={closeMobileMenu}
        onkeydown={(e) => e.key === 'Enter' && closeMobileMenu()}
        role='button'
        tabindex='-1'
        aria-label='Close menu'
      ></div>
    {/if}

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
  .wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    background: var(--aya-white);
    margin: 0 1rem;
    margin-inline: auto;
    max-width: 1280px;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  header.main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem  2rem;
    background: var(--aya-navy-900);

    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: var(--aya-white);
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
    color: var(--aya-white);
    font-weight: 500;
    padding: 0.5rem;
    transition: color 300ms;

    &.active:not(.mobile-nav a) {
      border-bottom: 2px solid var(--aya-white);
    }

    &:not(.active):hover {
      color: var(--aya-navy-500);
    }
  }

  /* Hamburger Button Styles */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
      width: 30px;
      height: 3px;
      background: var(--aya-white);
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
      transform-origin: center;
    }

    span.open:nth-child(1) {
      transform: translateY(7.5px) rotate(45deg);
    }

    span.open:nth-child(2) {
      opacity: 0;
    }

    span.open:nth-child(3) {
      transform: translateY(-8.5px) rotate(-45deg);
    }
  }

  /* Mobile Menu Panel */
  .mobile-menu-panel {
    position: fixed;
    top: 0;
    right: 0;
    width: min(280px, 80vw);
    height: 100vh;
    background: var(--aya-navy-900);
    z-index: 1000;
    padding: 6rem 2rem 2rem;
    animation: slideIn 0.3s ease-in-out;

    /* Remove focus outline since this is programmatically focused for accessibility */
    &:focus {
      outline: none;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      text-decoration: none;
      color: var(--aya-white);
      font-weight: 500;
      padding: 0.75rem 0;
      transition: color 300ms;
      font-size: 1.1rem;

      &.active {
        color: var(--aya-navy-500);
      }

      &:hover {
        color: var(--aya-navy-500);
      }
    }
  }

  .nav-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .parent-item {
    color: var(--aya-white);
    font-weight: 600;
    font-size: 1.1rem;
    padding: 0.75rem 0;
    margin: 0; /* Reset paragraph margin */
  }

  .sub-item {
    padding-left: 1.5rem !important;
    font-size: 0.95rem !important;
    opacity: 0.9;
    border-left: 2px solid rgba(255, 255, 255, 0.3);
    margin-left: 0.5rem;

    &.active {
      opacity: 1;
      color: var(--aya-navy-500);
      border-left-color: var(--aya-white);
      font-weight: 600;
    }

    &:hover {
      opacity: 1;
      border-left-color: var(--aya-navy-500);
    }
  }

  .mobile-cta {
    margin-top: 1rem;
    text-align: center;
    display: block;
  }

  /* Backdrop Overlay */
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    animation: fadeIn 0.3s ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  /* Mobile Styles (<800px) */
  @media (max-width: 799px) {
    .desktop-nav {
      display: none;
    }

    .desktop-cta {
      display: none;
    }

    .hamburger {
      display: flex;
    }
  }

  /* Desktop Styles (≥800px) */
  @media (min-width: 800px) {
    .hamburger {
      display: none;
    }

    .mobile-menu-panel {
      display: none;
    }

    .backdrop {
      display: none;
    }
  }

  footer {
    min-height: 2rem;
    margin-top: auto;

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
