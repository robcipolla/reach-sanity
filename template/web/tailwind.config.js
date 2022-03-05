module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: require("./lib/theme/colours"),
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
