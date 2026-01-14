# Project Context for AI Assistant

## Project Overview
- **Project Name:** AyaRender
- **Framework:** SvelteKit 2.x
- **Language:** TypeScript
- **Deployment Platform:** Cloudflare Pages
- **Adapter:** `@sveltejs/adapter-cloudflare`
- **Styling:** Sass/SCSS
- **Node Version:** >=20.0.0 <23.0.0

## Key Architecture Details

### Routing
- Uses SvelteKit's file-based routing in `/src/routes`
- Main routes:
  - `/` - Home page
  - `/contact` - Contact form (with server-side handling)
  - `/portfolio/*` - Portfolio pages with categories
  - `/portfolio/rendered-floor-plans`
  - `/portfolio/rendered-2d-elevations`
  - `/portfolio/rendered-3d-visuals`
  - `/portfolio/technical-drawings`

### Static Assets
- Located in `/static` folder
- Portfolio images stored in `/static/assets/portfolio/` subdirectories (served as `/assets/portfolio/...`)
- Custom fonts in `/static/fonts/`
- Icons in `/static/icons/`
- **Important:** Portfolio images must be served as static files (not through SvelteKit functions) due to Cloudflare's URL length and file count limitations
- **Critical:** Portfolio images are served from `/assets/portfolio/*` path, while portfolio pages use `/portfolio/*` routes - these are separate and must not conflict

### Cloudflare Configuration
- **svelte.config.js:** Configures which routes invoke Cloudflare Pages Functions vs. static hosting
  - `exclude` paths are served directly as static files (faster, no function cost)
  - `include` paths go through SvelteKit's server-side rendering
- **wrangler.toml:** Contains Cloudflare Workers/Pages configuration
- **Redirect Rule:** www.ayarender.com redirects to ayarender.com (configured in Cloudflare dashboard)

### Key Dependencies
- `resend` - Email service for contact form
- `svelte-lightbox` - Image gallery/lightbox component
- `sveltekit-superforms` - Form handling with validation
- `zod` - Schema validation
- `svelte-loading-spinners` - Loading indicators

## Development Workflow
- **Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Deploy:** `npm run deploy` (builds and deploys to Cloudflare Pages)
- **Preview:** `npm run preview`
- **Cloudflare Dev:** `npm run cf-dev` (test with Cloudflare Pages locally)

## AI Assistant Guidelines
1. **Always check project files directly** - You can read any file in the workspace without asking the user to provide it
2. **Context First:** Review relevant files before making changes
3. **SvelteKit Conventions:** Follow SvelteKit 2.x patterns (not React/Next.js)
4. **TypeScript:** Use proper TypeScript types
5. **Performance:** Consider Cloudflare Pages' limitations and optimize for edge deployment
6. **Testing:** Run `npm run check` after significant changes

## Common Patterns in This Project
- Server-side logic in `+page.server.ts` files
- Client-side pages in `+page.svelte` files
- Shared layout in `+layout.svelte`
- Form validation using Zod schemas
- Email sending via Resend API (server-side only)

## Known Issues & Considerations
- Cloudflare has URL length limitations (100 characters) affecting portfolio image paths
- Portfolio folder routing vs. static file serving must be carefully configured
- WWW to root domain redirection handled by Cloudflare (not in code)

