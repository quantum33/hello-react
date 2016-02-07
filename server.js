var http = require("http");
var fs = require('fs');
var React = require('react-dom');
http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   //response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   //response.end('Hello World\n');
   fs.readFile("index.html", function(err, text){
      response.setHeader("Content-Type", "text/html");
      response.end(text);
    });
    return;
   
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');