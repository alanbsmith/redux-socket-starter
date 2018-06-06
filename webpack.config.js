const webpack = require('webpack');
const path = require('path');
require("babel-polyfill");

module.exports = {
  entry: ['./src/index'],
  module: {
    rules: [
      { test: /\.js?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.s?css$/, loader: "style-loader!css-loader!sass-loader" },
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve("./"),
      path.resolve("./src"),
      path.resolve("./node_modules")
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
