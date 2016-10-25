/**
 * Created by AlexEOL on 25.10.16.
 */
const merge = require('lodash/merge');

module.exports = function (baseConfig) {
  return merge({}, baseConfig, {
    cache: true,

    debug: true,

    watch: true,

    devtool: 'eval-source-map',

    devServer: {
      host: '0.0.0.0',
      port: 8000,
      hot: true,
      progress: true
    },

    entry: {
      main: []
        .concat([
          'webpack/hot/only-dev-server',
          'webpack-dev-server/client?http://localhost:8000',
        ], baseConfig.entry.main)
    },

    plugins: [require('./helpers/plugins/html'), require('./helpers/plugins/hot')]
  });
};