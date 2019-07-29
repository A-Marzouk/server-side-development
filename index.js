const express  = require('express'); // third part node module express.
const http     = require('http'); // core module
const morgan  = require('morgan'); // express middleware called morgan, used to log in information to the screen(console).
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost';
const port     = '3000';

const app  = express() ;
// whenever you like to use a middleware you can use this function : app.use(middleware);
app.use(morgan('dev')); // will log info on screen

// serve static files from public folder
// look for public in the root folder.
// this by default will load index.html file
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // this will allow us to parse the req.body to json so that we can use these data as we want.

app.use('/dishes', dishRouter);

// we might not need this if we already use the express static to get files.
app.use( (req, res, next) => {
    // here we will call a function that will set our server.
    // this by default will be called if we have a 404 error.
    res.statusCode = 200 ;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>');
});


const server = http.createServer(app) ;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});