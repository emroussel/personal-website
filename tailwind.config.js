const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  content: ["./pages/**/*.js", "./providers/**/*.js", "./components/**/*.js"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        lightest: "#D3E8FD",
        light: "#0E55A0",
        DEFAULT: "#00438A",
      },
      secondary: {
        lightest: "#CAECDA",
        light: "#24995A",
        DEFAULT: "#009244",
      },
      gray: {
        lightest: "#E0E0E0",
        light: "#505050",
        DEFAULT: "#202020",
        dark: "#121212",
      },
      "off-white": "#F4F4F4",
    },
    fontFamily: {
      sans: ["Inter", ...defaultConfig.theme.fontFamily.sans],
    },
  },
  plugins: [],
};
