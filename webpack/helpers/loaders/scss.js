/**
 * Created by AlexEOL on 25.10.16.
 */
module.exports = {
  test: /\.(scss|sass)$/,
  loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss', 'sass']
};