const express = require('express');
const app = express();

var http = require('http');
var url = require('url');
var fs = require('fs');

// Refactored using express 
var path = require('path');

if(err) {
    res.send('Error 404');
}

// viewed at http://localhost:8080 
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact-me', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact-me.html'));
});

app.listen(8080);