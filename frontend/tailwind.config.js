/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "primary1": 'rgb(0, 38, 88);',
      "secondary1": '#b8cfff',
      "primary2": '#323232',
      "secondary2": '#dfdfdf',
      "primary3": 'rgb(31, 31, 31)',
      "secondary3": '#4b4b4b',
      "primary4": 'rgb(9, 53, 0)',
      "secondary4": '#ceffad',
    },},
    
  },
  plugins: [],
}

