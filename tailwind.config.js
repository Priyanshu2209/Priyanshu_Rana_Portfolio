/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          50: '#fdf8f3',
          100: '#f9f0e6',
          200: '#f1ddc0',
          300: '#e8ca9a',
          400: '#d4a574',
          500: '#b8860b',
          600: '#9a7209',
          700: '#7c5e07',
          800: '#5e4a05',
          900: '#403603',
        },
        parchment: {
          light: '#f4ead5',
          DEFAULT: '#e8dcc4',
          dark: '#d4c4a8',
        },
        leather: {
          light: '#8b4513',
          DEFAULT: '#5d2f0f',
          dark: '#3d1f0a',
        },
        candlelight: {
          DEFAULT: '#ffa500',
          glow: '#ffcc66',
        }
      },
      backgroundImage: {
        'wood-texture': "url('data:image/svg+xml,%3Csvg width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"wood\" x=\"0\" y=\"0\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\"%3E%3Crect fill=\"%233d1f0a\" width=\"40\" height=\"40\"/%3E%3Cpath d=\"M0 10 Q10 8 20 10 T40 10\" stroke=\"%235d2f0f\" stroke-width=\"0.5\" fill=\"none\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\"url(%23wood)\" width=\"200\" height=\"200\"/%3E%3C/svg%3E')",
        'vintage-gradient': 'linear-gradient(135deg, #2d1810 0%, #3d1f0a 50%, #2d1810 100%)',
        'book-gradient': 'linear-gradient(to right, #8b6914 0%, #b8860b 50%, #8b6914 100%)',
        'paper-gradient': 'linear-gradient(to bottom, #f9f0e6 0%, #e8dcc4 100%)',
      },
      animation: {
        'flicker': 'flicker 3s ease-in-out infinite',
        'float': 'gentle-float 6s ease-in-out infinite',
        'page-turn': 'page-turn 2s ease-in-out infinite',
        'warm-glow': 'warm-glow 3s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '75%': { opacity: '0.9' },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'page-turn': {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(-15deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        'warm-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(218, 165, 32, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(218, 165, 32, 0.5)' 
          },
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'script': ['Brush Script MT', 'cursive'],
      },
    },
  },
  plugins: [],
}