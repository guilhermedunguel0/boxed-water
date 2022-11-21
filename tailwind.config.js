/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    backgroundImage: {
      'forestImage': "url('../assets/forestimage.svg')"
    },
    boxShadow: {
      'base': '0px 0px 24px rgba(0, 0, 0, 0.1);',
    },
    fontFamily: {
      'inter':  ['Inter', 'sans-serif'],
    },
    extend: {
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1040px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
