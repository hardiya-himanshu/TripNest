/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "primary1": 'rgb(43, 43, 43)',
      "secondary1": '#B2CCFF',
      "primary2": '#323232',
      "secondary2": '#dfdfdf',
      "primary3": 'rgb(31, 31, 31)',
      "secondary3": '#4b4b4b',
      "primary4": 'rgb(43, 43, 43)',
      "secondary4": '#caffa7',
    },},
    
  },
  plugins: [],
}

