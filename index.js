var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('Helloo World!');
});

app.listen(process.env.PORT || 3000);

function stop() {
    server.close();
  }

module.exports = app;
module.exports.stop = stop;