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
      sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      serif: defaultTheme.fontFamily.serif,
      mono: defaultTheme.fontFamily.mono,
    },
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
