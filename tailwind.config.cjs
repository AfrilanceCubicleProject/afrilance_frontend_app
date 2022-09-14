/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'icon-xsm': "15px",
        'icon-sm': "25px",
        'icon-xmd': "40px",
        'icon-md': "55px",
        'icon-xlg': "75px",
        'icon-lg': "90px",
      }
    },
  },
  plugins: [],
}