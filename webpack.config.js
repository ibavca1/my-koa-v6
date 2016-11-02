var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
      'koa-webpack-hot-middleware',
      './src/index'
    ],
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/static/'
    },
  plugins: [
      new webpack.NoErrorsPlugin()
    ],
  module: {
      loaders: [
          {
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
          }
        ]
    }
}
