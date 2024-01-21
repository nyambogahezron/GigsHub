/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ef3b2d',
      },
      screens: {
        'sm': { 'max': '630px' },
        'md': { 'max': '770px' },
        'lg': { 'max': '1023px' },
        'xl': { 'max': '1279px' },
      },
    },
  },
  plugins: [],
};
