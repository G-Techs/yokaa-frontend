const defaultTailwindColorsColors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...defaultTailwindColorsColors,
      primary: "#d97706",
    },
    screens: {
      mobile: { max: "1024px" },
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
