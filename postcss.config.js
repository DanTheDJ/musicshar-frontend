const tailwindcss = require('tailwindcss');

module.exports = {
  purge: [
    './src/**/*.jsx'
  ],
  plugins: [
      tailwindcss('./tailwind.config.js'),
      require('autoprefixer'),
  ],
};
