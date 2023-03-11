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
    extend: {
      animation: {
        type: 'typing 4s steps(50) 2.3s 1 normal both, blinkCaret 1s step-end 5',
        typeDark:
          'typing 4s steps(50) 1.3s 1 normal both, blinkCaretDark 0.75s step-end infinite',
        typeSlow:
          'typing 5s steps(50) 0s 1 normal both, blinkCaret 1s step-end infinite',
        typeSlowDark:
          'typing 5s steps(50) 8s 1 normal both, blinkCaretDark 0.75s step-end infinite',
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
      },
    },
    plugins: [require('flowbite/plugin')],
  },
};
