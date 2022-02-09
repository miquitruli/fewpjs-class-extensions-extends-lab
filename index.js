// Your code here
class Polygon {
    constructor(side) {
        this.side = side;
    }

    get countSides() {
        return (this.side).length
    }

    get perimeter() {
        return this.side.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
}

class Triangle extends Polygon {
    // inherits constructor from Polygon
    get isValid() {
        return (this.side[0] + this.side[1]) > this.side[2] && (this.side[1] + this.side[2]) > this.side[0]
    }
}

class Square extends Polygon {
    // inherits constructor from Polygon
    get isValid() {
        return(this.side[0] === this.side[1] && this.side[1] === this.side[2] && this.side[2] === this.side[3])
    }

    get area() {
        return this.side[0]*this.side[0];
    }
}
  
  


  
