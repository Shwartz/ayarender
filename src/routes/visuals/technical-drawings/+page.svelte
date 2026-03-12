<script>
  import PageHead from '$components/PageHead.svelte';
</script>

<PageHead
  title='Technical Drawings'
  description='Plans, lighting and electrical layouts, and joinery drawings, branded for your studio if needed.'
  path='/visuals/technical-drawings'
  image='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/b7c7c0cc-3b29-46b2-cc4d-0e0f422ee300/1200x630'
  imageAlt='AyaRender - detailed technical drawings including plans, lighting layouts and joinery details, displayed on a branded blue background'
/>

<div class='page-content'>
  <h1>Technical Drawings</h1>
  <div class='text'>
    <p>Plans, lighting and electrical layouts, and joinery drawings, branded for your studio if needed.
      Clear, professional documentation that contractors can work from and clients can approve.
    </p>
    <p>Technical drawings usually start at £60 per sheet, with final costs depending on complexity and requirements.</p>
  </div>

  <ul class='gallery'>
    <li>
      <img
        src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1024w'
        srcset='
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/640w 640w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/768w 768w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1024w 1024w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1280w 1280w
        '
        sizes='(max-width: 799px) 100vw, 1216px'
        alt='Technical drawing example'
        loading='lazy'
      />
    </li>
    <li>
      <img
        src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1024w'
        srcset='
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/640w 640w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/768w 768w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1024w 1024w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1280w 1280w
        '
        sizes='(max-width: 799px) 100vw, 1216px'
        alt='Technical drawing example'
        loading='lazy'
      />
    </li>
    <li>
      <img
        src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1024w'
        srcset='
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/640w 640w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/768w 768w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1024w 1024w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1280w 1280w
        '
        sizes='(max-width: 799px) 100vw, 1216px'
        alt='Technical drawing example'
        loading='lazy'
      />
    </li>
    <li>
      <img
        src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1024w'
        srcset='
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/640w 640w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/768w 768w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1024w 1024w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/1e747d20-c932-4c22-07ec-b05970cd8500/1280w 1280w
        '
        sizes='(max-width: 799px) 100vw, 1216px'
        alt='Technical drawing example'
        loading='lazy'
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

      img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
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
