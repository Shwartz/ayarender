import type { Handle } from '@sveltejs/kit';

// Client presentation pages are white-label: strip Aya Render's title, icons, theme colour and analytics
// that app.html adds to every page. The page's own <title> and robots meta come from +page.svelte.
const AYA_HEAD_PATTERNS = [
  /<title>[^<]*<\/title>\s*/,
  /<meta name="description"[^>]*>\s*/,
  /<link rel="(?:apple-touch-icon|icon|manifest|mask-icon)"[^>]*>\s*/g,
  /<meta name="(?:msapplication-TileColor|theme-color)"[^>]*>\s*/g,
  /<script async src="https:\/\/www\.googletagmanager\.com[^>]*><\/script>\s*<script>[\s\S]*?<\/script>\s*/
];

export const handle: Handle = async ({ event, resolve }) => {
  if (!event.url.pathname.startsWith('/projects/')) return resolve(event);

  return resolve(event, {
    transformPageChunk: ({ html }) => AYA_HEAD_PATTERNS.reduce((out, pattern) => out.replace(pattern, ''), html)
  });
};
