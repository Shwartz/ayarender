import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';

export default defineConfig({
	plugins: [
		sveltekit(),
	],
	resolve: {
		alias: {
			// TEMPORARY FIX: Direct Zod adapter import to bypass barrel export
			// sveltekit-superforms/adapters loads ALL adapters (including TypeBox)
			// TypeBox has export issues with Vite 6.4.x strict module resolution
			// TODO: Remove after upgrading sveltekit-superforms (if they fix exports) or Vite 7.x
			// Test by removing alias and checking /contact page loads without TypeBox errors
			'sveltekit-superforms/adapters/zod': fileURLToPath(
				new URL('./node_modules/sveltekit-superforms/dist/adapters/zod.js', import.meta.url)
			),
		},
	},
  server: {
    port: 5200,
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or 'modern'
			}
		}
	},
	ssr: {
		noExternal: ['sveltekit-superforms', 'resend', 'typebox']
	}
});
