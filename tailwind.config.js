/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          "pale":"#eff6ff",
          "soft-play":"#7aa7c1",
          "lightest":"#1D204B",
          "lighter":"#6e8aa9",
          "main":"#1963a0",
          "card":"#5746EA",
          "dark":"#08162f",
          "very-dark":"#040c1f",
          "le":"#34397B",
        },
        purple:{
          "violet":"#906ab7",
        },
        orange:{
          "self-care":"#f8815b",
        },
        green:{
          "exc":"#8ad16b",
        },
        red:{
          "study":"#ff7e7e",
          "work":"#FF8B64",

        },
      },
      fontFamily:{
        rubik:['Rubik Variable', "sans-serif"],
      }
    },
  },
  plugins: [],
}

