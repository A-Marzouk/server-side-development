const http = require('http');

const hostname = 'localhost' ;
const port     = 3000 ;
const server = http.createServer(  (req, res) => {
    // req : request to the server
    // res : the response from the server
    console.log(req.headers) ;

    res.statusCode = 200 ;
    res.setHeader('Content-Type','text/html');
    // inform the client that body is in html
    res.end('<html><body><h1>Hello, world!!</h1></body></html>');
    // inline valid html response.
});

server.listen(port,hostname, () => {
    // function will be executed when server gives a response !
    console.log(`Server is running at http://${hostname}:${port}`);
});

