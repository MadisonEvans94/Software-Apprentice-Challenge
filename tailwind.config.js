/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				display: ["Segoe UI", "Helvetica Neue", "serif"],
				body: ["Roboto", "Ubuntu", "sans-serif"],
			},
			colors: {
				primary: "#dddddd",
				secondary: "#2576f5",
				tertiary: "#28cdfc",
				info: "#262626",
			},
		},
	},
	plugins: [],
};
