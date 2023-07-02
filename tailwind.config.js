const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        secondary: "#333333",
        inputBg: "#EDEDED",
        success: "#05A30B",
        error: "#CF1212",
        secondaryBg: "#F2F2F2",
      },
      scale: {
        flip: "-1",
      },
    },
    fontFamily: {
      sans: defaultTheme.fontFamily.sans,
      serif: ["Work Sans", ...defaultTheme.fontFamily.serif],
      mono: defaultTheme.fontFamily.mono,
    },
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "#__next",
  plugins: [],
};
