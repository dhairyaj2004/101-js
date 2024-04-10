// Array.map ()->returns a new array according to that performed operation
numbers=[1,2,3,4,5]
const mapped=numbers.map((num)=>{
    return num*num
})
console.log(mapped)//[ 1, 4, 9, 16, 25
//Array.forEach()->It will perform an operation inside the function but it will not return a new array
let result=[]
const forEached=numbers.forEach((num)=>{
    let sq=num*num
    // console.log(sq)
    // 1
    // 4
    // 9
    // 16
    // 25 it will logged numbers not an array so for getting an array we have to initiate an empty array and push these values in it.
    result.push(sq)
})
console.log(result)//[ 1, 4, 9, 16, 25 ]
