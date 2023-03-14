/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yeseva': ['Yeseva One', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#00ABE1',
        'secondary': '#161F6D',
        'accent': '#fc4445',
        'accent-dark': '#61892F',
        'light-blue': '#97caef',
        'neutral-light': '#CAFAFE',
      }
    },
  },
  plugins: [],
}
