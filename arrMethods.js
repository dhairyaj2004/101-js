//array.with() , array.toSorted and array.toReversed”
//array.wtih()->we can change element at particular index and it returns new array
let arr=[1,2,3,4,5]
let newarr=arr.with(0,10)
console.log(newarr)//[ 10, 2, 3, 4, 5 ]
//array.tosorted-> sorts the array and return new one
let array=[4,5,8,1]
let sortedArr=array.toSorted();
console.log(sortedArr)//[ 1, 4, 5, 8 ]
//array.revesed->reverse the array and return new
let originalArr=[5,4,3,2,1]
let reversedArr=originalArr.toReversed();
console.log(reversedArr)//[ 1, 2, 3, 4, 5 ]