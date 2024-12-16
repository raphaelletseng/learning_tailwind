/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        syncopate: ["Syncopate", "sans-serif"],
      }
    },
  },
  plugins: [],
}

