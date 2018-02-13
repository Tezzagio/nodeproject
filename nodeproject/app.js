var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('Tezzagio World!')
});

app.get('/routing', function(req, res){
    res.send('Tezzagio Routing!')
});

    app.listen(port, function(err){
        console.log('The server is running on port: ' + port)
});
