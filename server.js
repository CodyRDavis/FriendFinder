// Dependencies
// ===========================================================
const express = require("express");
const html = require("./app/routing/htmlRoutes");

const app = express();
const PORT = 3000;

// Routes
// ===========================================================
html.route(app);

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});