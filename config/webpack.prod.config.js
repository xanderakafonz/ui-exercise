// webpack.config.js
const webpack = require('webpack')
const path = require('path')
const {GenerateSW} = require('workbox-webpack-plugin')

module.exports = {
  output: {
    filename: 'test.js'
  },
  mode: 'production', // Setting this to production auto enables JS uglify
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [['env', {modules: false}]]
        }
      }
    ]
  },
  resolve: {
    alias: {
        "velocity": path.resolve('node_modules', 'velocity-animate/velocity.min.js')
    },
  },
  plugins: [
    // Workbox - Generate Service Worker
    new GenerateSW(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: "jquery",
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
    })
  ]
}
