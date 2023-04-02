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
    colors: {
      minLilla: '#9738A7',
    },
    extend: {
      spacing: {
        325: '13px',
        negative: '-8px',
      },
      animation: {
        type: 'typing 4s steps(50) 2.3s 1 normal both, blinkCaret 1s step-end 5',
        typeDark:
          'typing 4s steps(50) 2.3s 1 normal both, blinkCaretDark 1s step-end 5',
        typeSlow:
          'typing 5s steps(50) 0s 1 normal both, blinkCaret 1s step-end infinite',
        typeSlowDark:
          'typing 5s steps(50) 0s 1 normal both, blinkCaretDark 1s step-end infinite',
        fadeIn: 'fadeInAnimation 1s ease',
        fadeInScroll: 'fadeInScrollAnimation 4s ease',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        untyping: {
          from: { width: '100%' },
          to: { width: '0' },
        },
        blinkCaret: {
          from: { borderColor: 'transparent' },
          to: { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
        blinkCaretDark: {
          from: { borderColor: 'transparent' },
          to: { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        fadeInAnimation: {
          from: { opacity: 0, transform: 'translateX(-500px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
          '70%': { opacity: 0 },
        },
        fadeInScrollAnimation: {
          from: { opacity: 0 },
          '60%': { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
    plugins: [require('flowbite/plugin')],
  },
};
