<script>
	import { base } from '$app/paths';
	const title = 'Interior Visualiser';
	const description = 'Converting interior designs in 2D and 3D visualisation';

	let scrollY = $state(0);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="og:image" content="{base}/images/rendered-2d-elevation.jpg" />
	<meta property="og:image:alt" content="Example of 2D elevation" />
	<meta name="robots" content="index,follow" />
</svelte:head>

<section class="large vLine overflow">
	<div class="intro boxes">
		<div>
			<div>
				<dl>
					<dt>AIJA SVARCS</dt>
					<dd>Interior Visualiser</dd>
				</dl>
				<p>Check out my areas of expertise below and how I can make your dreams come to life</p>
				<p class="icnChevron">
					<a href="#whyHireMe">
						<img alt="" src="/icons/chevron-double.svg" height="32" width="32" />
					</a>
				</p>
			</div>
		</div>
		<div>
			<img
				src="{base}/images/Japandi-kitchen-3D-render-and-black-and-white.jpg"
				alt="Example of Japandi Kithen render"
				width="630"
				height="460"
			/>
		</div>
	</div>
</section>

<section class="large vLine">
	<div>
		<h1 class="boxTitle">
			<span id="whyHireMe">Why hire me?</span>
		</h1>
		<div class="boxes vLine light">
			<div>
				<img
					class="boxImage"
					src="{base}/portfolio/rendered-2d-elevations/Japandi-inspired-kitchen-elevation-800.jpg"
					alt="Japandi inspired kitchen elevation"
					width="487"
					height="334"
				/>
			</div>
			<div>
				<h2>Visualisation for Interior Designers</h2>
				<p>
					My design support service is tailored to meet your unique needs. I understand the ebb and
					flow of the industry; some months are a whirlwind of activity, while others are more
					tranquil.
				</p>
				<p>
					My approach is designed to complement your workflow seamlessly. There are no lengthy
					commitments and no concerns about the overhead of hiring a design assistant or junior
					designer.
				</p>

				<p><em>Why should you consider hiring me?</em></p>
				<ul>
					<li>
						You want to enhance your presentations and create professional-looking deliverables for
						your clients and contractors.
					</li>
					<li>You are swamped with projects and need assistance with specific tasks.</li>
					<li>You prefer to avoid design drafting.</li>
					<li>You need to gain skills in CAD software.</li>
				</ul>

				<p>I am here to assist with all these challenges and more.</p>
				<p><a class="animate" href="{base}/#easyFourStep">Easy four step process</a></p>
			</div>
		</div>
	</div>
</section>

<section class="large vLine">
	<div>
		<h1 class="boxTitle">
			<span id="renderedFloorPlans">Rendered Floor Plans</span>
		</h1>
		<div class="boxes reverse dark">
			<div>
				<img
					class="boxImage"
					src="{base}/images/rendered-floor-plan.jpg"
					alt="Rendered Floor Plan"
					width="750"
					height="579"
				/>
			</div>
			<div>
				<h2>Overview</h2>
				<p>
					With color-rendered floor plans, it's easier to distinguish between various elements and
					spaces, making it more straightforward for clients to understand the design.
				</p>

				<p>
					Color-rendered floor plans can be versatile, serving various purposes from client
					presentations to marketing materials, and can be easily adapted to different styles and
					themes.
				</p>

				<p>These plans usually start at £80.</p>

				<p>
					<a class="btn-forward" href="{base}/portfolio/rendered-floor-plans"
						>Rendered Floor Plans</a
					>
				</p>
			</div>
		</div>
	</div>
</section>

