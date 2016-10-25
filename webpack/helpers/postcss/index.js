/**
 * Created by AlexEOL on 25.10.16.
 */
const responsive = require('postcss-responsive-type');
const atImport = require("postcss-smart-import");
const autoprefixer = require('autoprefixer');
const csswring = require('csswring');

module.exports = function () {
  return [
    atImport,
    responsive,
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    csswring
  ];
};
