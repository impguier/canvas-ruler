const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/canvas.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ruler.js',
    publicPath: '/dist/',
    library: 'Ruler',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: / node_modules/
      }
    ]
  },
  devServer: {
    inline: true,
    compress: true,
    open: true,
    hot: true,
    https: false,
    contentBase: './'
  }
}
