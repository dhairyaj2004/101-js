//Hoisting in js...
//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope before code execution.

//Hoisting in var
console.log(x);  //undefined
var x=5;
console.log(x);//5

//Hoisting in let and const
console.log(y);//Throws an error:Refrence error
console.log(z);//Throws an error:Refrence error
let y =10;
const z =20;
console.log(y);//10
console.log(z);//20

//Hoisting in function
fun();//logged-This is a function
function fun(){
    console.log("This is a function");
    }

    //Hoisting in function expression
funexp();//ReferenceError: Cannot access 'funexp' before initialization
const funexp=function funexp(){
    console.log("Function Expression")
}
funexp();