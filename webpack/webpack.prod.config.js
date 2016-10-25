/**
 * Created by AlexEOL on 25.10.16.
 */
const merge = require('lodash/merge');

module.exports = function (baseConfig) {
  return merge({}, baseConfig, {
    plugins: []
      .concat(require('./helpers/plugins/html'))
      .concat(require('./helpers/plugins/css'))
      .concat(require('./helpers/plugins/optimaze'))
  });
};