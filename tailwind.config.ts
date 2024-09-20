import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "#134150",
				label: "#9aa3a1",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"], // Add Poppins as the default sans-serif font
			},
		},
	},
	plugins: [],
};
export default config;
