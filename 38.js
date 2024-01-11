// ARROW FUNCTION and FUNCTION DECLARATION
//FUNCTION DECLARATION is....
//difference-1)hoisted
console.log(a())//5
function a(){
    add=2+3
    return add
}
//ARROW FUNCTION is not hoisted, it has its own scope
// console.log(b())//ReferenceError: Cannot access 'b' before initialization
const b=()=>{
    add=2+3
    return add
}
console.log(b())//5

//difference-2)return
function rt(a,b){
    add=a+b
    return add
}
console.log(rt(5,5))//10
//no need for explicit return in arrow function
const rtarrow=(a,b)=>a+b;

console.log(rtarrow(5,5))//10

//difference-3)this keyword
let obj={
    name:'DJ',
    id:62,
    details: function details(){
        return this.id
    } 
}
console.log(obj.details())//62
//In arrow function this is not pointing to the obj but pointing to the inner scope of itlsef
let obj1={
    name:'DJ',
    id:62,
    details: ()=>{
        return this.id
    } 
}
console.log(obj1.details())//undefined