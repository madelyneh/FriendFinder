let mysql = require("mysql");
let express = require("express");
let path = require("path");

let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// demo from class 01/07/19
let http = require("http");

let handleRequest = function(request, response) {
  response.end("It worked. Path hit: " + request.url);
};

let server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server is listening on: http://localhost:%s", PORT);
})
// localhost = 127.0.0.1;
