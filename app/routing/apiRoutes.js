const friends = require('../data/friends');
const express = require('express');
const router = express.Router();

//route to get back the friends obj
router.get('/', function(req, res){
    res.send(friends);
});

router.get('/:id', function(req,res){
    const userId = req.params.id;
    let user = "";
    let match = "";

    //console.log("getting results for: ", friends[userId]);
    //getting ID's stats
    user = friends[userId];

    //setting up the first match
    if (userId == 0){match = friends[1]}
    else { match = friends[0]}

    //console.log ("line 23: ", match);
    //checking to see of all friends which is the closest match
    for(let i = 0; i<friends.length; i++){
        if(i != userId){
            //console.log(friends[i]);
            var total = 0;
            var matchTotal = 0;
            //comparing user to current possible friend
            for(let j = 0; j < friends[i].score.length; j++){
                //console.log(friends[i].score[j]);
                total += Math.abs(friends[i].score[j] - user.score[j]);
                matchTotal += Math.abs(match.score[j] - user.score[j]);
            }
            //console.log(total);
            //console.log(match.name +" MatchTotal: " + matchTotal);

            //if found now closer match, setting match to it.
            if(total < matchTotal){
                match  = friends[i];
                //console.log("found a better match");
            }
        }
    }
    //sending the closest match!
    res.send(match);
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