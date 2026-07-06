import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const siteRoot = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(siteRoot, '..');
const sourceRoot = resolve(packageRoot, 'src');

export default defineConfig({
	root: siteRoot,
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: /^@any-tdf\/react-motion\/(.+)$/,
				replacement: `${sourceRoot}/$1`
			},
			{
				find: '@any-tdf/react-motion',
				replacement: resolve(sourceRoot, 'index.ts')
			}
		]
	},
	server: {
		host: '0.0.0.0',
		port: 8898
	},
	preview: {
		host: '0.0.0.0',
		port: 8899
	},
	build: {
		outDir: resolve(packageRoot, 'site-dist'),
		emptyOutDir: true
	}
});
