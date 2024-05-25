/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        purp: 'purple'
      },
      backgroundColor: {

      },
      backgroundImage: {
        'hero-back': "url('/images/barbie.jpg')"
      }
    },


    screens: {
      'm2xl': { 'max': '1536px' },
      'mxl': { 'max': '1280px' },
      'mlg': { 'max': '1024px' },
      'mmd': { 'max': '768px' },
      'msm': { 'max': '540px' },
    },
  },
  plugins: [],
});