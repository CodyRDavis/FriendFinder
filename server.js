// Dependencies
// ===========================================================
const express = require("express");
const router = express.Router();
const fs = require("fs");

const app = express();
const PORT = 3000;

// Routes
// ===========================================================

app.get("/survey", function(req, res) {
  renderPage(req.url, res);
});

app.use(function(req, res){
    renderPage("/index", res);
});

function renderPage(path, res){
    pagePath = (__dirname + "/app/public" + path+".html");
    fs.readFile(pagePath, function(err, data){
        res.sendFile(pagePath);
    });
    console.log ("path: "+path);
}
// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});