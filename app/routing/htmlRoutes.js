const express = require('express');
const path = require('path');
const router = express.Router();

//routing for homepage
router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '..','public','index.html'));
});
//route for survey
router.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, '..','public','survey.html'));
});

//catch all for not explicit routes
//seperate from / incase of desired 404 page.
router.get('*', function(req,res){
    res.sendFile(path.join(__dirname, '..','public','index.html'));
})

module.exports = router;
