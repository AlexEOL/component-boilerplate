/**
 * Created by AlexEOL on 25.10.16.
 */
module.exports = function (config) {
  config.set({
    logLevel: config.LOG_INFO,
    reporters: ['progress'],
    autoWatch: false,
    singleRun: true,
    colors: true,

    browsers: ['PhantomJS'],

    frameworks: ['jasmine'],

    files: [
      'tests/**/*.js'
    ],

    preprocessors: {
      // 'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.config'),

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ],

    webpackServer: {
      noInfo: true,
    },
  });
};