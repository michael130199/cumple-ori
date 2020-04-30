const path = require('path');

module.exports = {
  test: /\.scss$/,
  presets: [
    '@vue/cli-plugin-babel/preset',
    'vue-style-loader',
    'css-loader',
    'sass-loader'
  ]
}
