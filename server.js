var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db')
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser('memes'));
app.use(session({
  secret: 'memes',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {

});

app.get('/api/jokes', function(req, res) {
  db.Joke.find({})
    .then(function(links) {
      res.status(200).send(links);
    });
});

app.post('/api/jokes', function(req, res) {

  var text = req.body.line;

  if (req.session.user === undefined) {

    db.Joke.findOne({line: text})
    .then(function(line) {
      if (!line) {

        var newJoke = new db.Joke({
          line: text,
          by: 'anonymous',
          likes: 0,
          dislikes: 0
        });

        newJoke.save().then(function(newJoke) {
          console.log(newJoke);
          res.status(200).send(newJoke);
        });

      }
    });
  }

});

app.get('/api/photos', function(req, res) {
  db.Photo.find({})
    .then(function(photos) {
      res.status(200).send(photos);
    });
});

app.post('/api/photos', function(req, res) {


});

app.post('/api/photos/comments', function(req, res) {
  var title = req.body.title;
  var user = req.session.user || 'anonymous';
  var message = {text: req.body.comment, user: user}

  db.Photo.findOneAndUpdate({title: title}, {$push: {comments: message}})
    .then(function(photo) {
      res.status(200).send(photo);
    });
})

app.listen(3000, function() {
  console.log('Listening on 3000');
});

module.exports = app;