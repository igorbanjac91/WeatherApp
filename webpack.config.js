const path = require('path');
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  plugins: [
    new Dotenv()
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}