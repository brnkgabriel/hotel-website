/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"ltbg": "#eaeded",
				'font': '#282828dd',
				'body': '#f5f5f5',
				'whatsapp': '#25D366',
				'body-darker': '#eaeded',
				'primary': {
					DEFAULT: '#a63390',
					"50": "#f6ebf4",
          "100": "#edd6e9",
          "200": "#dbadd3",
          "300": "#ca85bc",
          "400": "#b85ca6",
          "500": "#a63390",
          "600": "#852973",
          "700": "#641f56",
          "800": "#42143a",
          "900": "#210a1d"
				},
				'secondary': {
					DEFAULT: '#ff0084',
					"50": "#ffe6f3",
          "100": "#ffcce7",
          "200": "#ff99cf",
          "300": "#ff66b6",
          "400": "#ff339e",
          "500": "#ff0084",
          "600": "#cc006b",
          "700": "#990050",
          "800": "#660036",
          "900": "#33001b"
				},
				'dark': {
					DEFAULT: '#686789',
					50: '#CECDDA',
					100: '#C3C2D1',
					200: '#ABAAC0',
					300: '#9493AE',
					400: '#7D7C9D',
					500: '#686789',
					600: '#565572',
					700: '#44445A',
					800: '#323243',
					900: '#21212C',
					950: '#181820'
				}
			},
			borderRadius: {
				"sm4": "4px"
			}, 
			fontSize: {
				'2xs': "10px",
				'3xs': "8px"
			},
			boxShadow: {
				"custom": "0 2px 5px 0 rgba(0,0,0,0.1)"
			},
			backgroundPosition: {
				"shift": "center center"
			},
			backgroundSize: {
				"113": "113%"
			},
			fontFamily: {
				'itl': ['Crete Round', 'serif']
			}
		},
	},
	plugins: [
		require("daisyui"),
		// require("tw-elements/dist/plugin.cjs")
	],
	daisyui: {
		// themes: [ "dark", "light", "cupcake"],
	}
}