const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        secondary: '#5454D4',
      },
    },
  },
  plugins: [require('animated-tailwindcss')],
});
