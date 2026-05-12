<script>
  import PageHead from '$components/PageHead.svelte';
  import Image from '$components/Image.svelte';
</script>

<PageHead
  title="Rendered Floor Plans"
  description="AyaRender - Colour-rendered floor plans that make layouts and zoning instantly clear for your clients."
  path="/visuals/rendered-floor-plans"
  image="https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f1880d59-5f2e-46f8-5880-2a498c5e7400/1200x630"
  imageAlt="AyaRender – 2D floor plans and interior elevation renders displayed on a blue branded background"
/>

<div class='page-content'>
  <h1>Rendered Floor Plans</h1>
  <div class='text'>
    <p>Colour‑rendered floor plans make it easy for clients to distinguish zones, furniture and circulation at a glance.
      They're ideal for presentations, concept boards and marketing materials when you need to communicate layout
      quickly and clearly.
    </p>
    <p>Floor plans usually start at £80 per plan, with final costs depending on size and complexity.</p>
  </div>

  <ul class='gallery'>
    <li>
      <Image
        imgId='fda5bd9e-0554-4e3f-762f-960e2dce6200'
        alt='Rendered floor plan example'
        expandable={true}
        aspectRatio='6/3'
      />
    </li>
    <li>
      <Image
        imgId='8755a61c-7a0a-4db9-a0fa-27e498b40200'
        alt='Rendered floor plan example'
        expandable={true}
        aspectRatio='16/9'
      />
      <Image
        imgId='8238adb4-57bd-406f-b380-57738ded5f00'
        alt='Rendered floor plan example'
        expandable={true}
        aspectRatio='4/3'
      />
    </li>
    <li>
      <Image
        imgId='e4c9d314-19aa-4509-6e94-d8f24e474d00'
        alt='Rendered floor plan example'
        expandable={true}
        aspectRatio='3/2'
      />
    </li>

    <li>
      <Image
        imgId='91ff6223-654e-4e5b-b60b-46b6c3a34e00'
        alt='Rendered floor plan example'
        expandable={true}
        aspectRatio='4/3'
      />
      <Image
        imgId='610fc09a-3f47-43d0-e113-f8e7dbc51800'
        alt='Rendered floor plan example'
        expandable={true}
        aspectRatio='16/9'
      />
    </li>
  </ul>

  <div class='cta-section'>
    <h3>Have a project you'd like to visualise?</h3>
    <p>Share your plans, sketches or moodboard, and I'll recommend the visuals that will work best and provide a clear
      quote.</p>
    <a class='btn' href='/contact'>Discuss your project</a>
  </div>
</div>

<style>
  .page-content {
    padding: 2rem 0;
  }

  .text {
    max-width: 600px;
    margin-top: 1rem;
    line-height: 1.6;
    color: var(--aya-navy-700);

    p {
      margin-bottom: 1rem;
    }
  }

  .cta-section {
    margin-top: 4rem;
    padding: 3rem 2rem;
    text-align: center;
    background: var(--aya-sand-50);
    border-radius: 0.5rem;

    h3 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: var(--aya-navy-900);
    }

    p {
      max-width: 600px;
      margin: 0 auto 2rem;
      line-height: 1.6;
      color: var(--aya-navy-700);
    }

    .btn {
      display: inline-block;
      padding: 1rem 2rem;
      background: var(--aya-navy-900);
      color: var(--aya-white);
      text-decoration: none;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: background 0.2s ease, transform 0.2s ease;

      &:hover {
        background: var(--aya-navy-700);
        transform: translateY(-2px);
      }
    }
  }
</style>
