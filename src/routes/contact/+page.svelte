<script lang='ts'>
  import PageHead from '$components/PageHead.svelte';
  import { superForm } from 'sveltekit-superforms/client';
  //import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
  import { BarLoader } from 'svelte-loading-spinners';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  const { form, errors, enhance, message, delayed } = superForm(data.form, {
    taintedMessage: 'Are you sure you want to leave?'
  });
</script>

<PageHead
  title='Contact'
  description="Ready to visualise your interior design project? Contact AyaRender for a friendly chat about your 2D
  and 3D rendering needs."
path="/contact"
image="https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/17bf10fa-cf14-4015-1034-bff368c96000/1200x630"
imageAlt="AyaRender – interior renders alongside the tagline 'Have a project in mind? Let's talk.' on a blue branded background"
/>

<section class='hero'>
  <div class='hero'>
    <div>
      <div class='jumbo'></div>
    </div>
    <h1 class='title'>Contact</h1>
  </div>
</section>

<section class='large vLine'>
  <div>
    <div class='content'>
      <div class='contactForm'>
        <div class='form-intro'>
          <h2>Get in touch</h2>
        </div>

        <form method='POST' action='?/contactForm' use:enhance>
          <div class='form-row'>
            <div class='form-field'>
              <label for='firstName'>Name</label>
              <input
                required
                type='text'
                id='firstName'
                name='firstName'
                placeholder='Name'
                bind:value={$form.firstName}
              />
              {#if $errors.firstName}
                <small class='error'>{$errors.firstName}</small>
              {/if}
            </div>

            <div class='form-field'>
              <label for='email'>Email</label>
              <input
                required
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                bind:value={$form.email}
              />
              {#if $errors.email}
                <small class='error'>{$errors.email}</small>
              {/if}
            </div>
          </div>

          <div class='form-row'>
            <div class='form-field'>
              <label for='company'>Studio/Company</label>
              <input
                type='text'
                id='company'
                name='company'
                placeholder='Studio/Company'
                bind:value={$form.company}
              />
              {#if $errors.company}
                <small class='error'>{$errors.company}</small>
              {/if}
            </div>

            <div class='form-field'>
              <label for='projectType'>Project Type</label>
              <select
                required
                id='projectType'
                name='projectType'
                bind:value={$form.projectType}
              >
                <option value=''>Select project type</option>
                <option value='general'>General enquiry</option>
                <option value='3d-visuals'>3D visuals</option>
                <option value='layouts-drawings'>Layouts and Technical drawings</option>
                <option value='floor-plans'>Rendered Floor plans</option>
                <option value='elevations'>Rendered Elevations</option>
              </select>
              {#if $errors.projectType}
                <small class='error'>{$errors.projectType}</small>
              {/if}
            </div>
          </div>

          <div class='form-field'>
            <label for='communication'>Please send me details of your project and I will get in touch with you in one
              working day.</label>
            <textarea
              placeholder='Message details...'
              id='communication'
              name='communication'
              rows='6'
              bind:value={$form.communication}
            ></textarea>
            {#if $errors.communication}
              <small class='error'>{$errors.communication}</small>
            {/if}
          </div>

          <!-- honeypot -->
          <label class='honeypot' for='name'>Name (optional)</label>
          <input
            type='text'
            id='name'
            name='name'
            class='honeypot'
            placeholder='Enter your name'
            tabindex='-1'
            bind:value={$form.name}
          />

          <div class='form-actions'>
            {#if $delayed}
              <BarLoader color='#af696e' />
            {/if}
            <button class='btn-submit' type='submit'>Send</button>
          </div>
        </form>

        {#if $message}
          <div
            class='message-box'
            class:success={$message.status === 'success'}
            class:error={$message.status === 'error'}
          >
            {$message.text}
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<section>
  <div>

    <h2>Who you'll be working with</h2>

    <img
      src='https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/b6f4f46d-8853-4647-00c3-2a487a851b00/1024w'
      alt='Aija Svarcs holding colourful painting'
      loading='lazy'
      class='aija-image'
    />

    <p>I’m Aija <br /><i>(pronounce as I-ya)</i>,<br />
      an interior design visualiser specialising in floor plans, elevations, layouts and 3D visuals for interior
      designers and studios.</p>

    <p>My role is to translate your ideas, drawings and moodboards into clear, client‑ready visuals so you can present
      with confidence and move projects forward faster.</p>

    <p>I understand the ebb and flow of studio life – some months are packed, others are quiet – so my support is
      flexible, project‑based and designed to fit around your workload rather than add to it.</p>
    <br style='clear:both' />
    <div class='standout-note'>
      <h3>Quick facts</h3>
      <ul class='list'>
        <li>Based in Surrey, working with UK & international interior designers and studios.</li>
        <li>Foundation degree in Interior Design.</li>
        <li>Creating design-led SketchUp visuals, including floor plans, elevations and layouts.</li>
        <li>Focused on clear, client-ready presentation visuals that support design decisions.</li>
        <li>Working from sketches, moodboards, CAD drawings and early-stage concepts.</li>
        <li>Strong emphasis on composition, materiality and spatial clarity.</li>
        <li>Supporting studios with project-based visualisation during busy workloads.</li>
      </ul>
    </div>
  </div>
</section>

<style lang='scss'>
  .hero {
    position: relative;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--aya-navy-900) 0%, var(--aya-navy-700) 100%);

    .jumbo {
      position: absolute;
      inset: 0;
      background-image: url('https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/11442fc7-4dd6-4559-7822-39b381ebbd00/1920w');
      background-size: cover;
      background-position: center;
      opacity: 0.3;
    }

    .title {
      position: relative;
      z-index: 1;
      color: var(--aya-white);
      font-size: 3rem;
      margin: 0;
    }
  }

  .contactForm {
    padding: 1rem;
    max-width: 800px;
    margin-inline: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;
    max-width: 100%;
  }

  label {
    font-size: 0.95rem;
    font-weight: 400;
    color: var(--aya-navy-900);
  }

  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid var(--aya-navy-500);
    border-radius: 0.25rem;
    padding: 0.75rem;
    font-size: 1rem;
    background: var(--aya-white);
    color: var(--aya-navy-900);
    font-family: var(--font-body),serif;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--aya-navy-900);
      box-shadow: 0 0 0 3px rgba(13, 27, 42, 0.1);
    }

    &::placeholder {
      color: var(--aya-navy-500);
      font-size: 1rem;
      opacity: 0.7;
    }
  }

  select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23415A77' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2.5rem;
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  .form-actions {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  button.btn-submit {
    padding: 0.875rem 2.5rem;
    background: var(--aya-rose-700);
    color: var(--aya-white);
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
      background: var(--aya-rose-500);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &:focus {
      outline: 2px solid var(--aya-navy-900);
      outline-offset: 2px;
    }
  }

  .message-box {
    margin-top: 1.5rem;
    padding: 1rem 1.25rem;
    border-radius: 0.25rem;
    font-size: 0.95rem;
    font-weight: 400;
  }

  .error {
    color: #c1292e;
    font-size: 0.875rem;
    font-weight: 400;
  }

  .success {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
  }

  .message-box.error {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
  }

  .honeypot {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    z-index: -1;
  }

  @media (min-width: 600px) {
    .form-row {
      grid-template-columns: 1fr 1fr;
    }
  }

  .content {
    padding: 1rem;
    background: var(--aya-sand-50);
    border-radius: 1rem;
  }

  @media (min-width: 1200px) {
    .content {
      display: flex;
      align-items: stretch;
      gap: 3rem;

      > div {
        width: 50%;
      }
    }
  }


  .aija-image {
    width: 100%;
    border-radius: 0.5rem;
    display: block;
    margin-bottom: 1rem;
  }

  @media (min-width: 400px) {
    .aija-image {

      max-width: clamp(150px, 37.5vw, 400px);

      margin: clamp(0.25rem, 1vw, 0.5rem) 0 0 clamp(1rem, 3vw, 2rem);

      float: right;
    }
  }
</style>
