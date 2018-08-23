var express = require('express');
var fs = require('fs');
var app =express();
app.get('/',function(req, res) {
  fs.readFile('Add.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
})});
app.listen(3000,function(){});


