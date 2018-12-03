let friends = require('../data/friends');
const express = require('express');
const router = express.Router();

//route to get back the friends obj
router.get('/api/:name', function(req, res){
    res.send(friends);
});

//route to add new friend
router.post('/api/:name', function(req, res){
    res.send("");
});

//route to update existing friend
router.put('/api/:name',function (req,res){
    res.send("");
});

//rout to delete existing friend
router.delete('/api/:name', function (req,res){
    res.send("");
});

module.exports = router;