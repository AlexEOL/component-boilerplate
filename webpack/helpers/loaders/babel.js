/**
 * Created by AlexEOL on 25.10.16.
 */
module.exports = {
  test: /\.js(x)$/,
  exclude: /(node_modules)/,
  loaders: ['babel', 'eslint-loader']
};