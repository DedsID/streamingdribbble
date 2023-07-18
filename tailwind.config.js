/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        laptop: "1340px",
        ataslaptop: "1920px",
      },
      colors: {
        main: "#0d0d0f",
        secol: "#1c1d1f",
        pinkc: "#f20e89",
        purpc: "#e473ff",
        text: "#58585a",
      },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
      },
    },
  },
  plugins: [],
};