<section class="large vLine">
	<div>
		<h1 class="boxTitle">
			<span id="rendered2dElevations">Rendered 2D Elevations</span>
		</h1>
		<div class="boxes vLine light">
			<div>
				<img
					class="boxImage"
					src="{base}/images/rendered-2d-elevation.jpg"
					alt="Rendered 2D Elevation"
					width="561"
					height="419"
				/>
			</div>
			<div>
				<h2>Overview</h2>
				<p>
					Color-rendered interior elevations, like color-rendered floor plans, offer several
					advantages. They provide a more realistic and detailed representation of interior spaces,
					allowing clients to visualise the final design better.
				</p>

				<p>
					The use of colour enhances the overall aesthetics of the elevation drawings, making them
					more visually appealing and engaging.
				</p>

				<p>
					Colour elevations allow you to emphasise specific design elements, such as focal points or
					custom furnishings, which can be crucial for conveying the design intent.
				</p>

				<p>These plans usually start at £80.</p>

				<p>
					<a class="btn-forward" href="{base}/portfolio/rendered-2d-elevations"
						>Rendered 2D Elevations</a
					>
				</p>
			</div>
		</div>
	</div>
</section>

<section class="large vLine">
	<div>
		<h1 class="boxTitle">
			<span id="rendered3dVisuals">Rendered 3D visuals</span>
		</h1>
		<div class="boxes reverse dark">
			<div>
				<img
					class="boxImage"
					src="{base}/images/3d-render.jpg"
					alt="3D Render"
					width="750"
					height="533"
				/>
			</div>
			<div>
				<h2>Overview</h2>
				<p>
					Give your clients a “WOW” factor with 3D visuals. These visuals help you match your
					proposal to your client's requirements and avoid misunderstandings. This, in turn,
					prevents disappointment, additional expenditure, or extra time to deliver the project.
				</p>
				<p>
					The process involves constructing a virtual scene with 3D objects and setting up lighting
					and materials to make them look realistic. These visuals start at £130.
				</p>

				<p>
					<a class="btn-forward" href="{base}/portfolio/rendered-3d-visuals">Rendered 3D visuals</a>
				</p>
			</div>
		</div>
	</div>
</section>

<section class="large vLine">
	<div>
		<h1 class="boxTitle">
			<span id="technicalDrawings">Technical Drawings</span>
		</h1>
		<div class="boxes vLine light">
			<div>
				<img
					class="boxImage"
					src="{base}/images/technical-drawing.jpg"
					alt="Technical drawing"
					width="750"
					height="530"
				/>
			</div>
			<div>
				<h2>Overview</h2>
				<p>Classical black and white or colour rendered to highlight your design selections.</p>
				<p>
					The drawing solutions include a range of options - initial floorplans, elevations,
					electrical and lighting layouts and bespoke joinery.
				</p>
				<p>
					Depending on your requirements they can be presented to scale, with dimensions, title
					block and your branding.
				</p>
				<p>These plans usually start at &pound;50.</p>
				<p>
					<a class="btn-forward" href="{base}/portfolio/technical-drawings">Technical Drawings</a>
				</p>
			</div>
		</div>
	</div>
</section>

<section class="large vLine steps">
	<div>
		<h1 class="boxTitle">
			<span id="easyFourStep">Easy four step process</span>
		</h1>
		<div class="boxes">
			<div class="light">
				<p>Step 1</p>
				<h2>Free initial consultation</h2>
				<p>
					To discuss a project, gather technical details and provide a written quotation for work.
				</p>
				<p>Please use <a class="animate" href="{base}/contact">Contact Form</a> to get in touch.</p>
			</div>
			<div>&nbsp;</div>
		</div>

		<div class="boxes reverse">
			<div class="light">
				<p>Step 2</p>
				<h2>Booking the project</h2>
				<p>
					50% deposit is paid upon booking. <br />Detailed project information is submitted via
					Email or DropBox.<br />
					The information required can vary, however, standard project will require:
				</p>
				<ul>
					<li>
						floor plan and elevations with dimensions <br />(including hand drawn sketches, existing
						AutoCAD, SketchUp files etc.)
					</li>
					<li>furniture layout with dimensions</li>
					<li>dimensions of windows and doors</li>
					<li>
						images or website links to all finishes <br />(paint colour, fabric, hardware etc.)
					</li>
				</ul>
				<p>For branded documents:</p>
				<ul>
					<li>your logo,</li>
					<li>your contact info</li>
					<li>fonts, text size etc.</li>
					<li>title block (if applicable)</li>
				</ul>
			</div>
			<div>&nbsp;</div>
		</div>

		<div class="boxes">
			<div class="light">
				<p>Step 3</p>
				<h2>Design and revision stage</h2>
				<p>After studying the submitted information I start construction.</p>
				<p>
					In order for this stage to run smoothly and within agreed timescale make sure you provide
					as much relevant information as possible.
				</p>
				<p>Design draft is sent to the client for approval.</p>
			</div>
			<div>&nbsp;</div>
		</div>

		<div class="boxes reverse">
			<div class="light">
				<p>Step 4</p>
				<h2>Final design</h2>
				<p>
					If applicable, revisions are made, the final drawings are sent to the client via Email or
					DropBox and the final invoice is issued.
				</p>
			</div>
			<div>&nbsp;</div>
		</div>
	</div>
