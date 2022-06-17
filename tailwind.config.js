const plugin = require("tailwindcss/plugin");
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
        lightest: "#F0F0F0",
        light: "#505050",
        DEFAULT: "#202020",
        dark: "#121212",
      },
      "off-white": "#F4F4F4",
    },
    fontFamily: {
      sans: ["Inter", ...defaultConfig.theme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        fadeOut: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        slideIn: {
          from: {
            opacity: "0",
            transform: "translateX(-50vw)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideOut: {
          from: {
            opacity: "1",
            transform: "translateX(0)",
          },
          to: {
            opacity: "0",
            transform: "translateX(-50vw)",
          },
        },
        slideUp: {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        swipeOut: {
          from: {
            transform: "translateY(var(--radix-toast-swipe-end-y))",
          },
          to: {
            transform: "translateY(100%)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 250ms ease-in-out",
        "fade-out": "fadeOut 150ms ease-in-out",
        "slide-in": "slideIn 250ms ease-in-out backwards",
        "slide-out": "slideOut 150ms ease-in-out forwards",
        "slide-up": "slideUp 250ms ease-in-out",
        "swipe-out": "swipeOut 150ms ease-in-out",
      },
    }
  },
  
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("state-open", "&[data-state='open']");
      addVariant("state-closed", "&[data-state='closed']");
      addVariant("swipe-move", "&[data-swipe='move']");
      addVariant("swipe-cancel", "&[data-swipe='cancel']");
      addVariant("swipe-end", "&[data-swipe='end']");
    }),
  ],
};
