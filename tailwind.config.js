/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/app.component.{html,ts}",
    "./src/app/item/item.component.{html,ts}",
    "./src/index.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
