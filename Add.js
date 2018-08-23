var express = require('express');
var fs = require('fs');
var app =express();
var port = process.env.PORT || 3000;


app.get('/', function(req, res) {
  fs.readFile('Add.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
})});
app.listen(port);


