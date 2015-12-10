var express = require('express');
var app = express();
var routes = require('./routes');
var io = require('socket.io')(http);
var http = require('http');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//app.use(express.bodyParser());
var bodyParser = require('body-parser');

// parse application/json
    app.use(bodyParser.json());                        

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    // parse multipart/form-data
    //app.use(multer());

var anytaxis = require('./routes/anytaxis');

function function2() {
    // all the stuff you want to happen after that pause
    console.log('Blah blah blah blah extra-blah');
}

app.get('/chat/:id', function(req, res) {
    var id = req.params.id;
    var person = anytaxis.lookupID(id);

    console.log('/chat/:id hello  ('+person.name + ')');
    
    // tell everyone to call in.
    var results = anytaxis.tellEveryone(id);
    
    res.sendfile( __dirname + "/public/" + "indexChitChatty.html" );

});
    
app.get('/chat', function (req, res) {
    console.log(' /chat ' + __dirname );
    //res.sendfile(__dirname + '/indexChitChatty.html');
   //res.sendfile( '/indexChitChatty.html' , {root:__dirname}); 
    res.sendfile( __dirname + "/public/" + "indexChitChatty.html" );
    // res.sendfile(__dirname,'/public/indexChitChatty.html');
    
   // call the rest of the code and have it execute after 3 seconds
//setTimeout(function2, 3000); 

setTimeout(function() {
    console.log('Blah blah blah blah extra-blah');
        
    var msg = 'GM: Hey ladies lets start gabbing';
  io.emit('chat message', msg);
}, 3000);

    
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


/*****************/
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      console.log(msg); 
    io.emit('chat message', msg);
  });
});
/***************/

io = io.listen(server);