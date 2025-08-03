/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
     colors: {
 'text': '#f7e9ed',
 'background': '#16070b',
 'primary': '#e38fa5',
 'secondary': '#8b1d3a',
 'accent': '#de3c67',
},

    },
  },
  plugins: [],
}