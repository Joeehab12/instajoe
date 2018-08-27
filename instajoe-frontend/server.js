var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// var sequelize = require('./db-config/db-config.js');
// var config = require('./config');
var port = 8008;

app.use(express.static(__dirname + '/public'));

// app.set('views', __dirname + '/public');
// app.set('view engine','pug');

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/login.html');
});
app.get('/register',function(req,res){
    res.sendFile(__dirname + '/public/register.html');
});
app.get('/feed',function(req,res){
    res.sendFile(__dirname + '/public/feed.html');
});
app.get('/:username',function(req,res){
    res.sendFile(__dirname + '/public/profile.html');
});



app.listen(port,function(){
    console.log('Frontend is live on port ' + port + '...');
});


module.exports = {app:app};
