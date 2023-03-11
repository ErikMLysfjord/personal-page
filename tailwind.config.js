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
        type: 'typing 4s steps(50) 1.3s 1 normal both, blinkCaret 0.75s step-end infinite',
        typeDark:
          'typing 4s steps(50) 1.3s 1 normal both, blinkCaretDark 0.75s step-end infinite',
        untype:
          'typing 4s steps(50) 0s 1 reverse both, blinkCaret 0.75s step-end infinite',
        untypeDark:
          'typing 4s steps(50) 0s 1 reverse both, blinkCaretDark 0.75s step-end infinite',
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
