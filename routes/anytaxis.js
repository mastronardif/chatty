// Load the twilio module

  var  url  = "http://joeschedule.com/cgi-bin/each.pl";
// using needle begin
var Mailgun = require('mailgun-js');
// fm 12 7 15 var needle = require('needle');
 
 //Your api key, from Mailgun’s Control Panel
var api_key = 'key-0-rxwnpe9gllqe6odwxebn79vicgxf76';
//var api_key = 'api:key-0-rxwnpe9gllqe6odwxebn79vicgxf76';

//Your domain, from the Mailgun Control Panel
var domain = 'joeschedule.mailgun.org';
//var domain = 'https://api.mailgun.net/v2/joeschedule.mailgun.org/messages ';

//Your sending email address
// 'mastronardif@gmail.com';
var Kris  = 'mastronardif@gmail.com';//"9084442745@vtext.com";
var Frank = "9088580954@vtext.com"; //,mastronardif@gmail.com"; //,mastronardif@netcarrier.com";
var from_who = 'mastronardif@gmail.com';
var       to = 'mastronardif@netcarrier.com';
var sub = "you drank all my wine";
 results = 'aaa';
function setResults(str)
{
    console.log("str = " + str)
    results = str;
}



function anytaxis11(res, json)
{
    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var obj = JSON.parse(json);
  //obj.id
  console.log(obj);
  console.log("obj.to "  + obj.to);
  console.log("obj.from "+ obj.from);
// "wtf ";
    //var to   =  Frank; //obj.to;
//console.log("to "  + to);
    var sub  = (obj.subject === undefined) ? "no sub" : obj.subject;
    //var loc  = (obj.loc     === undefined) ? ""       : "I am at: " + obj.loc.address;
    var body = (obj.body    === undefined) ? ""       : obj.body; // + loc;

    var from = (obj.from    === undefined) ? ""       : obj.from;

    var data = {
    //Specify email data
      from: from,
    //The email to contact
      to: Frank,
    //Subject and text data  
      subject: sub,
      text: body
      //html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + 
      //'">Click here to add your email address to a mailing list</a>'
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            //res.render('error', { error : err});
            console.log("got an error: ", err);
            results = err;
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page 
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            //res.render('submitted', { email : 'req.params.mail' });
        // fm 12/7/15 res.send('FM WWWWW ' + JSON.stringify(body) + 'EEEEE');
            console.log(body);
            //results = body;
            //setResults(body)
        }
    });

    return results;
}


function anytaxis(res)
{
    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});
//setResults('dddd');

    var data = {
    //Specify email data
      from: Frank,
    //The email to contact
      to: Kris,
    //Subject and text data  
      subject: sub,
      text: 'any'
      //html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + 
      //'">Click here to add your email address to a mailing list</a>'
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            //res.render('error', { error : err});
            console.log("got an error: ", err);
            results = err;
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page 
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            //res.render('submitted', { email : 'req.params.mail' });
            res.send('FM WWWWW ' + JSON.stringify(body) + 'EEEEE');
            console.log(body);
            //results = body;
            //setResults(body)
        }
    });

    return results;
}


function anytaxisAA()
{
    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var data = {
    //Specify email data
      from: from_who,
    //The email to contact
      to: to,
    //Subject and text data  
      subject: 'Hello from Mailgun',
      html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + 
      '">Click here to add your email address to a mailing list</a>'
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            //res.render('error', { error : err});
            console.log("got an error: ", err);
            results = err;
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page 
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            //res.render('submitted', { email : req.params.mail });
            console.log(body);
            results = body;
            //setResults(body)
        }
    });

    return results;
}

function anytaxis00()
{
    //results = "wert"; 
    //return  "aaaaaaaaaa";
     var  url  = "http://joeschedule.com/cgi-bin/each.pl";
    // using needle begin
    // FM 12/67/15 var needle = require('needle');
    
    //var jjj = JSON.stringify(req.body) ;
    //var body22; //= JSON.parse(jjj);
    var body22 = [
    //{"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"}, 
    {"firstName":"Peter", "lastName": "Jones"}
    ];

var myJSONObject = {"bindings": [
        {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"},
        {"ircEvent": "PRIVMSG", "method": "deleteURI", "regex": "^delete.*"},
        {"ircEvent": "PRIVMSG", "method": "randomURI", "regex": "^random.*"}
    ]
};

//var myObject = JSON.parse(myJSONtext);
var jsontext = '{"from":"9088580954@vzwpix.com","to":"9088580954@vzwpix.com","subject" :"wtf","text":"any taxis!"}';
var contact = JSON.parse(jsontext);


    console.log(JSON.stringify(body22) );
  //needle.post(url,  JSON.parse(JSON.stringify(req.body)) ,      
    //needle.post(url,  JSON.parse(JSON.stringify(body22)) ,
        //needle.post(url, body22,
        //needle.post(url, {hello: 'world'},
            //needle.post(url,myJSONObject,
        needle.post(url,contact,
        function(err, resp, body){
            console.log("FFFFFF"+ body+"GGG");
            //resp.send((body));
            results = body;
            //setResults(body)
            //res.send(JSON.stringify(body));  
    });

    return results;
}

        // sms:   gm "9086443974@messaging.sprintpcs.com",
        // tm "9086443972@tmomail.net",
        // fm 9088580954@vtext.com      
        // km "9084442745@vtext.com"
        // jm 9086443975@messaging.sprintpcs.com
        //Sprint: phonenumber 9086443972@messaging.sprintpcs.com
function _lookupID(id)
{
    var retval = "root";
    
    if (id.toUpperCase() === "GM".toUpperCase())
    {
        var obj = {
        name:  "Grace Mastronardi",
        sms:   "9086443974@messaging.sprintpcs.com",
        email: "grace.mastronardi@gmail.com"
        }
    }
    if (id.toUpperCase() === "TM".toUpperCase())
    {
        var obj = {
        name:  "Tyler Mastronardi",
        sms:   "9086443972@messaging.sprintpcs.com",
        email: "grace.mastronardi@gmail.com"
        }
    }
    if (id.toUpperCase() === "FM".toUpperCase())
    {
        var obj = {
        name:  "Frank Mastronardi",
        sms:   "9088580954@vtext.com",
        email: "grace.mastronardi@gmail.com"
            }
    }
    
    return obj;
}
/******
-F from='9088580954@vzwpix.com' \
    -F to='9088580954@vzwpix.com' \
    -F subject='Hello' \
    -F text='any taxis!'

*******/
 
module.exports = {
    foo11: function (res, data) {
    // whatever
    console.log('for foo11'); 
    var results = anytaxis11 (res, data);
    console.log(results);
    return results;
  },
  foo: function () {
    // whatever
    console.log('for foo foo foo'); 
    var results = anytaxis ();
    console.log(results);
    return results;
  },
  lookupID: function (id) {
    return _lookupID(id);
  }
};