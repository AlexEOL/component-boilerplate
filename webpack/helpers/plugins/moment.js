/**
 * Created by AlexEOL on 25.10.16.
 */
const webpack = require('webpack');

module.exports = new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/);
