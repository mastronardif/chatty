var express = require('express');
var app = express();
var io = require('socket.io')(http);
var http = require('http');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/chat', function (req, res) {
    console.log('xxxxxxxxxxxxxxx /chat ' + __dirname );
    //res.sendfile(__dirname + '/indexChitChatty.html');
   //res.sendfile( '/indexChitChatty.html' , {root:__dirname}); 
    res.sendfile( __dirname + "/public/" + "indexChitChatty.html" );
    // res.sendfile(__dirname,'/public/indexChitChatty.html');
});

app.get('/', function(request, response) {
  response.render('pages/index');
});

/******
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
**********/

var server = http.createServer(app).listen(app.get('port'), app.get('ipaddress'), function() {
  console.log("Express server listening on port " + app.get('port'));
});


/*****************/
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      console.log(msg); 
    io.emit('chat message', msg);
  });
});
/***************/

io = io.listen(server);