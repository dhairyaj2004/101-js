//"TYPE CONVERSION AND TYPE COERCION"
//Type Conversion: converting one data type to another by us.
let str="2024"
let converting=Number(str)
console.log(str)
console.log(typeof(converting))//number
//Type Coercion: the JavaScript engine automatically converts values from one data type to another when needed
let a="This year is "+ 2024
console.log(a)//This year is 2024
console.log(typeof(a))//->return string but we had given string+number
let b="10"-"5"
console.log(b)//5
console.log(typeof(b))//->return number->we had given string-string