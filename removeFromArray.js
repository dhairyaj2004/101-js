// Removing Duplicates from an Array

//using set
const array=[1,2,2,4,5,1]
function uniqueArr(arr){
    let unique=new Set(arr)
    console.log([...unique])
}
uniqueArr(array)//[1,2,4,5]

//using for Each
const array2=[1,2,2,4,5,1]
function uniqArray(arr){
    let result=[]
    arr.forEach(item => {
        if(!result.includes(item)){
            result.push(item);
        }  
    });
    return result
}
console.log(uniqArray(array2))//[1,2,4,5]
 