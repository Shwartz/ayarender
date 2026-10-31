This repository's AI instructions live in [`AGENTS.md`](../AGENTS.md) at the repo root. Read it before making changes: it has the module map, commands, design system, image and contact-form conventions.

Always-on rules (full details in `AGENTS.md`):
- NEVER commit or push unless explicitly asked; show `git diff` and wait for approval.
- Ask before adding dependencies.
- Keep explanations short and bullet-pointed.
- SvelteKit 2 / Svelte 5 runes + TypeScript + Sass; deployed on Cloudflare Pages.
- Use `--aya-*` CSS variables from `src/routes/globalStyles.css`; never hardcode colours.
- Use `Image.svelte` for gallery images and always set `aspectRatio`.
- Never read, print or commit `.env`.
- Run `npm run check` after significant changes.
