<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>AyaRender Interior Design</title>
  <meta name="description" content="Converting interior designs in 2D and 3D visualisation" />
</svelte:head>

<section class="hero">
  <div>
    <h1>2D and 3D Interior Design Visualisation <br/>
      for Interior Designers</h1>
  </div>
</section>

<section class="large">
  <div class="cards">
    <div>
      <h3 class="mediumTitle">Technical Drawing</h3>
      <img src="{base}/images/technical-drawing.jpg" alt="Technical drawing">
      <a class="btn-forward" href="{base}/portfolio/technical-drawings">Technical Drawing</a>
    </div>
    <div>
      <h3 class="mediumTitle">Rendered Floor Plans</h3>
      <img src="{base}/images/rendered-floor-plan.jpg" alt="Rendered Floor Plan" />
      <a class="btn-forward" href="{base}/portfolio/rendered-floor-plans">Rendered Floor Plans</a>
    </div>
    <div>
      <h3 class="mediumTitle">Rendered 2D Elevations</h3>
      <img src="{base}/images/rendered-2d-elevation.jpg" alt="Rendered 2D elevation">
      <a class="btn-forward" href="{base}/portfolio/rendered-2d-elevations">Rendered 2D Elevations</a>
    </div>
    <div>
      <h3 class="mediumTitle">Presentation Boards</h3>
      <img src="{base}/images/design-board.jpg" alt="Design Board">
      <a class="btn-forward" href="#">Presentation Boards</a>
    </div>
    <div>
      <h3 class="mediumTitle">Rendered 3D visuals</h3>
      <img src="{base}/images/3d-render.jpg" alt="3D render">
      <a class="btn-forward" href="#">Rendered 3D visuals</a>
    </div>
  </div>
</section>

<section class="medium bg-light" id="process">
  <div>
    <h3 class="largeTitle">Process</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget libero vestibulum, volutpat dolor eget,
      iaculis felis. Phasellus lacus arcu, fermentum quis tempus a, auctor quis velit. Quisque euismod urna eleifend
      erat aliquam, non feugiat nulla venenatis. Duis placerat vehicula nisi sit amet tempus. Curabitur nec metus nunc.
      Sed ac cursus eros. Aenean eget sagittis nisl. In at tincidunt ligula. Mauris molestie erat a finibus suscipit.
      Pellentesque nec luctus est. Fusce tempor vehicula justo. Integer ut volutpat risus. Mauris porttitor semper nisi
      a cursus.</p>
    <p>Etiam auctor nisl nisi, ut lacinia est consequat quis. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Cras sed nunc porta, dignissim ante eu, sagittis orci. Integer ut elit eu tortor
      vehicula luctus nec ac tortor. Vivamus nec molestie neque. Aliquam imperdiet luctus urna, et aliquam justo
      facilisis a. Suspendisse potenti. Ut auctor sapien non rhoncus mattis. In quis ultrices arcu. In molestie
      tincidunt elit vitae dapibus. Nunc ac turpis vel mauris lacinia bibendum id in magna. Aliquam non scelerisque
      tortor. Suspendisse facilisis sit amet nulla non porttitor. Phasellus id ornare lorem. Donec eget est justo.
      Maecenas ac viverra est.</p>
    <p>Mauris nec aliquam tellus. Morbi facilisis, felis ut pretium eleifend, nisl lorem blandit nunc, et facilisis
      dolor arcu et urna. Quisque porttitor purus ut tortor facilisis finibus in vel justo. Donec tempor justo at tortor
      condimentum aliquet. Phasellus vitae posuere urna, tristique auctor elit. Mauris eu nulla eu ante cursus gravida.
      Sed sit amet urna venenatis lorem venenatis volutpat in non erat. Nulla orci nunc, blandit ac porta pharetra,
      imperdiet at ligula. In hac habitasse platea dictumst. Sed condimentum vel enim sed pellentesque. Aliquam erat
      volutpat. Nulla et nunc a quam interdum tempus. Aenean vitae volutpat mi.</p>
  </div>
</section>

<section class="medium" id="price">
  <div>
    <h3 class="largeTitle">Price</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget libero vestibulum, volutpat dolor eget,
      iaculis felis. Phasellus lacus arcu, fermentum quis tempus a, auctor quis velit. Quisque euismod urna eleifend
      erat aliquam, non feugiat nulla venenatis. Duis placerat vehicula nisi sit amet tempus. Curabitur nec metus nunc.
      Sed ac cursus eros. Aenean eget sagittis nisl. In at tincidunt ligula. Mauris molestie erat a finibus suscipit.
      Pellentesque nec luctus est. Fusce tempor vehicula justo. Integer ut volutpat risus. Mauris porttitor semper nisi
      a cursus.</p>
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

  .whatIDo > div {
    max-width: 600px;
  }

  .cards {
    --min: 48ch;
    --gap: 2rem;

    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      box-shadow: 0 0 8px rgba(63, 32, 33, 0.2);
      border-radius: 0.5rem;
    }

    h3 {
      text-align: center;
    }

    p {
      max-width: 500px;

    }

    a {
      margin-top: auto;
    }
  }
</style>
