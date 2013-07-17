var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var appdata = fs.readFile('/home/ubuntu/bitstarter/index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

app.get('/', function(request, response) {
var appdata = fs.readFile('/home/ubuntu/bitstarter/index.html', 'utf8'); 
 
response.send(appdata.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
 

