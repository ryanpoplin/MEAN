// do a console.log() test on the process object...
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./config/mongoose');
var express = require('./config/express.js');
var db = mongoose();
var app = express();
app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;