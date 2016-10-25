/**
 * Created by AlexEOL on 25.10.16.
 */
const config = require('./webpack/webpack.base.config');
const NODE_ENV = process.env.NODE_ENV;
const KARMA = process.env.KARMA;

if (KARMA) {
  module.exports = require('./webpack/webpack.karma.config')(config);
} else if (NODE_ENV === 'development') {
  module.exports = require('./webpack/webpack.dev.config')(config);
} else if (NODE_ENV === 'production') {
  module.exports = require('./webpack/webpack.prod.config')(config);
}