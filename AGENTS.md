# AyaRender — AI Instructions

Single source of truth for all AI tools (Claude Code, Copilot, others).
`CLAUDE.md` and `.github/copilot-instructions.md` only point here.

## Behaviour rules (always apply)
- **NEVER commit or push** unless the user explicitly asks. Show `git diff` and wait for approval; the user writes their own commit messages.
- **Ask before adding dependencies**; never auto-install packages without showing what will be added.
- Keep explanations SHORT, bullet-pointed: "Did A → to achieve B → because X". The user values learning, so flag anything non-obvious; let them ask for details.
- Suggest alternatives and trade-offs briefly for architectural decisions; the user decides.
- Read project files directly instead of asking the user to paste them.
- After significant changes run `npm run check`; run tests/build when relevant.

## Project overview
Marketing site for AyaRender (interior visualisation studio). Single SvelteKit app, no separate backend.
- SvelteKit 2.x / Svelte 5 (runes: `$props`, `$derived`, snippets), TypeScript, Sass/SCSS component-scoped styles
- Deployed to Cloudflare Pages via `@sveltejs/adapter-cloudflare`; Node 22 (`.nvmrc`; engines allow `>=20 <23`)
- Images on Cloudflare Images (`imagedelivery.net`)

## Commands
| Task | Command |
|---|---|
| Dev server | `npm run dev` |
| Type check | `npm run check` |
| Lint / format | `npm run lint` / `npm run format` |
| Unit tests (vitest) | `npm run test:unit` |
| E2E (playwright, builds first) | `npm run test:integration` |
| Build / preview | `npm run build` / `npm run preview` |
| Cloudflare local | `npm run build && npm run cf-dev` |
| Deploy | `npm run deploy` (only when the user asks) |

Test coverage is minimal (one placeholder unit test, one homepage E2E) — don't assume tests catch regressions; verify with `check` and by viewing the code.

## Module map (where things live)
| Path | Owns |
|---|---|
| `src/routes/+layout.svelte` | Global nav/footer |
| `src/routes/globalStyles.css` | Design tokens (`--aya-*`), global styles, dark-mode palette |
| `src/routes/+page.svelte` | Home: service cards + process steps |
| `src/routes/price/` | Pricing table page |
| `src/routes/contact/` | Contact form (`+page.svelte`) + server action (`+page.server.ts`) |
| `src/routes/visuals/` | Visual services pages; `+layout.svelte` adds `VisualsSubmenu`. Subpages: `3d-interior-visuals`, `rendered-elevations`, `rendered-floor-plans`, `technical-drawings` |
| `src/components/` | Reusable UI: `Image.svelte`, `PageHead.svelte`, `VisualsSubmenu.svelte` (alias `$components`) |
| `src/lib/` | `contactSchema.ts` (Zod), `emailSetup.server.ts` (Resend, server-only) (alias `$lib`) |
| `static/` | Fonts, icons, favicons/PWA; `static/images/` is legacy |
| `svelte.config.js` | Adapter route include/exclude (static vs function), `$components` alias |

Not part of the app: `temp/` (scratch, gitignored), `Research/` (personal notes, gitignored).

**Adding a visuals page:** create `src/routes/visuals/<slug>/+page.svelte`, add it to `menuItems` in `VisualsSubmenu.svelte`, add `PageHead`, update the nav/home card if needed.

## Design system
Always use CSS variables from `src/routes/globalStyles.css`; never hardcode colours (a dark-mode palette overrides the same variables).
`--aya-navy-900/700/500`, `--aya-sand-100/50`, `--aya-white`, `--aya-rose-700/500/300` (rose-700 for buttons).

Conventions:
- Cards: radius `0.5rem` (small elements `0.25rem`), shadow `0 2px 8px rgba(0,0,0,0.08)`, hover `translateY(-4px)`, transition `0.2s ease`
- Mobile-first; breakpoints 600px (tablet), 800px (desktop)
- Fluid type with `clamp()`
- Card grids: semantic `<ul>/<li>`; wrap entire card in `<a>`
- Accessibility: meaningful alt text, ARIA labels, visible focus states

Look at an existing page (e.g. `src/routes/+page.svelte`) for the exact grid/card patterns instead of re-deriving them.

## Images
- Use `Image.svelte` for portfolio/gallery images; **always set `aspectRatio`** (`16/9`, `3/2` default, `4/3`, `1/1`) and `expandable={true}` for galleries.
- Props: `imgId`, `alt`, `aspectRatio`, `expandable`, `className`.
- URL format `https://imagedelivery.net/OsbYeWCzhRDS5xpqlDmBXA/{imageId}/{variant}`; variants `320w 640w 768w 1024w 1280w 1920w blur`.
- Lightbox is desktop-only (hover + fine pointer); mobile uses native pinch-zoom.
- Hero/service cards without lightbox may use a raw `<img>` with `srcset`/`sizes`.

## Contact form / email / env
- Flow: `contact/+page.svelte` → superforms + Zod (`contactSchema`) → action `contactForm` in `+page.server.ts` → Resend.
- Honeypot: hidden `name` field must stay empty; if filled, silently return success without sending.
- Env vars: `RESEND_API_KEY`, `SENDER_EMAIL`, `RECIPIENT_EMAIL`. Read as `platform?.env?.VAR || svelteEnv.VAR` (Cloudflare vs local `.env` via `$env/dynamic/private`). See `.env.example`; **never read, print or commit `.env`**.
- Resend client is created lazily and cached by API key in `emailSetup.server.ts` (server-only).

## Cloudflare notes
- `svelte.config.js` `exclude` paths are served as static files (no function cost); update it when adding new static asset folders.
- www → root domain redirect is configured in the Cloudflare dashboard, not in code.

## Do NOT flag / "fix"
- `@ts-expect-error` on `superValidate(zod(...))` in `contact/+page.server.ts` — known superforms/zod adapter typing mismatch.
- `react`/`react-dom` devDependencies — peer dependency of `resend`, needed for `npm ci` on Cloudflare.
- `static/images/` legacy assets — being phased out, don't migrate unasked.
- Vite pinned to `6.4.3` plus the alias in `vite.config.ts` mapping `sveltekit-superforms/adapters/zod` straight to zod.js — avoids the barrel import loading the TypeBox adapter, which breaks under Vite 6.4's strict exports. Remove both only after upgrading superforms or Vite 7, then verify `/contact` loads.

## Keeping these instructions current
- If a pattern or module changes, update this file in the same change.
- If the AI repeats the same mistake twice, add a rule here (or a "Do NOT flag" entry).
- Keep this file lean: describe *what exists and the rules*, not what the code already says. When it outgrows ~200 lines or the project gains a second layer (e.g. API), split into per-folder `AGENTS.md` files and add a router table here.
