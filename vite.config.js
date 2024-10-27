import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 3000,
	},

	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData: `@import "./src/assets/variables.scss";`,
			},
		},
	},

	root: 'src',

	build: {
		outDir: '../dist',
		sourcemap: true,
	},
})
