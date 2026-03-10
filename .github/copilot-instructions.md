# Project Context for AI Assistant

## Project Overview
- **Project Name:** AyaRender
- **Framework:** SvelteKit 2.x (Svelte 5.x)
- **Language:** TypeScript
- **Deployment Platform:** Cloudflare Pages
- **Adapter:** `@sveltejs/adapter-cloudflare`
- **Styling:** Sass/SCSS (component-scoped styles)
- **Node Version:** >=20.0.0 <23.0.0
- **Image Hosting:** Cloudflare Images (imagedelivery.net)

## Key Architecture Details

### Routing
- Uses SvelteKit's file-based routing in `/src/routes`
- Main routes:
  - `/` - Home page (with service cards and process steps)
  - `/contact` - Contact form (with server-side handling)
  - `/price` - Pricing page with service table
  - `/visuals/*` - Visual services pages with submenu navigation
    - `/visuals/3d-interior-visuals`
    - `/visuals/rendered-elevations`
    - `/visuals/rendered-floor-plans`
    - `/visuals/technical-drawings`

### Design System & Color Palette
**Always use these defined colors from `/src/routes/globalStyles.css`:**
- `--aya-navy-900` - Primary dark navy (#0D1B2A)
- `--aya-navy-700` - Medium navy (#415A77)
- `--aya-navy-500` - Light navy (#778DA9)
- `--aya-sand-100` - Light sand/beige (#E0E1DD)
- `--aya-sand-50` - Very light sand (#f5f6f1)
- `--aya-white` - White (#ffffff)
- `--aya-rose-700` - Dark rose for buttons (#af696e)
- `--aya-rose-500` - Medium rose (#e5989b)
- `--aya-rose-300` - Light rose (#ffb4a2)

**Design Patterns:**
- Card-based layouts with hover effects (subtle elevation: `translateY(-4px)`)
- Grid layouts for responsive design (1 column mobile → 2 columns tablet → 4 columns desktop)
- Consistent border-radius: `0.5rem` for cards, `0.25rem` for smaller elements
- Smooth transitions: `0.2s ease` for hover effects
- Box shadows for elevation: `0 2px 8px rgba(0, 0, 0, 0.08)`
- Responsive typography using `clamp()` for fluid sizing

### Image Handling
- **Cloudflare Images** for all service/portfolio images
- Base URL: `https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/`
- Format: `{baseURL}/{imageId}/{variant}`
- Available variants: `320w`, `640w`, `768w`, `1024w`, `1280w`, `1920w`
- **Always use responsive images** with `srcset` and `sizes` attributes
- Example pattern for service cards (768w max):
  ```html
  <img
    src="https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/{id}/768w"
    srcset="https://imagedelivery.net/.../320w 320w,
            https://imagedelivery.net/.../640w 640w,
            https://imagedelivery.net/.../768w 768w,
            https://imagedelivery.net/.../1024w 1024w"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 768px"
    alt="Descriptive alt text"
  />
  ```
- Example for hero images (1920w max): use larger variants with appropriate srcset

### Static Assets
- Located in `/static` folder
- Custom fonts in `/static/fonts/` (OpenSans: Light 300, Regular 400, Bold 600)
- Icons in `/static/icons/`
- Legacy images in `/static/images/` (being phased out in favor of Cloudflare Images)
- Favicons and PWA icons in `/static/` root

### Cloudflare Configuration
- **svelte.config.js:** Configures which routes invoke Cloudflare Pages Functions vs. static hosting
  - `exclude` paths are served directly as static files (faster, no function cost)
  - `include` paths go through SvelteKit's server-side rendering
- **wrangler.toml:** Contains Cloudflare Workers/Pages configuration
- **Redirect Rule:** www.ayarender.com redirects to ayarender.com (configured in Cloudflare dashboard)

### Key Dependencies
- `resend` - Email service for contact form
- `sveltekit-superforms` - Form handling with validation
- `zod` - Schema validation
- `svelte-loading-spinners` - Loading indicators for async operations

### Reusable Components
- `VisualsSubmenu.svelte` - Navigation submenu for visual services pages (automatically highlights current page)

## Development Workflow
- **Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Deploy:** `npm run deploy` (builds and deploys to Cloudflare Pages)
- **Preview:** `npm run preview`
- **Cloudflare Dev:** `npm run cf-dev` (test with Cloudflare Pages locally)
- **Type Check:** `npm run check` (run after significant changes)

## AI Assistant Guidelines
1. **Always check project files directly** - You can read any file in the workspace without asking the user to provide it
2. **Context First:** Review relevant files before making changes
3. **Design System:** Always use the defined color variables from `globalStyles.css` - never hardcode colors
4. **SvelteKit 2.x / Svelte 5.x:** Follow modern SvelteKit patterns (not React/Next.js)
5. **TypeScript:** Use proper TypeScript types
6. **Responsive Design:** Mobile-first approach, test layouts at breakpoints: 600px (tablet), 800px (desktop)
7. **Images:** Use Cloudflare Images with responsive srcset and appropriate variants
8. **Performance:** Optimize for Cloudflare Pages edge deployment
9. **Accessibility:** Include proper alt text, ARIA labels, focus states
10. **Testing:** Run `npm run check` after significant changes

## Common Patterns in This Project
- Server-side logic in `+page.server.ts` files
- Client-side pages in `+page.svelte` files
- Shared layout in `+layout.svelte` (global nav/footer)
- Nested layout in `/visuals/+layout.svelte` (submenu for visual services)
- Component-scoped SCSS styles using Sass nesting
- Form validation using Zod schemas
- Email sending via Resend API (server-side only)
- Grid-based card layouts with hover animations
- Semantic HTML with lists (`<ul>`, `<li>`) for card grids
- Links wrapping entire cards for better UX and accessibility

## Layout Patterns
- **Service Cards** (home page):
  - Mobile: 1 column
  - Tablet (600px+): 2 columns
  - Desktop (800px+): 2 columns with max-width constraint and centered
  - Uses `<a>` wrapping entire card for navigation
  
- **Process Steps** (home page):
  - Mobile: 1 column
  - Tablet (600px+): 2 columns
  - Desktop: 4 columns
  - Numbered badges positioned absolutely

- **Visual Services Pages**:
  - Full-width images (max 1216px container width)
  - Submenu navigation at top
  - Simple scrolling layout (no lightbox/gallery)
  - Description text at top, CTA button at bottom

- **Pricing Table**:
  - Responsive table with hover effects
  - Navy header, white rows with sand borders
  - Horizontal scroll on mobile if needed

## Known Considerations
- WWW to root domain redirection handled by Cloudflare (not in code)
- Cloudflare Images provide automatic optimization and multiple sizes
- No lightbox/gallery needed for visual services pages - simple scrolling approach
- Submenu component handles active state automatically via `$page.url.pathname`

