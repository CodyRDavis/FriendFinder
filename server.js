// Dependencies
// ===========================================================
const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require('./app/routing/apiRoutes');

const app = express();
const PORT = 3000;

// Routes
// ===========================================================
app.use("/api/", apiRoutes);
app.use(htmlRoutes);

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});