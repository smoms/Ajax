var express = require('express');


var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(express.static(__dirname));

serverapp.get('/:food', function(req, res){
  var food = req.params.food;
  var value = food.split("=");
  //console.log(value);
  res.setHeader('Content-Type','text/xml');
  var xmlNS = '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
  var reply = 'niente';
  if(value[1] === 'pasta')
  	reply = 'ce lavemo';
  res.send(xmlNS + ' <response>' + reply + '</response>');
});

serverapp.listen(SERVER_PORT, function () {
	console.log('Started server at http://localhost:' + SERVER_PORT);
});
