<script>
  import PageHead from '$components/PageHead.svelte';
  import Image from '$components/Image.svelte';
</script>

<PageHead
  title="Rendered Elevations"
  description="Interior elevations that highlight finishes, joinery and key design details in a client-friendly way."
  path="/visuals/rendered-elevations"
  image="https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/6dce8f79-247d-4efa-c7bc-1b3b30161600/1200x630"
  imageAlt="AyaRender – detailed interior elevation renders showing joinery, finishes and design details on a branded background"
/>

<div class='page-content'>
  <h1>Rendered Elevations</h1>
  <div class='text'>
    <p>Interior elevations that highlight finishes, joinery and key design details in a client-friendly way.
      Perfect for showcasing wall treatments, built-in furniture, and material specifications.
    </p>
    <p>Elevations usually start at £100 per view, with final costs depending on the level of detail and complexity.</p>
  </div>

  <ul class='gallery'>
    <li>
      <Image
        imgId='31f9e377-04fa-4fb8-70dc-d344300cb100'
        alt='Rendered elevation example'
        expandable={true}
      />
      <Image
        imgId='c7bb5c41-fca7-4298-7ea2-b7daddac0100'
        alt='Rendered elevation example'
        expandable={true}
      />
    </li>
    <li>
      <Image
        imgId='d6e4987f-7c4f-4465-e23a-b0c0fc8b7100'
        alt='Rendered elevation example'
        expandable={true}
      />
    </li>
    <li>
      <Image
        imgId='037e8602-b402-4174-f1e6-22ed72006a00'
        alt='Rendered elevation example'
        expandable={true}
      />
      <Image
        imgId='d45eb81c-2298-4c51-81b1-4d9684466700'
        alt='Rendered elevation example'
        expandable={true}
      />
    </li>
    <li>

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
