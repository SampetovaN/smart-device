var path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: ['./source/js/block-focus.js', './source/js/form.js', './source/js/local-storage-data.js', './source/js/popup.js', './source/js/scroll-block.js', './source/js/tab.js', './source/js/utils.js'],
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
