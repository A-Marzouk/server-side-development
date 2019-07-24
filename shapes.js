module.exports = (x,y,callback) => {
    // the call back function has 2 params : 1 -> if error , 2-> if return value
    // which i implemented in calling the module.
    if(x <=0 || y <= 0 ){
       // we will simulate a 2 seconds delay
        setTimeout( () => {
            callback (new Error('Rectangle dimensions should be greater than Zero : l= ' + x + ', b = ' + y) , null) ; // no return value if error
        },2000)
    }
    else {
        // we can define it after the callback, only because of the delay, but better to have it first for better code read.
        let rectangle = {
            perimeter : () => { // if we define it as function, we should call it as function.
                return 2 * (x+y) ;
            } ,
            area : () => {
                return x*y ;
            }
        };

        setTimeout( () => {
            callback (null , rectangle)
        },2000) ;
    }


};

