import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	// Enable many frameworks to support all different kinds of components.
	integrations: [
		preact({ include: ['**/preact/*'], compat: true }),
		solid({ include: ['**/solid/*'] }),
	],
});
