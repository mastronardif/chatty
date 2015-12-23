var express = require('express');
var app = express();
var routes = require('./routes');
var io = require('socket.io')(http);
var http = require('http');
//var url  = require('url');
//var util = require('util');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
//app.enable('strict routing'); 
//app.set('strict routing', true); 
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('js', __dirname + '/javascript');

//app.use(express.bodyParser());
var bodyParser = require('body-parser');

// parse application/json
    app.use(bodyParser.json());                        

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // parse multipart/form-data
    //app.use(multer());

// usernames which are currently connected to the chat
var usernames = {};

// rooms which are currently available in chat
var rooms = ['room1','room2','room3'];

var anytaxis = require('./routes/anytaxis');

/*
function function2() {
    // all the stuff you want to happen after that pause
    console.log('Blah blah blah blah extra-blah');
}
*/

myInitials = '';
myGroup = 'aq';

///************
app.get('/chat/:id/:grp', function(req, res) {
    var id = '';
    if(req.params.id)
    {
        id = req.params.id;
    }
     
    var person = anytaxis.lookupID(id);

    
    if(req.params.grp)
    {
        myGroup = req.params.grp;
    }
    
     console.log('/chat/:id/:grp hello22  ('+person.name +', '+ myGroup + ')');
    
    //myGroup = req.params.group || 'wtf';

    // tell everyone to call in.
    // skip for testing var results = anytaxis.tellEveryone(id);
    
    //res.sendfile( __dirname + "/public/" + "indexChitChatty.html" );
    myInitials = id; //person.name;
    //console.log(res);
    if (myGroup == 'Commando')
    {
        res.render('pages/indexChitChatty33.ejs'); //"indexChitChatty.ejs" );
    }
    else    // default
    {
        res.render('pages/indexChitChatty22.ejs'); //"indexChitChatty.ejs" );
    }
     
  /***  
    setTimeout(function() {
        console.log('Blah blah blah blah extra-blah');
        var msg = id + ': Hey hey hey lets start gabbing';
            io.emit('chat message', msg);
    }, 3000);
*******/
    myInitials = '';
    myGroup = '';
});
//*****/
app.get('/chat/:id', function(req, res) {
    var id = req.params.id;
    var person = anytaxis.lookupID(id);

    console.log('/chat/:id hello22  ('+person.name + ')');
    
    // tell everyone to call in.
    // skip for testing var results = anytaxis.tellEveryone(id);
    
    //res.sendfile( __dirname + "/public/" + "indexChitChatty.html" );
    myInitials = id; //person.name;
    res.render('pages/indexChitChatty.ejs'); //"indexChitChatty.ejs" );

    /*******/
    setTimeout(function() {
    console.log('Blah blah blah blah extra-blah');
        
    var msg = id + ': Hey hey hey lets start gabbing';
  io.emit('chat message', msg);
}, 3000);
/***********/
    myInitials = '';
});

app.get('/telleveryone/chat/:id', function(req, res) {
    var id = req.params.id;
    var person = anytaxis.lookupID(id);

    console.log('/telleveryone/chat/:id hello22  ('+person.name + ')');
    
 //   var url_parts = url.parse(req.url);
 //console.log(url_parts);
 //console.log(url_parts.pathname);
 
 var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(fullUrl);
// "http://192.168.1.9:5000/{ROOM}/{ID}"
   //var results = {"up": "yours"};
   
  
   
   var root = req.protocol + '://' + req.get('host');
   var path = "/chat/%s/%s"; //"/chat/$USER/$ROOM";
   //console.log("root("+root + ")");
   var urlRoom = root + path;
   console.log("urlRoom("+urlRoom + ")");
   //var urlRoom = util.format('https://www.youtube.com/watch?v=%s', info.video_id);

  
 var argsRoom = {"path": urlRoom,
                 "id":  id
                };
               
  var results = anytaxis.tellEveryone(argsRoom);
  res.send(JSON.stringify(results));
  //var results = anytaxis.tellEveryone('WhoAteTheWings');
  
    //res.send(JSON.stringify(req.body));
    console.log(results);
});


