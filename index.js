const express  = require('express'); // third part node module express.
const http     = require('http'); // core module

const hostname = 'localhost';
const port     = '3000';

const app  = express() ;

app.use( (req, res, next) => {  // here we will call a function that will set our server.
    console.log(req.headers) ;
    res.statusCode = 200 ;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Express server</h1></body></html>');
});

const server = http.createServer(app) ;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});