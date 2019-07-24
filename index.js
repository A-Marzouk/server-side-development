let shapes = require('./shapes');

function solveRectangle(l,b) {
    console.log('\n') ;
    console.log("Solving for rectangle with l="  +  l + " and b=" + b) ;

    shapes(l,b, (error , data ) => {
        // just like Axios !
        if(error){ // error is not null
            console.log('Error : ' + error);
        }
        else{
            console.log('Perimeter : ' + data.perimeter() + ', Area : ' + data.area()) ;
        }
    })
}

solveRectangle(10,25);
// solveRectangle(0,4);