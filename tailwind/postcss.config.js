module.exports = {
  plugins: [
  require('cssnano'),
  require('postcss-mixins'),
  require('postcss-nested'),
  require('postcss-preset-env'),
  require('postcss-reporter'),
  require('stylelint'),
  {
    tailwindcss: {},
    autoprefixer: {},
  }]
}
