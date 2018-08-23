const express = require('express');
const app = express();
const path = require('path');

const staticHref = '/static';
const publicFolder = path.join(__dirname, '/');

app.use(staticHref, express.static(publicFolder));
app.use(staticHref, function(req, res) {
    res.send(404);
});

app.all('/*', function(req, res) {
    res.sendFile('Add.html', {root: publicFolder});
});

app.listen(3000, function(){
    console.log('running');
                });


