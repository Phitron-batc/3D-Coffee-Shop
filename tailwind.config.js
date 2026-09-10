/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#0e0b09',
          900: '#140f0c',
          850: '#1a1411',
          800: '#231c17',
          700: '#322721',
          600: '#46372f',
        },
        cream: {
          50: '#fbf9f5',
          100: '#f6f2ea',
          200: '#ede6d8',
          300: '#dfd4c1',
          400: '#cdbea6',
        },
        amber: {
          copper: '#c68449',
          'copper-light': '#dfa26b',
          'copper-dark': '#8e5424',
          crema: '#d4a373',
        },
        warmgray: {
          400: '#a39b94',
          500: '#7e766f',
          600: '#5c544e',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.22em',
        'super-wide': '0.35em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
