/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        one : 'rgb(17, 205, 239)',
        two : '#007aff',
        three : 'rgb(45, 206, 137)',
        four : 'rgb(52, 71, 103)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}