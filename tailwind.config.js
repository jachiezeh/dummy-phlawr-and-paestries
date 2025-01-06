/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E2E2D5',
          200: '#DA0037',
          300: '#A5BECC',
          400: '#243A73'
        },
        secondary: {
          100: '#171717',
          200: '#EDEDED',
        }
      },
      fontFamily:{
        body:['Open Sans'],
        header:['Merriweather']
      }
    },
  },
  plugins: [],
}

