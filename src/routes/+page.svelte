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
  <div>
    Gallery
  </div>
</section>

<section class="medium" id="process">
  <div>
    process
  </div>
</section>

<section class="medium" id="price">
  <div>
    price
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
</style>
