<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Ayarender Interior Design</title>
  <meta name="description" content="Converting interior designs in 2D and 3D visualisation" />
</svelte:head>

<section class="hero">
  <div>
    <h1>2D and 3D Interior Design Visualisation</h1>
  </div>
</section>

<section class="large bg-white">
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

<section class="large bg-white">
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
      <h2 class="mediumTitle">Rendered 3D visuals</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra neque nec est maximus facilisis.
        Pellentesque tempus at dolor gravida egestas. Etiam tellus nulla.</p>
      <a class="btn-forward" href="{base}/portfolio/rendered-3d-visuals">Rendered 3D visuals</a>
    </div>
    <img src="{base}/images/3d-render.jpg" alt="3D Render">
  </div>
</section>

<section class="large bg-white">
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

<section class="large bg-light" id="process">
  <div>
    <h2 class="largeTitle center">Easy four step process</h2>
    <div class="steps">
      <div>
        <em>Step 1</em>
        <h3> Free initial consultation</h3>
        <p>To discuss a project, gather technical details and provide a written quotation for work.</p>
        <p>Please use <a href="{base}/contact">Contact Form</a> to get in touch.</p>
      </div>

      <div>
        <em>Step 2</em>
        <h3>Booking the project</h3>
        <p>50% deposit is paid upon booking. <br/>Detailed project information is submitted via Email or DropBox.<br/> The
          information required can vary, however, standard project will require:</p>
        <ul>
          <li>floor plan and elevations with dimensions <br/>(including hand drawn sketches, existing AutoCAD, SketchUp files
            etc.)
          </li>
          <li>furniture layout with dimensions</li>
          <li>dimensions of windows and doors</li>
          <li>images or website links to all finishes <br/>(paint colour, fabric, hardware etc.)</li>
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
        <em>Step 3</em>
        <h3>Design and revision stage</h3>
        <p>After studying the submitted information I start construction. </p>
        <p>In order for this stage to run smoothly and
          within agreed timescale make sure you provide as much relevant information as possible.</p>
        <p>Design draft is sent
          to the client for approval.</p>
      </div>

      <div>
        <em>Step 4</em>
        <h3>Final design</h3>
        <p>Revisions are made, if applicable, the final drawings are sent to the client via Email or DropBox and final
          invoice is issued.</p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .hero {
    background: url('/images/hero-home.jpg') 50% 60% no-repeat;
    background-size: cover;

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

  h2 {
    margin-top: 2rem;
  }

  .steps {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;

    > div {
      position: relative;
      margin-bottom: 5rem;
      padding: 3rem 2rem;
      border: 1px solid var(--cBlack5);
      border-radius: 0.5rem;
      background: var(--cWhite);
      width: 100%;
    }

    em {
      position: absolute;
      top: -4rem;
      right: 1rem;
      padding: 2rem 1rem;
      font-size: 1.6rem;
      /*background: rgba(255, 255, 255, 0.4);*/
      background: rgba(63, 32, 33, 0.5);
      backdrop-filter: blur(2px);
      border: 1px solid var(--cBlack5);
      border-radius: 4rem;
      box-shadow: 0 0 1rem rgba(0,0,0,0.2);
      color: var(--cWhite);
    }

    h3 {
      font-size: 1.6em;
    }

    ul {
      margin-top: 1rem;
      font-size: 1.1rem;
    }

    li {
      list-style: inside;
      margin-top: 0.4rem;
    }

    a {
      text-decoration: underline;
    }

    @media (min-width: 800px) {
      > div {
        width: clamp(300px, 80%, 800px);

        &:nth-child(odd) {
          margin-right: auto;

          em {
            right: 1rem;
          }
        }

        &:nth-child(even) {
          margin-left: auto;

          em {
            left: 1rem;
            right: auto;
          }
        }
      }
    }

  }
</style>
