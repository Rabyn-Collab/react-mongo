/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        baseColor: '#10182B'
      },
      backgroundColor: {

      },

      gridTemplateColumns: {
        autoFit: 'repeat(auto-fit, minmax(250px, 1fr))'
      },

    },

    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },







  },
  plugins: [],
}

