var path = require('path');
var express = require('express');
var app = express();
var api = require('./handler');

var publicDIR = path.join(__dirname, '../client');
app.use(express.static(publicDIR));

app.get('/', function (req, res) {
  res.redirect('app.html');
});

app.get('/api/:position', api);

var server_port = 8081;
var server_ip_address = '127.0.0.1';
 
app.listen(server_port, server_ip_address);