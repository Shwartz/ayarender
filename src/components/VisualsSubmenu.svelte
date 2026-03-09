<script lang='ts'>
  interface Props {
    currentPath: string;
  }

  let { currentPath }: Props = $props();

  const menuItems = [
    { href: '/visuals/3d-interior-visuals', label: '3D Interior Visuals' },
    { href: '/visuals/rendered-floor-plans', label: 'Rendered Floor Plans' },
    { href: '/visuals/rendered-elevations', label: 'Rendered Elevations' },
    { href: '/visuals/technical-drawings', label: 'Technical Drawings' }
  ];
</script>

<nav class='submenu' aria-label='Interior Visuals submenu'>
  {#each menuItems as item}
    <a
      href={item.href}
      class:active={currentPath.includes(item.href)}
    >
      {item.label}
    </a>
  {/each}
</nav>

<style>
  .submenu {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
    background: var(--aya-sand-50);
    border-radius: 0.5rem;
  }

  .submenu a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: var(--aya-navy-700);
    border-bottom: 2px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;
    font-size: 1rem;
    line-height: 1.5;
  }

  .submenu a:hover {
    color: var(--aya-navy-900);
  }

  .submenu a.active {
    border-bottom-color: var(--aya-navy-900);
    font-weight: 600;
    color: var(--aya-navy-900);
  }

  /* Hide submenu on mobile - navigation handled by hamburger menu */
  @media (max-width: 799px) {
    .submenu {
      display: none;
    }
  }
</style>

