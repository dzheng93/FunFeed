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
console.log(req.body);
  var text = req.body.line;
  var user = req.body.currUser || 'anonymous';

    db.Joke.findOne({line: text})
    .then(function(line) {
      if (!line) {

        var newJoke = new db.Joke({
          line: text,
          by: user,
          likes: 0,
          dislikes: 0
        });

        newJoke.save().then(function(newJoke) {
          console.log(newJoke);
          res.status(200).send(newJoke);
        });

      }
    });

});

app.get('/api/photos', function(req, res) {
  db.Photo.find({})
    .then(function(photos) {
      res.status(200).send(photos);
    });
});

app.post('/api/photos', function(req, res) {

var currT = req.body.title;
var url = req.body.url;
var user = req.body.currUser || 'anonymous';

    db.Photo.findOne({title: currT})
    .then(function(title) {
      if (!title) {

        var newPhoto = new db.Photo({
          title: currT,
          url: url,
          likes: 0,
          dislikes: 0,
          comments: []
        });

        newPhoto.save().then(function(newPhoto) {
          console.log(newPhoto);
          res.status(200).send(newPhoto);
        });

      }
    });

});

app.post('/api/photos/comments', function(req, res) {
  var title = req.body.title;
  var user = req.body.currUser || 'anonymous';
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