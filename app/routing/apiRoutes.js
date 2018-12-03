const friends = require('../data/friends');
const express = require('express');
const router = express.Router();

//route to get back the friends obj
router.get('/', function(req, res){
    res.send(friends);
});

//route to add new friend
//
router.post('/', function(req, res){

    //getting current users scores for easy refrence
    currentUserScores = []
    for (let i = 0; i < req.body.score.length; i++){
        currentUserScores.push(req.body.score[i]);
    }
    console.log ("current user's scores: ", currentUserScores);

    //comparing scores to find best match
    bestMatch = {
        "name": "",
        "scoreDiff": 999
    };
    for (let i =0; i<friends.length; i++){
        console.log (friends[i]);
        let total = 0;
        for ( let j = 0; j<friends[i].score.length; j++){
            console.log ("Comparing scores:", j)
            total += Math.abs(currentUserScores[i] - friends[i].score[j]);
        }
        
        //checking to see who is the lowest difference
        if (total < bestMatch.scoreDiff){
            bestMatch.name = friends[i].name;
            bestMatch.scoreDiff = total;
        }
    }
    console.log("Best Matches: ",bestMatch);

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