var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'doogoodbot.webpack.bundle.js'
  },

  module: {
    rules: [
      { test: '/\.(js|jsx)$/', use: 'babel-loader' }
    ]
  },
};
