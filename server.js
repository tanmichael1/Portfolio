const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();
//app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(favicon(__dirname + "/public/images/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
//app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  //res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port);

/*
app.listen(port, () => {
  console.log("Express server listening on port");
});
*/

/*
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  */