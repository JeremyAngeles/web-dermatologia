/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'karen-arena': '#e0dcd1',
        'karen-verde': '#7c8f7c',
        'karen-blanco': '#ffffff',
        'karen-gris': '#606060',
      },
      fontFamily: {
        principal: ['Henotica', 'serif'],
        secundaria: ['AvantGarde', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}