// webpack.config.js
const webpack = require('webpack')
const path = require('path')

module.exports = {
  output: {
    filename: 'test.js'
  },
  mode: 'development',
  module: {
    rules: [
      // ES Lint
      {
        test: /\.js$/, // include .js files
        enforce: 'pre', // preload the jshint loader
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      // Babel transpiler
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
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: "jquery",
          'window.$': 'jquery',
          'window.jQuery': 'jquery'
      })
  ],
  // Source maps
  devtool: 'eval-source-map'
}
