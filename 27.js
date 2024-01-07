//HIGHER ORDER FUNCTION->function which take another function as a argument or return function
//example 1)function is taken as argument 
function greet(name){
    console.log("Hello"+' '+name)
}
function greet2(name){
    console.log("Heyy"+" "+name)
}
function greetinWithLog(greetingfunction,userName){
    let message=greetingfunction(userName)
    return message
}
greetinWithLog(greet,"Dhairya")//->argument is function itself
greetinWithLog(greet2,"Dhairya")//->argument is function itself

//example 2)function returns a function
function multiply(factor){
    return function (number){//function returns a function
        return number*factor
    }
}
const multi=multiply(3)
let ans=multi(4)
console.log(ans)