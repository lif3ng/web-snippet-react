module.exports = {
  purge: {
    content: ["src/**/*.js"],
    safelist: ["flex-row", "flex-col", "flex-row-reverse"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
