/**
 * Created by AlexEOL on 25.10.16.
 */
const extend = require('lodash/extend');

module.exports = function (baseConfig) {
  return extend({}, baseConfig, {
    cache: undefined,

    debug: undefined,

    watch: undefined,

    entry: {},

    resolve: {},

    output: {},

    plugins: []
      .concat(baseConfig.plugins)
      .concat(require('./helpers/plugins/noErrors'))
  });
};