// routers as a new mini express lication
// leaders routes :

const express    = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router() ;
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')             // specify the endpoint will be from index.js
    .all( (req,res,next) =>{
        // here no matter the method is, this code will executed
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'text/plain');
        next(); // it will continue with the request to handle it.
    })
    .get( (req,res,next) => { // here i will not need the next because i will handle all the request here.
        if(req.params.leaderId){
            res.end('Will send the leader with ID : ' + req.params.leaderId);
        }
        res.end('Will send all the leaders to you !!');
    })
    .post((req,res,next)=>{
        res.end('Body of the request : ' + req.body.name + '  Details : ' + req.body.description );
    })

    .put((req,res,next)=>{
        res.statusCode = 403 ;
        res.end('Put not supported' );
    })

    .delete((req,res,next)=>{
        res.end('Deleting all the leaders' )
    });

leaderRouter.route('/:leaderId')             // specify the endpoint will be from index.js
    .all( (req,res,next) =>{
        // here no matter the method is, this code will executed
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'text/plain');
        next(); // it will continue with the request to handle it.
    })
    .get( (req,res,next) => { // here i will not need the next because i will handle all the request here.
        if(req.params.leaderId){
            res.end('Will send the leader with ID : ' + req.params.leaderId);
        }
    })
    .post((req,res,next)=>{
    res.statusCode = 403 ;
    res.end('Post not supported on : /leaders/' + req.params.leaderId  );
    })

    .put((req,res,next)=>{
        res.end('Will update the leader with ID : ' + req.params.leaderId + ' With details : ' + req.body.name + ' | ' + req.body.description);
    })

    .delete((req,res,next)=>{
        res.end('Deleting leader with ID of : ' + req.params.leaderId );
    });


module.exports = leaderRouter ;
