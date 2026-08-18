/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0f0f11',
          900: '#16161a',
          800: '#1a1a1f',
          700: '#26262d',
        },
        brass: {
          300: '#e0c88f',
          400: '#d4b878',
          500: '#c9a961',
          600: '#b0914d',
        },
        parchment: '#e8e6e1',
        muted: '#a1a1aa',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}