import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: { adapter: adapter({
      // Routes that should be excluded from prerendering
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    }) }
};

export default config;
