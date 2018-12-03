let friends = require('../data/friends');
const express = require('express');
const router = express.Router();

//route to get back the friends obj
router.get('/:name', function(req, res){
    res.send(friends);
});

//route to add new friend
router.post('/:name', function(req, res){
    res.send("");
});

//route to update existing friend
router.put('/:name',function (req,res){
    res.send("");
});

//rout to delete existing friend
router.delete('/:name', function (req,res){
    res.send("");
});

module.exports = router;