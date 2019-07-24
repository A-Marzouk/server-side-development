let rectangle = {
  perimeter : (x,y) => {
      return 2 * (x+y)  ;
  },
  area : (x,y) => {
      return x*y;
  }
};

function solveRectangle(l,b) {
    console.log("Solving for rectangle with l = "  +  l + " and b =" + b) ;

    if(l <=0 || b <= 0 ){
        console.log('Rectangle dimensions should be greater than Zero : l= ' +l + ', b = ' + b);
    }
    else {
        console.log("The area of rectangle is : " + rectangle.area(l,b) ) ;
        console.log("The perimeter of rectangle is : " + rectangle.perimeter(l,b) ) ;
    }
}

solveRectangle(2,4);
solveRectangle(0,4);