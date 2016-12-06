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

// test.save();