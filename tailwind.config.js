/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d97706",
        globalBg: "#F4F9F9",
      },

      screens: {
        mobile: { max: "1024px" },
        mobilesm: { max: "690px" },
        mobilexs: { max: "320px" },
      },

      animation: {
        equalizerBarOne: "equalizerBarOne 0.4s infinite alternate both 0.2s ease",
        equalizerBarTwo: "equalizerBarTwo 0.4s infinite alternate both 0.4s ease",
        equalizerBarThree: "equalizerBarThree 0.4s infinite alternate both 0.6s ease",
        equalizerBarFour: "equalizerBarFour 0.4s infinite alternate both 0.8s ease",
        equalizerBarFive: "equalizerBarFive 0.4s infinite alternate both 1s ease",
      },

      keyframes: {
        equalizerBarOne: {
          from: {
            height: "0px",
          },
          to: {
            height: "100%",
          },
        },
        equalizerBarTwo: {
          from: {
            height: "0px",
          },
          to: {
            height: "100%",
          },
        },
        equalizerBarThree: {
          from: {
            height: "0px",
          },
          to: {
            height: "100%",
          },
        },
        equalizerBarFour: {
          from: {
            height: "0px",
          },
          to: {
            height: "100%",
          },
        },
        equalizerBarFive: {
          from: {
            height: "0px",
          },
          to: {
            height: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
