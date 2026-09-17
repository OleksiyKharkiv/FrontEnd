import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Fully static personal site (no dynamic backend calls) — prerendered
			// to plain HTML/CSS/JS, deployable to GitHub Pages same as the old site.
			adapter: adapter({ fallback: undefined }),

			// This is a GitHub *project* page (github.io/FrontEnd/...), not a
			// user page at the domain root — every generated asset URL needs
			// the /FrontEnd prefix or it 404s once deployed, even though it
			// works fine locally at http://localhost:5183/. GITHUB_ACTIONS is
			// set by every GitHub-hosted runner automatically, so local
			// dev/build stays at root and only the CI build gets the prefix.
			paths: {
				base: process.env.GITHUB_ACTIONS ? '/FrontEnd' : ''
			}
		}),

		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			emitTsDeclarations: true
		})
	]
});
