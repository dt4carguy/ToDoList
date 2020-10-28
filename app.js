//jshint eversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

var items = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){

  var options = {
    weekday: "long",
    month: "short",
    year: "numeric",
    day: "numeric"
  };

  var today = new Date();
  var day = today.toLocaleDateString("en-US", options);

  res.render("index", {kindOfDay: day, newListItems: items, itemNumber: items.length});
});

app.post("/", function(req, res){

  var item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
