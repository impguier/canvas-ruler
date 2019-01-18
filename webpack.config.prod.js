const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/canvas.js',
  output: {
    filename: 'ruler.min.js'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  }
})
