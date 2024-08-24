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
			},
			fontSize: {
				sm: "0.750rem",
				base: "1rem",
				xl: "1.333rem",
				"2xl": "1.777rem",
				"3xl": "2.369rem",
				"4xl": "3.158rem",
				"5xl": "4.210rem",
			},
			fontFamily: {
				heading: "Poppins",
				body: "Inter",
			},
			fontWeight: {
				normal: "400",
				bold: "700",
			},
			colors: {
				text: "rgb(var(--text))",
				background: "rgb(var(--background))",
				primary: "rgb(var(--primary))",
				secondary: "rgb(var(--secondary))",
				accent: "rgb(var(--accent))",
			},
			keyframes: {
				gradient: {
					"0%": { backgroundPosition: "0% 0%" },
					"50%": { backgroundPosition: "100% 0%" },
					"100%": { backgroundPosition: "0% 0%" },
				},
			},
			animation: {
				gradient: "gradient 3s ease infinite",
			},
		},
	},
	plugins: [],
};
export default config;
