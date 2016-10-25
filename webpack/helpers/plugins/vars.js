/**
 * Created by AlexEOL on 25.10.16.
 */
const webpack = require('webpack');

module.exports = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
});