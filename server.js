let mysql = require("mysql");
let express = require("express");
let path = require("path");
let app = express();

let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



app.get("/",function(request, response){
  response.send("<h1>Works!</h1>");
  
});

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


// demo from class 01/07/19
// let http = require("http");

// let handleRequest = function(request, response) {
//   response.end("It worked. Path hit: " + request.url);
// };

// let server = http.createServer(handleRequest);

// server.listen(PORT, function(){
//   console.log("Server is listening on: http://localhost:%s", PORT);
// })
// localhost = 127.0.0.1;
