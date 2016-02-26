var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/api', function (req, res, next) {
  var movies = [
  { title: 'Harry Potter: Sorcerer\'s Stone'},
  { title: 'Harry Potter: Chamber of Secrets'},
  { title: 'Harry Potter: Prisoner of Azkaban'},
  ];
  res.json(movies);
});


var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});