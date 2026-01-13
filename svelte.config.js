import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      routes: {
        include: ['/*'],
        exclude: ['/_app/*', '/images/*', '/portfolio/*', '/fonts/*', '/icons/*']
      }
    })
  }
};

export default config;

/**
 * ••What exclude actually does
 * In _routes.json, include defines which paths invoke your Pages Function, and exclude defines which paths must not invoke it.
 *
 * Excluded paths are served directly from Cloudflare Pages’ static hosting layer,
 * so they are “just static files” from the platform’s point of view (faster, no function cost).
 * */
