/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1200px',
      'lg': '1400px',
      'xl': '1920px',
    },
    colors: {
      'background': '#062763',
      'button': 'rgb(15,117,252)',
      'buttonHover': '#004ad9',
      'button2': "rgb(23,63,136)",
      'button2Hover': "#214992",
      'card': 'rgba(0,56,199,0.15)',
      'blackText': 'rgb(20,26,46)',
      'formText': 'rgb(63,88,120)'
    },
    extend: {
    },
  },
  plugins: [],
}