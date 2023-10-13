<script>
  import { base } from "$app/paths";
</script>

<section class="hero">
  <div>
    <h1>Interior Design Visualizer</h1>
    <nav>
      <a href="#whatIDo">What I do?</a>
      <a href="#process">Process</a>
      <a href="#price">Price</a>
    </nav>
  </div>
</section>

<section class="medium py-2 bg-light whatIDo" id="whatIDo">
  <div class="center">
    <h1 class="largeTitle">What I do?</h1>
    <p>There is a technical term for what I do - Interior Design visualiser but I would like to call myself
      <br>Spatial Magician.</p>
    <p>I can virtually transfer existing living space and show you images of the property that hasn't even been built
      yet.</p>
    <p>I specialise in Technical Drawings, Rendered Floor Plans, Rendered 2D Elevations and Design Boards</p>
  </div>
</section>

<section class="large">
  <div class="cards">
    <div>
      <h3 class="mediumTitle">Technical Drawing</h3>
      <img src="{base}/images/technical-drawing.jpg" alt="Technical drawing">
      <a class="btn-forward" href="#">Technical Drawing</a>
    </div>
    <div>
      <h3 class="mediumTitle">Rendered Floor Plans</h3>
      <img src="{base}/images/rendered-floor-plan.jpg" alt="Rendered Floor Plan"/>
      <a class="btn-forward" href="#">Rendered Floor Plans</a>
    </div>
    <div>
      <h3 class="mediumTitle">Rendered 2D Elevations</h3>
      <img src="{base}/images/rendered-2d-elevation.jpg" alt="Rendered 2D elevation">
      <a class="btn-forward" href="#">Rendered 2D Elevations</a>
    </div>
    <div>
      <h3 class="mediumTitle">Design Boards</h3>
      <img src="{base}/images/design-board.jpg" alt="Design Board">
      <a class="btn-forward" href="#">Desgin Boards</a>
    </div>
    <div>
      <h3 class="mediumTitle">3D Renders</h3>
      <img src="{base}/images/3d-render.jpg" alt="3D render">
      <a class="btn-forward" href="#">3D Renders</a>
    </div>
  </div>
</section>

<section class="medium" id="process">
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
    background: url('/images/hero-home.jpg') 50% 50% no-repeat;
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
