module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "golden-color": "#DCCA87",
        "black-color": "#0C0C0C", 
        "gray-color": "#545454",
        "crimson-color": "F5EFDB",
        "grey-color": "#AAAAAA"
      },
      fontFamily: {
        "base": "'Cormorant Upright', serif",
        "alt": "'Open Sans', sans-serif",
      }
    },
  },
  plugins: [],
}