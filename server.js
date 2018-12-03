// Dependencies
// ===========================================================
const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require('./app/routing/apiRoutes');

const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

//prepping the body of app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// ===========================================================
app.use(apiRoutes);
app.use(htmlRoutes);

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});