<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>AyaRender Interior Design</title>
  <meta name="description" content="Converting interior designs in 2D and 3D visualisation" />
</svelte:head>

<section class="hero">
  <div>
    <h1>2D and 3D Interior Design Visualisation <br />
      for Interior Designers</h1>
  </div>
</section>

<section class="large">
  <div class="card">
    <div>
      <h2 class="mediumTitle">Technical Drawings</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="{base}/portfolio/technical-drawings">Technical Drawing</a>
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
      <a class="btn-forward" href="{base}/portfolio/rendered-floor-plans">Rendered Floor Plans</a>
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
      <a class="btn-forward" href="{base}/portfolio/rendered-2d-elevations">Rendered 2D Elevations</a>
    </div>
    <img src="{base}/images/rendered-2d-elevation.jpg" alt="Rendered 2D Elevation">
  </div>
</section>

<section class="large bg-light">
  <div class="card">
    <div>
      <h2 class="mediumTitle">Presentation Boards</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="{base}/portfolio/presentation-boards">Presentation Boards</a>
    </div>
    <img src="{base}/images/presentation-board.jpg" alt="Presentation board">
  </div>
</section>

<section class="large">
  <div class="card">
    <div>
      <h2 class="mediumTitle">3D Renders</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="{base}/portfolio/3d-renders">3D Renders</a>
    </div>
    <img src="{base}/images/3d-render.jpg" alt="3D Render">
  </div>
</section>

<section class="medium bg-light" id="process">
  <div>
    <h2 class="largeTitle">Easy four step process</h2>
    <div class="process">
      <div>
        <h3><em>Step 1</em> - free initial consultation</h3>
        <p>To discuss a project, gather technical details and provide a written quotation for work.</p>
      </div>
      <div>
        <h3><em>Step 2</em> - booking the project</h3>
        <p>50% deposit is paid upon booking. Detailed project information is submitted via Email or DropBox. The
          information required can vary, however, standard project will require:</p>
        <ul>
          <li>floor plan and elevations with dimensions (including hand drawn sketches, existing AutoCAD, SketchUp files
            etc.)
          </li>
          <li>furniture layout with dimensions</li>
          <li>dimensions of windows and doors</li>
          <li>images or website links to all finishes (paint colour, fabric, hardware etc.)</li>
        </ul>
        <p>For branded documents:</p>
        <ul>
          <li>your logo,</li>
          <li>your contact info</li>
          <li>fonts, text size etc.</li>
          <li>title block (if applicable)</li>
        </ul>
      </div>
      <div>
        <h3><em>Step 3</em> - Design and revision stage</h3>
        <p>After studying the submitted information I start construction. In order for this stage to run smoothly and
          within agreed timescale make sure you provide as much relevant information as possible. Design draft is sent
          to the client for approval.</p>
      </div>
      <div>
        <h3><em>Step 4</em> - Final design</h3>
        <p>Revisions are made, if applicable, the final drawings are sent to the client via Email or DropBox and final
          invoice is issued.</p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .hero {
    position: relative;
    background: url('/images/hero-home.jpg') 50% 60% no-repeat;
    background-size: cover;
    color: var(--cWhite);

    > div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;

      &:after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
      }
    }

    h1 {
      position: relative;
      z-index: 1;
      margin-bottom: 3rem;
      font-size: clamp(1.5rem, 3vw, 4rem);
      text-align: center;
      text-shadow: 0 0 6px white;
      font-weight: bold;
      letter-spacing: 1px;
    }

    h3 {
      margin-bottom: 1rem;
    }

    nav {
      position: absolute;
      display: flex;
      gap: 1rem;
      bottom: 1rem;
    }

    a {
      padding: 0.5rem 1rem;
      border-radius: 8px;
      color: var(--cBlack10);
      background: var(--cOrange10);
    }
  }

  @media (min-width: 1200px) {
    .hero {
      background-position: 50% 68%;
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
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
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
