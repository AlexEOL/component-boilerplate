/**
 * Created by AlexEOL on 25.10.16.
 */
const merge = require('lodash/merge');
const path = require('path');

module.exports = function (baseConfig) {
  return merge({}, baseConfig, {
    output: merge({}, baseConfig.output, {
      libraryTarget: 'umd',
      umdNamedDefine: true
    }),
    entry: {
      main: [
        path.normalize(__dirname + '/../src')
      ]
    },
    plugins: []
      .concat(require('./helpers/plugins/dedupe'))
      .concat(require('./helpers/plugins/css'))
      .concat(require('./helpers/plugins/uglify'))
  });
};