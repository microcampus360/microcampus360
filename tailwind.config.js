/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #DEEEFF 0%, #EFFAF5 0%, #EDD7B8 68%, #FFCFAB 100%)'
      },
      boxShadow: {
        'custom-dark': '0px 0px 5px grey',
      }
    },
  },
  plugins: [],
}

