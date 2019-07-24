let shapes = require('./shapes');

function solveRectangle(l,b) {
    console.log('\n')
    console.log("Solving for rectangle with l = "  +  l + " and b =" + b) ;

    if(l <=0 || b <= 0 ){
        console.log('Rectangle dimensions should be greater than Zero : l= ' +l + ', b = ' + b);
    }
    else {
        console.log("The area of rectangle is : " + shapes.rectangle.area(l,b) ) ;
        console.log("The perimeter of rectangle is : " + shapes.rectangle.perimeter(l,b) ) ;
    }
}

solveRectangle(10,25);
solveRectangle(0,4);