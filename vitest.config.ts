import preact from '@preact/preset-vite'
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [preact()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './test/setup.ts',
		css: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'~': path.resolve(__dirname, './'),
		},
	},
});
