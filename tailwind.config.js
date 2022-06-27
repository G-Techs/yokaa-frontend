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
      globalBg: "#F4F9F9",
    },
    extend: {
      screens: {
        mobile: { max: "1024px" },
        mobilesm: { max: "690px" },
        mobilexs: { max: "320px" },
      },
    },
  },
  plugins: [],
};
