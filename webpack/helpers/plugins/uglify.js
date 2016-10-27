/**
 * Created by AlexEOL on 27.10.16.
 */
const webpack = require('webpack');

module.exports = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    drop_console: true,
    unsafe: true
  },
});