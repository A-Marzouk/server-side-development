let shapes = {
    rectangle:{
        perimeter : (x,y) => {
            return 2 * (x+y)  ;
        },
        area : (x,y) => {
            return x*y;
        }
    }
};

exports.rectangle = shapes.rectangle ; // rectangle is variable used where this file is imported.