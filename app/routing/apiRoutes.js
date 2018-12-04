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

    //bypassing 0 since 0 is used as first best match above
    for(let i = 1; i < friends.length; i++){
        if(friends[i].id != userId){
            console.log("hmm...is " + friends[i].name + " a good friend for you?");

            //calculating score differences
            let totalBestMatch = 0;
            let totalNewFriend = 0;
            for(let j = 0; j< bestMatch.score.length; j++){
                console.log(bestMatch.score[j], user.score[j])
                totalBestMatch += Math.abs((bestMatch.score[j] - user.score[j]));
                console.log(bestMatch.name, totalBestMatch);
                totalNewFriend += Math.abs((friends[i].score[j] - user.score[j]));
                console.log(friends[i].name, totalNewFriend)
            }

            //checking to see if friend at this postiion has more comparable score
            if(totalBestMatch > totalNewFriend){
                bestMatch = friends[i];
            }
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