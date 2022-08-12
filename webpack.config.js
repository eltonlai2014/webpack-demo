const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  target: 'node',
  mode: 'production',
  // mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },
  // plugins: [

  // ],
}