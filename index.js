const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use(express.static(__dirname + '/'));
app.listen(port);
console.log('Server started at http://192.168.200.16:' + port);

