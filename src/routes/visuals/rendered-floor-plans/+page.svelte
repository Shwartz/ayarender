<script>
  import PageHead from '$components/PageHead.svelte';
</script>

<PageHead
  title="Rendered Floor Plans"
  description="Colour-rendered floor plans that make layouts and zoning instantly clear for your clients."
  path="/visuals/rendered-floor-plans"
  image="/images/rendered-floor-plan.jpg"
  imageAlt="Rendered floor plan example"
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
      <img
        src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1024w'
        srcset='
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/640w 640w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/768w 768w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1024w 1024w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1280w 1280w
        '
        sizes='(max-width: 799px) 100vw, 1216px'
        alt='Rendered floor plan example'
        loading='lazy'
      />
    </li>
    <li>
      <img
        src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1024w'
        srcset='
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/640w 640w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/768w 768w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1024w 1024w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1280w 1280w
        '
        sizes='(max-width: 799px) 100vw, 1216px'
        alt='Rendered floor plan example'
        loading='lazy'
      />
    </li>
    <li>
      <img
        src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1024w'
        srcset='
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/640w 640w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/768w 768w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1024w 1024w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1280w 1280w
        '
        sizes='(max-width: 799px) 100vw, 1216px'
        alt='Rendered floor plan example'
        loading='lazy'
      />
    </li>
    <li>
      <img
        src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1024w'
        srcset='
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/640w 640w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/768w 768w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1024w 1024w,
          https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/f7d623ac-b786-43af-1049-9dc7503ea300/1280w 1280w
        '
        sizes='(max-width: 799px) 100vw, 1216px'
        alt='Rendered floor plan example'
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