</section>

<section class="large vline dark last">
	<div>
		<div class="boxes">
			<div>
				<div class="roundedImage">
					<img
						src="{base}/images/aija-svarcs-gallery.jpg"
						alt="Aija Svarcs"
						width="350"
						height="350"
					/>
				</div>
			</div>
			<div>
				<h1 class="mediumTitle">Hi, my name is Aija <br /><i>(pronounce as I-ya)</i></h1>
				<p>
					There is a technical term for what I do <br />
					- <em>Interior Design visualiser</em>,<br />
					but I would like to call myself <em>Spatial Magician</em>.
				</p>
				<p>
					I can virtually transfer existing living space and show you images of the property that
					hasn't even been built yet.
				</p>
				<p>
					I specialise in Technical Drawings, Rendered Floor Plans, Rendered 2D Elevations and 3D
					visuals.
				</p>
				<p>
					<a class="btn-forward" href="{base}/contact">Contact me</a>
				</p>
			</div>
		</div>
	</div>
</section>

<div style="transform: translate3d(0, {scrollY}px, 0)" id="animatedLine"></div>
<svelte:window bind:scrollY />

<style lang="scss">
	@keyframes jumping {
		0% {
			transform: translate3d(0, 0, 0);
		}
		30% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, 12px, 0);
		}
		70% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(0, 0, 0);
		}
	}

	@keyframes spinColors {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}

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
			}

			div {
				text-align: center;

				a {
					display: inline-block;
					animation: 3s jumping 7;
				}

				img {
					width: 32px;
					height: 32px;
				}
			}

			p:first-of-type {
				padding: 2rem 0 0;
			}
		}

		.icnChevron {
			margin-bottom: 1rem;
		}
	}

	@media (min-width: 800px) {
		.intro {
			height: 100%;
			min-height: calc(100vh - 112px);

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

					a {
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
				/*border-left: 4px solid var(--cBlack10);*/

				img {
					margin-left: 2rem;
				}
			}
		}
	}

	.boxImage {
		max-width: 500px;
		margin: auto;

		@media (min-width: 800px) {
			max-width: 100%;
		}
	}

	.steps {
		.boxes {
			gap: 2px;
		}
	}

	.roundedImage {
		--card-width: 300px;

		position: relative;
		margin: auto;
		aspect-ratio: 1;
		max-width: calc(var(--card-width) + 2rem);

		&:before {
			background: hsl(0, 30%, 50%);
			animation: spinColors 5.5s linear infinite;

			display: block;
			position: absolute;

			content: '';
			top: 0;
			left: 0;
			z-index: 0;
			max-height: var(--card-width);
			max-width: var(--card-width);
			width: 100%;
			height: 100%;
			border-radius: 50%;
			box-shadow: 0 0 9px 3px hsl(0, 60%, 50%);
			transform: translate3d(0, 0, 0);
		}

		img {
			position: relative;
			margin: auto;
			max-width: var(--card-width);
			aspect-ratio: 1;
			border-radius: 50%;
			overflow: hidden;
		}
	}

	.last {
		margin-bottom: 0;
	}

	@media (min-width: 800px) {
		#animatedLine {
			position: absolute;
			top: 14vh;
			left: calc(50% + 1px);
			width: 4px;
			height: 100vh;
			max-height: calc(100vh - 20vh);
			background: var(--cBlack10);
			z-index: -1;
			transform: translate3d(0, 0, 0);
			transition: transform 200ms;
		}	
	}
</style>
