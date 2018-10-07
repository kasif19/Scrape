var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var express = require("express");
var app = express();

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 3000;

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// HandleBars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/WebScraper");

var routes = require('./controller/controller.js');
app.use('/', routes);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  