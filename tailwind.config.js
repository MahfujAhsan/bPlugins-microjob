/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'Malven-Pro': ['Maven Pro', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}
