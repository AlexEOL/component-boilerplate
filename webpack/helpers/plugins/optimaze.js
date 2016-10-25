/**
 * Created by AlexEOL on 25.10.16.
 */
const webpack = require('webpack');

module.exports = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true,
      unsafe: true
    },
  })
];