module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.html",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        bluish: {
          50: '#1e90ff',
          51: 'rgb(96 165 250)'
        },
      }
    },
  },
  plugins: [],
}
