const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'firstview': "url('../public/fv-bg.png')",
        'pc_footer': "url('../public/footer_bg.png')",
      },
    },
  },
  plugins: [],
}
