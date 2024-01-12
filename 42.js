//CALL,BIND and APPLY->all are used to define the value of this keyword
//Call: Instantly Invokes a function with specified 'this' value and arguments. Perfect for immediate execution with control over 'this' context.
//Bind: Prepares a function for future execution, setting both 'this' value and initial arguments. Ideal for creating reusable functions with a fixed context.
//Apply: Similar to Call, but arguments are passed as an array. Great for function calls with array data.
let car={
    brand:"Hyundai",
    model:"i20",
    displayInfo:function(){//arrow functions have a different behavior regarding the this keyword compared to regular functions.so not use arrow function here
        console.log(this.brand+" "+this.model)
    }
}
function updateCar(brand,model){
    this.brand=brand
    this.model=model
    //both this has global scope
    // console.log(this.brand+" "+this.model)will logged out undefined undefined
}
updateCar.call(car,"suzuki","Baleno")
car.displayInfo()
let newdetails=["kia","seltos"]
updateCar.apply(car,newdetails)
car.displayInfo()
let updatedDetails=updateCar.bind(car,"toyota","hyryder")
updatedDetails()
car.displayInfo()