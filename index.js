const http = require('http');
const fs   = require('fs'); // allows you to read and write from files
const path = require('path'); // allows you specify a path of a local fine in my local file system.

const hostname = 'localhost' ;
const port     = 3000 ;

const server = http.createServer(  (req, res) => {
    // req : request to the server
    // res : the response from the server
    console.log( 'Request for : ' +  req.url + 'by method : ' + req.method) ;

    if(req.method === 'GET'){
        // we will serve only get requests now

        let fileUrl = req.url ; // what was entered by the client
        if(req.url === '/'){
            fileUrl = '/index.html';
        }

        let filePath = path.resolve('./public' + fileUrl ) ; // gives us the full path of the file.
        let fileExt  = path.extname(filePath); // gives the extension to make sure how to serve it

        if(fileExt === '.html'){
            // check if exists first :
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404 ;
                    res.setHeader('Content-Type','text/html');
                    // we can return the 404 page for example
                    res.end('<html><body><h1>ERORR 404 : File NOT FOUND! '+ req.url +'</h1></body></html>');
                    return;
                }

                res.statusCode = 200 ;
                res.setHeader('Content-Type','text/html');
                // return the requested file, by reading it then sending it back.
                fs.createReadStream(filePath)   // this function will read the file and convert it to stream of bytes and then we will pipe it to the response !
                    .pipe(res); // this will be included to the body of the response.

                // no need for res.end() if you are reading file stream, otherwise the body will be empty !
            })
        }
        else{
            res.statusCode = 404 ;
            res.setHeader('Content-Type','text/html');
            // we can return the 404 page for example
            res.end('<html><body><h1>ERORR 404 :File REQUESTED IS NOT HTML !'+ req.url + ' </h1></body></html>');
        }
    }else{
        // error
        res.statusCode = 404 ;
        res.setHeader('Content-Type','text/html');
        // we can return the 404 page for example
        res.end('<html><body><h1>ERORR 404 :REQUEST IS NOT SUPPORTED ! '+ req.method+ ' </h1></body></html>');
    }

});

server.listen(port,hostname, () => {
    // function will be executed when server gives a response !
    console.log(`Server is running at http://${hostname}:${port}`);
});

