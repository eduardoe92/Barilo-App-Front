import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'customBlue': '#006BA8',
				'primary-pink': 'var(--primary-pink)',
				'secondary-pink': 'var(--secondary-pink)',
				'primary-blue': 'var(--primary-blue)',
				'primary-celeste': 'var(--primary-celeste)',
				'secondary-celeste': 'var(--secondary-celeste)',
				'primary-purple': 'var(--primary-purple)',
				'secondary-purple': 'var(--secondary-purple)',
				'tertiary-purple': 'var(--tertiary-purple)',
				'background-light': 'var(--background-light)',
				'background-dark': 'var(--background-dark)',
				'active-button-bg': 'var(--active-button-bg)',
				'inactive-button-bg': 'var(--inactive-button-bg)',
				'active-button-text': 'var(--active-button-text)',
				'inactive-button-text': 'var(--inactive-button-text)',
				'active-button-hover-bg': 'var(--active-button-hover-bg)',

				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			fontFamily: {
				primary: ['League Spartan', 'sans-serif'],
				secondary: ['Lato', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [tailwindcssAnimate, "@tailwindcss/lineclamp"],
}
