<script>
	import { base } from '$app/paths';
	import Logo from "/src/assets/icons/logo.svg?component";
</script>

<svelte:head>
	<title>Ayarender Interior Design</title>
	<meta name='description' content='Converting interior designs in 2D and 3D visualisation' />
</svelte:head>

<section class='large'>
	<div class='intro boxes'>
		<div>
			<div>
				<dl>
					<dt>AIJA SVARCS</dt>
					<dd>Interior Visualiser</dd>
				</dl>
				<p>Check out my areas of expertise below and how I can make your dreams come to life</p>
				<p>
					<img alt="Instagram"
								src="/icons/chevron-double.svg"
								height="32" width="32">
				</p>
			</div>
		</div>
		<div>
			<img src='{base}/images/AdobeStock_72495839.jpg' alt='Technical drawing' width='630' height='460' />
		</div>
	</div>
</section>

<section class='large'>
	<div>
		<div class='boxTitle'>
			<span>2D &amp; 3D Visualisation</span>
		</div>
		<div class='boxes'>
			<div>box 1 image</div>
			<div>box 2 text</div>
		</div>
	</div>
</section>

<section class='large'>
	<div>
		<div class='boxTitle'>
			<span>2D &amp; 3D Visualisation</span>
		</div>
		<div class='boxes reverse dark'>
			<div>box 1 image</div>
			<div>box 2 text</div>
		</div>
	</div>
</section>


<section class='medium'>
	<div class='welcome'>
		<h1 class='center'>Welcome to AYARENDER</h1>
		<p class='center mt-0'>Design documentation and Visualisation for Interior Designers</p>
		<p>My design support service is tailored to meet your unique needs. I understand the ebb and flow of the industry;
			some months are a whirlwind of activity, while others are more tranquil.</p>
		<p>My approach is designed to complement
			your workflow seamlessly. There are no lengthy commitments and no concerns about the overhead of hiring a design
			assistant or junior designer. </p>
		<p class='strong'>Why should you consider hiring me?</p>
		<ul>
			<li>You want to enhance your presentations and create professional-looking deliverables for your clients and
				contractors.
			</li>
			<li>You are swamped with projects and need assistance with specific tasks.</li>
			<li>You prefer to avoid design drafting.</li>
			<li>You need to gain skills in CAD software.</li>
		</ul>
		<p>I am here to assist with all these challenges and more.</p>
	</div>
</section>

<section class='large bg-white'>
	<div class='card'>
		<div>
			<h2 class='mediumTitle'>Technical Drawings</h2>
			<p>Classical black and white or colour rendered to highlight your design selections.</p>
			<p> The drawing solutions include a range of options - initial floorplans, elevations, electrical and lighting
				layouts and bespoke joinery.</p>
			<p>Depending on your requirements they can be presented to scale, with dimensions, title block and your branding.
			<p>These plans usually start at &pound;50. </p>
			<a class='btn-forward' href='{base}/portfolio/technical-drawings'>Technical Drawings</a>
		</div>
		<img src='{base}/images/technical-drawing.jpg' alt='Technical drawing' width='750' height='530'>
	</div>
</section>

<section class='large bg-light'>
	<div class='card'>
		<div>
			<h2 class='mediumTitle'>Rendered Floor Plans</h2>
			<p>With color-rendered floor plans, it's easier to distinguish between various elements and spaces, making it more
				straightforward for clients to understand the design.</p>
			<p>Color-rendered floor plans can be versatile, serving various purposes from client presentations to marketing
				materials, and can be easily adapted to different styles and themes.</p>
			<p>These plans usually start at &pound;80. </p>
			<a class='btn-forward' href='{base}/portfolio/rendered-floor-plans'>Rendered Floor Plans</a>
		</div>
		<img src='{base}/images/rendered-floor-plan.jpg' alt='Rendered Floor Plan' width='750' height='579'>
	</div>
</section>

<section class='large bg-white'>
	<div class='card'>
		<div>
			<h2 class='mediumTitle'>Rendered 2D Elevations</h2>
			<p>Color-rendered interior elevations, like color-rendered floor plans, offer several advantages. They provide a
				more realistic and detailed representation of interior spaces, allowing clients to visualise the final design
				better.</p>
			<p>The use of colour enhances the overall aesthetics of the elevation drawings, making them more visually
				appealing and engaging.</p>
			<p>Colour elevations allow you to emphasise specific design elements, such as focal points or custom furnishings,
				which can be crucial for conveying the design intent.</p>
			<p>These elevations usually start at &pound;80.</p>
			<a class='btn-forward' href='{base}/portfolio/rendered-2d-elevations'>Rendered 2D Elevations</a>
		</div>
		<img src='{base}/images/rendered-2d-elevation.jpg' alt='Rendered 2D Elevation' width='561' height='419'>
	</div>
</section>

<section class='large bg-light'>
	<div class='card'>
		<div>
			<h2 class='mediumTitle'>Rendered 3D visuals</h2>
			<p>Give your clients a “WOW” factor with 3D visuals. These visuals help you match your proposal to your client's
			requirements and avoid misunderstandings. This, in turn, prevents disappointment, additional expenditure, or extra
			time to deliver the project.</p>
			<p>The process involves constructing a virtual scene with 3D objects and setting up
			lighting and materials to make them look realistic. These visuals start at £130.</p>
			<a class='btn-forward' href='{base}/portfolio/rendered-3d-visuals'>Rendered 3D visuals</a>
		</div>
		<img src='{base}/images/3d-render.jpg' alt='3D Render' width='750' height='533'>
	</div>
</section>

