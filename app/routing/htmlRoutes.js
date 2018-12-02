const friends = require("../data/friends");
module.exports = {
    route : function(app){
        app.get('/survey', function(req, res){
            res.sendFile('/app/public/survey.html', {root: './'});
        });
        app.get('/', function(req, res){
            console.log("Sending: ../public/index.html");
            res.sendFile('/app/public/index.html', { root: "./"});
        });
        app.get('/survey/:name', function(req,res){
            res.status(200).send(friends);
        });
    } 
}
