/*var http = require('http');
http.createServer(function(req, res) {
    "use strict";
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello, World...');
}).listen(3000);
console.log('Server is running at http://localhost:3000/');*/

var connect = require('connect');
var app = connect();
var helloWorld = function(req, res, next) {
    "use strict";
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World...');
};
app.use(helloWorld);
app.listen(3000);
console.log('Server is running at http://localhost:3000/');