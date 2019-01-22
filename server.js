let mysql = require("mysql");
let express = require("express");
let path = require("path");

let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


