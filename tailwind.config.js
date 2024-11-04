/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      babes:['Bebas Neue', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        gradient: "linear-gradient(148deg, #BD1F17, #A51D13, #8E1B0F)"
      }
    },
  },
  plugins: [],
}

