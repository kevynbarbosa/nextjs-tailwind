const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Whitney Semibold"'],
    },
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#2f3136",
        accent: "#36393f",
        "item-active": "#393c43",
        default: "#8e9297",
        active: "#fafafa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
