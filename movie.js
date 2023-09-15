
//required
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

//static map pathing
app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));
app.use("/img", express.static("public/img"));
app.use("/html", express.static("public/html"));

//returns the main page
app.get("/", function(req, res) {
    res.send(fs.readFileSync("./public/html/index.html", "utf8"));
  });

  //returns howl's moving castle page
  app.get("/HMC", function(req, res) {
    res.send(fs.readFileSync("./public/html/HMC-review.html", "utf8"));
  });

  app.get("/about", function(req, res) {
    res.send(fs.readFileSync("./public/html/about.html", "utf8"));
  });

  app.get("/review", function(req, res) {
    res.send(fs.readFileSync("./public/html/reviews.html", "utf-8"));
  });


  
// RUN SERVER
let port = process.env.PORT || 8000;
app.listen(port);
console.log("Listening on port " + port + "!");