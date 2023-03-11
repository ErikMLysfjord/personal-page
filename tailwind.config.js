/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{ts,tsx}',
    './src/public/**/*.html',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
