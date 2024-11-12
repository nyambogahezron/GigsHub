/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'primary-color': '#ef3b2d',
      },
      screens: {
        sm: { min: '630px' },
        md: { min: '770px' },
        lg: { min: '1023px' },
        xl: { min: '1279px' },
      },
      animation: {
        'reverse-spin': 'reverse-spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};