/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["young-serif", "georgia"],
				sans: ["outfit", "verdana"],
			},
			colors: {
				nutmeg: "hsl(14, 45%, 36%)",
				"Dark-Raspberry": "hsl(332, 51%, 32%)",
				white: "hsl(0, 0%, 100%)",
				"Rose-White": "hsl(330, 100%, 98%)",
				eggshell: "hsl(30, 54%, 90%)",
				"Light-Grey": "hsl(30, 18%, 87%)",
				"Wenge-Brown": "hsl(30, 10%, 34%)",
				"Dark-Charcoal": "hsl(24, 5%, 18%)",
			},
		},
	},
	plugins: [],
};
