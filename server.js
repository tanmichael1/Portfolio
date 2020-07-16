var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
