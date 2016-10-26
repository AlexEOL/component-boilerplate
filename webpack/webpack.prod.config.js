/**
 * Created by AlexEOL on 25.10.16.
 */
const merge = require('lodash/merge');
const path = require('path');

module.exports = function (baseConfig) {
  return merge({}, baseConfig, {
    entry: {
      main: [
        path.normalize(__dirname + '/../src')
      ]
    },
    plugins: []
      .concat(require('./helpers/plugins/html'))
      .concat(require('./helpers/plugins/css'))
      .concat(require('./helpers/plugins/optimaze'))
  });
};