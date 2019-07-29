// routers as a new mini express lication
// dishes routes :


const express    = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router() ;
dishRouter.use(bodyParser.json());

dishRouter.route('/')             // specify the endpoint will be from index.js
    .all( (req,res,next) =>{
        // here no matter the method is, this code will executed
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'text/plain');
        next(); // it will continue with the request to handle it.
    })
    .get( (req,res,next) => { // here i will not need the next because i will handle all the request here.
        if(req.params.dishId){
            res.end('Will send the dish with ID : ' + req.params.dishId);
        }
        res.end('Will send all the dishes to you !!');
    })
    .post((req,res,next)=>{
        res.end('Body of the request : ' + req.body.name + '  Details : ' + req.body.description );
    })

    .put((req,res,next)=>{
        res.statusCode = 403 ;
        res.end('Put not supported' );
    })

    .delete((req,res,next)=>{
        res.end('Deleting all the dishes' )
    });

dishRouter.route('/:dishId')             // specify the endpoint will be from index.js
    .all( (req,res,next) =>{
        // here no matter the method is, this code will executed
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'text/plain');
        next(); // it will continue with the request to handle it.
    })
    .get( (req,res,next) => { // here i will not need the next because i will handle all the request here.
        if(req.params.dishId){
            res.end('Will send the dish with ID : ' + req.params.dishId);
        }
    })
    .post((req,res,next)=>{
    res.statusCode = 403 ;
    res.end('Post not supported on : /dishes/' + req.params.dishId  );
    })

    .put((req,res,next)=>{
        res.end('Will update the dish with ID : ' + req.params.dishId + ' With details : ' + req.body.name + ' | ' + req.body.description);
    })

    .delete((req,res,next)=>{
        res.end('Deleting dish with ID of : ' + req.params.dishId );
    });


module.exports = dishRouter ;
