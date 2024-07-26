// Create web server
const http = require('http');
const fs = require('fs');
const port = 8080;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text'})})