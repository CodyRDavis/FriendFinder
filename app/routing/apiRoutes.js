let friends = require('../data/friends');
module.exports = {
    route : function(app){
        app.get('/api/:name', function(req, res){
            res.send(friends);
        });
    }
}