const express  = require('express'); // third part node module express.
const http     = require('http'); // core module
const morgan  = require('morgan'); // express middleware called morgan, used to log in information to the screen(console).
const bodyParser = require('body-parser');

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


app.all('/dishes', (req,res,next) =>{
    // here no matter the method is, this code will executed
    res.statusCode = 200 ;
    res.setHeader('Content-Type', 'text/plain');
    next(); // it will continue with the request to handle it.
});

// routes :


app.get('/dishes', (req,res,next) => { // here i will not need the next because i will handle all the request here.
    res.end('Will send all the dishes to you !!');
});

app.post('/dishes',(req,res,next)=>{
    res.end('Body of the request : ' + req.body.name + '  Details : ' + req.body.description );
});

app.put('/dishes',(req,res,next)=>{
    res.statusCode = 403 ;
    res.end('Put not supported' );
});


app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting all the dishes' );
});

    // with ID

app.get('/dishes/:dishId', (req,res,next) => { // here i will not need the next because i will handle all the request here.
    res.end('Will send details of the dish with ID : ' + req.params.dishId);
});

app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode = 403 ;
    res.end('Post not supported on : /dishes/' + req.params.dishId  );
});

app.put('/dishes/:dishId',(req,res,next)=>{
    res.end('Will update the dish with ID : ' + req.params.dishId + ' With details : ' + req.body.name + ' | ' + req.body.description);
});


app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Deleting dish with ID of : ' + req.params.dishId );
});






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