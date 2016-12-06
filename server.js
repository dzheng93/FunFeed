var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db')
// var cookieParser = require('cookie-parser');
// var session = require('express-session');

var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(cookieParser('memes'));
// app.use(session({
//   secret: 'memes',
//   resave: false,
//   saveUninitialized: true
// }));

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {

});

app.get('/api/jokes', function(req, res) {
  db.Joke.find({})
    .then(function(links) {
      res.status(200).send(links);
    });
});

// app.post('/api/jokes', function(req, res) {

// })

app.get('/photos', function(req, res) {

});

app.post('/photos', function(req, res) {

});

app.listen(3000, function() {
  console.log('Listening on 3000');
});

module.exports = app;