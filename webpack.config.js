const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/js/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
