import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({

	// Added Configuration for 
	// Deployment to GitHub Pages
	site: 'https://totemmc.github.io',
	base: '/docs',

	integrations: [
		starlight({

			// Add plugins
			// FIXME: Plugin route not working. Debug later.
			plugins: [
				/*
				starlightBlog({
				  title: "Blog",
				  postCount: 7,
				  recentPostCount: 1,
				  authors: {
					nitya: {
					  name: "Nitya Narasimhan, PhD",
					  picture: "https://github.com/nitya.png",
					  url: "https://github.com/nitya",
					  title: "AI, Art & Advocacy @Microsoft",
					}
				  },
				}),
				*/
			],

			title: 'TotemMC Docs',
			social: {
				github: 'https://github.com/TotemMC/docs',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
