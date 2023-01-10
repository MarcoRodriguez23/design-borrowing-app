/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*/.{html,js}",
    "./*.html",
    "./src/*/.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}