app.get('/chat', function (req, res) {
    console.log(' /chat ' + __dirname );
       
    //var id = req.params.fld_initials;
    //console.log('id =  ' + id );
    //var person = anytaxis.lookupID(id);
    
 //res.sendfile( __dirname + "/public/" + "indexChitChatty.html" );
    // res.sendfile(__dirname,'/public/indexChitChatty.html');
    

    res.render('pages/indexChitChatty.ejs'); //"indexChitChatty.ejs" );
     
   // call the rest of the code and have it execute after 3 seconds
//setTimeout(function2, 3000); 

setTimeout(function() {
    console.log('Blah blah blah blah extra-blah');
        
    var msg = 'GM: Hey ladies lets start gabbing';
  io.emit('chat message', msg);
}, 3000);   
});


app.get('/index22', function (req, res) {
    console.log('xxxxxxxxxxxxxxx /anytaxi ' + __dirname ); 
//    response.render('pages/checkinGM');

    //res.sendfile(__dirname + '/indexChitChatty.html');
   //res.sendfile( '/indexChitChatty.html' , {root:__dirname}); 
res.sendfile( __dirname + "/public/" + "index22.html" );
    // res.sendfile(__dirname,'/public/indexChitChatty.html');
});

app.get('/anytaxi', function (req, response) {
    console.log('xxxxxxxxxxxxxxx /anytaxi ' + __dirname ); 
    response.render('pages/checkinGM');

    //res.sendfile(__dirname + '/indexChitChatty.html');
   //res.sendfile( '/indexChitChatty.html' , {root:__dirname}); 
//res.sendfile( __dirname + "/public/" + "checkinGM.html" );
    // res.sendfile(__dirname,'/public/indexChitChatty.html');
});

app.post('/anytaxis33a/:id', function(req, res) {
  var id = req.params.id;
  var person = anytaxis.lookupID(id);

  console.log('hello  ('+person.name + ')');

  console.log(req.body);
  //console.log(JSON.stringify(req.body));
  //console.log("--qobj -- "+ JSON.stringify (queryObject) );
  var data = req.body.data;
  console.log("data = " + data);
  
  var obj  = JSON.parse(data);
  
  obj.from = person.sms;

  data = JSON.stringify(obj);

  console.log(obj);

  console.log("obj.loc "+ obj.loc );
  console.log("obj.id "+ obj.id );
  console.log("obj.to "+ obj.to );
  
  var results = anytaxis.foo11(res, data);

  res.send(JSON.stringify(req.body));

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

io = io.listen(server);

// using rooms begin
/***********/
io.sockets.on('connection', function (socket) {
	
	// when the client emits 'adduser', this listens and executes
	socket.on('adduser', function(username){
		// store the username in the socket session for this client
		socket.username = username;
		// store the room name in the socket session for this client
		socket.room = 'room1';
		// add the client's username to the global list
		usernames[username] = username;
		// send client to room 1
		socket.join('room1');
		// echo to client they've connected
		socket.emit('updatechat', 'SERVER', 'you have connected to room1');
		// echo to room 1 that a person has connected to their room
		socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
		socket.emit('updaterooms', rooms, 'room1');
	});
	
	// when the client emits 'sendchat', this listens and executes
	socket.on('sendchat', function (data) {
		// we tell the client to execute 'updatechat' with 2 parameters
		io.sockets.in(socket.room).emit('updatechat', socket.username, data);
	});
	
	socket.on('switchRoom', function(newroom){
		socket.leave(socket.room);
		socket.join(newroom);
		socket.emit('updatechat', 'SERVER', 'you have connected to '+ newroom);
		// sent message to OLD room
		socket.broadcast.to(socket.room).emit('updatechat', 'SERVER', socket.username+' has left this room');
		// update socket session room title
		socket.room = newroom;
		socket.broadcast.to(newroom).emit('updatechat', 'SERVER', socket.username+' has joined this room');
		socket.emit('updaterooms', rooms, newroom);
	});
	

	// when the user disconnects.. perform this
	socket.on('disconnect', function(){
        console.log(' ***************** disconnect');
		// remove the username from global usernames list
		delete usernames[socket.username];
		// update list of users in chat, client-side
		io.sockets.emit('updateusers', usernames);
		// echo globally that this client has left
		socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
		socket.leave(socket.room);
	});
});
/***********/

// using rooms end

/*****************
// old way one room
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      console.log(msg); 
    io.emit('chat message', msg);
  });
});
***************/
