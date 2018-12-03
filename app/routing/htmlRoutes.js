const api = require('./apiRoutes');
const express = require('express');
const router = express.Router();

//routing for homepage
router.get("/", function(req, res){
    res.sendFile('/app/public/index.html', { root: "./"});
});
//route for survey
router.get("/survey", function(req, res){
    res.sendFile('/app/public/survey.html', {root: "./"});
});

//catch all for not explicit routes
//seperate from / incase of desired 404 page.
router.get('*', function(req,res){
    res.sendFile('/app/public/index.html', { root: "./"});
})

module.exports = router;
