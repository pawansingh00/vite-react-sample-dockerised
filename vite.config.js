import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dynamicBase } from "vite-plugin-dynamic-base";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dynamicBase({ transformIndexHtml: true })],
	test: {
		// https://vitest.dev/config/#reporters
		reporters: "verbose",

		// https://vitest.dev/config/#environment
		environment: "jsdom",

		/**
		 * https://vitest.dev/config/#setupfiles
		 * They will be run before each test file.
		 */
		setupFiles: ["./src/setupTests.js"],
	},
    server: {
        origin: "{{GLIDER_BASE}}"
    }
});
