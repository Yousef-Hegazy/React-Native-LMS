/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3d3dd8ef",
        },
      },
      fontFamily: {
        abook: ["Avenir-Book", "sans-serif"],
        ifont: ["iconfont", "sans-serif"],
        mmedium: ["Montserrat-Medium", "sans-serif"],
        msemibold: ["Montserrat-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
