// Object and classess
// objects are given
let rect={
    length:  3,
    width: 4,
    getArea: function(){
        return (this.length*this.width)
    },
    getPerimeter: function(){
        return 2(this.length+this.width)
    }
}
let rect2={
    length:  3,
    width: 4,
    getArea: function(){
        return (this.length*this.width)
    },
    getPerimeter: function(){
        return 2*(this.length+this.width)
    }
}
console.log(rect.getArea())
console.log(rect2.getPerimeter())
//for increasing this easiness we have ti use classess...class is factory to create objects.
//refer 47_b.js