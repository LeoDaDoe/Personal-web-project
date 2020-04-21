//path module
const path = require("path");
//use express module
const express = require("express");
const http = require("http");
const fs = require("fs");
//use bodyParser middleware
const bodyParser = require("body-parser");
//use mysql database
const mysql = require("mysql");
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nsocial_web",
});

app.use(express.static(__dirname));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/script"));
app.use("/images", express.static(__dirname + "/images"));

var requestPing = http.createServer(function (req, res) {
  console.log("request was made for: " + req.url);
});

var server = app.listen(3000, function () {
  //   var port = server.address().port;
  //   console.log("Server started at http://localhost:%s", port);
});

app.post("/save", urlencodedParser, (req, res) => {
  var inEmail = req.body.registerFormEmail;
  var inPassword = req.body.registerFormRPassword;
  var sql =
    "INSERT INTO early_list (email,password) VALUES ('" +
    inEmail +
    "','" +
    inPassword +
    "')";
  conn.query(sql, function (err) {
    if (err) throw err;
    console.log("One record inserted");
    res.redirect("/");
  });
});

console.log("port 3000 is live");
