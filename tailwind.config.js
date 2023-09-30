const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('/hero2.png')",
				creditcard: "url('/looper.svg')",
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			screens: {
				"2xl": "1440px",
			},
			colors: {
				brand: "#756ECC",
				purplemedium: "#8A84DF",
				fuzzywuzzy: "#D66A6A",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
