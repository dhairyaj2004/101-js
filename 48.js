class rect{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }
    getArea(){
        return  this.length*this.width;
    }
    getPerimeter(){
        return 2*(this.length+this.width);
    }
}
let r1=new rect(3,4);
let r2=new rect(4,5);
console.log(r1.getArea())
console.log(r2.getPerimeter())