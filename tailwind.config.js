module.exports = {
  content: ["./templates/**/*.html", "./static/js/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        a4: "210mm",
        almosthalf: "49.2%",
      },
      height: {
        a4: "297mm",
      },
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
