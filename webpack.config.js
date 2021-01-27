var path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: ['./source/js/blockfocus.js', './source/js/form.js', './source/js/localstoragedata.js', './source/js/popup.js', './source/js/scrollblock.js', './source/js/tab.js', './source/js/utils.js'],
    vendor: ['inputmask']
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build/js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
    ],
  },
};