<section class='large bg-light' id='process'>
	<div>
		<h2 class='largeTitle center'>Easy four step process</h2>
		<div class='steps'>
			<div>
				<em>Step 1</em>
				<h3> Free initial consultation</h3>
				<p>To discuss a project, gather technical details and provide a written quotation for work.</p>
				<p>Please use <a href='{base}/contact'>Contact Form</a> to get in touch.</p>
			</div>

			<div>
				<em>Step 2</em>
				<h3>Booking the project</h3>
				<p>50% deposit is paid upon booking. <br />Detailed project information is submitted via Email or DropBox.<br />
					The
					information required can vary, however, standard project will require:</p>
				<ul>
					<li>floor plan and elevations with dimensions <br />(including hand drawn sketches, existing AutoCAD, SketchUp
						files
						etc.)
					</li>
					<li>furniture layout with dimensions</li>
					<li>dimensions of windows and doors</li>
					<li>images or website links to all finishes <br />(paint colour, fabric, hardware etc.)</li>
				</ul>
				<p>For branded documents:</p>
				<ul>
					<li>your logo,</li>
					<li>your contact info</li>
					<li>fonts, text size etc.</li>
					<li>title block (if applicable)</li>
				</ul>
			</div>

			<div>
				<em>Step 3</em>
				<h3>Design and revision stage</h3>
				<p>After studying the submitted information I start construction. </p>
				<p>In order for this stage to run smoothly and
					within agreed timescale make sure you provide as much relevant information as possible.</p>
				<p>Design draft is sent
					to the client for approval.</p>
			</div>

			<div>
				<em>Step 4</em>
				<h3>Final design</h3>
				<p>If applicable, revisions are made, the final drawings are sent to the client via Email or DropBox and the
					final invoice is issued.</p>
			</div>
		</div>
	</div>
</section>

<style lang='scss'>
  .intro {

		> div {
			padding: 0;
		}

    div:nth-child(1) {

      dt {
        font-weight: 300;
        font-size: 2.5rem;
        letter-spacing: 0.875rem;
        margin-right: -0.875rem;
      }

      dd {
        font-weight: 600;
        font-size: clamp(3rem, 9vw, 3.7rem);
        line-height: clamp(4rem, 7vw, 6.25rem);
        margin-top: 2rem;
        text-shadow: 0 0 10px rgba(0,0,0,0.3);
      }

      div {
        text-align: center;

        img {
          width: 32px;
          height: 32px;
        }
      }

      p:first-of-type {
        padding: 2rem 0 0;
      }
    }
  }

  @media (min-width: 800px) {
    section:has(.intro) {
      background: linear-gradient(180deg, var(--cOpaqueBlack), var(--cOpaqueBlack)) repeat-y 50%;
      background-size: 2px auto;
    }

    .intro {
      div:nth-child(1) {
        dl {
          margin-right: 4rem;
        }

        dd {
          font-size: clamp(4rem, 7vw, 6.25rem);
        }

        div {
          text-align: right;
          align-items: end;

          img {
            margin-right: -8px;
          }
        }

        p:first-of-type {
          width: 100%;
          max-width: 420px;
					margin-left: auto;
          padding: 2rem 4rem 0 0;
        }

        p {
          padding-right: 4rem;
        }
      }

      div:nth-child(2) {
        border-left: 4px solid var(--cBlack10);

        img {
          margin-left: 2rem;
        }
      }
    }
  }



  .card {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    > div {
      flex-basis: fit-content;
      max-width: 500px;
      min-width: 30%;
    }

    img {
      padding: 8px;
      background: white;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      min-width: 300px;
    }

    a {
      margin-top: 2rem;
    }

    @media (min-width: 750px) {
      flex-direction: row;
    }
  }

  .welcome {
    font-size: 1.2rem;

    h1 {
      /*font-family: var(--font-bold);*/
			font-weight: 700;
      font-size: 2rem;
      color: var(--cBlack10);
    }

		.mt-0 {
			margin-top: 0;
		}

    .strong {
			font-weight: 700;
    }

    ul {
      margin-top: 1rem;
    }

    li {
      background: var(--cBrick5);
      margin-bottom: 0.5rem;
      padding: 1rem 0.5rem;
      border-radius: 0.5rem;

    }
  }

  h2 {
    margin-top: 2rem;
  }

  .steps {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;

    > div {
      position: relative;
      margin-bottom: 5rem;
      padding: 3rem 2rem;
      border: 1px solid var(--cBlack5);
      border-radius: 0.5rem;
      background: var(--cWhite);
      width: 100%;
    }

    em {
      position: absolute;
      top: -4rem;
      right: 1rem;
      padding: 2rem 1rem;
      font-size: 1.6rem;
      /*background: rgba(255, 255, 255, 0.4);*/
      background: rgba(63, 32, 33, 0.5);
      backdrop-filter: blur(2px);
      border: 1px solid var(--cBlack5);
      border-radius: 4rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
      color: var(--cWhite);
    }

    h3 {
      font-size: 1.6em;
    }

    ul {
      margin-top: 1rem;
      font-size: 1.1rem;
    }

    li {
      list-style: inside;
      margin-top: 0.4rem;
    }

    a {
      text-decoration: underline;
    }

    @media (min-width: 800px) {
      > div {
        width: clamp(300px, 80%, 800px);

        &:nth-child(odd) {
          margin-right: auto;

          em {
            right: 1rem;
          }
        }

        &:nth-child(even) {
          margin-left: auto;

          em {
            left: 1rem;
            right: auto;
          }
        }
      }
    }

  }
</style>
