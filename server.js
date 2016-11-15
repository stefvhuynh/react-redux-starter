var path = require("path");
var express = require("express");

var app = express();

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, "localhost", function(err) {
  if (err) {
    console.log(err);
  }

  console.log("Listening http://localhost:3000");
});
