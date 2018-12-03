const api = require('./apiRoutes');
module.exports = {
    route : function(app){
        
        app.get('/survey', function(req, res){
            res.sendFile('/app/public/survey.html', {root: './'});
        });
        app.get('/', function(req, res){
            console.log("Sending: ../public/index.html");
            res.sendFile('/app/public/index.html', { root: "./"});
        });
        app.get('/survey/:name', function(req, res){
            console.log("Received request for friends results, forwarding to api");
            api.route(app);
        });
        //default path, incase of bad address
        app.get('*', function(req,res){
            res.sendFile('/app/public/index.html', {root: './'})
        });
    } 
}
