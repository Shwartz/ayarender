<script>
  import PageHead from '$components/PageHead.svelte';
</script>

<PageHead
  title="Process & Pricing"
  description="Learn about our interior visualization process and pricing for 2D and 3D rendering services"
  path="/price"
  image="/images/3d-render.jpg"
  imageAlt="3D interior rendering example"
/>

<section class='hero'>
  <div class='hero'>
    <div>
      <div class='jumbo'></div>
    </div>
    <h1 class='title'>Process & Pricing</h1>
  </div>
</section>

<section class='white'>
  <div>
    <h2>Our Process</h2>
    <div class='text'>
      <p>Every project starts with a short conversation so I can understand your design, your client and your
        deadline.<br>
        From there, I’ll recommend the most effective visuals for your project and provide a clear quote before any work
        begins.<br>
        There are no long‑term commitments - just project‑based support when you need it.</p>
      <p>Most individual room visuals take around 2 - 4 days from booking to final delivery, depending on complexity and
        feedback rounds.</p>
    </div>

    <ul class='process-grid'>
      <li>
        <div class='process-step'>
          <span class='step-number'>Step 1</span>
          <h3>Free initial consultation</h3>
          <p>We start with a quick call or email to discuss your project, clarify the scope and timings, and agree what
            visuals will help most.</p>
          <p>After this, you receive a written quotation so you can get internal approval if needed.</p>
        </div>
      </li>

      <li>
        <div class='process-step'>
          <span class='step-number'>Step 2</span>
          <h3>Booking the project</h3>
          <p>Once you’re ready to go ahead, you book the project and we confirm the timeline.</p>
          <p>A 50% deposit is usually required on booking, along with your drawings, moodboard and any key
            references.</p>
        </div>
      </li>

      <li>
        <div class='process-step'>
          <span class='step-number'>Step 3</span>
          <h3>Design and revision</h3>
          <p>I create the first visuals based on your information and send them for your feedback.</p>
          <p>At this stage you can request adjustments to layout, materials or styling within the agreed scope.</p>
        </div>
      </li>

      <li>
        <div class='process-step'>
          <span class='step-number'>Step 4</span>
          <h3>Final design</h3>
          <p>I refine the visuals where needed and prepare the final images or drawings.</p>
          <p>Final files are delivered via email or shared folder, and the remaining balance is due on completion.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class='white'>
  <div>
    <h2>Pricing overview by service</h2>

    <div class='pricing-table-wrapper'>
      <table class='pricing-table'>
        <thead>
          <tr>
            <th>Service</th>
            <th>Typical use</th>
            <th>Starting from*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rendered floor plans</td>
            <td>Client presentations, concept boards, marketing</td>
            <td>£80 per plan</td>
          </tr>
          <tr>
            <td>Rendered interior elevations</td>
            <td>Joinery, kitchens, bathrooms, detailing</td>
            <td>£80 per elevation</td>
          </tr>
          <tr>
            <td>3D interior visuals</td>
            <td>Client approval, pitches, marketing</td>
            <td>£130 per image</td>
          </tr>
          <tr>
            <td>Layouts & technical drawings</td>
            <td>Plans, lighting, electrical, bespoke joinery</td>
            <td>£50 per drawing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class='standout-note'>
      <p><strong>*These starting prices are a guide based on standard-sized rooms and typical levels of detail.</strong> For larger or more complex projects, I'll provide a tailored quote after our initial consultation.</p>
    </div>

    <h3>What affects pricing & timelines</h3>
    <div class='text'>
      <p>Most individual room visuals take around 2–4 days from booking to final delivery, depending on complexity and feedback rounds.</p>

      <p><strong>Pricing and timelines depend on:</strong></p>
      <ul class='factors-list'>
        <li>Room size and complexity (open-plan spaces or detailed joinery take longer).</li>
        <li>Number of views or drawings required per space.</li>
        <li>Whether base drawings/3D models are provided or need to be created from scratch.</li>
        <li>How quickly feedback is provided during the draft stage.</li>
      </ul>

      <p>If you're working to a strict client presentation date, let me know upfront so I can advise what's realistic.</p>
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
      background-image: url('https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/270843b5-f467-4ca4-8ed7-d551f198a200/1920w');
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

  .text p {
    text-wrap: pretty;
  }

  .white {
    .process-grid {
      list-style: none;
      padding: 0;
      margin: 3rem 0 0;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      li {
        position: relative;
        list-style: none;
        padding: 0;
      }

      .process-step {
        background: var(--aya-sand-50);
        border-radius: 0.5rem;
        padding: 3rem 1rem 2rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .step-number {
          position: absolute;
          left: -4px;
          top: -4px;
          display: inline-block;
          background: var(--aya-navy-700);
          color: var(--aya-white);
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--aya-navy-900);
        }

        p {
          color: var(--aya-navy-700);
        }
      }

      // Tablet: 2-column grid
      @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .pricing-table-wrapper {
      margin: 2rem 0;
      overflow-x: auto;
    }

    .pricing-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--aya-white);
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

      thead {
        background: var(--aya-navy-900);
        color: var(--aya-white);

        th {
          padding: 1rem;
          text-align: left;
          font-weight: 400;
          font-size: 1rem;
          border-right: 1px solid var(--aya-navy-700);

          &:last-child {
            border-right: none;
          }
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid var(--aya-sand-100);
          transition: background-color 0.2s ease;

          &:hover {
            background-color: var(--aya-sand-50);
          }

          &:last-child {
            border-bottom: none;
          }

          td {
            padding: 1.25rem 1rem;
            color: var(--aya-navy-900);
            border-right: 1px solid var(--aya-sand-100);

            &:last-child {
              border-right: none;
              font-weight: 600;
              color: var(--aya-navy-700);
            }

            &:first-child {
              font-weight: 400;
            }
          }
        }
      }

      // Mobile adjustments
      @media (max-width: 600px) {
        thead th,
        tbody td {
          padding: 0.75rem 0.5rem;
          font-size: 0.9rem;
        }
      }
    }

    .factors-list {
      list-style: none;
      padding-left: 0;
      margin: 1rem 0 2rem;

      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
        color: var(--aya-navy-700);

        &:before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--aya-navy-700);
          font-weight: 600;
        }
      }
    }

    h3 {
      margin-top: 3rem;
      color: var(--aya-navy-900);
    }
  }
</style>
