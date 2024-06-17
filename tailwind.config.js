import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [],
	theme: {
		container: { center: true, screens: { "2xl": "1440px" } },
		extend: {
			colors: {
				accent: "#3572ef",
				primary: "#ffffff",
				secondary: "#151515",
			},
			fontFamily: {
				mukta: ["Mukta", ...fontFamily.sans],
			},
			screens: { "2xl": "1440px" },
		},
	},
};
