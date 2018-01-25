const path = require('path');
const public = path.resolve(__dirname, 'public');
const entry = path.resolve(__dirname + '/dev/index.js');
module.exports = {
  entry,
  output: {
    path: public,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}