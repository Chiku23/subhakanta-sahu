/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['DM Sans', 'ui-sans-serif', 'system-ui'], mono: ['DM Mono', 'ui-monospace', 'monospace'] },
      colors: { ink: '#171717' },
      maxWidth: { '8xl': '88rem' },
    },
  },
  plugins: [],
}
