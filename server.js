var express = require('express');
var app = express();
app.use('/', function(req, res) {
    "use strict";
    res.send('Hello World');
});
app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;