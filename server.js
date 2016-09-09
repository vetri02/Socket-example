// server.js
// where your node app starts

// init project
// var express = require('express');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
// 
var express   = require('express');
var app       = express();
var socketio  = require('socket.io');

// app.use/routes/etc...

var server    = app.listen(8123);
var io        = require('socket.io').listen(server);


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

io.on('connection', function(socket){
  console.log("ioConnected");
});

var count = 1;

setInterval(function(){
  io.emit('count', count++)
},2000);

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
  ];

// // listen for requests :)
// var listener = app.listen(8123, function () {
console.log('Your app is listening on port ' + server.address().port);
// });