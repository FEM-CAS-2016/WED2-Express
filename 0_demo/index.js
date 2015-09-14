var http = require('http');
var express = require('express');
var app = express();
var router = express.Router();






http.createServer(app).listen(3000);
console.log("server started at http://localhost:3000/");
