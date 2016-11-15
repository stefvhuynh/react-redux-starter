var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "./src/index.js"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel" }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
