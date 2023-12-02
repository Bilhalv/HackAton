/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/main.tsx", "./src/**/*.tsx", "./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/public/bg.jpeg')",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
