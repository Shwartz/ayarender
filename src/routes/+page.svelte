<script>
  const title = 'Interior Visualiser';
  const description = 'Converting interior designs in 2D and 3D visualisation';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name='description' content={description} />
  <meta property='og:title' content={title} />
  <meta property='og:description' content={description} />
  <meta property='twitter:title' content={title} />
  <meta property='twitter:description' content={description} />
  <meta property='og:image' content='/images/rendered-2d-elevation.jpg' />
  <meta property='og:image:alt' content='Example of 2D elevation' />
  <meta name='robots' content='index,follow' />
</svelte:head>

<section class='hero'>
  <div>
    <div class='content'>
      <h1>For interior designers, studios and architects who need client-ready visuals</h1>
      <p>3D interior visualisations that help interior designers win approvals faster and sell concepts with less
        back-and-forth.</p>
    </div>
    <div class='visual'>
      <img
        src="/images/3d-visualisation-from-above.jpg"
        alt="Example of 2D elevation"
      />
    </div>
  </div>
</section>

<section>
  <div>
    <h1>Home page</h1>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
  </div>
</section>

<style lang='scss'>

  .hero {
    background: var(--aya-navy-900);
    color: var(--aya-white);
    border-top: 1px solid var(--aya-navy-700);

    > div {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0;

      // Mobile: visual comes first in DOM order
      .visual {
        order: -1;
        width: 100%;
        overflow: hidden;
        padding: 2rem;
        max-height: 500px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 1rem;
        }
      }

      .content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          margin-bottom: 3rem;
          max-width: 24ch;
        }

        p {
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 4rem;
          max-width: 28ch;
        }
      }

      // Desktop: two-column layout at 800px
      @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
        gap: 0;

        .visual {
          order: 0;
          min-height: 500px;
          max-height: initial;
          padding-left: 0;
        }

        .content {
          padding-right: 3rem;
        }
      }

      // Larger screens: adjust proportions
      @media (min-width: 1200px) {
        .visual {
          min-height: 600px;
        }
      }
    }
  }

</style>
