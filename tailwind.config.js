const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...defaultColors,
      primary: "#d97706",
    },
    extend: {
      screens: {
        mobile: { max: "1000px" },
        mobilesm: { max: "414px" },
        mobilexs: { max: "320px" },
      },
    },
  },
  plugins: [],
};
