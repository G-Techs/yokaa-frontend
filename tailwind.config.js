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
    extend: {},
  },
  plugins: [],
};
