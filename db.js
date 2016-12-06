var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp');

var Schema = mongoose.Schema;

var jokeSchema = new Schema({
  line: {type: String, required: true},
  by: {type: String},
  likes: {type: Number},
  dislikes: {type: Number}
});

var userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

var photoSchema = new Schema({
  title: {type: String},
  url: {type: String},
  likes: {type: Number},
  dislikes: {type: Number},
  comments: {type: Array}
});

exports.Joke = mongoose.model('Joke', jokeSchema);
exports.User = mongoose.model('User', userSchema);
exports.Photo = mongoose.model('Photo', photoSchema);

// var test = new exports.Joke({
//   line: "Why don't some couples go to the gym? Because some relationships don't work out.",
//   by: "Yeezyy",
//   likes: 5,
//   dislikes: 2
// });

// var test = new exports.Photo({title: 'President', url: 'https://4.bp.blogspot.com/-cBxHid0d9ok/WCQXho0MI1I/AAAAAAAAVT8/eiBsisiKbpsFT0qYqPB6jtXnrsMOIG2tgCLcB/s1600/what-does-the-president-do.jpg', likes: 5, dislikes: 0, comments: [
//     {text: 'hilary ftw', user: 'clinton'},
//     {text: 'i knew it haha', user: 'obama'},
//     ]});

// test.save();