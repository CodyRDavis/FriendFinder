const friends = require('../data/friends');
const express = require('express');
const router = express.Router();

//route to get back the friends obj
router.get('/api/:name', function(req, res){
    res.send(friends);
});

//route to add new friend
//
router.post('/api', function(req, res){
    //insert new friend into friends.
    console.log(JSON.stringify(req.body));
    console.log(friends);
    res.send(req.body);
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