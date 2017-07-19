var express = require('express');
var app = express();
var os = require('os');

app.get('/', function(req, res){
  res.send('######## Meu programa inicial em node.js/express.js rodando em:: ' + os.hostname());
});

var port = process.env.NODE_ENV == 'development' ? 3000 : 80;
app.listen(port);
