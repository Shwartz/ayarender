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

<section class='grey'>
  <div>
    <h1>What I can create for you</h1>
    <p>Interior visuals tailored to how you present designs to your clients.</p>

    <ul class='services-grid'>
      <li class='service-card'>
        <div class='card-image'>
          <img src='/images/3d-render.jpg' alt='3D interior visual example' />
        </div>
        <h3>3D interior visuals</h3>
        <p>Photorealistic 3D visuals that help you sell concepts, avoid misunderstandings and reduce costly revisions.</p>
        <span class='link'>See Examples</span>
      </li>

      <li class='service-card'>
        <div class='card-image'>
          <img src='/images/rendered-floor-plan.jpg' alt='Rendered floor plan example' />
        </div>
        <h3>Rendered Floor Plans</h3>
        <p>Colour-rendered floor plans that make layouts and zoning instantly clear for your clients.</p>
        <span class='link'>See Examples</span>
      </li>

      <li class='service-card'>
        <div class='card-image'>
          <img src='/images/technical-drawing.jpg' alt='Technical drawing example' />
        </div>
        <h3>Technical drawings & layouts</h3>
        <p>Plans, lighting and electrical layouts, and joinery drawings, branded for your studio if needed.</p>
        <span class='link'>See Examples</span>
      </li>

      <li class='service-card'>
        <div class='card-image'>
          <img src='/images/rendered-2d-elevation.jpg' alt='Rendered elevation example' />
        </div>
        <h3>Rendered Elevations</h3>
        <p>Interior elevations that highlight finishes, joinery and key design details in a client-friendly way.</p>
        <span class='link'>See Examples</span>
      </li>
    </ul>
  </div>
</section>

<style lang='scss'>

  .hero {
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

  .grey {
    .services-grid {
      list-style: none;
      padding: 0;
      margin: 3rem 0 0;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      .service-card {
        padding: 0;
        background: white;
        border-radius: 0.5rem;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .card-image {
          width: 100%;
          height: 240px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }

        h3 {
          font-size: 1.5rem;
          margin: 1.5rem 1.5rem 1rem;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 1.5rem 1.5rem;
          color: #666;
        }

        .link {
          display: inline-block;
          margin: 0 1.5rem 1.5rem;
          color: #333;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          cursor: pointer;

          &:after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background: currentColor;
            transform: scaleX(1);
            transition: transform 0.2s ease;
          }

          &:hover:after {
            transform: scaleX(0.8);
          }
        }
      }

      // Medium screens: center cards with max-width
      @media (min-width: 500px) and (max-width: 799px) {
        .service-card {
          max-width: 500px;
          margin: 0 auto;
        }
      }

      // Desktop: 2-column grid
      @media (min-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      // Larger screens: increase gap
      @media (min-width: 1200px) {
        gap: 3rem;
      }
    }
  }

</style>
