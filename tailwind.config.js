/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#050816",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
			backgroundImage: {
				"hero-pattern": "url('/src/assets/herobg.png')",
			},
			keyframes: {
				wave: {
					"  0% ": {
						transform: "rotate(0deg)",
					},
					" 10% ": {
						transform: "rotate(-10deg)",
					},
					" 20% ": {
						transform: "rotate(12deg)",
					},
					" 30% ": {
						transform: "rotate(-10deg)",
					},
					" 40% ": {
						transform: "rotate(9deg)",
					},
					" 50% ": {
						transform: "rotate(0deg)",
					},
					"100% ": {
						transform: "rotate(0deg)",
					},
				},
			},
			animation: {
				wave: "wave 1.8s infinite",
			},
		},
	},
	plugins: [],
};
