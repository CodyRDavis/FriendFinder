const friends = require('../data/friends');
const express = require('express');
const router = express.Router();

//route to get back the friends obj
router.get('/', function(req, res){
    res.send(friends);
});

router.get('/:id', function(req,res){
    const userId = req.params.id;
    let user = friends[0];
    let bestMatch = friends[0];

    //getting ID's stats
    for(let i = 0; i<friends.length; i++){
        if(friends[i].id === userId){
            user = friends[i];
            break;
        }
    }

    res.send(bestMatch);
});

//route to add new friend
//
router.post('/', function(req, res){
    req.body.id = friends.length;
    friends.push(req.body);
    res.send(friends);
});

//route to update existing friend
router.put('/api',function (req,res){
    res.send("");
});

//rout to delete existing friend
router.delete('/api', function (req,res){
    res.send("");
});

module.exports = router;