//Regular Expression->unlock the potential for sophisticated text processing.
//regex provides a versatile approach for pattern matching and string manipulation.validation,search-and-replace operations, or complex data parsing
function validation(num){
    let pattern=/^\+91[6-9]\d{9}$/
    if(pattern.test(num)==true){
        console.log("you can receive the phone")
        let replacer=num.slice(3)
        return num.replace(/^\+\91[6-9]\d{9}$/,replacer)
    }
    else{
        console.log("Spam Call")
    }
}
console.log(validation("+9178610105395555555555"))
//for good user experience...
// let num=prompt("enter the number with country code")
// console.log(validation(num))
//Explaination
// / start of regex
// ^ asserts the start of the string.
// \+ matches the plus symbol.
// 91 matches exactly 91.
// [6-9] matches a digit in the range 6 to 9.
// \d{9} matches exactly 9 more digits.
// $ asserts the end of the string.
// /end of regex
//It is validating that this given number is indian phone number or not
