/**
 * Created by AlexEOL on 25.10.16.
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new ExtractTextPlugin('[name].css', {allChunks: true});
