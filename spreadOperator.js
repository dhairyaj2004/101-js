//"SPREAD OPERATOR" in Javascript
const arr=[1,2];
const newarr=[...arr,3,4,5];
console.log(newarr);//[ 1, 2, 3, 4, 5 ]
//it will not update arr it will make a new array therefore we can use const here otherwise we have to use let 
//So we can create shallow copy by below method
let main=[1,2,3];
let duplicate=[...main];
//elements of duplicate is same as main still after updating duplicate main will not be changed
duplicate.push(4);
console.log(duplicate);//[ 1, 2, 3, 4 ]
console.log(main);//[ 1, 2, 3 ]
//We can also merge two arrays by spread operator
let a = [1, 2];
let b= [3, 4];
let merged=[...a,...b];
console.log(merged);//[ 1, 2, 3, 4 ]
//We can also use spread operator in function argument where we are not sure about how many arguements will be accepted
function fun(...elements){
    console.log(elements)
}
fun(1,2,4,5,6)//[ 1, 2, 4, 5, 6 ]