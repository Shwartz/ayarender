<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Gallery | AyaRender</title>
  <meta name="description" content="Examples of Rendered Floor plans, 2D elevations, design boards and technical drawings I can produce for clients" />
</svelte:head>

<section class="hero">
  <div>
    <h1>Gallery</h1>
  </div>
</section>

<section class="large">
  <div class="card">
    <div>
      <h2 class="mediumTitle">Technical Drawings</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="{base}/gallery/technical-drawings">Technical Drawing</a>
    </div>
    <img src="{base}/images/technical-drawing.jpg" alt="Technical drawing">
  </div>
</section>

<section class="large bg-light">
  <div class="card">
    <div>
      <h2 class="mediumTitle">Rendered Floor Plans</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="#">Rendered Floor Plans</a>
    </div>
    <img src="{base}/images/rendered-floor-plan.jpg" alt="Rendered Floor Plan">
  </div>
</section>

<section class="large">
  <div class="card">
    <div>
      <h2 class="mediumTitle">Rendered 2D Elevations</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="#">Rendered 2D Elevations</a>
    </div>
    <img src="{base}/images/rendered-2d-elevation.jpg" alt="Rendered 2D Elevation">
  </div>
</section>

<section class="large bg-light">
  <div class="card">
    <div>
      <h2 class="mediumTitle">Design Boards</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="#">Design Boards</a>
    </div>
    <img src="{base}/images/design-board.jpg" alt="Design Boards">
  </div>
</section>

<section class="large">
  <div class="card">
    <div>
      <h2 class="mediumTitle">3D Renders</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="#">3D Renders</a>
    </div>
    <img src="{base}/images/3d-render.jpg" alt="3D Render">
  </div>
</section>

<style lang="scss">
  .hero {
    background: url('/images/hero-gallery.jpg') 50% 50% no-repeat;
    background-size: cover;
    color: var(--cWhite);

    div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    h1 {
      margin-bottom: 3rem;
      font-size: 2rem;
      text-align: center;
      text-shadow: 0 0 6px white;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    > div {
      flex-basis: fit-content;
      max-width: 500px;
    }

    img {
      padding: 8px;
      background: white;
      box-shadow: 0 0 4px rgba(0,0,0,0.2);
      min-width: 300px;
    }

    a {
      margin-top: 2rem;
    }

    @media (min-width: 750px) {
      flex-direction: row;
    }
  }
</style>
