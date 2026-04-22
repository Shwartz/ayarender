<script>
  import PageHead from '$components/PageHead.svelte';
  import Image from '$components/Image.svelte';
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
      <Image
        imgId='bdbebf15-8688-40b8-d698-c0e6bd4f3500'
        alt='Technical drawing example'
        expandable={true}
      />
    </li>
    <li>
      <Image
        imgId='e9a9d411-c405-4a34-2ea2-ba71adc6e600'
        alt='Technical drawing example'
        expandable={true}
      />
      <Image
        imgId='5803e021-9087-46ec-4c67-1a931f7d7c00'
        alt='Technical drawing example'
        expandable={true}
      />
    </li>
    <li>

    </li>
    <li>
      <Image
        imgId='82a4acc4-7f3c-4698-4081-4c640e65f500'
        alt='Technical drawing example'
        expandable={true}
      />
    </li>
    <li>
      <Image
        imgId='2f1268da-cdab-4cf7-2fa1-e2671a704400'
        alt='Technical drawing example'
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
