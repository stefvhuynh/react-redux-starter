var path = require("path");
var express = require("express");
var webpack = require("webpack");
var devMiddleware = require("webpack-dev-middleware");
var webpackConfig = require("./webpack.config.js");

var app = express();
var compiler = webpack(webpackConfig);

app.use(devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, "localhost", function(err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening http://localhost:3000...");
});