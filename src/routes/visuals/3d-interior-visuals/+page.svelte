<script>
  import PageHead from '$components/PageHead.svelte';
  import Image from '$components/Image.svelte';
</script>

<PageHead
  title='3D Interior Visuals'
  description='3D visuals that help you sell concepts, avoid misunderstandings and reduce costly revisions.'
  path='/visuals/3d-interior-visuals'
  image='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f1880d59-5f2e-46f8-5880-2a498c5e7400/1200x630'
  imageAlt='AyaRender – 2D floor plans and interior elevation renders displayed on a blue branded background'
/>

<div class='page-content'>
  <h1>3D Interior Visuals</h1>
  <div class='text'>
    <p>Interior visuals turn your drawings and ideas into client‑ready images that are easy to understand and easy to
      present.</p>
    <p>From colour floor plans and elevations to full 3D visuals, I help you show space, finishes and details clearly so
      you can avoid misunderstandings and move projects forward faster.</p>
  </div>

  <ul class='gallery'>
    <li>
      <Image
        imgId='6e7acef0-ee5e-4fdf-4b3c-f6270c649900'
        alt='3D interior visual example'
        expandable={true}
      />
    </li>
    <li>
      <Image
        imgId='6e7acef0-ee5e-4fdf-4b3c-f6270c649900'
        alt='3D interior visual example'
        expandable={true}
      />
    </li>
    <li>
      <Image
        imgId='6e7acef0-ee5e-4fdf-4b3c-f6270c649900'
        alt='3D interior visual example'
        expandable={true}
      />
    </li>
    <li>
      <Image
        imgId='6e7acef0-ee5e-4fdf-4b3c-f6270c649900'
        alt='3D interior visual example'
        expandable={true}
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

  .gallery {
    list-style: none;
    padding: 0;
    margin: 3rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    li {
      list-style: none;
      padding: 0;
      width: 100%;
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
