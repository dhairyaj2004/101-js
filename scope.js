//SCOPES
//global scope-variable is accessible everywhere
//local scope- variable is accessible in only function
//block scope-variable is accessible only between { } curly brackets and this is ES6 update and only for let and const not for var
let global=[1,2,3]
function foo(){
    console.log(global)
}
foo()//[ 1, 2, 3 ]
function fooLocal(){
    let local = [4,5,6];
}
fooLocal()
console.log(local)//ReferenceError: local is not defined
if(true){
    let block1="Hello"
    const block2="world"
    console.log(block1);//Hello
    console.log(block2);//world
}
console.log(block1);//ReferenceError: block1 is not defined
console.log(block2);