import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-rainbow":
					"linear-gradient(to right, #FF7A7A, #FFB570, #F7F763, #88F788, #63F7C7, #63A9F7, #B570FF, #FF7A7A)",
				"gradient-magic":
					"linear-gradient(60deg, rgba(0,244,255,1) 10%, rgba(177,0,255,1) 50%, rgba(249,0,255,1) 75%, rgba(255,0,103,1) 100%)",
			},
			animation: {
				"gradient-text": "background-to-right 6s linear infinite",
			},
			keyframes: {
				"background-to-right": {
					"0%": { "background-position": "0% center" },
					"100%": { "background-position": "115% center" },
				},
			},
		},
	},
	plugins: [],
};
export default config;
