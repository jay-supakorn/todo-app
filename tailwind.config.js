module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: '#CF0029',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
