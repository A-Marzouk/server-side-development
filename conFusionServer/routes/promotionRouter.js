// routers as a new mini express lication
// promotions routes :


const express    = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router() ;
promotionRouter.use(bodyParser.json());

promotionRouter.route('/')             // specify the endpoint will be from index.js
    .all( (req,res,next) =>{
        // here no matter the method is, this code will executed
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'text/plain');
        next(); // it will continue with the request to handle it.
    })
    .get( (req,res,next) => { // here i will not need the next because i will handle all the request here.
        if(req.params.promotionId){
            res.end('Will send the promotion with ID : ' + req.params.promotionId);
        }
        res.end('Will send all the promotions to you !!');
    })
    .post((req,res,next)=>{
        res.end('Body of the request : ' + req.body.name + '  Details : ' + req.body.description );
    })

    .put((req,res,next)=>{
        res.statusCode = 403 ;
        res.end('Put not supported' );
    })

    .delete((req,res,next)=>{
        res.end('Deleting all the promotions' )
    });

promotionRouter.route('/:promotionId')             // specify the endpoint will be from index.js
    .all( (req,res,next) =>{
        // here no matter the method is, this code will executed
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'text/plain');
        next(); // it will continue with the request to handle it.
    })
    .get( (req,res,next) => { // here i will not need the next because i will handle all the request here.
        if(req.params.promotionId){
            res.end('Will send the promotion with ID : ' + req.params.promotionId);
        }
    })
    .post((req,res,next)=>{
    res.statusCode = 403 ;
    res.end('Post not supported on : /promotions/' + req.params.promotionId  );
    })

    .put((req,res,next)=>{
        res.end('Will update the promotion with ID : ' + req.params.promotionId + ' With details : ' + req.body.name + ' | ' + req.body.description);
    })

    .delete((req,res,next)=>{
        res.end('Deleting promotion with ID of : ' + req.params.promotionId );
    });


module.exports = promotionRouter ;
