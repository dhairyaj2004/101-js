//Multiple ways to add element in an array in js

//method 1-Push function
let num=[1,2];
function psh(arr,element){
    arr.push(element)
}//we can direct use num.push(element) inspite of making function
psh(num,3)
console.log(num);//[ 1, 2, 3 ]->modified original array num

//method 2-spread operator
let num1=[1,2];
function psh1(arr,element){
    return[...arr,element]
}
let newArray=psh1(num1,4)
console.log(newArray);//[1,2,4]
console.log(num1);//[1,2]->original array will not be change